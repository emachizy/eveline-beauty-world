import React from "react";
import { useNavigate } from "react-router-dom";
import LazyImage from "./LazyLoading";

const ServiceCard = ({ name, description, image }) => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    // You can navigate to the booking page or open a modal here
    window.scrollTo(0, 0);
    navigate("/booking");
  };

  return (
    <div className="bg-white/70 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <div>
        <div className="relative group w-full h-48 overflow-hidden">
          <LazyImage
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary scale-0 origin-center group-hover:scale-100 opacity-40 transition-transform duration-500 pointer-events-none" />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary">{name}</h3>
          <p className="text-sm text-white-900 mt-2">{description}</p>
        </div>
      </div>

      <div className="p-4 pt-0">
        <button
          onClick={handleBookNow}
          className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/80 transition duration-300 cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
