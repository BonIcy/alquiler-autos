const express = require('express');
require('dotenv').config();
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

router.get('/holi', async (req, res) => {
  try {
      console.log('olaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  } catch (error) {
      console.log(error.message);
  }
})
//Mostrar todos los clientes registrados en la base de datos.
router.get('/pnt2', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    console.error(error.message);
  res.status(500).json({ error: 'Error al obtener los datos.' });    
}
});

// Obtener todos los automóviles disponibles para alquiler
router.get('/pnt3', async (req, res) => {
  try {
    const autDisp = await Automovil.find();
    res.json(autDisp);
  } catch (error) {
    console.error(error.message);
  res.status(500).json({ error: 'Error al obtener los datos.' });    
}
});

// Listar todos los alquileres activos junto con los datos de los clientes relacionados
router.get('/pnt4', async (req, res) => {
  try {
    const alqActivo = await Alquiler.find({ estado: 'Activo' })
      .populate('id_cliente')
      .populate('id_automovil');
    res.json(alqActivo);
  } catch (error) {
    console.error(error.message);
  res.status(500).json({ error: 'Error al obtener los datos.' });    
}
});

// Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado
router.get('/pnt5', async (req, res) => {
  try {
    const resrvPendientes = await Reserva.find({ estado: 'Pendiente' })
      .populate('id_cliente')
      .populate('id_automovil');
    res.json(resrvPendientes);
  } catch (error) {
    console.error(error.message);
  res.status(500).json({ error: 'Error al obtener los datos.' });    
}
});

// Obtener los detalles del alquiler con el ID_Alquiler específico
router.get('/pnt6/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const alquiler = await Alquiler.findById(id)
      .populate('id_cliente')
      .populate('id_automovil');
    if (!alquiler) {
      return res.status(404).json({ error: 'Alquiler no encontrado.' });
    }
    res.json(alquiler);
  } catch (error) {
    console.error(error.message);
  res.status(500).json({ error: 'Error al obtener los datos.' });    
}
});
// Listar los empleados con el cargo de vendedor
router.get('/pnt7', async (req, res) => {
  try {
    const empleados = await Empleado.find({ cargo: 'Vendedor' });
    res.json(empleados);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});

//Mostrar la cantidad total de automóviles disponibles en cada sucursal
router.get('/pnt8', async (req, res) => {
  try {
    const sucursales = await Sucursal.find();
    const result = [];
    
    for (const sucursal of sucursales) {
      const automoviles = await SucursalAutomovil.find({ id_sucursal: sucursal._id });
      const cantDisp = automoviles.reduce((total, auto) => total + auto.cantidad_disponible, 0);
      
      result.push({
        sucursal: sucursal.nombre,
        cantidad_disponible: cantDisp
      });
    }
    
    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});

//Obtener el costo total de un alquiler específico con el ID del alquiler
router.get('/pnt9/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const alquiler = await Alquiler.findById(id);
    if (!alquiler) {
      return res.status(404).json({ error: 'Alquiler no encontrado.' });
    }
    res.json({ costo_total: alquiler.costo_total });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});

//Listar los clientes con el DNI específico
  router.get('/pnt10/:dni', async (req, res) => {
      const { dni } = req.params;
      try {
      const clientes = await Cliente.find({ dni });
      res.json(clientes);
      } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al obtener los datos.' });
      }
  });
  
//mostrar los que tengan capacidad mayor a 5
router.get('/pnt11', async (req, res) => {
  try {
    const automoviles = await Automovil.find({ capacidad: { $gte: 5 } });
    res.json(automoviles);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});

//Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'  (ponerla como parametro en postman)
router.get('/pnt12/:fechaInicio', async (req, res) => {
  const { fechaInicio } = req.params;
  try {
    const alquiler = await Alquiler.findOne({ fecha_inicio: fechaInicio });
    if (!alquiler) {
      return res.status(404).json({ error: 'alquiler con esa fecha no encontrado' });
    }
    res.json(alquiler);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});
//Listar las reservas pendientes realizadas por un cliente específico (con id)
router.get('/pnt13/:idCliente', async (req, res) => {
  const { idCliente } = req.params;
  try {
    const reservas = await Reserva.find({ id_cliente: idCliente, estado: 'Pendiente' });
    res.json(reservas);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});

//Mostrar los empleados con cargo de gerente o asistente
router.get('/pnt14', async (req, res) => {
  try {
    const empleados = await Empleado.find({ cargo: { $in: ['Gerente', 'Asistente'] } });
    res.json(empleados);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});

//Obtener los datos de los clientes que realizaron al menos un alquiler
router.get('/pnt15', async (req, res) => {
  try {
    const clientesAlq = await Cliente.aggregate([
      {
        $lookup: {
          from: 'alquileres',
          localField: '_id',
          foreignField: 'id_cliente',
          as: 'alquileres',
        },
      },
      {
        $match: {
          'alquileres': { $exists: true, $ne: [] },
        },
      },
    ]);
    res.json(clientesAlq);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});


//Listar todos los automóviles ordenados por marca y modelo

router.get('/pnt16', async (req, res) => {
  try {
    const orden = await Automovil.find().sort({ marca: 1, modelo: 1 });
    res.json(orden);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});

//Mostrar la cantidad total de automóviles en cada sucursal junto con su direccion
router.get('/pnt17', async (req, res) => {
  try {
    const sucursales = await Sucursal.find();
    const result = [];

    for (const sucursal of sucursales) {
      const automoviles = await SucursalAutomovil.find({ id_sucursal: sucursal._id });
      const total = automoviles.reduce((total, auto) => total + auto.cantidad_disponible, 0);
      result.push({
        sucursal: sucursal.nombre,
        direccion: sucursal.direccion,
        cantidad_total_automoviles: total,
      });
    }

    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});

//cantidad total de alquileres regitrados
router.get('/pnt18', async (req, res) => {
  try {
    const cantTotal = await Alquiler.countDocuments();
    res.json({ cantidad_total_alquileres: cantTotal });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});


//Mostrar los automóviles con capacidad igual a 5  y que estén disponibles
router.get('/pnt19', async (req, res) => {
  try {
    const capac5 = await Automovil.find({ capacidad: 5 });
    
    const autosDisp = [];

    for (const automovil of capac5) {
      const sucursalAutomovil = await SucursalAutomovil.findOne({
        id_automovil: automovil._id,
        cantidad_disponible: { $gte: 1 }, 
      });

      if (sucursalAutomovil) {
        autosDisp.push(automovil);
      }
    }

    res.json(autosDisp);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});

//listar los alquileres con fecha de inicio entre 2023-07-05 y 2023-07-10
router.get('/pnt21', async (req, res) => {
  const fechaDesde = '2023-07-05';
  const fechaHasta = '2023-07-10';

  try {
    const alquileresEnFecha = await Alquiler.find({
      fecha_inicio: {
        $gte: fechaDesde,
        $lte: fechaHasta,
      },
    });
    res.json(alquileresEnFecha);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});
module.exports = router;