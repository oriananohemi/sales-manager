const config = {
    port: process.env.PORT || 3200,
    host: process.env.HOST || "http://localhost",
    publicRoute: process.env.PUBLIC_ROUTE || "app",
    shippingMethodUrl: 'https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/',
    shippingMethodxApiKey: 'oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT',
  };
  
  module.exports = config;