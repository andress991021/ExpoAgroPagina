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
import TimelineMobile from "../../assets/SectionTwo/TimelineMobile.svg"
export const SeccionTwo = () => {
    return (
        <div className="mt-8 font-Roboto">
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 static z-40">
                    <div>
                        <center>
                            <img className="w-full sm:w-3/4 lg:w-3/4" src={imgQuality} alt="" />

                        </center>

                    </div>
                    <div className="mx-auto  lg:w-3/4">
                        <h1 className="text-3xl m-10 text-brown-900 sm:text-5xl  font-bold  text-left ">
                            La calidad de la vida está en la
                            calidad de la semilla.
                        </h1>
                        <p className="text-base lg:text-lg m-10 lg:w-full text-justify">

                            Semillas RBC trae para ti productos de la más alta calidad cumpliendo con los estándares
                            establecidos y de esta forma garantizando un servicio óptimo, para que tus productos sean
                            entregados en los tiempos dispuestos y así podamos ser parte de tus metas y proyectos a
                            lograr. Por eso hemos dispuesto para ti el siguiente portafolio de productos.

                        </p>

                    </div>


                </div>
                {/*Fondo Onda fadeada */}
                <div className=" hidden w-full relative -z-20 lg:block">
                    <img className="w-full lg:w-full absolute -top-[32rem] lg:-top-[32rem]" src={ondaFade} alt="" />
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
                        Semillas RBC S.A.S con 30 años de experiencia en la recolección y selección de semillas nativas para
                        la reforestación ambiental, comercial en Maderables y Frutales, desarrollamos el manejo de nuevas
                        alternativas que hagan más fácil y efectiva la adquisición de productos de excelente calidad.
                    </p>

                </div>

                <div className="justify-center items-center">
                    <center id="seccionnuestrahistoriamobile">
                        <img className="w-full -mt-16 justify-center items-center sm:-mt-28 sm:w-3/4 lg:w-3/4 lg:mt-16 " src={imgQuality2} alt="" />
                    </center>
                </div>
         
            </div>


            <div  id="seccionnuestrahistoria">
                <h1 className="text-3xl text-center mb-5 lg:m-10 text-brown-900 sm:text-5xl font-bold   lg:text-left ">
                    Nuestra Historia
                </h1>
                {/* Timeline Web */}
                <div className="grid grid-cols-1 static bg-brown-900">
                    <center>
                        <img className="w-full hidden justify-center items-center lg:block lg:w-full " src={TimelineWeb} alt="" />
                    </center>
                </div>

                {/* Timeline Mobile */}
                <div className="grid grid-cols-1 static bg-brown-900">
                    <center>
                        <img className="w-full block lg:hidden " src={TimelineMobile} alt="" />
                    </center>
                </div>
            </div>
        </div>
    )
}

