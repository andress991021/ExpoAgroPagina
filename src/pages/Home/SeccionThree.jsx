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
import banner from "../../assets/Quienes_Somos/Banner.png";
import banner2 from "../../assets/Quienes_Somos/Banner2.png";

export const SeccionThree = () => {
  return (
    <div>
      <div className="  w-full ">
        <img className="w-full lg:w-full" src={Banner01} alt="" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 static z-40">
        <center>
          <img
            className="w-full hidden justify-center items-center lg:block lg:w-full lg:-mt-8 "
            src=""
            alt=""
          />
        </center>
        <div className="mx-20  lg:w-3/4">
          <h1 className="text-xl m-10 text-green-800 sm:text-7xl  font-bold  text-center md:text-left ">
            Quienes Somos
          </h1>

          <br />
          <p className="text-base lg:text-3xl  m-10 -mt-10 lg:w-full text-justify">
            Somos una empresa consolidada en el sector forestal y agrícola,
            destacándonos por nuestro compromiso, nos especializamos en la
            recolección, producción e importación de semillas, garantizando una
            calidad superior y una amplia diversidad para satis- facer las
            necesidades de nuestros clientes.
          </p>

          <h2 className="text-2xl m-10 text-green-800 sm:text-7xl  font-bold  text-left ">
            Visión
          </h2>
          <br />
          <p className="text-base lg:text-3xl   m-10 -mt-10 lg:w-full text-justify">
            Mantenernos como una empresa líder y competitiva en el sector
            agroforestal, destacada por nuestra calidad y compromiso, es nues-
            tro objetivo principal.
          </p>
          <h2 className="text-2xl m-10 -mt-4 text-green-800 sm:text-7xl sm:mt-4  font-bold  text-left ">
            Misión
          </h2>
          <br />
          <p className="text-base lg:text-3xl   m-10 -mt-10 lg:w-full text-justify">
            Semillas Expoagro SAS es una empresa líder en el sector
            agroforestal, reconocida por sus rigurosos estándares de calidad y
            su competitivi- dad. Nuestro compromiso con el crecimiento del
            sector productivo del campo y la conservación del medio ambiente es
            primordial en todos nuestros procedimientos.
          </p>
        </div>
      </div>

      <div className="  w-full ">
        <img className="w-full lg:w-full" src={Cenefa01} alt="" />
      </div>

      <div className="  w-full ">
        <img className="w-full lg:w-full" src={Cenefa02} alt="" />
      </div>

      <div className="  w-full ">
        <img className="w-full lg:w-full" src={Cenefa03} alt="" />
      </div>

      <div className="my-5">

        <div className="grid grid-cols-1 lg:grid-cols-2 static ">
          <div>
            <center>
              <img className="w-full sm:w-3/4 lg:w-2/3 -mt-16" src={Imagen03} alt="" />
            </center>
          </div>
          <div className="mx-auto sm:-mt-20  lg:w-3/4 lg:mt-5">
            <h1 className="text-3xl  text-brown-900 sm:text-5xl font-bold  text-left  mb-5">
              Estamos certificados
            </h1>
            <p className="text-base lg:text-lg  lg:w-full text-justify mb-5">
              Semillas ExpoAgro sas. es una empresa certificada por el Instituto
              Colombiano Agropecuario ICA para comercializar, empacar e importar
              semillas de alta calidad con cobertura nacional e internacional.
            </p>
            <h1 className="text-xl  text-brown-900 sm:text-3xl font-bold  text-left mb-5 ">
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
