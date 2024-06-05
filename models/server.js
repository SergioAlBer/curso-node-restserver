//CLASE SERVER configurar servidor express y middleware para CORS, parseo JSON y sirve contenido
//estaticos 

//uso framework express: solicitudes HTTP
// MIDDLEWARE CORS: Permite acceso al servidor de solicitudes 
const express = require('express');
const cors = require('cors');

class Server { //<--------
    constructor() {
        this.app = express();
        this.port = process.env.PORT;//asignar puerto 
        this.usuariosPath = '/api/usuarios';//ruta de usuarios 
        // Middleware
        this.middlewares();

        // Rutas de la aplicación
        this.routes();
    }

    routes() {
        //ruta api/usuarios en routers/usuarios 
        this.app.use(this.usuariosPath, require('../routers/usuarios'))
    }

    middlewares() {
        //CORS: permitir solicitudes 
        this.app.use(cors());
        //lectura y parseo del body (cuerpos json)
        this.app.use(express.json());
        //directorio publico de contenido estatico (html)
        this.app.use(express.static('public'));
    }

    listen() {//inicia el servidor y define el puerto 
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;//exportamos server.js
