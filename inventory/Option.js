/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var base_Reference = require("../base/Reference");

  /**
  * @constructor
  */
  Option = Class.create( {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function() {
      this._class_ = Option;
      this.id = undefined;
      this.name = undefined;
      this.attribute = undefined;
    },

    /**
    * Set the field value
    * Unique identifier
    *
    * @param {String} id 
    */
    setId: function(id) {
      this.id = id;
    },

    /**
    * Get the field value
    * Unique identifier
      * @return {String} 
    */
    getId: function() {
      return this.id;
    },

    /**
    * Set the field value
    * Name of the option
    *
    * @param {String} name 
    */
    setName: function(name) {
      this.name = name;
    },

    /**
    * Get the field value
    * Name of the option
      * @return {String} 
    */
    getName: function() {
      return this.name;
    },

    /**
    * Set the field value
    * @param {Reference} attribute 
    */
    setAttribute: function(attribute) {
      this.attribute = attribute;
    },

    /**
    * Get the field value
    * @return {Reference} 
    */
    getAttribute: function() {
      return this.attribute;
    },
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

Option._meta_ =  {fields:  {}};
Option._meta_.fields["id"] = {};
Option._meta_.fields["id"].type = String;
Option._meta_.fields["name"] = {};
Option._meta_.fields["name"].type = String;
Option._meta_.fields["attribute"] = {};
Option._meta_.fields["attribute"].type = base_Reference;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Option;
}
