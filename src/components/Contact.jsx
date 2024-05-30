import React, { useContext } from "react";

import { DarkModeContext } from "../context";
const Contact = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      name="contact"
      className="w-full h-screen pt-14"
      style={darkMode ? { background: "#ffffff" } : { background: "#020617" }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScUhdUawWWH7YVTDTpq7-ZYWLyPN6XLPucDG_-r8Jm6TIus9A/viewform?embedded=true"
        width="100%"
        height="90%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Contact;
