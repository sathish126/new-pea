import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CircularNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Navigation routes with additional customization
  const navRoutes = [
    {
      path: "/",
      label: "Home",
      icon: "🏠",
      color: "bg-blue-100 hover:bg-blue-200",
    },
    {
      path: "/event",
      label: "Event",
      icon: "🎉",
      color: "bg-green-100 hover:bg-green-200",
    },
    {
      path: "/workshops",
      label: "Workshops",
      icon: "📚",
      color: "bg-yellow-100 hover:bg-yellow-200",
    },
    {
      path: "/accommodation",
      label: "Accommodation",
      icon: "🏨",
      color: "bg-purple-100 hover:bg-purple-200",
    },
    {
      path: "/gallery",
      label: "Gallery",
      icon: "🖼️",
      color: "bg-pink-100 hover:bg-pink-200",
    },
    {
      path: "/about",
      label: "About",
      icon: "ℹ️",
      color: "bg-indigo-100 hover:bg-indigo-200",
    },
    {
      path: "/team",
      label: "Team",
      icon: "👥",
      color: "bg-teal-100 hover:bg-teal-200",
    },
    {
      path: "/contact",
      label: "Contact",
      icon: "📞",
      color: "bg-red-100 hover:bg-red-200",
    },
  ];

  // Calculate positions for circular menu
  const calculatePosition = (index, total) => {
    const radius = 250; // Radius for circular placement
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2; // Adjusted to start from top
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Circular Navigation Container */}
      <div className="fixed left-0 top-0 bottom-0 z-50 flex items-center">
        {/* Menu Trigger */}
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 
          ${isMenuOpen ? "left-1/2 -translate-x-1/2" : "left-0"}`}
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
            shadow-lg hover:bg-green-600 transition transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Circular Menu */}
        <div
          className={`fixed top-0 bottom-0 bg-black bg-opacity-30 z-40 flex items-center 
          transition-all duration-300 ease-in-out 
          ${isMenuOpen ? "left-0" : "-left-[700px]"}`}
        >
          <div className="relative w-[700px] h-full flex items-center justify-center">
            {/* Central Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-24 h-24 bg-red-500 rounded-full flex items-center justify-center 
                shadow-2xl hover:bg-red-600 text-white text-lg font-bold z-50
                transition transform hover:scale-110"
            >
              Close
            </button>

            {/* Circular Navigation Buttons */}
            {navRoutes.map((route, index) => {
              const { x, y } = calculatePosition(index, navRoutes.length);
              return (
                <button
                  key={route.path}
                  onClick={() => handleNavigation(route.path)}
                  className={`absolute w-36 h-36 rounded-full shadow-lg flex flex-col 
                    items-center justify-center transition duration-300 transform 
                    hover:scale-110 text-center ${route.color}`}
                  style={{
                    left: `calc(50% + ${x}px - 72px)`,
                    top: `calc(50% + ${y}px - 72px)`,
                  }}
                >
                  <span className="text-4xl mb-2">{route.icon}</span>
                  <span className="text-sm font-medium">{route.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularNavbar;