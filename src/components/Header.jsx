import React from "react";

const Header = () => (
  <header className="bg-black text-white py-2 px-6 sticky top-0 z-10">
    {/* Container visible on larger screens */}
    <div className="hidden lg:flex justify-between items-center">
      {/* Left Section - One Logo */}
      <div className="flex items-center space-x-4 justify-self-start">
        <img
          src="/assets/psg_logo.png"
          alt="Left Logo"
          className="w-12 h-12 hover:scale-110 transition-all duration-300 bg-white"
        />
        <div className="text-xl font-bold tracking-wide">
          <span className="text-yellow-500">Department of Production Engineering</span> <br />
          PSG College of Technology
        </div>
      </div>

      {/* Center Logo */}
      <div className="flex justify-center items-center">
        <img
          src="/assets/center_logo.png"
          alt="Logo"
          className="w-16 h-16 hover:scale-110 transition-all duration-300 "
        />
      </div>

      {/* Right Section - Aligned Vertically */}
      <div className="flex flex-col items-end justify-self-end space-y-1">
        <div className="flex items-center space-x-2">
          <img
            src="/assets/PEA_Logo.png"
            alt="PEA Logo"
            className="w-8 h-8 hover:scale-110 transition-all duration-300 bg-white"
          />
          <span className="text-lg font-semibold text-yellow-500 hover:text-yellow-300 transition-colors duration-300">
            Production Engineering Association
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="/assets/sme_logo.png"
            alt="SME Logo"
            className="w-8 h-8 hover:scale-110 transition-all duration-300 bg-white"
          />
          <span className="text-lg font-semibold text-yellow-500 hover:text-yellow-300 transition-colors duration-300">
            Society of Manufacturing Engineers
          </span>
        </div>
      </div>
    </div>

    {/* Mobile View - Hidden Header */}
    <div className="lg:hidden">
      {/* Empty or leave the div blank for mobile */}
    </div>
  </header>
);

export default Header;
