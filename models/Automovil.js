const mongoose = require('mongoose');

const automovilSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    anio: String,
    tipo: String,
    capacidad: Number,
  });
  
  const Automovil = mongoose.model('automoviles', automovilSchema);
  
module.exports = Automovil;