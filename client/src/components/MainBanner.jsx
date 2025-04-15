import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block h-96 object-cover opacity-70"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden h-96 object-cover opacity-70"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-96 leading-tight lg:leading-14 text-[#2a1f21]">
          Hands you can trust, Savings you will love.
        </h1>

        <div className="flex items-center mt-6 font-medium">
          <Link
            to="/products"
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary/80 transition rounded text-white cursor-pointer"
          >
            Shop now
            <img
              src={assets.right_arrow_white}
              alt=""
              className="md:hidden transition group-hover:translate-x-1 text-white h-8 align-middle"
            />
          </Link>
          <Link
            to="/products"
            className="group md:flex hidden items-center gap-2 px-9 py-3 cursor-pointer"
          >
            Explore Deals
            <img
              src={assets.right_arrow}
              alt=""
              className="h-8 transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
