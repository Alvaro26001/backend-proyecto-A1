const { Router } = require('express')
const {createTipoProyecto, getTipoProyecto} =
 require('../controllers/tipoProyecto')

const router = Router()

// crear
router.post('/', createTipoProyecto)

// consultar todos
router.get('/', getTipoProyecto)

// consultar todos
//router.put('/:id', updateTipoEquipoByID)

module.exports = router;