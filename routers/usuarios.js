//CONFIGURAR EL ENRUTADOR 

//IMPORTAMOS FUNCION ROUTER DE SERVERS
const { Router } = require('express');
const { check } = require('express-validator');
//IMPORTAMOS CONTROLADORES 
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } =
    require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campo');

const { esRoleValido, emailExiste} = require('../helpers/db-validators');


//DEFINIMOS EL ENRUTADOR PARA MANEJO DE CONTROLADORES HTTP
const router = Router();
router.get('/', usuariosGet )
router.put('/:id', usuariosPut);


router.post('/', [
    check('nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    check('password', 'El Password obligatorio y mas de 6 letras').isLength({ min: 6 }),
    // check('rol', 'No es un Rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom((rol) => esRoleValido(rol)),
    validarCampos
], usuariosPost);


router.delete('/',usuariosDelete  );
router.patch('/', usuariosPatch );
//EXPORTAMOS EL ENRUTADOR 
module.exports = router;
   
