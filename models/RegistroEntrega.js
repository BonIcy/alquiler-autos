const mongoose = require('mongoose');
const registroEntregaSchema = new mongoose.Schema({
    id_alquiler: { type: mongoose.Schema.Types.ObjectId, ref: 'alquileres' },
    id_empleado: { type: mongoose.Schema.Types.ObjectId, ref: 'empleados' },
    fecha_entrega: String,
    combustible_entregado: String,
    kilometraje_entregado: String,
  });
  
  const RegistroEntrega = mongoose.model('registro_entrega', registroEntregaSchema);
module.exports = RegistroEntrega;