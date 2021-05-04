const shippingMethodUrl = 'https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/',
const shippingMethodxApiKey = 'oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT',
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