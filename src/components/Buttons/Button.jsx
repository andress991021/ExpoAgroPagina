import React from "react";

export const  Button = ({name}) => {
    
    return(
      
        <button className="bg-yellow opacity-90 hover:opacity-100  text-black font-bold px-2 py-1 lg:py-2 lg:px-4 rounded text-base sm:text-sm lg:text-xl">
        {name}
        </button>
     
    );
}