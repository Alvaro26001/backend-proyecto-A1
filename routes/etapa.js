const { Router } = require('express')
const {createEtapa, getEtapa, updateEtapaID} =
 require('../controllers/etapa')

const router = Router()

// crear
router.post('/', createEtapa)

// consultar todos
router.get('/', getEtapa)

// consultar todos
router.put('/:id', updateEtapaID)

module.exports = router;