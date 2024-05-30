import React, { useContext } from "react";
import { data } from "../data/data.js";
import { DarkModeContext } from "../context";
import { Link } from "react-router-dom";
import { MdOutlineArticle } from "react-icons/md";
import { BsArrowRightCircle } from "react-icons/bs";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      name="work"
      className="w-full md:h-screen h-full pt-14"
      style={darkMode ? { background: "#ffffff" } : { background: "#020617" }}
    >
      <div className="mb-5">
        <p
          className="text-4xl font-bold inline border-b-4 border-pink-600"
          style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
        >
          Work
        </p>
      </div>
      {/* Gird Item */}
      <div className="flex flex-col md:flex-row mb-2 items-center justify-center ">
        {project.map((item, index) => (
          <div className="size-[20rem]  mb-10 flex flex-col items-center justify-center">
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                borderWidth: 1,
                borderColor: darkMode
                  ? "1px 1px 1px 1px rgba(0, 0, 0, 0.5)"
                  : "1px 1px 1px 1px rgba(255, 255, 255, 0.5)",
                // boxShadow: darkMode
                //   ? "1px 1px 1px 2px rgba(0, 0, 0, 0.5)"
                //   : "1px 1px 1px 2px rgba(255, 255, 255, 0.5)",
              }}
              className="my-2 size-[16rem] group container 
                   flex justify-center text-center items-center
                   hover:border-2 hover:border-pink-600 "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <div className="text-center flex flex-col justify-center items-center">
                  {/* eslint-disable-next-line */}
                  {item.article && (
                    <Link to={item.article}>
                      <button
                        className="text-center justify-center bg-sky-500 flex  
                           font-bold text-lg p-2 m-2 rounded-sm"
                      >
                        <MdOutlineArticle className="mx-2" size={24} />
                        Article
                      </button>
                    </Link>
                  )}
                  <a href={item.live} target="_blank" rel="noreferrer">
                    <button
                      className="text-center justify-center bg-sky-500 flex  
                           font-bold text-lg p-2 rounded-sm"
                    >
                      <BsArrowRightCircle className="mx-2" size={24} />
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <p
              className="text-md md:text-2xl self-center font-bold tracking-wider my-2 "
              style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
            >
              {item.name}
            </p>

            <div className="flex flex-row justify-start items-end ">
              {item.technologies.map((tech) => (
                <div className="hover:scale-110 duration-500 mx-2 flex flex-col">
                  <img className="w-5 mx-auto" src={tech.img} alt="HTML icon" />
                  <div className="">
                    <p
                      className="my-1 h-1 text-sm self-center"
                      style={
                        darkMode ? { color: "#000000" } : { color: "#ffffff" }
                      }
                    >
                      {tech.title}
                    </p>
                  </div>
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
