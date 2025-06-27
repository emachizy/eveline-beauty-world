import React from "react";
import ServiceCard from "../components/ServiceCard";
import { servicesData } from "../assets/assets";
// import servicesData from "../data/servicesData";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Services
      </h2>
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
  );
};

export default Services;
