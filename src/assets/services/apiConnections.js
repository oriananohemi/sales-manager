const urlOrder = 'http://localhost:3200/order';

const getOrders = async () => {
    const resp = await fetch(`${urlOrder}/`, { method: 'get' });
    const data = await resp.json();     
   
    return data; 
  }
  
  const getOrderById = async (id) => {
    const resp = await fetch(`${urlOrder}/details/${ id }`, { method: 'get' });  
    const data = await resp.json();     
   
    return data; 
  }
  
  const createOrder = async ( order ) => {
    const resp = await fetch(`${urlOrder}/create`, { 
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),      
    });
    const data = await resp.json();     
   
    return data; 
  }
  
  export {
    getOrders,
    createOrder,
    getOrderById
  }   