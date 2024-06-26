//MANEJO DE CONTROLADORES DE SOLICITUDES HTTP 

const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuarios');
const { validationResult } = require('express-validator');

//METODO GET : Lectura en recursos 
const usuariosGet = (req = request, res = response) => {
    const { q, nombre = 'no envia ', apikey
    } = req.query;
    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        apikey
    });
}


//METODO PUT: Actualizar un recurso o definir 1 nuevo 
const usuariosPut = async (req, res = response) => {
    const { id } = req.params; // params puede traer muchos datos.
    // Excluyo password, google y correo (no se actualizan) y todo lo demás lo almaceno en resto
    const { _id,password, google, correo, ...resto } = req.body;

    // POR HACER: validar id contra la DB
    if (password) {
        // Encriptar la contraseña en caso de que venga en el body
        const salt = bcryptjs.genSaltSync(); // cantidad de vueltas que hará la encriptación por defecto es 10
        resto.password = bcryptjs.hashSync(password, salt); // encripta el password
    }

    // Actualiza el registro: lo busca por id y actualiza con los valores de resto
    const usuario = await Usuario.findOneAndUpdate({ _id: id }, resto, { new: true });

    res.json({
        msg: 'put API - controller',
        usuario
    });
};




//METODO POST: Enviar datos al servidor 
const usuariosPost = async (req, res = response) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json(errores);
    }


    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });


    //veriificar si existe correo
    //const existeEmail = await Usuario.findOne({ correo });
    //if (existeEmail) {
      //  return res.status(400).json({
        //    msg: 'El correo ya esta registrado'
        //});
    //}

    //encritar la contrasena
    const salt = bcryptjs.genSaltSync();//cantidad de vueltas que hara la encriptacion por def.10
    usuario.password = bcryptjs.hashSync(password);
    await usuario.save(); // esto es para grabar en BD
    res.json({
        msg: 'post API - controller',
        usuario
    });
}
//METODO DELETE :  Eliminar datos de un servidor.
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });

}
//METODO PAT: Actualizar solo algunos campos de un recurso.
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}
//EXPORTAMOS CONTROLADORES 
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}