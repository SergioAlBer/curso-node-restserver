//MANEJO DE CONTROLADORES DE SOLICITUDES HTTP 

const { response } = require('express');

//METODO GET : Obtener datos de un servidor sin modificar el estado del recurso.
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
//METODO PUT: Actualizar toda la información de un recurso. (id es el identificador de usuario)
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
    nombre:'dffdf',
        edad
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