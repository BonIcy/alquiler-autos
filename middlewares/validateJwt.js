const jwt = require('jsonwebtoken');
const Empleado = require('../models/Empleado');

const validateJwt = async (req, res, next) => {

  const token = req.header('x-api-token-jwt');

  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición',
    });
  }

  try {
    const { dni } = jwt.verify(token, process.env.KEY_JWT);

    const empleado = await Empleado.findOne({ dni });
    if (!empleado) {
      return res.status(401).json({
        msg: 'Token no válido - empleado no existe en la base de datos',
      });
    }

    if (!empleado.estado) {
      return res.status(401).json({
        msg: 'Token no válido - empleado con estado: false',
      });
    }
    req.empleado = empleado;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({
      msg: 'Token no válido',
    });
  }
};

module.exports = {
  validateJwt,
};
