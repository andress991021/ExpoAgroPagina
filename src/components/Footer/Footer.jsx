import React from "react";
import LogoFooter from "../../assets/Footer/LogoExpoAgro.svg";
import Facebook from "../../assets/Redes/Facebook.svg";
import Instagram from "../../assets/Redes/Instagram.svg";
import IconoCorreo from "../../assets/Footer/IconoCorreo.svg";
import IconoDireccion from "../../assets/Footer/IconoDireccion.svg";
import IconoWhatsapp from "../../assets/Footer/IconoWhatsapp.svg";
import IconoTelefono from "../../assets/Footer/IconoTelefono.svg";

export const Footer = ({}) => {
  return (
    <footer className="bg-green-900 text-base lg:text-lg ">
      <div className="w-full lg:w-full px-5">
        <div className="grid grid-cols-1  px-2 py-6 md:grid-cols-2  lg:grid-cols-4 ">
          <div className="order-1 lg:order-1 mb-5  lg:mt-0">
            <img src={LogoFooter} alt="" className="w-60 lg:w-72 " />
          </div>
          <div className="order-1 lg:order-2 w-full">
            <h2 className="mb-6 text-xl font-semibold text-white">
              Contáctanos
            </h2>
            <ul className=" text-gray-400 font-medium">
              <div className="flex items-center mb-4">
                <img src={IconoWhatsapp} alt="" className="w-8" />
                <div>
                  <li className="">
                    <a href="#" className=" hover:underline ml-1">
                      +57 313 339 3743
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline ml-1">
                      +57 310 444 3808
                    </a>
                  </li>
                </div>
              </div>

              <li className="mb-4 flex items-center">
                <img src={IconoTelefono} alt="" className="w-8" />
                <a href="#" className="hover:underline ml-1">
                  +57 601 703 9664
                </a>
              </li>
              <li className="mb-4 flex items-center">
                <img src={IconoCorreo} alt="" className="w-8" />
                <a href="#" className="hover:underline ml-1">
                  ventassemillas@expoagro.com
                </a>
              </li>
              <li className="flex items-center">
                <img src={IconoDireccion} alt="" className="w-8" />
                <div className="ml-1">
                  <a href="#" className="hover:underline">
                    Transversal 73A Bis B # 36-10 Sur · Bogotá - Colombia.
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/*Celuñar*/}
          <div className="order-2 md:order-3 flex lg:hidden mt-8 items-center">
            <h2 className="mb-4 text-xl font-semibold text-white">Síguenos:</h2>
            <div className="flex ml-10">
              <img src={Facebook} alt="" className="w-12 mr-1" />
              <img src={Instagram} alt="" className="w-12" />
            </div>
          </div>
          {/*Escritorio*/}
          <div className="col-start-4 order-2 lg:order-3 hidden lg:flex  items-center">
            <h2 className="text-xl font-semibold text-white items-center mt-2">
              Síguenos:
            </h2>
            <div className="flex ml-4">
              <a
                href="https://www.facebook.com/profile.php?id=61561022048896"
                className="w-1/6 mr-2 h-fit"
              >
                <img src={Facebook} alt="" className="" />
              </a>
              <a
                href="https://www.instagram.com/semillasexpoagro/"
                className="w-1/6 mr-2 h-fit"
              >
                <img src={Instagram} alt="" className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-4 text-base text-center lg:pl-10 py-6 bg-black lg:flex lg:items-center lg:justify-between">
        <span className=" text-white  sm:text-center">
          Diseñado por: Minga Colectivo - Todos los derechos reservados | 2024
        </span>
      </div>
    </footer>
  );
};
