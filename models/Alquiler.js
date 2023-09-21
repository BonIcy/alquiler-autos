const mongoose = require('mongoose');
const alquilerSchema = new mongoose.Schema({
    id_cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'clientes' },
    id_automovil: { type: mongoose.Schema.Types.ObjectId, ref: 'automoviles' },
    fecha_inicio: String,
    fecha_fin: String,
    costo_total: Number,
    estado: String,
  });
  
  const Alquiler = mongoose.model('alquileres', alquilerSchema);

  module.exports = Alquiler;