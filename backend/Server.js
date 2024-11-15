
const express = require('express');


/* Servidor en el puerto 3000*/


const app = express();


app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})