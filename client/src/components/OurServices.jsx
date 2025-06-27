import React from "react";
import ServiceCard from "../components/ServiceCard";
import { servicesData } from "../assets/assets";
import LiquidChrome from "./utils/LiquidChrome.jsx";

const OurServices = () => {
  return (
    <div className="relative w-full min-h-[600px]">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 -mt-20 md:mt-0">
        <LiquidChrome
          baseColor={[0.1, 0.3, 0.1]}
          speed={0.02}
          amplitude={0.6}
          interactive={true}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto py-10 px-4">
        <p className="text-xs text-center text-white mb-1">Our Services</p>
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-6">
          Explore Our Beauty Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
