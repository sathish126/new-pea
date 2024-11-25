import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-transparent sticky bottom-0 z-50 hidden md:block">
    <div className="container mx-auto flex justify-between items-center px-6 py-2">
      {/* About Links */}
      <div className="flex space-x-12 border-r-4 pr-4 pl-4 border-l-4 border-green-400 border-t-8 pt-2">
        <Link
          to="/about"
          className="border-2 border-green-600 rounded-md py-1 px-4 text-black hover:text-blue-500 hover:border-blue-500 transition"
        >
          About
        </Link>
        <Link
          to="/team"
          className="border-2 border-green-600 rounded-md py-1 px-4 text-black hover:text-blue-500 hover:border-blue-500 transition"
        >
          Team
        </Link>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-12 border-r-4 pr-4 pl-4 border-l-4 border-green-400 border-t-8 pt-2">
        <Link
          to="/contact"
          className="border-2 border-green-600 rounded-md py-1 px-4 text-black hover:text-blue-500 hover:border-blue-500 transition"
        >
          Contact Us
        </Link>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-green-600 rounded-md py-2 px-2 text-black hover:text-blue-500 hover:border-blue-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-green-600 rounded-md py-2 px-2 text-black hover:text-blue-500 hover:border-blue-500 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
