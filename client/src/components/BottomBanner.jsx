import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      <img
        src={assets.bottom_banner_img}
        alt="bottom banner"
        className="w-full hidden md:block h-96 object-cover opacity-50"
      />
      <img
        src={assets.bottom_banner_img_mobile}
        alt="bottom banner"
        className="w-full md:hidden block object-cover opacity-70"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center px-4 md:px-0 pt-16 md:pt-0 md:pr-24">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Why We Are The Best?
          </h1>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 mt-2">
              <div className="rounded bg-secondary p-1">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-9 md:w-11"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-500/95 text-xs md:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
