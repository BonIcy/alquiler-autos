
const express = require('express');
require('dotenv').config();
const router = express.Router();

//gets 
const {getAlquileres, getAutos, getClientes, getEmpleados, getReservas, getSucursalAuto, getSucursales} = require('../controllers/get');
//post
const {postAlquiler, postAuto, postCliente, postEmpleado, postReserva, postSucursalAuto, postSucursal} = require('../controllers/post')
//delete (no virtual)
const {eliminarAlquiler, eliminarAutos, eliminarCliente, eliminarReserva, eliminarEmpleado, eliminarSucursalAuto, eliminarSucursal} = require('../controllers/delete')
//update (put)
const { putAlquiler, putAutos, putCliente, putEmpleado, putReserva, putSucursalAuto, putSucursal} = require('../controllers/update')

router.get('/hola', async (req, res) => {
    try {
        console.log('cruds');
    } catch (error) {
        console.log(error.message);
    }
  })

//gets
router.get('/getAlquileres', getAlquileres)
router.get('/getAutos', getAutos)
router.get('/getClientes', getClientes)
router.get('/getEmpleados', getEmpleados)
router.get('/getReservas', getReservas)
router.get('/getSucursalAuto', getSucursalAuto)
router.get('/getSucursales', getSucursales)

//posts
router.post('/postAlquileres', postAlquiler)
router.post('/postAutos', postAuto)
router.post('/postClientes', postCliente)
router.post('/postEmpleados', postEmpleado)
router.post('/postReservas', postReserva)
router.post('/postSucursalAuto', postSucursalAuto)
router.post('/postSucursales', postSucursal)

//delete
router.delete('/delAlquileres/:id', eliminarAlquiler);
router.delete('/delAutomoviles/:id', eliminarAutos);
router.delete('/delClientes/:id', eliminarCliente);
router.delete('/delEmpleados/:id', eliminarEmpleado);
router.delete('/delReservas/:id', eliminarReserva);
router.delete('/delSucursal_automovil/:id', eliminarSucursalAuto);
router.delete('/delSucursales/:id', eliminarSucursal);

//update
router.put('/putAlquileres/:id', putAlquiler);
router.put('/putAutomoviles/:id', putAutos);
router.put('/putClientes/:id', putCliente);
router.put('/putEmpleados/:id', putEmpleado);
router.put('/putReservas/:id', putReserva);
router.put('/putSucursal_automovil/:id', putSucursalAuto);
router.put('/putSucursales/:id', putSucursal);
module.exports = router;