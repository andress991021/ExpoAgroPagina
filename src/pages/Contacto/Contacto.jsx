import React from "react";
import Fondo from "../../assets/Contacto/Fondo.png";
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
        <div className="w-full lg:w-1/2 md:mt-16 px-2 ">
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
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.55389820843422!2d-74.14710600254372!3d4.618631117092298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1723440117615!5m2!1ses-419!2sco"
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
