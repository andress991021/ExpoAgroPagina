import React from "react";
import Fondo from "../../assets/Contacto/Fondo.png";
import ImagenHombre from "../../assets/Contacto/ImagenHombre.svg";
import ImagenMujer from "../../assets/Contacto/ImagenMujer.svg";
import { Footer, Form } from "../../components";

export const Contacto = () => {
    return (
        <div className="pt-16 lg:pt-0">
            
            <img src={Fondo} alt="" className="h-20 md:h-fit  w-full" />
            <div className="md:flex justify-left
             md:mx-10  ">
                <div className=" lg:mx-16 sm:w-1/2 px-10">
                    <div className="">
                        <h1 className="text-3xl  mb-5 my-10 text-center md:text-left text-green-800 sm:text-4xl  font-bold  ">
                            Contactanos
                        </h1>
                        <p className="text-base lg:text-lg">Si requiere mayor información de nuestros productos y servicios por favor envíe su mensaje
                            <br></br> <br></br>
                            
                        </p>
                    </div>


                </div>


            </div>
            <div className="md:flex justify-center md:mx-10  ">
            <div className="w-1/2 md:mt-16 ">
                    <Form type='contacto'/>
                </div>

            </div>
            <div className="md:flex justify-left md:mx-10  ">
            <div className="">
                        
                        <p className="text-base lg:text-lg">
                            <br></br> <br></br>
                            <span className="font-bold text-base lg:text-lg">Horarios de atención: </span>
                            <br></br>
                            Lunes a Viernes 8:00 am. – 1:00 pm. y 2:00 pm. – 5:00 pm.
                    </p>
                    <br></br> <br></br>
                </div>
                 

            </div>
            <div >
                <div className="">
                    
                
                <div className="  w-full  ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31815.66990576169!2d-74.145054!3d4.601413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f77d36669d7%3A0x311cf1540437869e!2sCl.%2043a%20Sur%20%2372b-15%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1688522314106!5m2!1sen!2sus" className="w-full" width="600" height="450"  loading="lazy"></iframe>
                </div>
                   
                    
            </div>
                 

            </div>
            <Footer />
        </div>
    );
}