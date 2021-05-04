const express = require('express');
const response = require("../../network/response");
const controller = require("./controller")

const router = express.Router()

router.post('/create', (req,res) => {
    controller.createOrder(req.body.order)
    .then(() => {
      response.success(req, res, 'Nueva orden creada')
    })
    .catch((e) => {
      response.error(req, res, 'Faltan datos', 500, e)
    })
  })
  
  
  router.get('/', (req,res) => {
    controller.getAllOrders()
    .then((listOrder) => {
      response.success(req, res, listOrder)
    })
    .catch((e) => {
      response.error(req, res, 'No se puede obtener la lista de ordenes', 500, e)
    })
  })
  
  
  router.get('/details/:id', (req,res) => {
    controller.getOrderDetails(req.params.id)
    .then((order) => {
      response.success(req, res, order)
    })
    .catch((e) => {
      response.error(req, res, 'No se encuentran coincidencias', 500, e)
    })
  })

module.exports = router;