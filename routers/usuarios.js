//CONFIGURAR EL ENRUTADOR 

//IMPORTAMOS FUNCION ROUTER DE SERVERS
const { Router } = require('express');
//IMPORTAMOS CONTROLADORES 
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } =
    require('../controllers/usuarios');

//DEFINIMOS EL ENRUTADOR PARA MANEJO DE CONTROLADORES HTTP
const router = Router();
router.get('/', usuariosGet )
router.put('/:id', usuariosPut );
router.post('/',usuariosPost );
router.delete('/',usuariosDelete  );
router.patch('/', usuariosPatch );
//EXPORTAMOS EL ENRUTADOR 
module.exports = router;
   
