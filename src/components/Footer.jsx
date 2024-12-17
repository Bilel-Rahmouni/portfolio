import React, { useContext } from "react";
import { DarkModeContext } from "../context";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <footer
      className={`flex flex-col md:flex-row h-auto md:h-14 w-full justify-between items-center px-4 py-2 md:py-0 ${
        darkMode ? "bg-white text-black" : "bg-[#020617] text-white"
      }`}
    >
      <div className="text-center text-xs md:text-sm mb-2 md:mb-0">
        © {new Date().getFullYear()} Bilel Rahmouni. All rights reserved.
      </div>

      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/bilel-rahmouni001/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 duration-300"
        >
          <FaLinkedin size={24} className="text-blue-600" />
        </a>
        <a
          href="https://github.com/Bilel-Rahmouni"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 duration-300"
        >
          <FaGithub
            size={24}
            // style={{ color: darkMode ? "white" : "#020617" }}
            className={{ color: darkMode ? "text-white" : "text-[#020617]" }}
          />
        </a>

        <a
          href="mailto:bilelrahmouni914@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 duration-300"
        >
          <HiOutlineMail size={24} className="text-red-500" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
