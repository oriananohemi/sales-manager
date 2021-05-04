const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  orderList: {
    orderNumber: Number,
    sellerStore: String,
    creationDate: Date,
    shippingMethod: String
  },
  orderDetails: {
    orderNumber: Number,
    buyerFullName: String,
    buyerPhoneNumber: Number,
    buyerEmail: String,
    shippingAddress: String,
    shippingCity: String,
    shippingRegion: String,
    shippingCountry: String,
    packPromiseMin: Number,
    packPromiseMax: Number,
    shipPromiseMin: Number,
    shipPromiseMax: Number,
    deliveryPromiseMin: Number,
    deliveryPromiseMax: Number,
    readyPickupPromiseMin: Number,
    readyPickupPromiseMax: Number,
    listItems: {
      productName: String,
      productQty: String,
      productWeight: String
    }
  },
});

const model = mongoose.model("order", mySchema);

module.exports = model;