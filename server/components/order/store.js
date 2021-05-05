const listOrder = [];

const addOrder = (order) => {
    listOrder.push(order);
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