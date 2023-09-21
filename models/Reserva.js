const mongoose = require('mongoose');
const reservaSchema = new mongoose.Schema({
    id_cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'clientes' },
    id_automovil: { type: mongoose.Schema.Types.ObjectId, ref: 'automoviles' },
    fecha_reserva: String,
    fecha_inicio: String,
    fecha_fin: String,
    estado: String,
  });
  const Reserva = mongoose.model('reservas', reservaSchema);
  module.exports = Reserva;