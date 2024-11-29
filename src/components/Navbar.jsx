import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CircularNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate();

  // Navigation routes
  const navRoutes = [
    { path: "/", label: "Home", icon: "🏠", color: "bg-blue-100 hover:bg-blue-200" },
    { path: "/event", label: "Event", icon: "🎉", color: "bg-green-100 hover:bg-green-200" },
    { path: "/workshops", label: "Workshops", icon: "📚", color: "bg-yellow-100 hover:bg-yellow-200" },
    { path: "/accommodation", label: "Accommodation", icon: "🏨", color: "bg-purple-100 hover:bg-purple-200" },
    { path: "/gallery", label: "Gallery", icon: "🖼️", color: "bg-pink-100 hover:bg-pink-200" },
    { path: "/about", label: "About", icon: "ℹ️", color: "bg-indigo-100 hover:bg-indigo-200" },
    { path: "/team", label: "Team", icon: "👥", color: "bg-teal-100 hover:bg-teal-200" },
    { path: "/contact", label: "Contact", icon: "📞", color: "bg-red-100 hover:bg-red-200" },
  ];

  // Detect screen size for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Mobile view for screens ≤ 768px
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate positions for circular menu
  const calculatePosition = (index, total) => {
    const radius = 250; // Radius for circular placement
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2; // Start from top
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
  {/* Menu Trigger */}
{!isMenuOpen && (
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className={`fixed z-50 w-14 h-14 animate-colorShift bg-transparent text-gray-800 rounded-full flex items-center justify-center  
      transition transform hover:scale-105 
      md:top-1/2 md:-translate-y-1/2 md:left-4 sm:top-4 sm:left-4`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      fill="currentColor"
      className="bi bi-gear"
      viewBox="0 0 16 16"
    >
      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
    </svg>
  </button>
)}


  {/* Circular Menu for Desktop */}
  {!isMobileView && (
    <div
      className={`fixed z-40 top-0 bottom-0 left-0 flex items-center justify-center 
        bg-gray-100 bg-opacity-30 transition-all duration-300 
        ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <div className="relative w-[700px] h-full flex items-center justify-center">
        {/* Central Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-24 h-24 bg-transparent rounded-full flex items-center justify-center 
            shadow-2xl hover:bg-white text-white text-lg font-bold z-50
            transition transform hover:scale-110"
        >
          ✖
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
  )}

  {/* Sidebar Menu for Mobile */}
  {isMobileView && (
    <div
      className={`fixed z-40 top-0 bottom-0 left-0 w-64 bg-black  text-white transition-transform 
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} duration-300`}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="p-5 text-right w-full transition"
      >
        ✖
      </button>
      <ul className="mt-8 space-y-4">
        {navRoutes.map((route) => (
          <li key={route.path}>
            <button
              onClick={() => handleNavigation(route.path)}
              className="flex items-center gap-3 p-1 w-full text-left hover:bg-gray-700 rounded-lg"
            >
              <span className="text-2xl">{route.icon}</span>
              <span className="text-lg">{route.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

  );
};

export default CircularNavbar;
