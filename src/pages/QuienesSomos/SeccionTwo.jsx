import React from "react";
import imgQuality from "../../assets/Quienes_Somos/ImgQuality.png";
import banner from "../../assets/Quienes_Somos/Banner.png";
import banner2 from "../../assets/Quienes_Somos/Banner2.png";
import bannerMobile from "../../assets/Quienes_Somos/BannerMobile.png";

export const SeccionTwo = () => {
  return (
    <div className="pt-16 lg:pt-8 font-Roboto">
      <div>
        <center>
          <img
            className="w-full hidden justify-center items-center lg:block lg:w-full lg:-mt-8 "
            src={banner}
            alt=""
          />
        </center>
        <center>
          <img
            className="w-full block justify-center items-center lg:hidden -mt-8 "
            src={banner}
            alt=""
          />
        </center>
        <div className="grid grid-cols-1 lg:grid-cols-1 static z-40">
          <div className="mx-20  lg:w-3/4">
            <h1 className="text-xl m-10 text-green-800 text-4xl lg:text-7xl   font-bold  text-center md:text-left ">
              Quienes Somos
            </h1>

            <br />
            <p className="text-base  lg:text-3xl -m-10  lg:m-10 -mt-10 lg:w-full text-justify">
              Somos una empresa consolidada en el sector forestal y agrícola,
              destacándonos por nuestro compromiso, nos especializamos en la
              recolección, producción e importación de semillas, garantizando
              una calidad superior y una amplia diversidad para satis- facer las
              necesidades de nuestros clientes.
            </p>

            <h1 className="text-xl m-10 text-green-800 text-4xl lg:text-7xl   font-bold  text-center md:text-left ">
              Vision
            </h1>
            <br />
            <p className="text-base lg:text-3xl   -m-10  lg:m-10  -mt-10 lg:w-full text-justify">
              Mantenernos como una empresa líder y competitiva en el sector
              agroforestal, destacada por nuestra calidad y compromiso, es nues-
              tro objetivo principal.
            </p>
            <h1 className="text-xl m-10 text-green-800 text-4xl lg:text-7xl   font-bold  text-center md:text-left ">
              Mision
            </h1>
            <br />
            <p className="text-base lg:text-3xl   -m-10  lg:m-10  -mt-10 lg:w-full text-justify mb-20">
              Semillas Expoagro SAS es una empresa líder en el sector
              agroforestal, reconocida por sus rigurosos estándares de calidad y
              su competitivi- dad. Nuestro compromiso con el crecimiento del
              sector productivo del campo y la conservación del medio ambiente
              es primordial en todos nuestros procedimientos.
            </p>
          </div>
        </div>
        <center>
          <img
            className="w-full hidden justify-center items-center lg:block lg:w-full lg:-mt-8 "
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
       
      </div>
    </div>
  );
};
