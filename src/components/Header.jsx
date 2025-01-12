import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  CalendarIcon,
  GlobeIcon,
  StarsIcon,
  ImageIcon,
  InfoIcon,
  UsersIcon,
  PhoneIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navRoutes = [
    { path: "/", label: "Home", icon: HomeIcon },
    { path: "/event", label: "Event", icon: CalendarIcon },
    { path: "/workshops", label: "Workshops", icon: GlobeIcon },
    { path: "/accommodation", label: "Stays", icon: StarsIcon },
    { path: "/gallery", label: "Gallery", icon: ImageIcon },
    { path: "/about", label: "About", icon: InfoIcon },
    { path: "/team", label: "Team", icon: UsersIcon },
    { path: "/contact", label: "Contact", icon: PhoneIcon },
  ];

  const handleNavigation = (path) => {
    setSidebarOpen(false);
    navigate(path);
  };

  return (
    <>
       {/* Mobile Header */}
       <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-transparent ">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-black hover:text-gray-200 focus:outline-none"
        >
          <MenuIcon className="w-9 h-9" />
        </button>
        
      </header>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-gray-900 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden z-50 w-64`}
      >
        <div className="flex flex-col h-full p-4 space-y-6">
          <div className="flex justify-between items-center">
            
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white hover:text-yellow-300 focus:outline-none"
            >
              <XIcon className="w-9 h-9" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navRoutes.map((route) => (
              <button
                key={route.path}
                onClick={() => handleNavigation(route.path)}
                className="flex items-center space-x-3 text-lg font-medium hover:text-yellow-300"
              >
                <route.icon className="w-5 h-5" />
                <span>{route.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Desktop Header */}
      <header className="hidden lg:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src="/assets/psg_logo.png"
            alt="Left Logo"
            className="w-12 h-12 hover:scale-110 transition-all duration-300"
          />
          <div className="text-xl font-bold tracking-wide">
            <span className="text-yellow-500">Department of Production Engineering</span>{" "}
            <br />
            PSG College of Technology
          </div>
        </div>
        <Link to="/" className="flex justify-center items-center">
          <img
            src="/assets/center_logo.png"
            alt="Logo"
            className="w-16 h-16 hover:scale-110 transition-all duration-300"
          />
        </Link>
        <div className="flex flex-col items-end space-y-1">
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

      {/* Desktop Navigation Bar */}
      <nav className="hidden lg:flex fixed top-[88px] left-0 right-0 z-50 bg-gray-100 font-whiteOnBlack a text-green-800 font- text-2xl shadow-md">
        <div className="flex justify-center space-x-24 px-6 py-3 w-full">
          {navRoutes.map((route) => (
            <button
              key={route.path}
              onClick={() => handleNavigation(route.path)}
              className="flex items-center space-x-1 text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
            >
              <route.icon className="w-6 h-6" />
              <span>{route.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;