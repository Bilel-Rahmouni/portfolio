import React, { useContext } from "react";
import { DarkModeContext } from "../context";

const Contact = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      name="contact"
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
          Get In Touch
        </p>
      </div>
      <p
        className={`text-lg md:text-xl ${
          darkMode ? "text-gray-700" : "text-gray-300"
        } mt-4`}
      >
        Hire me! Let's collaborate and build something amazing together. 🚀
      </p>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/xwpkdbak" // Replace with your Formspree ID
        method="POST"
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
      >
        {/* Name Input */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className={`mb-1 text-sm font-semibold ${
              darkMode ? "text-gray-800" : "text-gray-300"
            }`}
          >
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className={`p-3 rounded-md border ${
              darkMode
                ? "border-gray-300 bg-gray-100 text-gray-800"
                : "border-gray-600 bg-gray-700 text-gray-300"
            } focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className={`mb-1 text-sm font-semibold ${
              darkMode ? "text-gray-800" : "text-gray-300"
            }`}
          >
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className={`p-3 rounded-md border ${
              darkMode
                ? "border-gray-300 bg-gray-100 text-gray-800"
                : "border-gray-600 bg-gray-700 text-gray-300"
            } focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Message Input */}
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="message"
            className={`mb-1 text-sm font-semibold ${
              darkMode ? "text-gray-800" : "text-gray-300"
            }`}
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows="5"
            required
            className={`p-3 rounded-md border ${
              darkMode
                ? "border-gray-300 bg-gray-100 text-gray-800"
                : "border-gray-600 bg-gray-700 text-gray-300"
            } focus:ring-2 focus:ring-blue-500`}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
