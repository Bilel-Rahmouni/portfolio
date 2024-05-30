import React, { useContext } from "react";
import { DarkModeContext } from "../context";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className="flex h-14 w-full justify-between items-center bottom-0"
      // style={darkMode ? { background: "#ffffff" } : { background: "#020617" }}
    >
      <div
        className="w-1/2 items-center justify-center px-2 text-xs"
        style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
      >
        Copyright © Bilel Rahmouni {new Date().getFullYear()}. All rights
        reserved.
      </div>
      <div className="h-full w-[10rem] flex-row flex justify-around items-center ">
        <a
          className="flex items-center"
          href="https://www.linkedin.com/in/bilel-rahmouni001/"
          target="_blank"
        >
          <FaLinkedin size={20} color="dodgerblue" />
        </a>
        <a
          className="flex items-center"
          href="https://github.com/Bilel-Rahmouni"
          target="_blank"
        >
          <FaGithub size={20} color="dodgerblue" />
        </a>
        <a
          className="flex items-center"
          href="mailto:bilelrahmouni914@gmail.com"
          target="_blank"
        >
          <HiOutlineMail size={20} color="dodgerblue" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
