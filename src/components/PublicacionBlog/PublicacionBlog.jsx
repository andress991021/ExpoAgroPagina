import React from "react";

export const PublicacionBlog = ({ title, text, date, image, link, moreinfo}) => {
    return (
        <div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-1 static z-40 pt-10">
                    <div>
                        <center>
                            <img className="w-full sm:w-3/4 lg:w-3/4" src={image} alt="" />
                        </center>
                    </div>
                    <div className="mx-auto  lg:w-3/4">

                        <h2 className="text-3xl mx-10 mb-10 mt-5 text-brown-700 sm:text-3xl  font-bold  text-left ">
                            {title}
                        </h2>
                        <p className="text-lg font-semibold  m-10 -mt-8 lg:w-full text-justify">
                            {date}
                        </p>
                        <p className="text-lg   m-10 -mt-8 lg:w-full text-justify">
                            {text}
                            {moreinfo?
                            <a href={link} className="text-green-800 underline">
                                VER MÁS
                            </a>
                            :''}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}