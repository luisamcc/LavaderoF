console.log("Hola Server, Grupo EGDA");

// const { default: userEvent } = require('@testing-library/user-event');
// crear una const de tipo express que manejar los hilos de nuestro archivo server.js
const express = require('express')
const app = express();
const port = 3001
const mongoose = require('mongoose');
const router = require('./routes/router')
// const { restart } = require('nodemon'); //////////////

// HACEMOS LA CADENA DE CONEXION 
const {stringConn} = require('./db/dbConnection')
mongoose
  .connect(stringConn)
  .then(() => console.log("Conexion a MongoDB exitosa"))
  .catch((err) => console.log(`Error del servidor: ${err}`));

//Creando el parserBody de las peticiones HTTP
app.use(express.urlencoded( {extended: true} ) )
app.use (express.json())

//Importar y enviar la constante router para que app la ejecute
app.use('/api/v1', router); //,

// por medio de la cost app activamos la escucha de nuestro server 
app.listen(port, () => {
    console.log(`Server Port: ${port}`)
}) 


