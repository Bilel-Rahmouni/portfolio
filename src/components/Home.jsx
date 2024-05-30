import React, { useContext } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/me.png";
import { Link } from "react-scroll";
import { DarkModeContext } from "../context";

const Home = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      name="home"
      className="flex-col md:flex-row w-full h-screen flex items-center justify-center pt-14"
      style={darkMode ? { background: "#ffffff" } : { background: "#020617" }}
    >
      {/* Container */}
      <div className="h-1/3 md:h-full w-full flex justify-center items-center">
        <img
          class="flex bg-gradient-to-r 
           size-40 
          md:size-[28rem]
         from-cyan-500
         to-blue-500 
         rounded-full"
          src={me}
          backgroundSize="cover"
          alt="me"
        />
      </div>
      <div className=" flex flex-col h-2/3 md:h-full w-full px-2 md:justify-center justify-start ">
        <p style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}>
          Hi, my name is
        </p>
        <h1
          className="text-4xl sm:text-7xl font-bold "
          style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
        >
          Bilel Rahmouni
        </h1>
        <h2
          className="text-4xl sm:text-7xl font-bold flex"
          style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
        >
          I'm a Full Stack Developer.
        </h2>

        <p
          className="py-4 max-w-[700px]"
          style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
        >
          Based in Aarhus Denmark, I'm passionate about building exceptional
          digital experiences. Currently, I’m focused on building mobile
          applications and responsive full-stack websites.
        </p>
        <div>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="group border-2 px-6 py-3 my-2 flex items-center w-48 justify-center border-gray-400
              hover:bg-cyan-500 hover:border-blue-500"
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
