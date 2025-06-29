import React from "react";
import SpotlightCard from "./SpotlightCard";
import BookNowButton from "./BookNowButton";
import { assets } from "../assets/assets";

import { useAppContext } from "../context/useAppContext";

const AboutUs = () => {
  const { navigate } = useAppContext();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg mt-16 relative z-10 mb-0 md:mb-10">
      <div className="container text-center md:text-left flex flex-col items-center justify-center">
        <h2 className="about-title text-xs font-bold mb-2 text-secondary">
          About Us
        </h2>
        <h1 className="md:text-6xl text-2xl font-bold text-primary mb-2 font-(family-name:cursive)">
          Eveline Beauty World
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Eveline Beauty World, your ultimate destination for all
          things beauty! We are dedicated to providing you with the best beauty
          services and products to help you look and feel your best.
        </p>

        <p className="text-lg text-gray-700">
          Join us on this beautiful journey and experience the magic of Eveline
          Beauty World!
        </p>
        <button
          onClick={() => {
            navigate("/about");
            window.scrollTo(0, 0);
          }}
          to="/about"
          className="group flex items-center gap-2 px-7 md:px-9 py-3 transition rounded text-black cursor-pointer"
        >
          Read More
          <img
            src={assets.right_arrow}
            alt=""
            className="transition group-hover:translate-x-1 text-white h-8"
          />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SpotlightCard
          className="custom-spotlight-card flex flex-col items-center justify-center p-8"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Book Now</h3>
          <p className="text-lg text-white/90 mb-6 text-center">
            Our team of experienced professionals is passionate about beauty and
            committed to delivering exceptional service. Whether you're looking
            for a relaxing spa treatment, a stylish haircut, or the latest
            beauty products, we have you covered.
          </p>
          <BookNowButton />
        </SpotlightCard>
      </div>
    </section>
  );
};

export default AboutUs;
