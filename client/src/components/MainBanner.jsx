import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import LazyImage from "./LazyLoading";
import BookNowButton from "./BookNowButton";

const MainBanner = () => {
  return (
    <section>
      {/* Right-side floating boxes */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 space-y-3 hidden lg:block z-50">
        <div className="bg-white shadow-md rounded px-2 py-2 text-sm text-gray-800 w-48">
          <div className="bg-secondary px-4 py-2 text-gray-900 rounded">
            <p className="font-semibold">CALL TO BOOK</p>
            <a href="tel:+2347066743178" className="text-sm">
              +234-706-674-3178
            </a>
          </div>
        </div>
        {/* <div className="bg-white shadow-md rounded px-4 py-2 text-sm text-gray-800 w-48">
          <p className="font-semibold">🛍️ Sell on Jumia</p>
          <p className="text-xs">Start your online store today</p>
        </div>
        <div className="bg-white shadow-md rounded px-4 py-2 text-sm text-gray-800 w-48">
          <p className="font-semibold">📦 Send Your Packages</p>
          <p className="text-xs">Fast & reliable delivery</p>
        </div> */}
        <div className="bg-white shadow-md rounded pl-2 py-2 text-sm text-gray-800 w-48">
          <BookNowButton className="animate-pulse" />
        </div>
      </div>
      <div className="relative">
        <LazyImage
          src={assets.main_banner_bg}
          alt="banner"
          className="w-full hidden md:block h-96 object-cover opacity-70"
        />
        <LazyImage
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
              <LazyImage
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
              <LazyImage
                src={assets.right_arrow}
                alt=""
                className="h-8 transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
