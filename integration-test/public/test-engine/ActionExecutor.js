import * as testExecutor from "./TestExecutor";
import {LogLevel, Logger} from "./util/Logger";
import * as iterable from "./util/Iterable";
import * as testUtils from "./util/TestUtils";
import * as EventService from "../app/EventService";
import * as ActionStatus from "./ActionStatus";

/**
 * Utility for executing actions.
 *
 * @returns {{executeActions: executeActions, executeAction: executeAction}}
 */
const create = (resultCache, testConnector, testCase) => {

    return {

        /**
         * Executes an actions iterable. Returns a promise that is resolved when all actions have completed.
         *
         * @param actionItr
         */
        executeActions: function (actionItr) {
            const actionsCompleteDeferred = new jQuery.Deferred();
            return executeActionsInternal(actionsCompleteDeferred, actionItr);
        },

        /**
         * Executes an action. Returns a promise that is resolved when the action has completed.
         *
         * @param action
         */
        executeAction: function (action) {
            return executeActionInternal(action);
        }
    };

    /**
     * For each root action we need to serially execute all before actions, action iterations, and after actions.
     *
     * @param actionsCompleteDeferred
     * @param actionItr
     */
    function executeActionsInternal(actionsCompleteDeferred, actionItr, actionResults) {
        if (!actionResults) {
            actionResults = [];
        }
        if (actionItr.hasNext()) {
            const action = actionItr.next().value;
            const beforeActionItr = iterable.makeIterator(action["before"] || []);
            const executeBeforeActionsDeferred = new jQuery.Deferred();
            executeBeforeOrAfterActions(executeBeforeActionsDeferred, beforeActionItr)
                .then(() => {
                    const iterations = lodash.get(action, ["parameters", "iterations"], 1);
                    let allActionIterations = [];
                    // Populate test actions for each iteration.
                    for (let i = 0; i < iterations; i++) {
                        allActionIterations = allActionIterations.concat(action);
                    }
                    const executeActionIterationsDeferred = new jQuery.Deferred();
                    const allActionsItr = iterable.makeIterator(allActionIterations);
                    return executeActionIterations(executeActionIterationsDeferred, allActionsItr, actionResults);
                })
                .then(() => {
                    const executeAfterActionsDeferred = new jQuery.Deferred();
                    const afterActionItr = iterable.makeIterator(action["after"] || []);
                    return executeBeforeOrAfterActions(executeAfterActionsDeferred, afterActionItr, false);
                })
                .then(() => {
                    executeActionsInternal(actionsCompleteDeferred, actionItr, actionResults);
                });
        } else {
            actionsCompleteDeferred.resolve(actionResults);
        }
        return actionsCompleteDeferred.promise();
    };

    /**
     * Executes before/after actions.
     *
     * @param actionItr
     * @param actionResults
     * @param before
     */
    function executeBeforeOrAfterActions(executeActionsDeferred, actionItr, before = true) {
        let action = null;
        try {
            const order = before ? "before" : "after";
            if (actionItr.hasNext()) {
                action = actionItr.next().value;
                Logger.log(`Executing ${order} action ${action.name}.`);
                // Set the action as before/after for reporting purposes.
                //before ? action.before = true : action.before = false;
                executeActionInternal(action, [])
                    .then(() => {
                        executeBeforeOrAfterActions(executeActionsDeferred, actionItr,  before)
                    });
            } else {
                executeActionsDeferred.resolve();
            }
        } catch (e) {
            const beforeOrAfter = before ? "before" : "after";
            handleActionFailure(action, [], `An error has occurred executing ${beforeOrAfter} action.  Details: ${e.message}`, true);
            executeActionsDeferred.resolve();
        }
        return executeActionsDeferred.promise();
    };

    /**
     * Executes each action iteration.
     *
     * @param allActionsItr
     * @param actionResults
     */
    function executeActionIterations(executeActionIterationsDeferred, allActionsItr, actionResults) {
        let action = null;
        try {
            if (allActionsItr.hasNext()) {
                action = allActionsItr.next().value;
                executeActionInternal(action, actionResults)
                    .then(() => {
                        executeActionIterations(executeActionIterationsDeferred, allActionsItr, actionResults)
                    });
            } else {
                executeActionIterationsDeferred.resolve();
            }
        } catch (e) {
            handleActionFailure(action, actionResults, `An error has occurred executing action iteration for ${action.name}.  Details: ${e.message}`, true);
            executeActionIterationsDeferred.resolve();
        }
        return executeActionIterationsDeferred.promise();
    };

    function executeActionInternal(action, actionResults) {
        Logger.log(LogLevel.INFO, `Executing action ${action.name}`);

        if (!action.result) {
            action.result = {};
        }

        action.result.status = ActionStatus.get().executing;
        actionResults.push(action);

        if (testCase) {
            EventService.get().testObservable.next({
                name: testCase.name,
                testActions: actionResults
            });
        }

        const actionCompleteDeferred = new jQuery.Deferred();
        const executor = testExecutor.create(action, actionCompleteDeferred, testConnector, resultCache);
        // Update the listener with the current executor
        testConnector.getListener().setTestExecutor(executor);
        executor.executeAction()
            .then((action) => {
                actionCompleteDeferred.resolve(action);
            });
        return actionCompleteDeferred.promise();
    };

    function handleActionFailure(action, actionResults, message, log = false) {
       actionResults.push(action);
       testUtils.create().handleActionFailure(action, message, log);
    };
};

export {create}

