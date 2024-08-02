import React from "react";
import { PublicacionBlog } from "../../components";
import costaRica from "../../assets/SectionThree/icono1.png";
import Honduras from "../../assets/SectionThree/icono2.jpg";
import imgNoticias1 from "../../assets/Noticias/imgNoticias1.png";
import imgNoticias2 from "../../assets/Noticias/imgNoticias2.png";
import imgNoticias3 from "../../assets/Noticias/imgNoticias3.png";
import banner2 from "../../assets/Noticias/Banner2.png";
import bannerMobile2 from "../../assets/Noticias/BannerMobile2.jpg";
import { Footer } from "../../components";

export const Blog = () => {
  return (
    <div className="pt-16 md:pt-0">
      <center>
        <img
          className="w-full hidden justify-center items-center lg:block lg:w-full "
          src={banner2}
          alt=""
        />
      </center>
      <center>
        <img
          className="w-full block justify-center items-center lg:hidden -mt-8 "
          src={banner2}
          alt=""
        />
      </center>
      <div>
        <h1 className="lg:text-7xl m-5  text-green-800 text-4xl  font-bold  text-center md:text-left lg:mt-10 lg:ml-56 lg:-mt-20">
          Mantente al dia
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 static z-40 lg:mt-20">
          <div>
            <center>
              <img
                className="w-full w-3/4 lg:w-3/4 mb-20"
                src={imgNoticias1}
                alt=""
              />
            </center>
          </div>
          <div className="mx-auto sm:-mt-20  lg:w-3/4 lg:mt-5">
            <h1 className="text-3xl -mt-10 sm:mt-10 m-10 text-orange sm:text-5xl font-bold  text-left ">
              Ejecución del sector agro es del 46.5% en sus proyectos de
              inversión para 2024
            </h1>
            <p className="text-base lg:text-lg m-10 lg:w-full text-justify font-bold text-green-700">
              16 de julio de 2024
            </p>
            <p className="text-base lg:text-lg m-10 lg:w-full text-justify font-bold text-green-700">
              Fuente Ministerio de agricultura de Colombia
            </p>
            <p className="text-base lg:text-lg m-10 lg:w-full text-justify">
              Distintos ángulos la ruralidad en el país, ya tienen una ejecución
              en compromisos del 46.5% (con corte al 21 de junio). Este
              porcentaje corresponde a cuatro de los $8.58 billones asignados a
              la cartera y sus entidades adscritas, tras el aplazamiento de
              recursos anunciado por Hacienda a comienzo de este mes...
            </p>
            <a href="#">
              <h1 className="text-3xl -mt-10 sm:mt-10 m-10 sm:text-3xl font-bold  text-left text-green-700 underline">
                Ver más
              </h1>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 static z-40 lg:mt-20">
          <div>
            <center>
              <img
                className="w-full w-3/4 lg:w-3/4 mb-20"
                src={imgNoticias2}
                alt=""
              />
            </center>
          </div>
          <div className="mx-auto sm:-mt-20  lg:w-3/4 lg:mt-5">
            <h1 className="text-3xl -mt-10 sm:mt-10 m-10 text-orange sm:text-5xl font-bold  text-left ">
              ¿Se puede conservar la biodiversidad y a la vez impulsar en
              Colombia la producción agrícola?
            </h1>
            <p className="text-base lg:text-lg m-10 lg:w-full text-justify font-bold text-green-700">
              16 de julio de 2024
            </p>
            <p className="text-base lg:text-lg m-10 lg:w-full text-justify font-bold text-green-700">
              Fuente Periodico El Tiempo
            </p>
            <p className="text-base lg:text-lg m-10 lg:w-full text-justify">
              El mundo consume cada vez más alimentos. De acuerdo con el Banco
              Mundial, los sistemas alimentarios sólidos, sostenibles e
              inclusivos son fundamentales para alcanzar los objetivos de
              desarrollo sostenible a nivel mundial. Allí, Colombia juega un
              papel clave, pues es una de las regiones identificadas por la
              Organización de las Naciones Unidas para la Agricultura y la
              Alimentación (FAO) donde se pueden cultivar y producir los
              alimentos que requiere la humanidad...
            </p>
            <a href="#">
              <h1 className="text-3xl -mt-10 sm:mt-10 m-10 sm:text-3xl font-bold  text-left text-green-700 underline">
                Ver más
              </h1>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 static z-40 lg:mt-20">
          <div>
            <center>
              <img
                className="w-full w-3/4 lg:w-3/4 mb-20"
                src={imgNoticias3}
                alt=""
              />
            </center>
          </div>
          <div className="mx-auto sm:-mt-20  lg:w-3/4 lg:mt-5">
            <h1 className="text-3xl -mt-10 sm:mt-10 m-10 text-orange sm:text-5xl font-bold  text-left ">
              Esto debe saber para proteger su inversión agrícola a través de
              seguros agropecuarios
            </h1>
            <p className="text-base lg:text-lg m-10 lg:w-full text-justify font-bold text-green-700">
              16 de julio de 2024
            </p>
            <p className="text-base lg:text-lg m-10 lg:w-full text-justify font-bold text-green-700">
              Fuente Diario La Republica
            </p>
            <p className="text-base lg:text-lg m-10 lg:w-full text-justify">
              El seguro agropecuario es un instrumento diseñado para proteger al
              productor agrícola o pecuario contra riesgos inherentes a su
              actividad económica. Este mecanismo ofrece cobertura frente a
              eventos adversos como sequías, heladas, vientos fuertes e
              inundaciones, los cuales pueden perjudicar los cultivos o causar
              la muerte de plantas y animales...
            </p>
            <a href="#">
              <h1 className="text-3xl -mt-10 sm:mt-10 m-10 sm:text-3xl font-bold  text-left text-green-700 underline">
                Ver más
              </h1>
            </a>
          </div>
        </div>

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
      </div>

      <Footer />
    </div>
  );
};
