const express = require('express');
const cors = require("cors");
const router = require("./network/routes");
const config = require("./config");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

router(app)

app.listen(config.port, () => {
  console.log(`La aplicacion esta escuchando en ${config.host}:${config.port}`)
})