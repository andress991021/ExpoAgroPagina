import React from "react";
import Video from "../../assets/Banner/BannerHome.mp4";
import VideoMobile from "../../assets/Banner/BannerHomeMobile.mp4";

export const SeccionOne = () => {
  return (
    <div className="flex justify-center items-center ">
      <video className="w-full h-full object-cover hidden lg:block" autoPlay muted loop playsInline>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video className="w-full h-full object-cover lg:hidden block" autoPlay muted loop playsInline>
        <source src={VideoMobile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
