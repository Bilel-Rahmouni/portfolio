import React, { useContext } from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import ReactNativeImg from "../assets/reactnative.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import { DarkModeContext } from "../context";

const Skills = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div
      name="skills"
      className="w-full h-screen pt-14 flex flex-col justify-start"
      style={darkMode ? { background: "#ffffff" } : { background: "#020617" }}
    >
      <div className="mb-10">
        <p
          className="text-4xl font-bold inline border-b-4 border-pink-600"
          style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
        >
          Skills
        </p>
      </div>
      <div className="bg-gray h-2/3 flex flex-wrap text-center justify-center items-center">
        <div className="hover:scale-110 duration-500 mx-4">
          <img className="w-16 mx-auto" src={HTML} alt="HTML icon" />
          <p
            className="my-4"
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            HTML
          </p>
        </div>
        <div className="hover:scale-110 duration-500 mx-4">
          <img className="w-16 mx-auto" src={CSS} alt="HTML icon" />
          <p
            className="my-4"
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            CSS
          </p>
        </div>
        <div className="hover:scale-110 duration-500 mx-4">
          <img
            className="w-16 mx-auto"
            src={JavaScript}
            alt="JAVASCRIPT icon"
          />
          <p
            className="my-4"
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            JAVASCRIPT
          </p>
        </div>
        <div className="hover:scale-110 duration-500 mx-4">
          <img className="w-16 mx-auto" src={ReactImg} alt="HTML icon" />
          <p
            className="my-4"
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            REACT
          </p>
        </div>
        <div className="hover:scale-110 duration-500 mx-4">
          <img className="w-16 mx-auto" src={ReactNativeImg} alt="HTML icon" />
          <p
            className="my-4"
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            REACT NATIVE
          </p>
        </div>
        <div className="hover:scale-110 duration-500 mx-4">
          <img className="w-16 mx-auto" src={Node} alt="HTML icon" />
          <p
            className="my-4"
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            NODE JS
          </p>
        </div>
        <div className="hover:scale-110 duration-500 mx-4">
          <img className="w-16 mx-auto" src={Mongo} alt="HTML icon" />
          <p
            className="my-4"
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            MONGO DB
          </p>
        </div>
        <div className="hover:scale-110 duration-500 mx-4">
          <img className="w-16 mx-auto" src={FireBase} alt="HTML icon" />
          <p
            className="my-4"
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            FIREBASE
          </p>
        </div>
        <div className="hover:scale-110 duration-500 mx-4">
          <img className="w-16 mx-auto" src={Tailwind} alt="HTML icon" />
          <p
            className="my-4"
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            TAILWIND
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
