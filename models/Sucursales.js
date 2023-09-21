const mongoose = require('mongoose');

const sucursalSchema = new mongoose.Schema({
    nombre: String,
    direccion: String,
    telefono: String,
  });
  
  const Sucursal = mongoose.model('sucursales', sucursalSchema);
  module.exports= Sucursal;