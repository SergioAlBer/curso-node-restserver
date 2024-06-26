//CLASE SERVER para configurar servidor expres

const express = require('express');
const cors = require('cors'); 
const { dbConnection } = require('../database/config');

class Server { //<--------
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        
        //llamada a conectarDB
        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }
    routes() {
        //DEFINIMOS LA ruta api/usuarios en routers/usuarios 
        this.app.use(this.usuariosPath, require('../routers/usuarios'))
    }

    middlewares() {
        //CORS: permitir solicitudes 
        this.app.use(cors());
        //lectura y parseo del body (cuerpos json)
        this.app.use(express.json());
        //Servir contenido estatico (html)
        this.app.use(express.static('public'));
    }

    listen() {//inicia el servidor y define el puerto 
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;//exportamos 
