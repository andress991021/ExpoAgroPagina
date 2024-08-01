import React, { useState, useEffect } from "react";
import Video from "../../assets/Banner/BannerHome.mp4";

export const SeccionOne = () => {
  return (
    <div className="flex justify-center items-center ">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
