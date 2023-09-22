const Cliente = require('../models/Clientes')
const Automovil = require('../models/Automovil')
const Alquiler = require('../models/Alquiler')
const Reserva = require('../models/Reserva');
const Empleado = require('../models/Empleados')
const Sucursal = require('../models/Sucursales');
const SucursalAutomovil = require('../models/SucursalAutomovil');


const putAlquiler = async (req, res) => {
    try {
      const alquilerId = req.params.id; 
      const nuevosDatos = req.body; 
      const resultado = await Alquiler.findByIdAndUpdate(alquilerId, nuevosDatos, {
        new: true, 
      });
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json(resultado);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al actualizar al Dato' });
    }
  };

  const putAutos = async (req, res) => {
    try {
      const autoId = req.params.id; 
      const nuevosDatos = req.body; 
      const resultado = await Automovil.findByIdAndUpdate(autoId, nuevosDatos, {
        new: true, 
      });
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json(resultado);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al actualizar al Dato' });
    }
  };

  const putCliente = async (req, res) => {
    try {
      const clienteId = req.params.id; 
      const nuevosDatos = req.body; 
      const resultado = await Cliente.findByIdAndUpdate(clienteId, nuevosDatos, {
        new: true, 
      });
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json(resultado);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al actualizar al Dato' });
    }
  };

  const putEmpleado = async (req, res) => {
    try {
      const empleadoId = req.params.id; 
      const nuevosDatos = req.body; 
      const resultado = await Empleado.findByIdAndUpdate(empleadoId, nuevosDatos, {
        new: true, 
      });
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json(resultado);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al actualizar al Dato' });
    }
  };

  const putReserva = async (req, res) => {
    try {
      const reservaId = req.params.id; 
      const nuevosDatos = req.body; 
      const resultado = await Reserva.findByIdAndUpdate(reservaId, nuevosDatos, {
        new: true, 
      });
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json(resultado);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al actualizar al Dato' });
    }
  };

  const putSucursalAuto = async (req, res) => {
    try {
      const sucursalAutoId = req.params.id; 
      const nuevosDatos = req.body; 
      const resultado = await SucursalAutomovil.findByIdAndUpdate(sucursalAutoId, nuevosDatos, {
        new: true, 
      });
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json(resultado);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al actualizar al Dato' });
    }
  };

  const putSucursal = async (req, res) => {
    try {
      const sucursalId = req.params.id; 
      const nuevosDatos = req.body; 
      const resultado = await Sucursal.findByIdAndUpdate(sucursalId, nuevosDatos, {
        new: true, 
      });
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json(resultado);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al actualizar al Dato' });
    }
  }


  module.exports = {
    putAlquiler,
    putAutos,
    putCliente,
    putEmpleado,
    putReserva,
    putSucursalAuto,
    putSucursal
  }