import React, { useState,useEffect } from "react";
import CardOne from "../../assets/SectionOne/CardOne.jpg"
import CardTwo from "../../assets/SectionOne/CardTwo.jpg"
import CardOneMobile from "../../assets/SectionOne/CardOneMobile.jpg"
import CardTwoMobile from "../../assets/SectionOne/CardTwoMobile.jpg"
import { Button } from "../../components";
import catalogo from "../../assets/Catálogo/catalogo.pdf"
import catalogoComercial from "../../assets/Catálogo/Catalogocomercial.pdf"
export const SeccionOne = () => {

    const images = [
        {
          mobile:
          <div className=" relative bg-BannerOneMobile bg-no-repeat bg-cover h-full min-h-[60vh]  bg-center  flex justify-center text-white p-5 pt-8 w-full">
            <div className=" text-center flex flex-col  justify-between sm:pt-10 ">
              <div>
                <h1 className="text-xl sm:text-4xl ">Somos especialistas en semillas <br></br> <span className="font-bold"> de la más alta calidad </span></h1>
                <h1 className="text-base sm:text-2xl font-light mt-5 sm:mt-10"><span>•</span>Semillas forestales ornamentales</h1>
                <h1 className="text-base sm:text-2xl font-light"><span>•</span>Semillas hortalizas</h1>
                <h1 className="text-base sm:text-2xl font-light"><span>•</span>Semillas agrícolas</h1>
                <h1 className="text-base sm:text-2xl font-light"><span>•</span>Semillas frutales</h1>
                <h1 className="text-base sm:text-2xl font-light"><span>•</span>Semillas pastos y forraje</h1>
              </div>
              <div className="">
                <a href={catalogoComercial}>
                      <Button type="main" name="Conoce nuestros productos" />  
                </a>
              </div> 
            </div>
          </div>,
          desktop: 
              <div className=" relative bg-BannerOne bg-no-repeat bg-cover h-full min-h-[70vh] bg-center  flex justify-center text-white p-5 w-full">
                <div className="text-center flex flex-col justify-end ">
                  <h1 className="text-4xl ">Somos especialistas en semillas <br></br> <span className="font-bold"> de la más alta calidad </span></h1>
                  <h1 className="text-2xl font-light mt-10"><span>•</span>Semillas forestales ornamentales</h1>
                  <h1 className="text-2xl font-light"><span>•</span>Semillas hortalizas</h1>
                  <h1 className="text-2xl font-light"><span>•</span>Semillas agrícolas</h1>
                  <h1 className="text-2xl font-light"><span>•</span>Semillas frutales</h1>
                  <h1 className="text-2xl font-light"><span>•</span>Semillas pastos y forraje</h1>
                 
                  <div className=" pt-10">
                  <a href={catalogoComercial}>
                      <Button type="main" name="Conoce nuestros productos" />  
                  </a>
                  </div> 
                </div>
              </div>
        },
        {
          mobile:
          <div className=" relative bg-BannerTwoMobile bg-no-repeat bg-cover h-full min-h-[60vh]  bg-right  flex justify-center text-white p-5 pt-8 w-full">
            <div className=" text-center flex flex-col  justify-end sm:pt-10 ">
              <div>
                <h1 className="text-base sm:text-4xl ">Somos símbolo de<br></br> <span className="font-bold"> Responsabilidad, Beneficio y Confianza.</span></h1>
              </div>
              <div className=" pt-2">
                <a href="#seccionnuestrahistoriamobile">
                      <Button type="main" name="Conoce nuestra trayectoria" />  
                </a>
              </div> 
            </div>
          </div>
         ,
          desktop:
          <div className=" relative bg-BannerTwo bg-no-repeat bg-cover min-h-[70vh] bg-center  flex justify-center text-white p-5 w-full">
            <div className="text-center flex flex-col justify-end">
              <h1 className="text-2xl font-light ">Somos símbolo de<br></br> <span className="font-bold"> Responsabilidad, Beneficio y Confianza.</span></h1>
              <div className="pt-5 ">
                <a href="#seccionnuestrahistoria">
                      <Button type="main" name="Conoce nuestra trayectoria" />  
                </a>
              </div> 
            </div>
          </div>
        },
      ];
    
      const [currentImage, setCurrentImage] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
        }, 5000); // Cambiar a 10000 para moverse cada 10 segundos
    
        return () => clearInterval(timer);
      }, [currentImage, images.length]);
    
      const goToPrevImage = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
      };
    
      const goToNextImage = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
      };

    return(
        <div className="pt-16 lg:pt-0">
          
            {/*----------------- CAROUSEL -----------------*/}
            <div className="relative">
                {/* Imagen para dispositivos móviles */}
                <div className="block lg:hidden">{images[currentImage].mobile}</div>
                      {/* Imagen para dispositivos de escritorio */}
                <div className="hidden lg:block">{images[currentImage].desktop}</div>

                <div className="absolute inset-y-1/2 left-0 flex items-center">
                    <button type="button" onClick={goToPrevImage} className="absolute top-0 left-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                          <svg className="w-4 h-4 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                          </svg>
                          <span className="sr-only">Previous</span>
                      </span>
                  </button>
                </div>
                <div className="absolute inset-y-1/2 right-0 flex items-center">
                    <button type="button" onClick={goToNextImage} className="absolute top-0 right-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white  group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                          <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                          </svg>
                          <span className="sr-only">Next</span>
                      </span>
                  </button>
                </div>
            </div>
            {/*----------------- END CAROUSEL -----------------*/}

            <div className="sm:flex  lg:py-2 ">
                <div className="sm:flex sm:w-1/2 mx-auto  pt-2 sm:pr-1 relative ">
                    <div className="absolute text-white  inset-7 sm:inset-7  lg:inset-12 text-xs sm:text-base lg:text-2xl ">
                        <h1>Salva el planeta<br></br> <span className="font-bold">¡siembra más! </span></h1>
                        <h1 className="font-bold mt-2">Catálogo de <br></br> productos </h1>
                        <h1 className=" text-yellow">2023</h1>
                        <div className="pt-2 sm:pt-2 lg:pt-4">
                          <a href={catalogo}>
                          <Button type="main" name="Ver Catálogo" />  
                          </a>
                        </div>
                    </div>
                    <img src={CardOne} alt="" className="w-full"/>
                </div>

                {/*celular*/}
                <div className=" sm:w-1/2 mx-auto py-1 pt-2 sm:p-1 relative block sm:hidden ">
                    <div className="absolute text-white  inset-7 sm:inset-7  lg:inset-12 text-xs sm:text-base lg:text-2xl ">
                    <h1 className="font-bold mt-2">Aliados <br></br> internacionales<br></br> de semillas</h1>
                        <div className="absolute pt-12 sm:pt-2 lg:pt-48">
                          <a href="/Noticia1">
                          <Button type="main" name="Conócelos" />  
                          </a>
                        </div>
                    </div>
                    <img src={CardOneMobile} alt="" className="w-full"/>
                </div>

                {/*Computador*/}
                <div className=" sm:w-1/2 mx-auto py-1 pt-2 sm:pl-1 relative hidden sm:block">
                    <div className="absolute text-white sm:right-7 lg:right-12 sm:top-7 lg:top-12 text-xs sm:text-base lg:text-2xl ">
                        <h1 className="font-bold mt-2 lg:block hidden">Aliados internacionales<br></br> de semillas</h1>
                        <h1 className="font-bold mt-2 sm:block lg:hidden">Aliados <br></br> internacionales<br></br> de semillas</h1>
                        <div className="absolute pt-2 sm:pt-2 lg:pt-28">
                          <a href="/Noticia1">
                          <Button type="main" name="Conócelos" />  
                          </a>
                        </div>
                    </div>
                    <img src={CardTwo} alt="" className="w-full"/>
                </div>
            </div>
        </div>
    )
}

