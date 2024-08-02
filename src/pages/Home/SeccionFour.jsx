import React from "react";
import { Footer, Form } from "../../components";

export const SeccionFour = ({}) => {
  return (
    <div className="relative bg-brown-600 pt-10 ">
      <div className="md:flex md:justify-end lg:mr-48 ">
        <div className="lg:w-1/2 lg:m-20 lg:mb-5 ">
          <h2 className="mb-4 text-4xl  font-medium  text-green-800 px-5 lg:px-0">
            Contáctanos
          </h2>
          <p className="mb-4 lg:mb-6 font-light  text-white  sm:text-lg px-5 lg:px-0">
            Si requiere mayor información de nuestros productos y servicios por
            favor envíe su mensaje
          </p>
          <h2 className="mt-7 text-lg  font-medium text-green-800 lg:hidden px-5 lg:px-0 ">
            Horarios de atención:
          </h2>
          <p className="mb-4 lg:mb-8 font-light text-white  sm:text-lg lg:hidden px-5 lg:px-0">
            Lunes a Viernes 8:00 am. – 1:00 pm. y 2:00 pm. – 5:00 pm
          </p>
          <div className="w-full order-2 mb-10 lg:mb-0">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=TU_CLAVE_DE_API&q=Kennedy,Bogotá,Colombia"
              className="w-full"
              width="600"
              height="300"
              loading="lazy"
            ></iframe>
          </div>

          <h2 className="mt-7 text-lg  font-medium text-green-800 hidden lg:static  ">
            Horarios de atención:
          </h2>
          <p className="mb-4 lg:mb-8 font-light text-white  sm:text-lg hidden lg:static ">
            Lunes a Viernes 8:00 am. – 1:00 pm. y 2:00 pm. – 5:00 pm
          </p>
        </div>

        <Form type="general" />
      </div>
      <Footer />
    </div>
  );
};
