const express = ('express');

const order = require("../components/order/network");

const router = (server) => {
  server.use("api/v1/order", order);
};

module.exports = router;