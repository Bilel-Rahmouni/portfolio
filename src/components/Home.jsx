import React, { useContext } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/me.png";
import { Link } from "react-scroll";
import { DarkModeContext } from "../context";

const Home = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      name="home"
      className={`w-full h-screen flex flex-col md:flex-row items-center justify-center py-24 px-4 md:px-16 ${
        darkMode ? "bg-white" : "bg-[#020617]"
      }`}
    >
      {/* Image Container */}
      <div
        className="h-[50px] my-6 md:h-full w-full flex items-center justify-center  md:mb-0"
        data-aos="fade-right"
      >
        <img
          src={me}
          alt="me"
          className="w-24 h-24 md:w-[18rem] md:h-[18rem] rounded-full object-cover 
             bg-gradient-to-r from-cyan-500
         to-blue-500 shadow-cyan-500/50 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Container */}
      <div
        className="flex flex-col justify-center text-center md:text-left w-full h-1/2 md:h-full"
        data-aos="fade-left"
      >
        <p
          className={`text-lg ${darkMode ? "text-gray-700" : "text-cyan-400"}`}
        >
          Hi, my name is
        </p>
        <h1
          className={`text-4xl sm:text-7xl font-extrabold ${
            darkMode ? "text-black" : "text-white"
          }`}
        >
          Bilel Rahmouni
        </h1>
        <h2
          className={`text-3xl sm:text-5xl font-bold ${
            darkMode ? "text-gray-800" : "text-gray-400"
          }`}
        >
          Full Stack Developer
        </h2>
        <p
          className={`py-4 max-w-xl mx-auto md:mx-0 ${
            darkMode ? "text-gray-600" : "text-gray-300"
          }`}
        >
          Based in Aarhus, Denmark. Passionate about crafting exceptional
          digital experiences. I specialize in building responsive full-stack
          websites and mobile applications.
        </p>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="group flex items-center justify-center gap-2 px-6 py-3 border-2 rounded-lg w-48
            border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            View Work
            <HiArrowNarrowRight className="group-hover:rotate-90 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
