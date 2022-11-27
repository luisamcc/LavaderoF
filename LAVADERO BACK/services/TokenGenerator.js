const jwt = require('jsonwebtoken')
const privateKey = 'Lavadero'

//funcion para generar el token y retornarlo
jwt.createAccessToken = ( user ) => {
    const { _id, firstname, lastname, email } = user
    //objeto que se va a envolver con el token
    const payload = {
        id: _id,
        firstname: firstname,
        lastname: lastname,
        email: email
    }
    
    return jwt.sign( payload , privateKey , { expiresIn: '7d' } );
}

module.exports = jwt