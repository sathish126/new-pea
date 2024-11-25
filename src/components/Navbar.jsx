import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

  return (
    <div className="sticky top-0 z-50 bg-transparent">
      <nav>
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Hamburger Icon for Mobile View */}
          <div className="md:hidden">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-black focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Full Navigation for Desktop View */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Left Side Navigation */}
            <div className="flex items-center gap-x-6 border-r-4 border-l-4 border-green-400 pl-4 pb-2 pr-6 border-b-8 bg-transparent pt-2">
              <Link
                to="/"
                className="border-2 border-green-600 rounded-md py-1 px-4 text-black hover:text-blue-500 hover:border-blue-500 transition"
              >
                Home
              </Link>
              <Link
                to="/event"
                className="border-2 border-green-600 rounded-md py-1 px-4 text-black hover:text-blue-500 hover:border-blue-500 transition"
              >
                Event
              </Link>
              <Link
                to="/workshops"
                className="border-2 border-green-600 rounded-md py-1 px-4 text-black hover:text-blue-500 hover:border-blue-500 transition"
              >
                Workshops
              </Link>
            </div>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-x-6 border-l-4 border-green-400 pl-6 pb-2 pr-4 border-r-4 border-b-8 pt-2">
              <Link
                to="/accommodation"
                className="border-2 border-green-600 rounded-md py-1 px-4 text-black hover:text-blue-500 hover:border-blue-500 transition"
              >
                Accommodation
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-green-600 rounded-md py-1 px-4 text-black hover:text-blue-500 hover:border-blue-500 transition"
              >
                Gallery
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar for Mobile View */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="bg-transparent w-64 h-full shadow-lg fixed left-0 top-0 z-50">
              {/* Close Button */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-black p-4 focus:outline-none"
              >
                {/* Close Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Sidebar Links */}
              <div className="flex flex-col items-start mt-6 space-y-4 px-6">
                <Link
                  to="/"
                  className="text-lg text-black hover:text-blue-500 bg-white"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/event"
                  className="text-lg text-black hover:text-blue-500 bg-white"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Event
                </Link>
                <Link
                  to="/workshops"
                  className="text-lg text-black hover:text-blue-500 bg-white"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Workshops
                </Link>
                <Link
                  to="/accommodation"
                  className="text-lg text-black hover:text-blue-500 bg-white"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Accommodation
                </Link>
                <Link
                  to="/gallery"
                  className="text-lg text-black hover:text-blue-500 bg-white"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Gallery
                </Link>
                <Link to="/about" className="text-lg text-black hover:text-blue-500 bg-white"  onClick={() => setIsSidebarOpen(false)}>
                      About
                </Link>
                <Link to="/team" className="text-lg text-black hover:text-blue-500 bg-white"  onClick={() => setIsSidebarOpen(false)}>
                  Team
                </Link>
                <Link to="/contact" className="text-lg text-black hover:text-blue-500 bg-white"  onClick={() => setIsSidebarOpen(false)}>
                    Contact Us
                </Link>
       
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
