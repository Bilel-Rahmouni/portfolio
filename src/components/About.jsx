import React, { useContext } from "react";
import { DarkModeContext } from "../context";

const About = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      name="about"
      className={`w-full h-screen flex flex-col justify-center px-6 md:px-12 ${
        darkMode ? "bg-white" : "bg-[#020617]"
      }`}
    >
      {/* Section Title */}
      <div className="mb-8">
        <p
          className={`text-4xl font-bold inline border-b-4 border-pink-600 ${
            darkMode ? "text-black" : "text-white"
          }`}
        >
          About
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid sm:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div
          className={`text-3xl sm:text-4xl font-extrabold ${
            darkMode ? "text-black" : "text-gray-300"
          } sm:text-right`}
          data-aos="fade-right"
        >
          <p>Nice to meet you. Please take a look around.</p>
        </div>

        {/* Right Section */}
        <div
          className={`text-lg ${
            darkMode ? "text-gray-700" : "text-gray-400"
          } leading-relaxed`}
          data-aos="fade-left"
        >
          <p>
            I am passionate about building excellent websites and mobile
            applications that improve the lives of those around me. I focus on
            creating responsive, user-friendly, and visually appealing digital
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
