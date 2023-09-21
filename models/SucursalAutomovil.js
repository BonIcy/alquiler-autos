const mongoose = require('mongoose');

const sucursalAutomovilSchema = new mongoose.Schema({
    id_automovil: { type: mongoose.Schema.Types.ObjectId, ref: 'automoviles' },
    id_sucursal: { type: mongoose.Schema.Types.ObjectId, ref: 'sucursales' },
    cantidad_disponible: Number,
  });
  
  const SucursalAutomovil = mongoose.model('sucursal_automovil', sucursalAutomovilSchema);
module.exports = SucursalAutomovil;