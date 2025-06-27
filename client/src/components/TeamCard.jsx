import React from "react";

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded shadow p-4 text-center hover:shadow-md transition">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
      />
      <h4 className="font-semibold text-primary">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};

export default TeamCard;
