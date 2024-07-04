const validarCampos = require('../middlewares/validar-campo');
const validarJWT = require('../middlewares/validar-jwt');
const validarRoles = require('../middlewares/validar-roles');
module.exports = {
    ...validarCampos,

    ...validarJWT,
    ...validarRoles
}