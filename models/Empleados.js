const mongoose = require('mongoose');
const empleadoSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: String,
    direccion: String,
    telefono: String,
    cargo: String,
    password: String, 
  });
  
  const Empleado = mongoose.model('empleados', empleadoSchema);
  module.exports = Empleado;