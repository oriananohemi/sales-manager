const express = ('express');

const order = require("../components/order/network");
const shippingMethods = require("../components/shippingMethods/network");

const router = (server) => {
  server.use("/order", order);
  server.use("/shipping", shippingMethods);
};

module.exports = router;