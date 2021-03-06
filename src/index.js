const express = require('express');
const cors = require('cors');

const routes = require('./routes/index')

const app = express();

app.use(cors());
app.use(routes);

app.listen(3000, () => console.log("Servidor rodando local na porta http://localhost:3000"));

module.exports = app;