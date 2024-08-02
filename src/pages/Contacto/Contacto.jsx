import React from "react";
import Fondo from "../../assets/Contacto/Fondo.png";
import ImagenHombre from "../../assets/Contacto/ImagenHombre.svg";
import ImagenMujer from "../../assets/Contacto/ImagenMujer.svg";
import { Footer, Form } from "../../components";

export const Contacto = () => {
  return (
    <div className="pt-16 lg:pt-0">
      <center>
        <img
          className="w-full hidden justify-center items-center lg:block lg:w-full lg:-mt-8 "
          src={Fondo}
          alt=""
        />
      </center>
      <center>
        <img
          className="lg:w-full justify-center items-center lg:hidden -mt-8 "
          src={Fondo}
          alt=""
        />
      </center>

      <div className="md:flex justify-left md:mx-10  ">
        <div className=" lg:mx-16 sm:w-1/2 px-10">
          <div className="">
            <h1 className="text-3xl  mb-5 my-10 text-center md:text-left text-green-800 sm:text-4xl  font-bold  ">
              Contactanos
            </h1>
            <p className="text-base lg:text-lg">
              Si requiere mayor información de nuestros productos y servicios
              por favor envíe su mensaje
              <br></br> <br></br>
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center md:mx-10  ">
        <div className="w-1/2 md:mt-16  ">
          <Form type="contacto" />
        </div>
      </div>
      <div className="md:flex justify-left md:mx-10  ">
        <div className=" lg:mx-16 sm:w-1/2 px-10">
          <p className="text-base lg:text-lg ">
            <br></br> <br></br>
            <span className="font-bold text-base lg:text-lg">
              Horarios de atención:{" "}
            </span>
            <br></br>
            Lunes a Viernes 8:00 am. – 1:00 pm. y 2:00 pm. – 5:00 pm.
          </p>
          <br></br> <br></br>
        </div>
      </div>
      <div>
        <div className="">
        <div className="w-full ">
  <iframe
    src="https://www.google.com/maps/embed/v1/place?key=TU_CLAVE_DE_API&q=Kennedy,Bogotá,Colombia"
    className="w-full"
    width="600"
    height="300"
    loading="lazy"
  ></iframe>
</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
