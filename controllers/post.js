const Cliente = require('../models/Clientes')
const Automovil = require('../models/Automovil')
const Alquiler = require('../models/Alquiler')
const Reserva = require('../models/Reserva');
const Empleado = require('../models/Empleados')
const Sucursal = require('../models/Sucursales');
const SucursalAutomovil = require('../models/SucursalAutomovil');
const postAlquiler = async (req, res) => {
    try {
      const nuevoAlquiler = await Alquiler.create(req.body);
      res.status(201).json(nuevoAlquiler);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al crear.' });
    }
  };
  
const postAuto = async (req, res) => {
    try {
      const nuevoAuto = await Automovil.create(req.body);
      res.status(201).json(nuevoAuto);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al crear.' });
    }
  };
  const postCliente = async (req, res) => {
    try {
      const nuevoCliente = await Cliente.create(req.body);
      res.status(201).json(nuevoCliente);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al crear.' });
    }
  };
  
  
  const postEmpleado = async (req, res) => {
    try {
      const nuevoEmpleado = await Empleado.create(req.body);
      res.status(201).json(nuevoEmpleado);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al crear.' });
    }
  };

  const postReserva = async (req, res) => {
    try {
      const nuevaReserva = await Reserva.create(req.body);
      res.status(201).json(nuevaReserva);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al crear.' });
    }
  };
  
  const postSucursalAuto = async (req, res) => {
    try {
      const nuevaSucursalAuto = await SucursalAutomovil.create(req.body);
      res.status(201).json(nuevaSucursalAuto);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al crear.' });
    }
  };
  
  const postSucursal = async (req, res) => {
    try {
      const nuevaSucursal = await Sucursal.create(req.body);
      res.status(201).json(nuevaSucursal);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al crear.' });
    }
  };

module.exports = {
    postAlquiler,
    postAuto,
    postCliente,
    postEmpleado,
    postReserva,
    postSucursalAuto,
    postSucursal
  
}