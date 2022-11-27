console.log("Hola Server, Grupo EGDA");

const { default: userEvent } = require('@testing-library/user-event');
// crear una const de tipo express que manejar los hilos de nuestro archivo server.js
const express = require('express')
const app = express();
const port = 3001
const mongoose = require('mongoose');
const { restart } = require('nodemon'); //////////////

// HACEMOS LA CADENA DE CONEXION 
const {stringConn} = require('./db/dbConnection')
mongoose.connect(stringConn);

//Creando el parserBody de las peticiones HTTP
app.use(express.urlencoded( {extended: true} ) )
app.use (express.json())

//Creacion del objeto de ruta para los End Points
// HACE EL LLAMADO DEL FRONT A TAVEZ DE LAS APIS

const router = express.Router();

//ruta de prueba
router.get("/", (req , res) =>{
    res.send({msg: '<h1>Hello World!!! mY FIRST API REST</h1>' })
})
 

//Enviar la constante router para que app la ejecute
app.use('/api/v1',router); //,

//importando el modelo de usuario
const User = require('./models/UserModel')

//Operaciones CRUD
//Crear usuario - Create - create EndPoint - C
router.post('/createUser', (req , res) => {
    //desestructuramos el Body
    const { body } = req //es una forma

    const newUser = new User({
        firstname: body.firstname,
        lastname:  body.lastname,
        // en el email vamos a hacer una validación 
        email:     body.email.toLowerCase(),
        password:  body.password

    })
    User.findOne({ email: newUser.email}, (err, userFinded) =>{
        if (userFinded) {
            res.send({ message: 'El usuario ya existe '})
        }else{
                //4. guardar el usuario creado, con parametro tipo callback
            newUser.save((err, userStore )=>{
            if (userStore) {
                res.send ({
                    message: 'Usuario Creado con exito',
                } )
                }
                if (err) {
                res.send({message: 'Error del Servidor'})
            } 
        }) 
        }
        if (err) {
                res.send({message: 'Error del servidor'})
            }
    })
})

//Leer Usuario - Read -R
router.get('/getAllUsers', (req, res)=>{
    User.find({}, function (err, userDocs){
        if(err){
            res.status(500).send({message: 'Error del servidor: ' + err})
        }else if(!userDocs){
            res.status(404).send({message: 'Colección sin documentos'})
        }else{
            res.status(200).send({userDocs})
        }
    });
})
//Editar Usuario - Update - U
router.put('/updateUser/:id', (req, res) =>{
    const idToUpdate = req.params.id;
    const {body} = req
    const userToUpdate = {
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email.toLowerCase(),
        password: body.password
    }

    User.findOne({email: userToUpdate.email}, (err, emailDinded) =>{
        if(err){
            res.send({message: 'Error del servidor: ' + err})
        }else if(emailFinded){
            res.send({message: 'Email ya se encuentra en uso'})
        }else{
            User.findByIdAndUpdate(idToUpdate, userToUpdate, (err, userUpdated) => {
                if(userUpdated){
                    res.status(500).send({message: `Error del servidor ${err}`})
                }else if(!userUpdated){
                    res.send({message: 'Usuario no encontrado'})
                }else{
                    res.status(500).send({message: `Error del servidor: ${err}`})
                }
            })
        }
    })
})

//Eliminar Usuario - Delete - D
router.delete('/delete-user/:id', (req, res) => {
    const idToDelete = req.params.id;
    User.findByIdAndRemove({_id: idToDelete}, (err, userDeleted) => {
        if(err){
            res.send({message: 'Error del servidor: ' + err})
        }else if(userDeleted){
            res.send({message: 'Usuario eliminado con exito'})
        }else{
            res.send({message: 'Usuario no encontrado'})
        }
    })
})
//const router
app.use('/api/v1', router);
// por medio de la cost app activamos la escucha de nuestro server 
//Por medio de la const app activamos la escucha par
app.listen(port, () => {
    console.log(`Server Port: ${port}`)
}) 


