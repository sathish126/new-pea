import React from "react";

const Header = () => (
  <div className="bg-white border-t-2 border-b-2 border-green-400">
    {/* Container visible on larger screens */}
    <div className="container mx-auto hidden md:flex items-center justify-between py-4 px-6">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <img src="/assets/psg_logo.png" alt="Logo 1" className="w-12 h-12" />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Department of Production Engineering</span>
          <span className="text-lg font-semibold">PSG College of Technology</span>
        </div>
      </div>

      {/* Center Logo */}
      <div className="flex justify-center items-center">
        <img src="/assets/prodothon_logo.png" alt="Prodothon Logo" className="w-12 h-12" />
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start">
        <div className="flex items-center space-x-4">
          <img src="/assets/PEA_Logo.png" alt="PEA Logo" className="w-10 h-10" />
          <span className="text-lg font-semibold">Production Engineering Association</span>
        </div>
        <div className="flex items-center space-x-4">
          <img src="/assets/sme_logo.png" alt="SME Logo" className="w-10 h-10" />
          <span className="text-lg font-semibold">Society of Manufacturing Engineers</span>
        </div>
      </div>
    </div>
    {/* Mobile View - Hidden Header */}
    <div className="flex md:hidden">
      {/* Empty or leave the div blank if you want no header on mobile */}
    </div>
  </div>
);

export default Header;
