/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var payments_LineItemPayment = require("../payments/LineItemPayment");
var payments_TaxableAmountRate = require("../payments/TaxableAmountRate");
var payments_ServiceChargeAmount = require("../payments/ServiceChargeAmount");
var payments_GiftCard = require("../payments/GiftCard");

  /**
  * @constructor
  */
  GiftCardTransaction = Class.create( {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function() {
      this._class_ = GiftCardTransaction;
      this.amount = undefined;
      this.taxAmount = undefined;
      this.orderId = undefined;
      this.card = undefined;
      this.paymentIds = undefined;
      this.ignorePayment = false;
      this.serviceChargeAmount = undefined;
      this.taxableAmountRates = undefined;
      this.lineItems = undefined;
      this.employeeId = undefined;
      this.suppressPayment = "false";
    },

    /**
    * Set the field value
    * Transaction Amount
    *
    * @param {Number} amount must be a long integer
    */
    setAmount: function(amount) {
      this.amount = amount;
    },

    /**
    * Get the field value
    * Transaction Amount
      * @return {Number} must be a long integer
    */
    getAmount: function() {
      return this.amount;
    },

    /**
    * Set the field value
    * Tax Amount
    *
    * @param {Number} taxAmount must be a long integer
    */
    setTaxAmount: function(taxAmount) {
      this.taxAmount = taxAmount;
    },

    /**
    * Get the field value
    * Tax Amount
      * @return {Number} must be a long integer
    */
    getTaxAmount: function() {
      return this.taxAmount;
    },

    /**
    * Set the field value
    * @param {String} orderId 
    */
    setOrderId: function(orderId) {
      this.orderId = orderId;
    },

    /**
    * Get the field value
    * @return {String} 
    */
    getOrderId: function() {
      return this.orderId;
    },

    /**
    * Set the field value
    * Gift Card
    *
    * @param {GiftCard} card 
    */
    setCard: function(card) {
      this.card = card;
    },

    /**
    * Get the field value
    * Gift Card
      * @return {GiftCard} 
    */
    getCard: function() {
      return this.card;
    },

    /**
    * Set the field value
    * @param {Array.<String>} paymentIds An array of 
    */
    setPaymentIds: function(paymentIds) {
      this.paymentIds = paymentIds;
    },

    /**
    * Get the field value
    * @return {Array.<String>} An array of 
    */
    getPaymentIds: function() {
      return this.paymentIds;
    },

    /**
    * Set the field value
    * @param {Boolean} ignorePayment 
    */
    setIgnorePayment: function(ignorePayment) {
      this.ignorePayment = ignorePayment;
    },

    /**
    * Get the field value
    * @return {Boolean} 
    */
    getIgnorePayment: function() {
      return this.ignorePayment;
    },

    /**
    * Set the field value
    * @param {ServiceChargeAmount} serviceChargeAmount 
    */
    setServiceChargeAmount: function(serviceChargeAmount) {
      this.serviceChargeAmount = serviceChargeAmount;
    },

    /**
    * Get the field value
    * @return {ServiceChargeAmount} 
    */
    getServiceChargeAmount: function() {
      return this.serviceChargeAmount;
    },

    /**
    * Set the field value
    * @param {Array.<TaxableAmountRate>} taxableAmountRates An array of 
    */
    setTaxableAmountRates: function(taxableAmountRates) {
      this.taxableAmountRates = taxableAmountRates;
    },

    /**
    * Get the field value
    * @return {Array.<TaxableAmountRate>} An array of 
    */
    getTaxableAmountRates: function() {
      return this.taxableAmountRates;
    },

    /**
    * Set the field value
    * Payments that were made for this line item
    *
    * @param {Array.<LineItemPayment>} lineItems An array of 
    */
    setLineItems: function(lineItems) {
      this.lineItems = lineItems;
    },

    /**
    * Get the field value
    * Payments that were made for this line item
      * @return {Array.<LineItemPayment>} An array of 
    */
    getLineItems: function() {
      return this.lineItems;
    },

    /**
    * Set the field value
    * @param {String} employeeId 
    */
    setEmployeeId: function(employeeId) {
      this.employeeId = employeeId;
    },

    /**
    * Get the field value
    * @return {String} 
    */
    getEmployeeId: function() {
      return this.employeeId;
    },

    /**
    * Set the field value
    * @param {Boolean} suppressPayment 
    */
    setSuppressPayment: function(suppressPayment) {
      this.suppressPayment = suppressPayment;
    },

    /**
    * Get the field value
    * @return {Boolean} 
    */
    getSuppressPayment: function() {
      return this.suppressPayment;
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

GiftCardTransaction._meta_ =  {fields:  {}};
GiftCardTransaction._meta_.fields["amount"] = {};
GiftCardTransaction._meta_.fields["amount"].type = Number;
GiftCardTransaction._meta_.fields["taxAmount"] = {};
GiftCardTransaction._meta_.fields["taxAmount"].type = Number;
GiftCardTransaction._meta_.fields["orderId"] = {};
GiftCardTransaction._meta_.fields["orderId"].type = String;
GiftCardTransaction._meta_.fields["card"] = {};
GiftCardTransaction._meta_.fields["card"].type = payments_GiftCard;
GiftCardTransaction._meta_.fields["paymentIds"] = {};
GiftCardTransaction._meta_.fields["paymentIds"].type = Array;
GiftCardTransaction._meta_.fields["ignorePayment"] = {};
GiftCardTransaction._meta_.fields["ignorePayment"].type = Boolean;
GiftCardTransaction._meta_.fields["serviceChargeAmount"] = {};
GiftCardTransaction._meta_.fields["serviceChargeAmount"].type = payments_ServiceChargeAmount;
GiftCardTransaction._meta_.fields["taxableAmountRates"] = {};
GiftCardTransaction._meta_.fields["taxableAmountRates"].type = Array;
GiftCardTransaction._meta_.fields["taxableAmountRates"].elementType = payments_TaxableAmountRate;
GiftCardTransaction._meta_.fields["lineItems"] = {};
GiftCardTransaction._meta_.fields["lineItems"].type = Array;
GiftCardTransaction._meta_.fields["lineItems"].elementType = payments_LineItemPayment;
GiftCardTransaction._meta_.fields["employeeId"] = {};
GiftCardTransaction._meta_.fields["employeeId"].type = String;
GiftCardTransaction._meta_.fields["suppressPayment"] = {};
GiftCardTransaction._meta_.fields["suppressPayment"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = GiftCardTransaction;
}

