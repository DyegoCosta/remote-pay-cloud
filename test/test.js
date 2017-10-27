const fs = require("fs");
const assert = require("chai").assert;
const WebsocketCloudCloverDevice = require("../dist/com/clover/remote/client/device/WebsocketCloudCloverDevice").WebsocketCloudCloverDevice;
const WebSocketPairedCloverDeviceConfiguration = require("../dist/com/clover/remote/client/device/WebSocketPairedCloverDeviceConfiguration").WebSocketPairedCloverDeviceConfiguration;
const ImageUtil = require("../dist/com/clover/util/ImageUtil").ImageUtil;
const BrowserWebSocketImpl = require("../dist/com/clover/websocket/BrowserWebSocketImpl").BrowserWebSocketImpl;

/**
 * Validates request payloads generated by remote-pay-cloud against golden data.
 * Test case files located in ./unit-tests/request-validation.
 */
describe('validateRequestPayloads()', function () {

    const remoteApplicationID = "remote-pay-cloud-test";
    const requestValidationTestCasePath = `${__dirname}/unit-tests/request-validation`;
    let testCases = [];
    let device = null;

    before(function () {
        setDevice();
    });

    /**
     * Set's the Device used for all test cases.
     */
    let setDevice = function () {
        const deviceConfiguration = new WebSocketPairedCloverDeviceConfiguration("unknown", remoteApplicationID, "unknown", "unknown", null, BrowserWebSocketImpl.createInstance, new ImageUtil());
        // Because we aren't making a valid WebSocket connection remote-pay-cloud will log errors to the console
        // upon device instantiation. Store console.log and then set it to an no-op function to
        // prevent these errors from being logged.
        const log = console.log;
        console.log = () => {
            // no-op, prevents WS connection errors, etc. from being logged to the console.
        };
        device = new WebsocketCloudCloverDevice(deviceConfiguration);
        // Reset console.log, now we want messages in the console!
        console.log = log;
    };

    // Grab all the JSON test files from the file system.
    const files = fs.readdirSync(requestValidationTestCasePath);
    // Populate the tests array with JSON.
    files.forEach((file) => {
        testCases.push(JSON.parse(fs.readFileSync(`${requestValidationTestCasePath}/${file}`), "utf8"));
    });

    // Execute the tests.
    testCases.forEach(function (testCase) {
        it(`generates a valid ${testCase.method} request`, function (done) {
            device.sendRemoteMessage = function (remoteMessage) {
                assert.equal(remoteMessage.payload.replace(/\s+/g, ""), testCase.expected.payload.replace(/\s+/g, "", "The remoteMessage payload does not match the expected payload."));
                assert(remoteMessage.remoteApplicationID && remoteMessage.remoteApplicationID.length > 0, "The remoteMessage has an undefined or null remoteApplicationID.");
                assert(remoteMessage.remoteSourceSDK && remoteMessage.remoteSourceSDK.length > 0, "The remoteMessage has an undefined or null remoteSourceSDK.");
                done();
            };
            device[testCase.method](testCase.args);
        });
    });

    // Execute a manual test to verify the the remoteApplicationID is an exact match.
    const remoteApplicationIdTestCase = JSON.parse(fs.readFileSync(`${__dirname}/unit-tests/remoteApplicationID.json`));
    it('generated request has the correct remoteApplicationID', function(done) {
        device.sendRemoteMessage = function (remoteMessage) {
            assert.equal(remoteMessage.remoteApplicationID, remoteApplicationID, "The remoteMessage's remoteApplicationID does not match the expected remoteApplicationID.");
            done();
        };
        device[remoteApplicationIdTestCase.method](remoteApplicationIdTestCase.args);
    });

});

