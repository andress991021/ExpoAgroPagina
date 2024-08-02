import React from "react";
import { Button } from "../Buttons";


export const FormContact = ({Nombre,Email,Telefono,Empresa,Mensaje, setNombre,setEmail,setTelefono,setEmpresa,setMensaje,handleSubmit}) => {
    return (
        <div className="sm:px-16 w-screen md:w-full ">

            <div className="px-8 lg:px-16 w-screen  md:w-full bg-green-800 rounded-xl border">
                <div className="pt-8 lg:pt-8   p-5 rounded-t-3xl">
                
                    <form onSubmit={handleSubmit} className="space-y-2 lg:space-y-7 mt-2">
                        <div>
                            <input type="text" value={Nombre} className="shadow-sm  border border-gray-300  bg-green-800   text-base lg:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-brown-600  dark:placeholder-white  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Nombre*" onChange={(e) => setNombre(e.target.value)}  required/>
                        </div>
                        <div>
                            <input type="email" value={Email} className="block p-3 w-full  text-base lg:text-lg  bg-green-800  rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-brown-600  dark:placeholder-white  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Correo Electronico*" onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div>
                            <input type="number" value={Telefono} className="block p-3 w-full   text-base lg:text-lg  bg-green-800   rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-brown-600  dark:placeholder-white  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Teléfono" onChange={(e) => setTelefono(e.target.value)}/>
                        </div>
                        <div>
                            <input type="text" value={Empresa} className="block p-3 w-full  text-base lg:text-lg  bg-green-800  rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-brown-600  dark:placeholder-white  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Empresa" onChange={(e) => setEmpresa(e.target.value)} />
                        </div>
                        <div className="sm:col-span-2 ">
                            <textarea value={Mensaje} rows="6" className="block p-2.5 w-full  text-base lg:text-lg  bg-green-800   rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-brown-600  dark:placeholder-white  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Message" onChange={(e) => setMensaje(e.target.value)}></textarea>
                        </div>
                    
                    </form>
                </div>
                <br />
                
            </div>
            <div className="text-base lg:text-lg text-center  lg:text-right mt-3" type="submit">
                            <Button type="main" name="CONTACTANOS" /> 
            </div>   
        </div>
    );
}