import React from "react";

//import VideoWeb from "../../assets/SectionThree/VideoWeb.mp4";
//import VideoMobile from "../../assets/SectionThree/VideoSemillas.mp4";
import imgThree from "../../assets/SectionThree/imgThree.png";
import imgThree2 from "../../assets/SectionThree/imgThree2.png";
import icon1 from "../../assets/SectionThree/icono1.png";
import icon2 from "../../assets/SectionThree/icono2.jpg";
import ondaFade from "../../assets/SectionTwo/OndaFade.svg";
import ondaBG from "../../assets/SectionTwo/bgOnda.svg";

export const SeccionThree = () => {
    return (

        <div>
            <div className="hidden lg:block">
                <video preload="true" autoPlay loop muted>
                    <source src="" type="video/mp4" allowFullScreen />
                </video>
            </div>

            <div className="block lg:hidden">
                <video preload="true" autoPlay loop muted>
                    <source src="" type="video/mp4" allowFullScreen />
                </video>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 static z-40">
                <div>
                    <center>
                        <img className="w-full sm:w-3/4 lg:w-3/4" src={imgThree} alt="" />
                    </center>

                </div>
                <div className="mx-auto sm:-mt-20  lg:w-3/4 lg:mt-5">
                    <h1 className="text-3xl -mt-10 sm:mt-10 m-10 text-brown-900 sm:text-5xl font-bold  text-left ">
                        Experiencia
                        garantizada
                    </h1>
                    <p className="text-base lg:text-lg m-10 lg:w-full text-justify">
                        Gracias a la confianza de nuestros clientes, hemos podido producir más de 100.000 árboles anuales de
                        nuestras diversas especies como las semillas forestales, frutales, agrícolas y hortalizas siendo distribuidas
                        con nuestros principales aliados comerciales alrededor del país y algunos países extranjeros.
                        Cada uno de estos alcances, nos han fortalecido como el principal recolector directo de semillas
                        en Colombia con los mejores productos de alta calidad. En la actualidad contamos con los registros como:
                    </p>

                    <ul className="font-bold block mt-10 m-10">
                        <li>• Distribuidor</li>
                        <li>• Exportador</li>
                        <li>• Importador</li>
                        <li>• Productor</li>
                        <li>• Reempaque</li>
                    </ul>
                </div>
            </div>

            {/*Fondo Onda fadeada */}
            <div className=" hidden w-full relative -z-20 lg:block lg:mt-10">
                <img className="w-full lg:w-full absolute -top-[32rem] lg:-top-[32rem]" src={ondaBG} alt="" />
            </div>

            <div className="block w-full lg:hidden  -z-20 ">
                <img className="w-full lg:w-full " src={ondaBG} alt="" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 static z-40 lg:m-32">

                <div className="mx-auto sm:-mt-16 lg:w-3/4">
                    <h1 className="text-3xl m-10 text-brown-900 sm:text-5xl font-bold  text-left lg:mt-32 ">
                        Respaldo
                    </h1>
                    <p className="text-base lg:text-lg m-10 lg:w-full text-justify">
                        Mantenemos estrechos lazos con el mercado de semillas en latinoamerica,
                        en momentos que en los distintos países firman acuerdos de libre comercio
                        y el sector agrícola se expande y se une para ser competitivo en el mercado
                        internacional.
                    </p>

                    <center>
                        <img className="block w-full -mt-20 sm:w-3/4 sm:-mt-20 lg:w-3/4 lg:hidden" src={imgThree2} alt="" />
                    </center>

                    <div className="m-10">
                        <img className="w-44  lg:w-32" src={icon1} alt="" />
                        <div className="mt-5">
                            <p className="text-base lg:text-lg font-bold  lg:w-full text-justify">COSTA RICA</p>
                            <p className="text-base lg:text-lg  lg:w-full text-justify">
                                Distribuidores autorizados para Colombia en semilla de Teca Escarificada Mejorada
                                y Melina de Huerto Semillero de Semillas y Bosques.
                            </p>
                        </div>
                    </div>
                    <div className="m-10">
                        <img className="W-52 lg:w-32" src={icon2} alt="" />
                        <div className="mt-5">
                            <p className="text-base lg:text-lg font-bold lg:w-full text-justify">HONDURAS</p>
                            <p className="text- base lg:text-lg lg:w-full text-justify">
                                Distribuidores autorizados para Colombia en semilla de Pino
                                Caribea de Semillas Setro.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <center>
                        <img className="hidden lg:block w-full lg:w-3/4" src={imgThree2} alt="" />
                    </center>
                </div>
            </div>

        </div>


    )

}

