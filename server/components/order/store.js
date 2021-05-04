const Model = require("./model");

const listOrder = [];

const addOrder = (order) => {
    const newOrder = new Model(order)
    listOrder.push(newOrder);
}

const getAllOrder = () => {
    return listOrder
}

const getOrdersDetails = (orderNumber) => {
    return listOrder.find((element) => element.orderNumber === orderNumber)
}

module.exports = {
    add: addOrder,
    list: getAllOrder,
    details: getOrdersDetails
}