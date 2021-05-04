export const getMethods = () => {
  const shippingMethodUrl = 'https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/';
  const shippingMethodxApiKey = 'oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT';
  const methods = {
      method: 'get',
      headers: { 'x-api-key': `${shippingMethodxApiKey}` }
    }
    return fetch(`${shippingMethodUrl}shipping-methods`, methods)
      .then(res => res.json())
      .then(data => {
        return data
      },
      (error) => {
        console.error(error)
      });
  }