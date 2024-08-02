import React from "react";
import LogoRBC from "../../assets/Navbar/LogoExpoAgro.svg";
import LogoCalidad from "../../assets/Navbar/LogoCalidad.svg";
import Facebook from "../../assets/Redes/Facebook.svg";
import Instagram from "../../assets/Redes/Instagram.svg";
import Whatsapp from "../../assets/Redes/Whatsapp.svg";
import Camion from "../../assets/Navbar/Camion.svg";
import WhatsappIcon from "../../assets/Navbar/Whatsapp.svg";
import catalogo from "../../assets/Catálogo/catalogo.pdf";

export const Menu = ({ open, toggleOpen, ...props }) => {
  return (
    <div>
      <div className="h-screen w-screen overflow-x-hidden">
        <header className="">
          <div className=" relative  shadow-2x z-20  ">
            {/*inicio icon whatsapp flotante*/}
            <div className="absolute top-72">
              <div className="w-full h-10  fixed  flex justify-end items-end  mt-80 lg:pb-16 pr-5  z-10">
                <a href={`https://wa.me/${573133393743}`}>
                  <img
                    src={Whatsapp}
                    className="w-14 cursor-pointer  "
                    alt=""
                  />
                </a>
              </div>
            </div>

            {/*fin icon whatsapp flotante*/}

            <div className="lg:mx-auto lg:px-0  w-screen fixed z-10  lg:absolute  bg-green-900 bg-opacity-95">
              <div className="flex justify-between lg:justify-center lg:-translate-x-80 lg:space-x-44 items-center">
                <div className=" flex justify-between order-2 lg:order-1 items-center">
                  <div className="flex sm:items-end lg:mb-5 justify-end mr-5 lg:border-l-0 ">
                    <input
                      type="checkbox"
                      id="hamburger"
                      className="peer"
                      hidden
                    />
                    <label
                      htmlFor="hamburger"
                      className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                    >
                      <div
                        aria-hidden="true"
                        className="m-auto h-0.5 w-6 rounded bg-yellow transition duration-300"
                      ></div>
                      <div
                        aria-hidden="true"
                        className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow transition duration-300"
                      ></div>
                      <div
                        aria-hidden="true"
                        className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow transition duration-300"
                      ></div>
                    </label>

                    <div className=" z-10 peer-checked:-translate-x-0 fixed inset-0 w-[calc(100%)] translate-x-[100%] bg-green-900 lg:bg-transparent  shadow-xl transition duration-500 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                      <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row mt-5">
                        <ul className="px-6 pt-32 text-gray-700 space-y-8  lg:space-y-0 lg:flex lg:space-x-5  lg:pt-0 ">
                          <li className="lg:flex justify-center items-center">
                            <a
                              className="ml-6 lg:ml-0 lg:text-center my-auto text-2xl lg:text-sm font-medium text-brown-600 hover:text-brown-800 "
                              href="/"
                            >
                              HOME
                            </a>
                          </li>
                          <li className="hidden lg:block justify-center items-center">
                            <a className="ml-6 lg:ml-0 lg:text-center my-auto text-2xl lg:text-sm font-medium text-brown-600">
                              |
                            </a>
                          </li>
                          <li className="lg:flex justify-center items-center">
                            <a
                              className="ml-6 lg:ml-0 lg:text-center  my-auto text-2xl lg:text-sm font-medium text-brown-600 hover:text-brown-800"
                              href="/¿Quienes-Somos?"
                            >
                              ¿QUIENES SOMOS?
                            </a>
                          </li>
                          <li className="hidden lg:block justify-center items-center">
                            <a className="ml-6 lg:ml-0 lg:text-center my-auto text-2xl lg:text-sm font-medium text-brown-600">
                              |
                            </a>
                          </li>
                          <li className="lg:flex justify-center items-center">
                            <a
                              className="ml-6 lg:ml-0 lg:text-center  py-auto flex items text-2xl lg:text-sm font-medium  text-brown-600 hover:text-brown-800"
                              href="/Blog"
                            >
                              NOTICIAS
                            </a>
                          </li>
                          <li className="hidden lg:block justify-center items-center">
                            <a className="ml-6 lg:ml-0 lg:text-center my-auto text-2xl lg:text-sm font-medium text-brown-600">
                              |
                            </a>
                          </li>
                          <li className="lg:flex justify-center items-center">
                            <a
                              className="ml-6 lg:ml-0 lg:text-center  py-auto flex items text-2xl lg:text-sm font-medium  text-brown-600 hover:text-brown-800"
                              href="/Contacto"
                            >
                              CONTACTO
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative z-20 flex order-1 lg:order-2">
                  <img src={LogoRBC} alt="LogoRBC" className="w-32 lg:w-48 " />
                </div>

              </div>

              <div className="relative h-10 md:h-10  z-40 w-screen  md:bg-orange">
                <div className="flex w-screen justify-center bg-orange  text-green-900 text-center  p-1 text-xs sm:text-base lg:text-2xl fixed font-medium  lg:static  ">
                  <div className="flex items-center  ">
                    <span>•</span>
                    <span className="hidden lg:block">
                      Contáctenos 313 339 3743 / 310 4443808 •{" "}
                    </span>
                    <span className="block lg:hidden">
                      Contáctenos 313 339 3743 / 310 4443808 •{" "}
                    </span>
                    <span className="block lg:hidden">•</span>
                    <span>
                      Cobertura nacional • Excelente calidad y variedad •
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {props.children}
          </div>
        </header>
      </div>
    </div>
  );
};
