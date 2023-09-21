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


const getAlquileres = async (req, res) => {
  try {
    const alquileres = await Alquiler.find();
    res.json(alquileres);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
};


const getAutos = async (req, res) => {
  try {
    const automoviles = await Automovil.find();
    res.json(automoviles);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
};


const getClientes = async (req, res) => {
    try {
      const clientes = await Cliente.find();
      res.json(clientes);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al obtener los datos.' });
    }
  };
  
  const getEmpleados = async (req, res) => {
    try {
      const empleados = await Empleado.find();
      res.json(empleados);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al obtener los datos.' });
    }
  };

const getReservas = async(req, res) => {
    try {
        const reservas = await Reserva.find();
        res.json(reservas)
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al obtener los datos.' });
    }
}
const getSucursalAuto = async(req, res) => {
    try {
        const sucursalAutos = await SucursalAutomovil.find();
        res.json(sucursalAutos)
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al obtener los datos.' });
    }
}
const getSucursales = async(req, res) => {
    try {
        const sucursales = await Sucursal.find();
        res.json(sucursales)
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al obtener los datos.' });
    }
}

module.exports = {getAlquileres,
    getAutos,
    getClientes,
    getEmpleados,
    getReservas,
    getSucursalAuto,
    getSucursales}