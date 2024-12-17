import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { DarkModeContext } from "../context";
// import me from "../assets/me.png";
import me from "../assets/BilelRahmouniLogo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className="fixed px-10 z-50 h-14 w-full  flex justify-between items-center "
      style={darkMode ? { background: "#ffffff" } : { background: "#020617" }}
    >
      <Link
        to="home"
        smooth={true}
        duration={500}
        style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
      >
        <img src={me} className="h-14 w-auto" />
      </Link>
      {/* menu */}
      <ul className="hidden md:flex absolute right-0">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            Contact
          </Link>
        </li>
        <li>
          {darkMode ? (
            <CiLight
              color="#000000"
              size={20}
              onClick={() => setDarkMode(!darkMode)}
            />
          ) : (
            <CiDark
              size={20}
              color="#ffffff"
              onClick={() => setDarkMode(!darkMode)}
            />
          )}
        </li>
      </ul>

      {/* dark mode button mobile */}
      <div className="md:hidden z-10 absolute flex right-14">
        {darkMode ? (
          <CiLight
            color="#000000"
            size={20}
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <CiDark
            size={20}
            color="#ffffff"
            onClick={() => setDarkMode(!darkMode)}
          />
        )}
      </div>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 absolute flex right-5"
      >
        {!nav ? (
          <FaBars color={darkMode ? "#000000" : "#ffffff"} />
        ) : (
          <FaTimes color={darkMode ? "#000000" : "#ffffff"} />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute w-screen h-screen mt-14 top-0 left-0 flex flex-col justify-center items-center"
        }
        style={darkMode ? { background: "#ffffff" } : { background: "#020617" }}
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            style={darkMode ? { color: "#000000" } : { color: "#ffffff" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
