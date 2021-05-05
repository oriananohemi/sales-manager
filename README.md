# Manejador de envios

La interfaz fue creada en React con [Create React App](https://github.com/facebook/create-react-app), utilizando Material UI y se desarrollo un servidor de express con NodeJS, con almacenamiento temporal de los datos.


**endpoints**

GET /order/.
Consultar toda la lista de ordenes 

GET /details/:id.
Consultar una orden por su id

POST /create.
Crear una nueva orden.

 
## Probar el proyecto en local

$ git clone https://github.com/oriananohemi/sales-manager

**Para visualizar el frontend, debe realizar los siguientes comandos**

$ npm install

$ npm start

Se abrira el proyecto en el [http://localhost:3000](http://localhost:3000) 

**Para utilizar el servidor**

Ingrese a la carpeta server

$ npm install

$ npm start

Su servidor funcionara en el puerto [3200](3200), pero es configurable.

