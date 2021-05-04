const express = ('express');

const order = require("../components/order/network");
const shippingMethods = require("../components/shippingMethods/shippingManager");

const router = (server) => {
  server.use("api/v1/order", order);
  server.use("api/v1/shipping", shippingMethods);
};

module.exports = router;