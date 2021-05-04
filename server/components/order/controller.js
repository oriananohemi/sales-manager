const store = require('./store');

const createOrder  = (order) => {
    const date = new Date();
    const number = Math.round(Math.random() * (100 - 1) + 1);
    const orderNumber = date.toLocaleDateString().replace(new RegExp('/','g'), '') + number;
    return new Promise((resolve, reject) => {
        if(!order) {
            console.error('ORDEN CONTROLLERS - no hay orden')
            return reject('No ha completado los datos requeridos para crear la orden')
        } else {
            const orderInformation = { ...order, date, orderNumber }
            store.add(orderInformation);
            resolve(orderInformation);
        }
    })
}

const getOrderDetails  = (orderNumber) => {
    return new Promise((resolve, reject) => {
        const order = store.details(orderNumber)
        if(!order) {
            console.error('ORDEN CONTROLLERS - no hay coincidencias')
            return reject('No se ha encontrado la orden')
        } else {
            resolve(order)
        }
    })
}

const getAllOrders  = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}
module.exports = {
    createOrder,
    getOrderDetails,
    getAllOrders,
}