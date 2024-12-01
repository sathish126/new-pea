import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="hidden lg:flex sticky top-0 z-50 items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
    {/* Left Section */}
    <div className="flex items-center space-x-4 justify-self-start">
      <img
        src="/assets/psg_logo.png"
        alt="Left Logo"
        className="w-12 h-12 hover:scale-110 transition-all duration-300"
      />
      <div className="text-xl font-bold tracking-wide">
        <span className="text-yellow-500">
          Department of Production Engineering
        </span>{" "}
        <br />
        PSG College of Technology
      </div>
    </div>

    {/* Center Logo - Link to Home Page */}
    <Link to="/" className="flex justify-center items-center">
      <img
        src="/assets/center_logo.png"
        alt="Logo"
        className="w-16 h-16 hover:scale-110 transition-all duration-300 cursor-pointer"
      />
    </Link>

    {/* Right Section - Aligned Vertically */}
    <div className="flex flex-col items-end justify-self-end space-y-1">
      <div className="flex items-center space-x-2">
        <img
          src="/assets/PEA_logo.png"
          alt="PEA Logo"
          className="w-8 h-8 hover:scale-110 transition-all duration-300"
        />
        <span className="text-lg font-semibold text-yellow-500 hover:text-yellow-300 transition-colors duration-300">
          Production Engineering Association
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <img
          src="/assets/sme_logo.png"
          alt="SME Logo"
          className="w-8 h-8 hover:scale-110 transition-all duration-300"
        />
        <span className="text-lg font-semibold text-yellow-500 hover:text-yellow-300 transition-colors duration-300">
          Society of Manufacturing Engineers
        </span>
      </div>
    </div>
  </header>
);

export default Header;
