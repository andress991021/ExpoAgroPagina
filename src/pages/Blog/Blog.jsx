import React from "react";
import { PublicacionBlog } from "../../components";
import costaRica from "../../assets/SectionThree/icono1.png";
import Honduras from "../../assets/SectionThree/icono2.jpg";
import imgNoticias1 from "../../assets/Noticias/imgNoticias1.jpg";
import imgNoticias2 from "../../assets/Noticias/imgNoticias2.jpg";
import banner2 from "../../assets/Noticias/Banner2.jpg";
import bannerMobile2 from "../../assets/Noticias/BannerMobile2.jpg";
import { Footer } from "../../components";


export const Blog = () => {
    return (
        <div className="pt-16 md:pt-0">
            <center>
                <img className="w-full hidden justify-center items-center lg:block lg:w-full " src={banner2} alt="" />
            </center>
            <center>
                <img className="w-full block justify-center items-center lg:hidden  " src={bannerMobile2} alt="" />
            </center>
            <div>
                <h1 className="text-3xl m-5  text-brown-900 sm:text-4xl  font-bold  text-center md:text-left lg:mt-10 lg:ml-56 ">
                    Últimas Noticias
                </h1>
                <PublicacionBlog
                    image={imgNoticias1}
                    title={"Respaldo de nuestros aliados internacionales"}
                    date={" Por RBC Semillas SAS. | Jun 30, 2023"}
                    text={"Mantenemos estrechos lazos con el mercado de semillas en latinoamerica, en momentos que en los distintos países ..."}
                    link={"/Noticia1"}
                    moreinfo={true}

                />

                {/*<PublicacionBlog
                    image={imgNoticias2}
                    title={"Respaldo de nuestros aliados internacionales"}
                    date={" Por RBC Semillas SAS. | Jun 30, 2023"}
                    text={"Mantenemos estrechos lazos con el mercado de semillas en latinoamerica, en momentos que en los distintos países ..."}
                    link={"/Noticia2"}
                    moreinfo={true}
                />

                <PublicacionBlog
                    image={imgNoticias1}
                    title={"Respaldo de nuestros aliados internacionales"}
                    date={" Por RBC Semillas SAS. | Jun 30, 2023"}
                    text={"Mantenemos estrechos lazos con el mercado de semillas en latinoamerica, en momentos que en los distintos países ..."}
                    link={"/Noticia3"}
                    moreinfo={true}
                />*/}

                <PublicacionBlog
                    image={imgNoticias2}
                    title={"Banco Mundial otorgará crédito por US$50 millones para reducir costos en insumos"}
                    date={"Por Diario La Republica. | Jun 30, 2023 "}
                    text={"La ministra Cecilia López aseguró que el objetivo de este crédito es reducir la inflación de los alimentos y aumentar la oferta ..."}
                    link={"/Noticia4"}
                    moreinfo={true}
                />

            </div>


            <Footer />
        </div>
    );
}