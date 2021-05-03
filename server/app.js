const express = require('express');
const config = require("./config");
const router = require("./network/routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
router(app)

app.listen(config.port, () => {
  console.log(`La aplicacion esta escuchando en ${config.host}:${config.port}`)
})