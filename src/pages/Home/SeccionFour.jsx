import React from "react";
import { Footer, Form } from "../../components";
import Cenefa02 from "../../assets/SectionThree/Cenefa02.svg";



export const SeccionFour = ({}) => {
  return (
    <div className="relative bg-brown-600 pt-10 ">
      <div className="">

      <img className="absolute w-full top-0 hidden " src={Cenefa02} alt="" />
      <div className="md:flex md:justify-end lg:pr-48 ">
     
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.55389820843422!2d-74.14710600254372!3d4.618631117092298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1723440117615!5m2!1ses-419!2sco"
              className="w-full"
              width="600"
              height="300"
              loading="lay"
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
      </div>
      <Footer />
    </div>
  );
};
