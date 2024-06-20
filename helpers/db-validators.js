//VERIFICAR INCONSISTENCIAS DE DUPLICIDAD DE CORREO O FALTA DE ROLES
const Role = require('../models/role');
const Usuario = require('../models/usuarios');

const esRoleValido = async(rol ='') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la DB`)
    }

}

const emailExiste = async (correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya está registrado`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste
}



