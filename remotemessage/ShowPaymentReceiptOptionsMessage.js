/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");

  /**
  * @constructor
  */
  ShowPaymentReceiptOptionsMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = ShowPaymentReceiptOptionsMessage;
      this.setMethod(remotemessage_Method["SHOW_PAYMENT_RECEIPT_OPTIONS"]);
      this.orderId = undefined;
      this.paymentId = undefined;
    },

    /**
    * Set the field value
    * Unique identifier for a order
    *
    * @param {String} orderId 
    */
    setOrderId: function(orderId) {
      this.orderId = orderId;
    },

    /**
    * Get the field value
    * Unique identifier for a order
      * @return {String} 
    */
    getOrderId: function() {
      return this.orderId;
    },

    /**
    * Set the field value
    * Unique identifier for a payment
    *
    * @param {String} paymentId 
    */
    setPaymentId: function(paymentId) {
      this.paymentId = paymentId;
    },

    /**
    * Get the field value
    * Unique identifier for a payment
      * @return {String} 
    */
    getPaymentId: function() {
      return this.paymentId;
    }
  });

ShowPaymentReceiptOptionsMessage._meta_ =  {fields:  {}};
ShowPaymentReceiptOptionsMessage._meta_.fields["orderId"] = {};
ShowPaymentReceiptOptionsMessage._meta_.fields["orderId"].type = String;
ShowPaymentReceiptOptionsMessage._meta_.fields["paymentId"] = {};
ShowPaymentReceiptOptionsMessage._meta_.fields["paymentId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ShowPaymentReceiptOptionsMessage;
}
