const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('Base de datos OnLine');
    } catch (error) {
        console.error('Error al iniciar la Base de datos', error);
        throw new Error('Error al iniciar la Base de datos');
    }
};

module.exports = {
    dbConnection
};
