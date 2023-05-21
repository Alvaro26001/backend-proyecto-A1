const Universidad = require('../models/universidad')
const { request, response} = require('express')

// crear
const createUniversidad = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const direccion = req.body.direccion
        const telefono = req.body.telefono
        const universidadBD = await Universidad.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(universidadBD){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre,
            direccion,
            telefono  // nombre: nombre
        }
        const universidad = new Universidad(data)
        console.log(universidad)
        await universidad.save()
        return res.status(201).json(universidad)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getUniversidades= async (req = request, 
    res = response) => {
        try{
            const universidadDB = await Universidad.find()//select * from tipoEquipo where estado=?
            return res.json(universidadDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar por ID
const updateUniversidadByID = async (req = request,
    res = response) => {
    try{
        /* console.log(req.body)
        console.log(req.params) */
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        //console.log(data)
        const universidad = await Universidad.findByIdAndUpdate(id, data, {new: true})
        return res.json(universidad)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = {
    createUniversidad,
    getUniversidades,
    updateUniversidadByID
}