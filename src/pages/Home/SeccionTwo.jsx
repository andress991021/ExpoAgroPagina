import React from "react";
import imgQuality from "../../assets/SectionTwo/QualityImage.png";
import imgQuality2 from "../../assets/SectionTwo/QualityImage2.png";
import icon1 from "../../assets/SectionTwo/img01.svg";
import icon2 from "../../assets/SectionTwo/img02.svg";
import icon3 from "../../assets/SectionTwo/img03.svg";
import icon4 from "../../assets/SectionTwo/img04.svg";
import ondaBG from "../../assets/SectionTwo/bgOnda.svg";
import ondaFade from "../../assets/SectionTwo/OndaFade.svg";
import TimelineWeb from "../../assets/SectionTwo/TimelineWeb.svg";
import TimelineMobile from "../../assets/SectionTwo/TimelineMobile.svg";
import CenefaOne from "../../assets/SectionTwo/bgOnda.svg";

import Cenefa01 from "../../assets/SectionTwo/Cenefa01.svg";
import Icon01 from "../../assets/SectionTwo/Icon01.svg";
import Icon02 from "../../assets/SectionTwo/Icon02.svg";
import Icon03 from "../../assets/SectionTwo/Icon03.svg";
import Icon04 from "../../assets/SectionTwo/Icon04.svg";
import Banner01 from "../../assets/SectionTwo/Banner01.jpg";
import Banner02 from "../../assets/SectionTwo/Banner02.jpg";
import Banner03 from "../../assets/SectionTwo/Banner03.jpg";
import Banner04 from "../../assets/SectionTwo/Banner04.jpg";
import BottonOn from "../../assets/SectionTwo/BottonOn.svg";
import BottonOff from "../../assets/SectionTwo/BottonOff.svg";

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
        La calidad de la vida está en la calidad de la semilla.
      </h1>

      <div className="grid grid-cols-3  mt-10">
        <div className="w-full relative opacity-40 hover:opacity-100  group ">
          <img className=" mx-auto" src={Banner01} alt="" />
          <div className="absolute inset-x-4 top-0 m-10 ">
            <h1 className="text-3xl text-white sm:text-4xl  font-light  text-left  ">
              Semillas
            </h1>
            <h1 className="text-3xl text-white sm:text-5xl  font-medium  text-left  ">
              Forestales
            </h1>
          </div>

          <img
            className="absolute inset-x-0 bottom-10 w-20 lg:w-60 mx-auto cursor-pointer group-hover:hidden"
            src={BottonOff}
            alt="Button Off"
          />
          <img
            className="absolute inset-x-0 bottom-10 w-20 lg:w-60 mx-auto cursor-pointer hidden group-hover:block"
            src={BottonOn}
            alt="Button On"
          />
        </div>
        

        <div className="w-full relative opacity-40 hover:opacity-100  group ">
          <img className=" mx-auto" src={Banner01} alt="" />
          <div className="absolute inset-x-4 top-0 m-10 ">
            <h1 className="text-3xl text-white sm:text-4xl  font-light  text-left  ">
              Semillas
            </h1>
            <h1 className="text-3xl text-white sm:text-5xl  font-medium  text-left  ">
            Hortalizas
            </h1>
          </div>

          <img
            className="absolute inset-x-0 bottom-10 w-20 lg:w-60 mx-auto cursor-pointer group-hover:hidden"
            src={BottonOff}
            alt="Button Off"
          />
          <img
            className="absolute inset-x-0 bottom-10 w-20 lg:w-60 mx-auto cursor-pointer hidden group-hover:block"
            src={BottonOn}
            alt="Button On"
          />
        </div>


        <div className="w-full relative opacity-40 hover:opacity-100  group ">
          <img className=" mx-auto" src={Banner01} alt="" />
          <div className="absolute inset-x-4 top-0 m-10 ">
            <h1 className="text-3xl text-white sm:text-4xl  font-light  text-left  ">
              Semillas
            </h1>
            <h1 className="text-3xl text-white sm:text-5xl  font-medium  text-left  ">
            Agrícolas
            </h1>
          </div>

          <img
            className="absolute inset-x-0 bottom-10 w-20 lg:w-60 mx-auto cursor-pointer group-hover:hidden"
            src={BottonOff}
            alt="Button Off"
          />
          <img
            className="absolute inset-x-0 bottom-10 w-20 lg:w-60 mx-auto cursor-pointer hidden group-hover:block"
            src={BottonOn}
            alt="Button On"
          />
        </div>


        <div className="w-full relative opacity-40 hover:opacity-100  group ">
          <img className=" mx-auto" src={Banner01} alt="" />
          <div className="absolute inset-x-4 top-0 m-10 ">
            <h1 className="text-3xl text-white sm:text-4xl  font-light  text-left  ">
              Semillas
            </h1>
            <h1 className="text-3xl text-white sm:text-5xl  font-medium  text-left  ">
              Frutales
            </h1>
          </div>

          <img
            className="absolute inset-x-0 bottom-10 w-20 lg:w-60 mx-auto cursor-pointer group-hover:hidden"
            src={BottonOff}
            alt="Button Off"
          />
          <img
            className="absolute inset-x-0 bottom-10 w-20 lg:w-60 mx-auto cursor-pointer hidden group-hover:block"
            src={BottonOn}
            alt="Button On"
          />
        </div>


        <div className="w-full relative opacity-40 hover:opacity-100  group ">
          <img className=" mx-auto" src={Banner01} alt="" />
          <div className="absolute inset-x-4 top-0 m-10 ">
            <h1 className="text-3xl text-white sm:text-4xl  font-light  text-left  ">
              Semillas
            </h1>
            <h1 className="text-3xl text-white sm:text-5xl  font-medium  text-left  ">
              Aromáticas
            </h1>
          </div>

          <img
            className="absolute inset-x-0 bottom-10 w-20 lg:w-60 mx-auto cursor-pointer group-hover:hidden"
            src={BottonOff}
            alt="Button Off"
          />
          <img
            className="absolute inset-x-0 bottom-10 w-20 lg:w-60 mx-auto cursor-pointer hidden group-hover:block"
            src={BottonOn}
            alt="Button On"
          />
        </div>


        <div className="w-full relative opacity-40 hover:opacity-100  group ">
          <img className=" mx-auto" src={Banner01} alt="" />
          <div className="absolute inset-x-4 top-0 m-10 ">
            <h1 className="text-3xl text-white sm:text-4xl  font-light  text-left  ">
              Semillas
            </h1>
            <h1 className="text-3xl text-white sm:text-5xl  font-medium  text-left  ">
              Pastos y <br></br> leguminosas
            </h1>
          </div>

          <img
            className="absolute inset-x-0 bottom-10 w-20 lg:w-60 mx-auto cursor-pointer group-hover:hidden"
            src={BottonOff}
            alt="Button Off"
          />
          <img
            className="absolute inset-x-0 bottom-10 w-20 lg:w-60 mx-auto cursor-pointer hidden group-hover:block"
            src={BottonOn}
            alt="Button On"
          />
        </div>


      </div>

      <div className="mt-8 font-Roboto">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 static z-40">
            <div>
              <center>
                <img
                  className="w-full sm:w-3/4 lg:w-3/4"
                  src={imgQuality}
                  alt=""
                />
              </center>
            </div>
            <div className="mx-auto  lg:w-3/4">
              <h1 className="text-3xl m-10 text-brown-900 sm:text-5xl  font-bold  text-left ">
                La calidad de la vida está en la calidad de la semilla.
              </h1>
              <p className="text-base lg:text-lg m-10 lg:w-full text-justify">
                Semillas RBC trae para ti productos de la más alta calidad
                cumpliendo con los estándares establecidos y de esta forma
                garantizando un servicio óptimo, para que tus productos sean
                entregados en los tiempos dispuestos y así podamos ser parte de
                tus metas y proyectos a lograr. Por eso hemos dispuesto para ti
                el siguiente portafolio de productos.
              </p>
            </div>
          </div>
          {/*Fondo Onda fadeada */}
          <div className=" hidden w-full relative -z-20 lg:block">
            <img
              className="w-full lg:w-full absolute -top-[32rem] lg:-top-[32rem]"
              src={ondaFade}
              alt=""
            />
          </div>
        </div>

        <div className="block w-full lg:hidden  -z-20 ">
          <img className="w-full lg:w-full " src={ondaFade} alt="" />
        </div>

        <div className="grid grid-cols-2 -mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:mt-48">
          <div className="mx-auto mt-12">
            <img className="w-52 lg:w-80" src={icon1} alt="" />
          </div>

          <div className="mx-auto mt-12">
            <img className="w-52 lg:w-80" src={icon2} alt="" />
          </div>

          <div className="mx-auto mt-12">
            <img className="w-52 lg:w-80" src={icon3} alt="" />
          </div>

          <div className="mx-auto mt-12">
            <img className="w-52 lg:w-80" src={icon4} alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 static z-40">
          <div className="mx-auto lg:w-3/4 sm:m-10 ">
            <h1 className="text-3xl m-10 text-brown-900 sm:text-5xl font-bold   text-left ">
              Quienes somos
            </h1>
            <p className="text-base lg:text-lg m-10 lg:w-full text-justify">
              Semillas RBC S.A.S con 30 años de experiencia en la recolección y
              selección de semillas nativas para la reforestación ambiental,
              comercial en Maderables y Frutales, desarrollamos el manejo de
              nuevas alternativas que hagan más fácil y efectiva la adquisición
              de productos de excelente calidad.
            </p>
          </div>

          <div className="justify-center items-center">
            <center id="seccionnuestrahistoriamobile">
              <img
                className="w-full -mt-16 justify-center items-center sm:-mt-28 sm:w-3/4 lg:w-3/4 lg:mt-16 "
                src={imgQuality2}
                alt=""
              />
            </center>
          </div>
        </div>

        <div id="seccionnuestrahistoria">
          <h1 className="text-3xl text-center mb-5 lg:m-10 text-brown-900 sm:text-5xl font-bold   lg:text-left ">
            Nuestra Historia
          </h1>
          {/* Timeline Web */}
          <div className="grid grid-cols-1 static bg-brown-900">
            <center>
              <img
                className="w-full hidden justify-center items-center lg:block lg:w-full "
                src={TimelineWeb}
                alt=""
              />
            </center>
          </div>

          {/* Timeline Mobile */}
          <div className="grid grid-cols-1 static bg-brown-900">
            <center>
              <img
                className="w-full block lg:hidden "
                src={TimelineMobile}
                alt=""
              />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};
