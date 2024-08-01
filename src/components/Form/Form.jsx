import React from "react";
import { Button } from "../Buttons";


export const Form = ({Nombre,Email,Telefono,Empresa,Mensaje, setNombre,setEmail,setTelefono,setEmpresa,setMensaje,handleSubmit}) => {
    return (
        <div className="w-screen px-4 md:w-1/2 flex ">
            <div className="pt-8 lg:pt-8  bg-brown-800 p-5 rounded-t-3xl">
                <h2 className="mb-4 text-4xl  font-extrabold text-center text-white">Solicite más informacion</h2>
                <p className="mb-4 lg:mb-8 font-light text-center text-white  sm:text-base">Si requiere mayor información de nuestros productos y servicios por favor envíe su mensaje</p>
                <h2 className=" text-lg  font-extrabold text-white text-center ">Horarios de atención:</h2>
                <p className="mb-4 lg:mb-8 font-light text-center text-white  sm:text-base">Lunes a Viernes 8:00 am. – 1:00 pm. y 2:00 pm. – 5:00 pm</p>

                <form onSubmit={handleSubmit} className="space-y-2 lg:space-y-3">
                    <div>
                        <input type="text" value={Nombre} className="shadow-sm  border border-gray-300 text-white  text-base lg:text-lg  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-brown-800  dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Nombre*" onChange={(e) => setNombre(e.target.value)} required/>
                    </div>
                    <div>
                        <input type="email" value={Email} className="block p-3 w-full  text-base lg:text-lg  text-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-brown-800  dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Correo Electronico*" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <input type="text" value={Telefono} className="block p-3 w-full  text-base lg:text-lg  text-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-brown-800  dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Teléfono" onChange={(e) => setTelefono(e.target.value)}/>
                    </div>
                    <div>
                        <input type="text" value={Empresa} className="block p-3 w-full  text-base lg:text-lg  text-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-brown-800  dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Empresa" onChange={(e) => setEmpresa(e.target.value)}/>
                    </div>
                    <div className="sm:col-span-2">
                        <textarea value={Mensaje} rows="6" className="block p-2.5 w-full  text-base lg:text-lg  text-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-brown-800  dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Message" onChange={(e) => setMensaje(e.target.value)}></textarea>
                    </div>
                    <div className="pt-5  text-base lg:text-lg  text-center" type="submit">
                        <Button type="main" name="CONTÁCTANOS" /> 
                    </div>   
                </form>
            </div>
           
        </div>
    );
}