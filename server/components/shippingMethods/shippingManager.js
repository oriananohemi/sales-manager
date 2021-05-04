const fetch = require('node-fetch');
const config = require('../../config');
const methods = {
  method: 'get',
  headers: { 'x-api-key': `${config.xApiKey}` }
}

const getMethods = () => {
  return new Promise ((resolve, reject) => {
    fetch(`${config.url}shipping-methods`, methods)
    .then(response => response.json())
    .catch(error => reject(error))
    .then(data => {
      resolve(data);
    });
  })
}

const getOffDays = () => {
  return new Promise ((resolve, reject) => {
    fetch(`${config.url}off-days`, methods)
    .then(response => response.json())
    .catch(error => reject(error))
    .then(data => {
      resolve(data);
    });
  })
}

const getMethodDetails = (shipping_method_id) => {
  return new Promise ((resolve, reject) => {
    fetch(`${config.url}shipping-methods/${shipping_method_id}`, methods)
    .then(response => response.json())
    .catch(error => reject(error))
    .then(data => {
      resolve(data);
    });
  })
}

module.exports = {
  getMethods,
  getOffDays,
  getMethodDetails
};