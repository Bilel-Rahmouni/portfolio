import React, { useContext } from "react";
import { data } from "../data/data.js";
import { DarkModeContext } from "../context";
import { Link } from "react-router-dom";
import { MdOutlineArticle } from "react-icons/md";
import { BsArrowRightCircle } from "react-icons/bs";

const Work = () => {
  const projects = data; // Project data
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      name="work"
      className={`w-full mb-8 pt-14 flex flex-col justify-center px-6 md:px-12 ${
        darkMode ? "bg-white" : "bg-[#020617]"
      }`}
    >
      {/* Section Title */}
      <div className="mb-8">
        <p
          className={`text-4xl font-bold inline border-b-4 mb-8 border-pink-600 ${
            darkMode ? "text-black" : "text-white"
          }`}
        >
          Work
        </p>
        <p
          className={`text-lg md:text-xl ${
            darkMode ? "text-gray-700" : "text-gray-300"
          } mt-4`}
        >
          This is an example of projects I have worked on, showcasing my skills
          and experience 📈.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6 md:px-12 lg:px-20">
        {projects.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex justify-center items-center">
              <div className="flex flex-col space-y-3 items-center">
                {/* Article Button */}
                {item.article && (
                  <Link to={item.article}>
                    <button className="flex items-center bg-sky-500 text-white font-semibold px-4 py-2 rounded-sm hover:bg-sky-600">
                      <MdOutlineArticle size={24} className="mr-2" />
                      Article
                    </button>
                  </Link>
                )}
                {/* Live Button */}
                <a href={item.live} target="_blank" rel="noreferrer">
                  <button className="flex items-center bg-sky-500 text-white font-semibold px-4 py-2 rounded-sm hover:bg-sky-600">
                    <BsArrowRightCircle size={24} className="mr-2" />
                    Live
                  </button>
                </a>
              </div>
            </div>

            {/* Project Title */}
            <p
              className={`text-lg font-bold tracking-wide text-center mt-4 ${
                darkMode ? "text-gray-800" : "text-gray-200"
              }`}
            >
              {item.name}
            </p>

            {/* Technologies */}
            <div className="flex justify-center space-x-4 mt-3 mb-4">
              {item.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex flex-col items-center hover:scale-110 duration-300"
                >
                  <img
                    src={tech.img}
                    alt={tech.title}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <p
                    className={`text-xs mt-1 ${
                      darkMode ? "text-gray-800" : "text-gray-300"
                    }`}
                  >
                    {tech.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
