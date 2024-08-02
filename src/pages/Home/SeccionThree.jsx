import React from "react";

//import VideoWeb from "../../assets/SectionThree/VideoWeb.mp4";
//import VideoMobile from "../../assets/SectionThree/VideoSemillas.mp4";
import imgThree from "../../assets/SectionThree/imgThree.png";
import imgThree2 from "../../assets/SectionThree/imgThree2.png";
import icon1 from "../../assets/SectionThree/icono1.png";
import icon2 from "../../assets/SectionThree/icono2.jpg";
import ondaFade from "../../assets/SectionTwo/OndaFade.svg";
import ondaBG from "../../assets/SectionTwo/bgOnda.svg";

import Banner01 from "../../assets/SectionThree/Banner01.png";
import Imagen01 from "../../assets/SectionThree/Imagen01.png";
import Imagen02 from "../../assets/SectionThree/Imagen02.png";
import Imagen03 from "../../assets/SectionThree/Imagen03.png";
import Cenefa01 from "../../assets/SectionThree/Cenefa01.svg";
import Cenefa02 from "../../assets/SectionThree/Cenefa02.svg";
import Cenefa03 from "../../assets/SectionThree/Cenefa03.svg";
import CenefaMobile from "../../assets/SectionThree/CenefaMobile.svg";
import Valores01 from "../../assets/SectionThree/Valores01.svg";
import Valores02 from "../../assets/SectionThree/Valores02.svg";
import Valores03 from "../../assets/SectionThree/Valores03.svg";
import Valores04 from "../../assets/SectionThree/Valores04.svg";
import Libro from "../../assets/SectionThree/Libro.png";
import Logo from "../../assets/SectionThree/Logo.svg";
import Campesino from "../../assets/SectionThree/Campesino.png";
import banner from "../../assets/Quienes_Somos/Banner.png";
import banner2 from "../../assets/Quienes_Somos/Banner2.png";
import BottonOn from "../../assets/SectionTwo/BottonOn.svg";
import CatalogoGeneral from "../../assets/Catálogo/CatalogoGeneral.pdf";

export const SeccionThree = () => {
  return (
    <div>
      <div className="  w-full relative ">
        <img className="w-full lg:w-full h-64 lg:h-full" src={Banner01} alt="" />
        <div className="absolute left-5 lg:left-20 -top-8 lg:top-0">
          <h1 className="text-lg  lg:text-3xl mt-12 text-white sm:text-5xl  font-medium  text-center   ">
          Descubre nuestro amplio <br></br>
          catálogo de semillas
          </h1>
          <a href={CatalogoGeneral}>
          <img
            className=" lg:bottom-10 w-36 lg:w-60 mx-auto cursor-pointer "
            src={BottonOn}
            alt="Button On"
          />
          </a>


        </div>
        <img
            className=" lg:bottom-10 w-40 lg:w-96 mx-auto cursor-pointer  absolute right-0 lg:right-20 top-5 lg:top-0"
            src={Libro}
            alt="Button On"
          />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 static z-40 ">
        <div>
          <img
            className="w-full hidden  lg:block lg:w-1/3 lg:ml-32 "
            src={Logo}
            alt=""
          />
        </div>
        <div className="lg:mx-20 mx-5 lg:w-1/2 ">
          <h1 className="text-2xl mb-2 mt-5  lg:mb-5 lg:mt-10 text-green-800 sm:text-7xl  font-bold  text-justify md:text-left ">
            Quienes Somos
          </h1>

      
          <p className="text-base lg:text-xl   lg:w-full text-justify">
            Somos una empresa consolidada en el sector forestal y agrícola,
            destacándonos por nuestro compromiso, nos especializamos en la
            recolección, producción e importación de semillas, garantizando una
            calidad superior y una amplia diversidad para satis- facer las
            necesidades de nuestros clientes.
          </p>

          <h2 className="text-2xl mb-2 mt-5  lg:mb-5 lg:mt-10 text-green-800 sm:text-7xl  font-bold  text-left ">
            Visión
          </h2>
       
          <p className="text-base lg:text-xl    lg:w-full text-justify">
            Mantenernos como una empresa líder y competitiva en el sector
            agroforestal, destacada por nuestra calidad y compromiso, es nues-
            tro objetivo principal.
          </p>
          <h2 className="text-2xl mb-2 mt-5  lg:mb-5 lg:mt-10  text-green-800 sm:text-7xl sm:mt-4  font-bold  text-left ">
            Misión
          </h2>
      
          <p className="text-base lg:text-xl    lg:w-full text-justify">
            Semillas Expoagro SAS es una empresa líder en el sector
            agroforestal, reconocida por sus rigurosos estándares de calidad y
            su competitivi- dad. Nuestro compromiso con el crecimiento del
            sector productivo del campo y la conservación del medio ambiente es
            primordial en todos nuestros procedimientos.
          </p>
        </div>
      </div>

      <div className="  w-full relative mt-32 lg:mt-0 ">
      <img className="mx-auto w-1/2 absolute -top-28 inset-x-0 lg:hidden  " src={Campesino} alt="" />
        <img className="w-full lg:w-full hidden lg:block " src={Cenefa01} alt="" />
        <img className="w-full lg:w-full lg:hidden  " src={CenefaMobile} alt="" />
        <img className="w-10 lg:w-1/3 lg:absolute -top-60 right-20 hidden lg:block  " src={Campesino} alt="" />

        <h2 className="lg:text-7xl  text-white text-lg    font-bold  text-left absolute right-[45%] top-20 lg:top-36 lg:left-20 ">
          Valores
        </h2>
        <div className="flex lg:justify-between  absolute gap-4  lg:inset-x-0  lg:bottom-28 w-full  bottom-8 ">
          <div className="mx-auto   w-fit  ">
            <img className="w-10 lg:w-40 mx-auto" src={Valores01} alt="" />
            <h1 className="text-sm lg:mt-2 text-white sm:text-3xl  font-normal  text-center  ">
              Calidad
            </h1>
          </div>
          <div className="mx-auto w-fit mt-10 lg:mt-20">
            <img className="w-10 lg:w-40 mx-auto" src={Valores02} alt="" />
            <h1 className="text-sm lg:mt-2 text-white sm:text-3xl  font-normal  text-center ">
              Transparencia
            </h1>
          </div>
          <div className="mx-auto   w-fit mt-10 lg:mt-20 ">
            <img className="w-10 lg:w-40 mx-auto" src={Valores03} alt="" />
            <h1 className="text-sm lg:mt-2 text-white sm:text-3xl  font-normal  text-center ">
              Compromiso
            </h1>
          </div>
          <div className="mx-auto   w-fit">
            <img className="w-10 lg:w-40 mx-auto" src={Valores04} alt="" />
            <h1 className="text-sm lg:mt-2 text-white sm:text-3xl  font-normal  text-center ">
              Cumplimiento
            </h1>
          </div>
        </div>
      </div>
      {/* 
      <div className="  w-full relative">
        <img className="w-full lg:w-full" src={Cenefa02} alt="" />
        <h2 className="text-2xl  text-green-800 sm:text-7xl   font-bold  text-left ">
          Protegemos el campo, fuente de vida
        </h2>
      </div>

      <div className="  w-full  ">
        <img className="w-full lg:w-full" src={Cenefa03} alt="" />
      </div>*/}

      <div className="my-5 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 static ">
          <div>
            <center>
              <img
                className="w-full px-5 lg:px-0  lg:w-2/3 my-5"
                src={Imagen03}
                alt=""
              />
            </center>
          </div>
          <div className="mx-auto sm:-mt-20  lg:w-3/4 lg:mt-5 px-5 lg:px-0">
            <h1 className="text-2xl  text-brown-900 sm:text-5xl font-bold  text-left  mb-5">
              Estamos certificados
            </h1>
            <p className="text-base lg:text-lg  lg:w-full text-justify mb-5">
              Semillas ExpoAgro sas. es una empresa certificada por el Instituto
              Colombiano Agropecuario ICA para comercializar, empacar e importar
              semillas de alta calidad con cobertura nacional e internacional.
            </p>
            <h1 className="text-2xl  text-brown-900 sm:text-3xl font-bold  text-left mb-5  ">
              Contamos con Registro como:
            </h1>

            <ul className="font-normal block  ">
              <li>Registro de Importador N° 00026693</li>
              <li>Registro de Comercializador N° CM0056662022</li>
              <li>Registro de Reempaque N° 00000705</li>
              <li>Registro de Productor de semilla seleccionada N° 00006131</li>
            </ul>
          </div>
        </div>

        {/*Fondo Onda fadeada */}
      </div>
    </div>
  );
};
