import React from "react";
import TeamCard from "../components/TeamCard";
import { teamData } from "../assets/assets";
import dero from "../assets/dero.jpg";
import LazyImage from "../components/LazyLoading";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 space-y-16 mt-28">
      {/* CEO Section */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <LazyImage
          src={dero}
          alt="CEO"
          className={`w-56 h-56 md:w-80 object-cover rounded-ful md:rounded border-4 border-pink-300 relative -z-50`}
          style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Meet Our CEO
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Derola Sijuade founded Eveline Beauty World and Spa with one vision
            in mind: to empower confidence through elegant self-care. From
            humble beginnings as a local stylist, her passion bloomed into a
            sanctuary for beauty lovers across Lagos. When she’s not
            orchestrating flawless transformations, she’s mentoring rising stars
            in the beauty scene.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Our Glam Squad
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
