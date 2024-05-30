import React, { useContext } from "react";
import { DarkModeContext } from "../context";
const About = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      name="about"
      className="w-full h-screen pt-14"
      style={darkMode ? { background: "#ffffff" } : { background: "#020617" }}
    >
      <div className="mb-10">
        <p
          className="text-4xl font-bold inline border-b-4 border-pink-600"
          style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
        >
          About
        </p>
      </div>
      <div className="h-2/3 justify-center items-center grid sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-4xl font-bold">
          <p style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}>
            Nice to meet you. Please take a look around.
          </p>
        </div>
        <div>
          <p style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}>
            I am passionate about building excellent websites and mobile apps
            that improves the lives of those around me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
