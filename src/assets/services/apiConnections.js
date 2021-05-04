const urlOrder = 'http://localhost:3200/api/v1/order';

const getItems = async () => {
    const resp = await fetch(`${urlOrder}/`, { method: 'get' });
    const data = await resp.json();     
   
    return data; 
  }
  
  const getOrderById = async (id) => {
    const resp = await fetch(`${urlOrder}/details/${ id }`, { method: 'get' });  
    const data = await resp.json();     
   
    return data; 
  }
  
  const createOrder = async ( data ) => {
    
    const url = `${urlOrder}/create`;  
    const resp = await fetch(url, { 
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),      
    });
    const data = await resp.json();     
   
    return data; 
  }
  
  export {
    getItems,
    createOrder,
    getOrderById
  }   