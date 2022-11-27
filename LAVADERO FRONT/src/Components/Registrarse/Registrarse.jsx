import React, { useRef } from "react";
import { useState } from "react";
import { userSignUp } from "../../api/userApi";
import InputRegister from "./InputRegister";
import {Toast} from "primereact/toast"
import { showToast } from "../../utils";

const Registrarse = () => {
  //constante toast
  const toast = useRef(null);

  //Un usesState con las propiedades de los name de los input
  const[ inputs, setInputs ] = useState({
    firstname: "",
    lastname:"",
    email:"",
    password:"",
  } );

const {firstname, lastname, email, password} = inputs

// funcion manejadora de los inputs de los inputs
const handleInputsForm = (e) => {
  setInputs({...inputs, [e.target.name]: e.target.value});
  console.log(inputs);
}
  // Inicio del manejo del handleDateRegister (Formulario de Registro)
  const handleOnSubmit = async ( e ) => {
    e.preventDefault();
  
    //envio de datos hacia el server 
    if (!firstname || !lastname || !email || !password) {
      alert('Todos los campos son requeridos')
    }else{
    const result = await userSignUp(inputs)
    if(result.status){
      showToast('success', 'Success', result.message, toast)
      // Limpiando el formulario
      setInputs({
        firstname:'',
        lastname:"",
        email:"",
        password:""
      })
      setTimeout(() => {
        window.location.href = '/'        
      }, 3500);
    }else{
      showToast('warn', 'Warn', result.message, toast)
    }
    }

      
  };
  return (
    <>
      <Toast ref={toast} />
      <div className="card card-register">
        <h2>Registrate en EGDA Solutions</h2>

        {/* Inicio del formulario de Registro */}
        <form action="" onSubmit={ handleOnSubmit}>
          <InputRegister title='First Name' type= 'text' name= 'firstname' value={inputs.firstname} handle= {handleInputsForm}/>
          <InputRegister title='Last Name' type= 'text' name= 'lastname' value={inputs.lastname} handle= {handleInputsForm}/>
          <InputRegister title='Email' type='email' name='email' value={inputs.email} handle= {handleInputsForm}/>
          <InputRegister title='Password' type='password' name='password' value={inputs.password} handle= {handleInputsForm}/>              
          <button type='submit' className="btn btn-primary" >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Registrarse;