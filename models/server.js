
const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT||3000;
        this.usuariosPath = '/api/usuarios';
        // Middleware
        this.middlewares();

        // Rutas de la aplicación
        this.routes();
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routers/usuarios'))
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //lectura y parseo del body recibe lo que se envia
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;
