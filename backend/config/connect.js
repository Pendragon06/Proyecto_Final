const mongoose = require('mongoose');

/*Conexion a la base de datos, y try catch para atrapar errores */
mongoose.connect('mongodb://127.0.0.1:27017' )
.then(
    () => {
        console.log('Conectado a la base de datos');
    }
)

.catch(
    (error) => {
        console.error('Hay un error de conexion:', error);
    }
);

module.exports = mongoose;