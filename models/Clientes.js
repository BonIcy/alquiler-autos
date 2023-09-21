const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  dni: String,
  direccion: String,
  telefono: String,
  email: String,
});

const Cliente = mongoose.model('clientes', clienteSchema);

module.exports = Cliente