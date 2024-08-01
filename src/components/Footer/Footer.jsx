import React from "react";
import LogoFooter from "../../assets/Footer/LogoFooter.svg";
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
          <div className="order-3 lg:order-1 mt-5 lg:mt-0">
            <img src={LogoFooter} alt="" className="w-40 lg:" />
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
                      +57 321 300 1976
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline ml-1">
                      +57 314 294 2315
                    </a>
                  </li>
                </div>
              </div>

              <li className="mb-4 flex items-center">
                <img src={IconoTelefono} alt="" className="w-8" />
                <a href="#" className="hover:underline ml-1">
                  +57 1 728 5909
                </a>
              </li>
              <li className="mb-4 flex items-center">
                <img src={IconoCorreo} alt="" className="w-8" />
                <a href="#" className="hover:underline ml-1">
                  Servicioalcliente@semillasrbc.com
                </a>
              </li>
              <li className="flex items-center">
                <img src={IconoDireccion} alt="" className="w-8" />
                <div className="ml-1">
                  <a href="#" className="hover:underline">
                    Calle 43 A sur No. 72 B 15
                  </a>
                  <a href="#" className="hover:underline">
                    <br></br>Barrio San Andrés Bogotá - Colombia
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
              <img src={Facebook} alt="" className="w-1/6 mr-2 h-fit" />
              <img src={Instagram} alt="" className="w-1/6 h-fit" />
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
