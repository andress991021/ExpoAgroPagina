import React from "react";
import Fondo from "../../assets/Contacto/Fondo.png";
import ImagenHombre from "../../assets/Contacto/ImagenHombre.svg";
import ImagenMujer from "../../assets/Contacto/ImagenMujer.svg";
import { Footer, Form } from "../../components";

export const Contacto = () => {
    return (
        <div className="pt-16 lg:pt-0">
            <img src={Fondo} alt="" className="h-20 md:h-fit  w-full" />
            <div className="md:flex justify-center md:mx-10  ">
                <div className=" lg:mx-16 sm:w-1/2 px-10">
                    <div className="">
                        <h1 className="text-3xl  mb-5 my-10 text-center md:text-left text-brown-900 sm:text-4xl  font-bold  ">
                            Solicite más información
                        </h1>
                        <p className="text-base lg:text-lg">Si requiere mayor información de nuestros productos y servicios por favor envíe su mensaje
                            <br></br> <br></br>
                            <span className="font-bold text-base lg:text-lg">Horarios de atención: </span>
                            <br></br>
                            Lunes a Viernes 8:00 am. – 1:00 pm. y 2:00 pm. – 5:00 pm.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 space-y-1 md:space-y-8 pb-10  ">
                        <div className="sm:flex items-center text-center md:text-left mx-auto">
                            <img src={ImagenMujer} alt="" className="w-1/2 sm:w-1/3 mx-auto sm:mx-0" />
                            <div className=" ml-2 lg:ml-5 text-base lg:text-lg" >
                                <h1>LINA MARÍA BURGOS</h1>
                                <h1>Cel.: 321 300 1976</h1>
                                <h1>gerencia@semillasrbc.com</h1>
                            </div>
                        </div>
                        <br></br>
                        <div className="sm:flex items-center text-center md:text-left mx-auto">
                            <img src={ImagenHombre} alt="" className="w-1/2 sm:w-1/3  mx-auto sm:mx-0" />
                            <div className=" ml-2 lg:ml-5 text-base lg:text-lg">
                            <h1>EDWARD BURGOS</h1>
                                <h1>Cel.: 314 294 2315</h1>
                                <h1>logistica@semillasrbc.com</h1>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-1/2 md:mt-16 ">
                    <Form type='contacto'/>
                </div>


            </div>
            <Footer />
        </div>
    );
}