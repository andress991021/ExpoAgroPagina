import React, { useState } from "react";
import { Form } from "./Form";
import { FormContact } from "./FormContact";
import { SendForm } from "../../Apis/SendForm";



export const  FormLoad = ({type}) => {

    const [Nombre, setNombre] = useState('');
    const [Email, setEmail] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Empresa, setEmpresa] = useState('');
    const [Mensaje, setMensaje] = useState('');


    const handleSubmit = (e) => {
        //e.preventDefault();
    
        // Aquí puedes realizar la lógica para almacenar los datos donde prefieras, como enviarlos a un servidor backend o guardarlos en el almacenamiento local del navegador.
    
        console.log('Formulario Enviado Correctamente');

        SendForm(Nombre,Email,Telefono,Empresa,Mensaje);
 
      };
    
    if(type==='general') return(
        <Form
            Nombre={Nombre} Email={Email} Telefono={Telefono} Empresa={Empresa} Mensaje={Mensaje}
            setNombre={setNombre} setEmail={setEmail} setTelefono={setTelefono} setEmpresa={setEmpresa} setMensaje={setMensaje}
            handleSubmit={handleSubmit} 
         />
    );

    if(type==='contacto') return(
        <FormContact
            Nombre={Nombre} Email={Email} Telefono={Telefono} Empresa={Empresa} Mensaje={Mensaje} 
            setNombre={setNombre} setEmail={setEmail} setTelefono={setTelefono} setEmpresa={setEmpresa} setMensaje={setMensaje}
            handleSubmit={handleSubmit} 
        />
    );
}