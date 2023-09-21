
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routerBase = require('./routes/endpoints.js');
const routerBase2 = require('./routes/routes.js');
require('dotenv').config;


const dbUrl = process.env.DDBB256 
const port = process.env.PORT256  
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexion exitosa a la base de datos.');
    app.use('/autos', routerBase);
    app.use('/cruds', routerBase2);
    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  })
  .catch((error) => { 
  
    console.error('Error de conexion a la base de datos:', error);
  });
