const {Router} = require('express');
const {check} = require('express-validator');
const {loginEmpleado} = require('../controllers/auth')
const { validateDocuments } = require('../middlewares/validateDocuments.js')
const router = Router();

router.get('/owo', async (req, res) => {
    try {
        console.log('login');
    } catch (error) {
        console.log(error.message);
    }
  })

router.post('/empleado', 
                    [
                    check('dni', 'El dni es obligatorio').notEmpty(),
                    check('password', 'Contra requerida').notEmpty(),
                    ],
                    loginEmpleado
                    );
module.exports = router