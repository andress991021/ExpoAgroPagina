import React from "react";
import imgQuality from "../../assets/Quienes_Somos/ImgQuality.png";
import banner from "../../assets/Quienes_Somos/Banner.png";
import bannerMobile from "../../assets/Quienes_Somos/BannerMobile.png"

export const SeccionTwo = () => {
    return (
        <div className="pt-16 lg:pt-8 font-Roboto">
            <div>
                <center>
                    <img className="w-full hidden justify-center items-center lg:block lg:w-full lg:-mt-8 " src={banner} alt="" />
                </center>
                <center>
                    <img className="w-full block justify-center items-center lg:hidden  " src={bannerMobile} alt="" />
                </center>
                <div className="grid grid-cols-1 lg:grid-cols-2 static z-40">


                    <div className="mx-auto  lg:w-3/4">
                        <h1 className="text-3xl m-10 text-brown-900 sm:text-4xl  font-bold  text-center md:text-left ">
                            ¿Quienes Somos?

                        </h1>
                        <h2 className="text-2xl m-10 -mt-4 text-brown-800 sm:text-3xl  font-bold  text-left lg:mt-4">
                            Proveedores de Semillas en Colombia
                        </h2>
                        <br />
                        <p className="text-base lg:text-lg  m-10 -mt-10 lg:w-full text-justify">
                            Semillas RBC S.A.S con 30 años de experiencia en la recolección y selección de semillas nativas para la re-
                            forestación ambiental, comercial en Maderables y Frutales, desarrollamos el manejo de nuevas alternativas
                            que hagan más fácil y efectiva la adquisición de productos de excelente calidad.
                        </p>

                        <div>
                            <center>
                                <img className="w-full block -mt-12 lg:hidden sm:w-3/4 lg:w-3/4 " src={imgQuality} alt="" />

                            </center>

                        </div>

                        <h2 className="text-2xl m-10 -mt-4 text-brown-800 sm:text-3xl sm:mt-4  font-bold  text-left ">
                            Misión
                        </h2>
                        <br />
                        <p className="text-base lg:text-lg   m-10 -mt-10 lg:w-full text-justify">

                            Semillas RBC S.A.S es una empresa líder en el sector forestal y agrícola, con énfasis en recolección y venta
                            de semillas de calidad y precios competitivos. La cual busca fortalecer los procesos de selección de semillas
                            y material vegetal con personal altamente calificado, entrenado y con calidad humana permitiendo satisfac-
                            er las necesidades de nuestros clientes.
                        </p>

                        <h2 className="text-2xl m-10 text-brown-800 sm:text-3xl  font-bold  text-left ">
                            Visión
                        </h2>
                        <br />
                        <p className="text-base lg:text-lg   m-10 -mt-10 lg:w-full text-justify">

                            Semillas RBC S.A.S espera contribuir en un futuro a la preservación del medio ambiente, fortaleciendo la
                            economía verde con productos de alta calidad, siendo altamente competitivos en la producción y comercialización de semillas en óptima calidad ofreciendo un amplio
                            portafolio y generando el mejor ejemplo de eficiencia y servicio con presencia a nivel nacional e internacional.
                        </p>
                        <h2 className="text-2xl m-10 text-brown-800 sm:text-3xl  font-bold  text-left ">
                            Objetivos
                        </h2>
                        <br />
                        <ul className="text-base lg:text-lg list-disc   m-14 -mt-10 lg:w-full text-justify">
                            <li>
                                Entregar las semillas 100% puras para
                                una mayor germinación en viveros.
                            </li>
                            <li>
                                Fortalecer la manera en que el viverista
                                le da el manejo adecuado a las semillas
                                de tal forma que se obtengan óptimos
                                resultados en la germinación y en las
                                labores silviculturales de la siembra
                                en vivero y en sitio definitivo.
                            </li>
                            <li>
                                Divisar los medios de entrega a nivel
                                nacional e internacional según los
                                requerimiento de los clientes.
                            </li>
                        </ul>

                    </div>
                    <div>
                        <center>
                            <img className="w-full hidden sm:w-3/4 lg:w-3/4 lg:block lg:mt-16" src={imgQuality} alt="" />

                        </center>

                    </div>
                </div>


            </div>


        </div>
    )
}

