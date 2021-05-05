const express = ('express');

const order = require("../components/order/network");

const router = (server) => {
  server.use("/order", order);
};

module.exports = router;