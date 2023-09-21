const mongoose = require('mongoose');
const registroDevolucionSchema = new mongoose.Schema({
    id_alquiler: { type: mongoose.Schema.Types.ObjectId, ref: 'alquileres' },
    id_empleado: { type: mongoose.Schema.Types.ObjectId, ref: 'empleados' },
    fecha_devolucion: Date,
    combustible_devuelto: String,
    kilometraje_devuelto: String,
    monto_adicional: String,
  });
  
  const RegistroDevolucion = mongoose.model('registro_devolucion', registroDevolucionSchema);
module.exports = RegistroDevolucion;