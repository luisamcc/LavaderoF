import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link} from "react-router-dom";
import Swal from "sweetalert2";
import { userSignIn } from "../../api/userApi";

const Login = () => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password} = inputs

  const handleInputs = (e) => {
    const { target } = e;
    setInputs({ ...inputs, [target.name]: target.value });
  };

  const handleLogin = async (e) =>{
    e.preventDefault()
    if(!email || !password){
      Swal.fire(
        'Error',
        'Todos los campos son requeridos',
        'error'
      )
    } else {
      const result = await userSignIn( inputs )
      if(result.message) {
        Swal.fire('Error', result.message , 'error')
      } else {
        //obtenemos el token y lo agregamos a una variable de almacenamiento local
        localStorage.setItem('accessToken', result.accessToken)
        Swal.fire('Success', 'Bienvenido' , 'success')
       
        //regresamos al usuario a la pagina index despues de 3 segundos
        setTimeout(() => {
          window.location.href = '/'
        }, 1800);

      }
    }
  }

  return (
    <>
    <div className="card-login">
      <h1>Login</h1>
      <div className="login">
        <center>
        <form action="" onSubmit={ handleLogin }>
        <div className="col-12 md:col-4" style={{ paddingLeft: "20px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText 
            type="email"
            placeholder="Email"
            value={inputs.email}
            onChange={ handleInputs }
            name="email" 
          />
          </div>
          <div className="p-inputgroup" style={{ paddingTop: "20px" }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-sign-in"></i>
            </span>
            <InputText
              type="password"
              placeholder="Password"
              value={inputs.password}
              onChange={ (e) => handleInputs(e) }
              name="password"
            />
          </div>
        </div>
        <div className="col-2 md:col-12" style={{ paddingTop: "20px" }}>
            <Button type="submit" label="Submit" icon="pi pi-check" />
        </div>
        </form>
        <div className="col-6">
            <p>¿Aun no tienes una cuenta? <span><Link to='/registrarse'>Crear nueva cuenta</Link></span></p>
          </div>
        </center>
      </div>
      </div>
      
    </>
  );
};

export default Login;