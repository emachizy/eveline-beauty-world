import React from "react";
import { assets } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      <img
        src={assets.bottom_banner_img}
        alt="bottom banner"
        className="w-full h-96 object-cover opacity-70"
      />
    </div>
  );
};

export default BottomBanner;
