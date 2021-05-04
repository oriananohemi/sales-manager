const express = require('express');
const cors = require("cors");
const config = require("./config");
const router = require("./network/routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors)
router(app)

app.use(config.publicRoute, express.static("public"));

app.listen(config.port, () => {
  console.log(`La aplicacion esta escuchando en ${config.host}:${config.port}`)
})