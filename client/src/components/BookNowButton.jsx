// components/BookNowButton.jsx
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/useAppContext";

const BookNowButton = () => {
  const { navigate } = useAppContext();
  const handleClick = () => {
    navigate("/booking");
    scrollTo(0, 0);
  };
  return (
    <button
      onClick={handleClick}
      to="/booking"
      className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary/80 transition rounded text-white cursor-pointer"
    >
      Book Now
      <img
        src={assets.right_arrow_white}
        alt=""
        className="transition group-hover:translate-x-1 text-white h-8 align-middle"
      />
    </button>
  );
};

export default BookNowButton;
