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
import Aws from "../assets/aws.png";
import { DarkModeContext } from "../context";

const Skills = () => {
  const [darkMode] = useContext(DarkModeContext);

  const skills = [
    { id: 1, src: HTML, title: "HTML" },
    { id: 2, src: CSS, title: "CSS" },
    { id: 3, src: JavaScript, title: "JAVASCRIPT" },
    { id: 4, src: ReactImg, title: "REACT" },
    { id: 5, src: ReactNativeImg, title: "REACT NATIVE" },
    { id: 6, src: Node, title: "NODE JS" },
    { id: 7, src: Mongo, title: "MONGO DB" },
    { id: 7, src: Aws, title: "Aws" },
    { id: 8, src: FireBase, title: "FIREBASE" },
    { id: 9, src: Tailwind, title: "TAILWIND" },
  ];

  return (
    <div
      name="skills"
      className={`w-full h-screen mb-8 pt-14 flex flex-col justify-center px-6 md:px-12 ${
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
          Skills
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-20 text-center">
        {skills.map(({ id, src, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center transform hover:scale-110 transition-transform duration-300"
          >
            <img
              src={src}
              alt={`${title} icon`}
              className="w-20 h-24 md:w-24  p-5 mb-4 shadow-md rounded-lg "
            />
            <p
              className={`text-lg font-semibold ${
                darkMode ? "text-gray-800" : "text-gray-300"
              }`}
            >
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
