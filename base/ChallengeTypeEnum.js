/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var base_ChallengeType = require("../base/ChallengeType");

  /**
  * @constructor
  * @memberof base
  */
  ChallengeTypeEnum = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof base.ChallengeTypeEnum
    * @private
    */
    initialize: function() {
      this._class_ = ChallengeTypeEnum;
      this.challengeType = undefined;
    },

    /**
    * Set the field value
    * @memberof base.ChallengeTypeEnum
    * @param {base.ChallengeType} challengeType 
    */
    setChallengeType: function(challengeType) {
      this.challengeType = challengeType;
    },

    /**
    * Get the field value
    * @memberof base.ChallengeTypeEnum
    * @return {base.ChallengeType} 
    */
    getChallengeType: function() {
      return this.challengeType;
    },

    /**
    * @memberof base.ChallengeTypeEnum
    * @private
    */
    getMetaInfo: function(fieldName) {
      var curclass = this._class_;
      do {
        var fieldMetaInfo = curclass._meta_.fields[fieldName];
        if(fieldMetaInfo) {
          return fieldMetaInfo;
        }
        curclass = curclass.superclass;
      } while(curclass);
      return null;
    },

    toString: function() {
      return JSON.stringify(this);
    }

  });

ChallengeTypeEnum._meta_ =  {fields:  {}};
ChallengeTypeEnum._meta_.fields["challengeType"] = {};
ChallengeTypeEnum._meta_.fields["challengeType"].type = base_ChallengeType;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ChallengeTypeEnum;
}
