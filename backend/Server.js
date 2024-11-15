
const express = require('express');

require('./config/connect');

/* Servidor en el puerto 3000*/


const app = express();


app.listen(3000, ()=> {
    console.log('Servidor esta en el puerto 3000 ejecutando');
})