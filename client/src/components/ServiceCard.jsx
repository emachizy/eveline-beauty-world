import React from "react";

const ServiceCard = ({ name, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="relative group w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Animated overlay effect */}
        <div className="absolute inset-0 bg-primary scale-0 origin-center group-hover:scale-100 opacity-40 transition-transform duration-500 pointer-events-none" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary">{name}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
