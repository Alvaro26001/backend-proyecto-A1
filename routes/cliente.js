const { Router } = require('express')
const {createCliente, getCliente, updateClienteID} =
 require('../controllers/cliente')

const router = Router()

// crear
router.post('/', createCliente)

// consultar todos
router.get('/', getCliente)

// consultar todos
router.put('/:id', updateClienteID)

module.exports = router;