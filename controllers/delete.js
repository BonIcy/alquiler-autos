const express = require('express');
const router = express.Router();
const Cliente = require('../models/Clientes')
const Automovil = require('../models/Automovil')
const Alquiler = require('../models/Alquiler')
const Reserva = require('../models/Reserva');
const Empleado = require('../models/Empleados')
const Sucursal = require('../models/Sucursales');
const SucursalAutomovil = require('../models/SucursalAutomovil');
const RegistroDevolucion = require('../models/RegistroDevolucion');
const RegistroEntrega = require('../models/RegistroEntrega');


const eliminarAlquiler = async (req, res) => {
    try {
      const alquilerId = req.params.id;
      const resultado = await Alquiler.findByIdAndDelete(alquilerId);
  
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json({ mensaje: 'Dato eliminado correctamente' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al eliminar el Dato' });
    }
  };
  const eliminarAutos = async (req, res) => {
    try {
      const autoId = req.params.id;
      const resultado = await Automovil.findByIdAndDelete(autoId);
  
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json({ mensaje: 'Dato eliminado correctamente' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al eliminar el Dato' });
    }
  };

  const eliminarCliente = async (req, res) => {
    try {
      const clienteId = req.params.id;
      const resultado = await Cliente.findByIdAndDelete(clienteId);
  
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json({ mensaje: 'Dato eliminado correctamente' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al eliminar el Dato' });
    }
  };

  const eliminarReserva= async (req, res) => {
    try {
      const reservaId = req.params.id;
      const resultado = await Reserva.findByIdAndDelete(reservaId);
  
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json({ mensaje: 'Dato eliminado correctamente' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al eliminar el Dato' });
    }
  };

  const eliminarEmpleado= async (req, res) => {
    try {
      const empleadoId = req.params.id;
      const resultado = await Empleado.findByIdAndDelete(empleadoId);
  
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json({ mensaje: 'Dato eliminado correctamente' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al eliminar el Dato' });
    }
  };


  const eliminarSucursalAuto= async (req, res) => {
    try {
      const sucursalAutoId = req.params.id;
      const resultado = await SucursalAutomovil.findByIdAndDelete(sucursalAutoId);
  
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json({ mensaje: 'Dato eliminado correctamente' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al eliminar el Dato' });
    }
  };

  const eliminarSucursal= async (req, res) => {
    try {
      const sucursalId = req.params.id;
      const resultado = await Sucursal.findByIdAndDelete(sucursalId);
  
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json({ mensaje: 'Dato eliminado correctamente' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al eliminar el Dato' });
    }
  };
  module.exports = {eliminarAlquiler, eliminarAutos, eliminarCliente, eliminarReserva, eliminarEmpleado, eliminarSucursalAuto, eliminarSucursal}