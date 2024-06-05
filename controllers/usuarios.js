//MANEJO DE CONTROLADORES DE SOLICITUDES HTTP 

const { response } = require('express');

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
const usuariosPut = (req, res = response) => {
    const { id } = req.params; // params puede traer muchos datos.
    res.json({
        msg: 'put API - controller',
        id
    });
}
//METODO POST: Enviar datos al servidor para crear un nuevo recurso.
const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API - controller',
    nombre:'Gisela',
        edad:'27'
});
}
//METODO DELETE :  Eliminar datos de un servidor.
const usuariosDelete = (req, res = response) =>{
    res.json({
        msg: 'delete API - controller'
    });

}
//METODO PAT: Actualizar solo algunos campos de un recurso.
const usuariosPatch = (req, res = response) =>{
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