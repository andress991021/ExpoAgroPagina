import React from "react";
import { PublicacionBlog } from "../../components";
import costaRica from "../../assets/SectionThree/icono1.png";
import Honduras from "../../assets/SectionThree/icono2.jpg";
import imgNoticias1 from "../../assets/Noticias/imgNoticias1.jpg";
import imgNoticias2 from "../../assets/Noticias/imgNoticias2.jpg";
import banner2 from "../../assets/Noticias/Banner2.jpg";
import bannerMobile2 from "../../assets/Noticias/BannerMobile2.jpg";
import { Footer } from "../../components";


export const Noticia1 = () => {
    return (
        <div className="pt-16 md:pt-0  lg:mt-24  ">
            <div className=" mb-12 lg:mb-24 md:pt-16 lg:pt-0">

                <PublicacionBlog
                    image={imgNoticias1}
                    title={"Respaldo de nuestros aliados internacionales"}
                    date={" Por RBC Semillas SAS. | Jun 30, 2023"}
                    text={"Mantenemos estrechos lazos con el mercado de semillas en latinoamerica, en momentos que en los distintos países firman acuerdos de libre comercio y el sector agricola se expande y se une para ser competitivo en el mercando internacional."}
                    moreinfo={false}
                />

                           <div className="mx-auto  lg:w-3/4">
                <div className="m-10">
                    <img className="w-44  lg:w-32" src={costaRica} alt="" />
                    <div className="mt-5">
                        <p className="text-base lg:text-lg font-bold  lg:w-full text-justify">COSTA RICA</p>
                        <p className="text-base lg:text-lg  lg:w-full text-justify">
                            Distribuidores autorizados para Colombia en semilla de Teca Escarificada Mejorada
                            y Melina de Huerto Semillero de Semillas y Bosques.
                        </p>
                    </div>
                </div>
                <div className="m-10">
                    <img className="W-52 lg:w-32" src={Honduras} alt="" />
                    <div className="mt-5">
                        <p className="text-base lg:text-lg font-bold  lg:w-full text-justify">HONDURAS</p>
                        <p className="text-base lg:text-lg  lg:w-full text-justify">
                            Distribuidores autorizados para Colombia en semilla de Pino
                            Caribea de Semillas Setro.
                        </p>
                    </div>
                </div>
            </div> 
            </div>


            <Footer />
        </div>
    );
}