import React from "react";
import { PublicacionBlog } from "../../components";
import costaRica from "../../assets/SectionThree/icono1.png";
import Honduras from "../../assets/SectionThree/icono2.jpg";
import imgNoticias1 from "../../assets/Noticias/imgNoticias1.jpg";
import imgNoticias2 from "../../assets/Noticias/imgNoticias2.jpg";
import banner2 from "../../assets/Noticias/Banner2.jpg";
import bannerMobile2 from "../../assets/Noticias/BannerMobile2.jpg";
import { Footer } from "../../components";


export const Noticia4 = () => {
    return (
        <div className="pt-16 md:pt-0 lg:mt-24  ">
            <div className=" mb-12 lg:mb-24 md:pt-16 lg:pt-0 ">

                <PublicacionBlog
                    image={imgNoticias1}
                    title={"Banco Mundial otorgará crédito por US$50 millones para reducir costos en insumos"}
                    date={"Por Diario La Republica. | Jun 30, 2023"}
                    text={"La ministra Cecilia López aseguró que el objetivo de este crédito es reducir la inflación de los alimentos y aumentar la oferta"}
                    moreinfo={false}
                />
                <div className="mx-auto  lg:w-3/4">
                    <p className="text-lg   m-10 -mt-8 lg:w-full text-justify">
                        <br></br>
                        ALEJANDRA RICO MUÑOZ
                        <br></br>
                        La ministra de Agricultura y Desarrollo Rural, Cecilia López Montaño, confirmó que está gestionando un crédito de emergencia con el Banco Mundial por US$50 millones con el fin de apoyar la compra de insumos para
                        el sector agropecuario.
                        <br></br><br></br>
                        “Vamos a mirar la experiencia del Banco Mundial en Bolivia y en otros dos o tres países de América Latina, donde se han hecho distintas aproximaciones con estos recursos, para ver cuál es la mejor manera de garantizar y favorecer sobre todo a la agricultura familiar, pero en general al sector, bajando el costo de los insumos”, afirmó la jefe de la cartera agropecuaria.
                        <br></br><br></br>
                        Además, se trabajará de la mano con el Banco Mundial para aplicar efectivamente los recursos, con estrategias ya aplicadas en otros países.
                        <br></br><br></br>
                        La Ministra de Agricultura sostuvo que este crédito está enfocado a reducir la inflación de alimentos. “Estamos muy preocupados con que se reduzca la oferta, eso afecta la seguridad alimentaria. Es muy grave que
                        no solo sea un problema de ingresos, sino que sea un problema a de falta de oferta de alimentos, ahí es donde queremos incidir positivamente para que no pase eso”, puntualizó.
                        <br></br><br></br>
                        Finalmente, López aseguró que este crédito ya cuenta con aprobación por parte del Ministerio de Hacienda.
                        Fuente: 
                        <br></br>https://www.larepublica.co/economia/banco-mundial-otorgara-credito-por-us-50-millones-para-reducir-costos-en-insumos-3436302
                    </p>

                </div>

            </div>


            <Footer />
        </div>
    );
}