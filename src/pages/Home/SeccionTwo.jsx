import React from "react";


import Cenefa01 from "../../assets/SectionTwo/Cenefa01.svg";
import Icon01 from "../../assets/SectionTwo/Icon01.svg";
import Icon02 from "../../assets/SectionTwo/Icon02.svg";
import Icon03 from "../../assets/SectionTwo/Icon03.svg";
import Icon04 from "../../assets/SectionTwo/Icon04.svg";
import Banner01 from "../../assets/SectionTwo/Banner01.jpg";
import Banner02 from "../../assets/SectionTwo/Banner02.jpg";
import Banner03 from "../../assets/SectionTwo/Banner03.jpg";
import Banner04 from "../../assets/SectionTwo/Banner04.jpg";
import Banner05 from "../../assets/SectionTwo/Banner05.jpg";
import Banner06 from "../../assets/SectionTwo/Banner06.jpg";
import BottonOn from "../../assets/SectionTwo/BottonOn.svg";
import BottonOff from "../../assets/SectionTwo/BottonOff.svg";
import Catalogo01 from "../../assets/Catálogo/Catalogo01.pdf";
import Catalogo02 from "../../assets/Catálogo/Catalogo02.pdf";
import Catalogo03 from "../../assets/Catálogo/Catalogo03.pdf";
import Catalogo04 from "../../assets/Catálogo/Catalogo04.pdf";
import Catalogo05 from "../../assets/Catálogo/Catalogo05.pdf";
import Catalogo06 from "../../assets/Catálogo/Catalogo06.pdf";

export const SeccionTwo = () => {
  return (
    <div>
      {/*Fondo Onda fadeada */}
      <div className="  w-full ">
        <img className="w-full lg:w-full" src={Cenefa01} alt="" />
      </div>

      <div className="lg:flex lg:justify-between lg:-mt-28 grid grid-cols-2 gap-4">
        <div className="mx-auto   w-fit">
          <img className="w-20 lg:w-52 mx-auto" src={Icon01} alt="" />
          <h1 className="text-xl lg:mt-2 text-brown-900 sm:text-3xl  font-normal  text-center  ">
            Envíos a nivel <br></br> nacional
          </h1>
        </div>
        <div className="mx-auto   w-fit">
          <img className="w-20 lg:w-52 mx-auto" src={Icon02} alt="" />
          <h1 className="text-xl lg:mt-2 text-brown-900 sm:text-3xl  font-normal  text-center ">
            100% Semillas <br></br>
            de Calidad
          </h1>
        </div>
        <div className="mx-auto   w-fit ">
          <img className="w-20 lg:w-52 mx-auto" src={Icon03} alt="" />
          <h1 className="text-xl lg:mt-2 text-brown-900 sm:text-3xl  font-normal  text-center ">
            Protegemos <br></br>
            el campo
          </h1>
        </div>
        <div className="mx-auto   w-fit">
          <img className="w-20 lg:w-52 mx-auto" src={Icon04} alt="" />
          <h1 className="text-xl lg:mt-2 text-brown-900 sm:text-3xl  font-normal  text-center ">
            Garantía de <br></br>
            nuestros productos
          </h1>
        </div>
      </div>

      <h1 className="text-3xl mt-12 text-brown-900 sm:text-5xl  font-medium  text-center ">
      Conozca nuestra amplia
      variedad de semillas
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3  mt-10">
        <div className="w-full relative opacity-40 hover:opacity-100  group ">
          <img className=" mx-auto" src={Banner01} alt="" />
          
          <div className="absolute inset-x-4 top-0 m-10 ">
            <h1 className="text-xl lg:text-5xl text-white sm:text-4xl  font-light  text-left  ">
              Semillas
            </h1>
            <h1 className="text-xl lg:text-5xl text-white sm:text-5xl  font-medium  text-left  ">
              Forestales
            </h1>
          </div>
          
          <a href={Catalogo01}>
          <img
            className="absolute inset-x-0 bottom-5 lg:bottom-10 w-36 lg:w-60 mx-auto cursor-pointer group-hover:hidden"
            src={BottonOff}
            alt="Button Off"
          />
          <img
            className="absolute inset-x-0 bottom-5 lg:bottom-10 w-36 lg:w-60 mx-auto cursor-pointer hidden group-hover:block"
            src={BottonOn}
            alt="Button On"
          />
          </a>
        </div>

        <div className="w-full relative opacity-40 hover:opacity-100  group ">
          <img className=" mx-auto" src={Banner02} alt="" />
          <div className="absolute inset-x-4 top-0 m-10 ">
            <h1 className="text-xl lg:text-5xl text-white sm:text-4xl  font-light  text-left  ">
              Semillas
            </h1>
            <h1 className="text-xl lg:text-5xl text-white sm:text-5xl  font-medium  text-left  ">
              Hortalizas
            </h1>
          </div>

          <a href={Catalogo02}>
          <img
            className="absolute inset-x-0 bottom-5 lg:bottom-10 w-36 lg:w-60 mx-auto cursor-pointer group-hover:hidden"
            src={BottonOff}
            alt="Button Off"
          />
          <img
            className="absolute inset-x-0 bottom-5 lg:bottom-10 w-36 lg:w-60 mx-auto cursor-pointer hidden group-hover:block"
            src={BottonOn}
            alt="Button On"
          />
          </a>
        </div>

        <div className="w-full relative opacity-40 hover:opacity-100  group ">
          <img className=" mx-auto" src={Banner03} alt="" />
          <div className="absolute inset-x-4 top-0 m-10 ">
            <h1 className="text-xl lg:text-5xl text-white sm:text-4xl  font-light  text-left  ">
              Semillas
            </h1>
            <h1 className="text-xl lg:text-5xl text-white sm:text-5xl  font-medium  text-left  ">
              Agrícolas
            </h1>
          </div>

          <a href={Catalogo03}>
          <img
            className="absolute inset-x-0 bottom-5 lg:bottom-10 w-36 lg:w-60 mx-auto cursor-pointer group-hover:hidden"
            src={BottonOff}
            alt="Button Off"
          />
          <img
            className="absolute inset-x-0 bottom-5 lg:bottom-10 w-36 lg:w-60 mx-auto cursor-pointer hidden group-hover:block"
            src={BottonOn}
            alt="Button On"
          />
          </a>
        </div>

        <div className="w-full relative opacity-40 hover:opacity-100  group ">
          <img className=" mx-auto" src={Banner04} alt="" />
          <div className="absolute inset-x-4 top-0 m-10 ">
            <h1 className="text-xl lg:text-5xl text-white sm:text-4xl  font-light  text-left  ">
              Semillas
            </h1>
            <h1 className="text-xl lg:text-5xl text-white sm:text-5xl  font-medium  text-left  ">
              Frutales
            </h1>
          </div>

          <a href={Catalogo04}>
          <img
            className="absolute inset-x-0 bottom-5 lg:bottom-10 w-36 lg:w-60 mx-auto cursor-pointer group-hover:hidden"
            src={BottonOff}
            alt="Button Off"
          />
          <img
            className="absolute inset-x-0 bottom-5 lg:bottom-10 w-36 lg:w-60 mx-auto cursor-pointer hidden group-hover:block"
            src={BottonOn}
            alt="Button On"
          />
          </a>
        </div>

        <div className="w-full relative opacity-40 hover:opacity-100  group ">
          <img className=" mx-auto" src={Banner05} alt="" />
          <div className="absolute inset-x-4 top-0 m-10 ">
            <h1 className="text-xl lg:text-5xl text-white sm:text-4xl  font-light  text-left  ">
              Semillas
            </h1>
            <h1 className="text-xl lg:text-5xl text-white sm:text-5xl  font-medium  text-left  ">
              Aromáticas
            </h1>
          </div>

          <a href={Catalogo05}>
          <img
            className="absolute inset-x-0 bottom-5 lg:bottom-10 w-36 lg:w-60 mx-auto cursor-pointer group-hover:hidden"
            src={BottonOff}
            alt="Button Off"
          />
          <img
            className="absolute inset-x-0 bottom-5 lg:bottom-10 w-36 lg:w-60 mx-auto cursor-pointer hidden group-hover:block"
            src={BottonOn}
            alt="Button On"
          />
          </a>
        </div>

        <div className="w-full relative opacity-40 hover:opacity-100  group ">
          <img className=" mx-auto" src={Banner06} alt="" />
          <div className="absolute inset-x-4 top-0 m-10 ">
            <h1 className="text-xl lg:text-5xl text-white sm:text-4xl  font-light  text-left  ">
              Semillas
            </h1>
            <h1 className="text-xl lg:text-5xl text-white sm:text-5xl  font-medium  text-left  ">
              Pastos y <br></br> leguminosas
            </h1>
          </div>

          <a href={Catalogo06}>
          <img
            className="absolute inset-x-0 bottom-5 lg:bottom-10 w-36 lg:w-60 mx-auto cursor-pointer group-hover:hidden"
            src={BottonOff}
            alt="Button Off"
          />
          <img
            className="absolute inset-x-0 bottom-5 lg:bottom-10 w-36 lg:w-60 mx-auto cursor-pointer hidden group-hover:block"
            src={BottonOn}
            alt="Button On"
          />
          </a>
        </div>
      </div>
    </div>
  );
};
