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
    { path: "./event", label: "Competitions", icon: CalendarIcon },
    { path: "./accommodation", label: "Accommodation", icon: StarsIcon },
    { path: "./gallery", label: "Gallery", icon: ImageIcon },
    { path: "./about", label: "About", icon: InfoIcon },
    { path: "./team", label: "Team", icon: UsersIcon },
    { path: "./contact", label: "Contact", icon: PhoneIcon },
  ];

  const handleNavigation = (path) => {
    setSidebarOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 bg-transparent">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-red-800 hover:text-gray-200 focus:outline-none"
        >
          <MenuIcon className="w-14 h-14" />
        </button>
        
      </header>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-black text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50 w-72`}
      >
        
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
           
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white hover:text-yellow-300 focus:outline-none transition-colors duration-200"
            >
              <XIcon className="w-14 h-14" />
            </button>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">Menu</h2>
            <div className="h-1 w-16 bg-yellow-400 rounded"></div>
          </div>

          <nav className="flex flex-col space-y-3">
            {navRoutes.map((route) => (
              <button
                key={route.path}
                onClick={() => handleNavigation(route.path)}
                className="flex items-center space-x-4 text-xl font-medium text-gray-200 hover:text-yellow-300 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-700"
              >
                <route.icon className="w-6 h-6 animate-colorShift" />
                <span className="animate-colorShift">{route.label}</span>
              </button>
            ))}
          </nav>
          
          <div className="mt-auto mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="assets/pea logo.png"
                alt="PEA Logo"
                className="w-10 h-10"
              />
              <img
                src="/assets/sme_logo.png"
                alt="SME Logo"
                className="w-10 h-10"
              />
            </div>
            <p className="text-sm text-gray-400">
              Department of Production Engineering
              <br />
              PSG College of Technology
            </p>
          </div>
        </div>
      </aside>

      {/* Desktop Header */}
      <header className="hidden lg:flex fixed top-0 left-0 right-0 z-30 h-20 bg-gray-100">
        <div className="w-full px-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/assets/psg_logo.png"
              alt="Left Logo"
              className="w-12 h-12 hover:scale-110 transition-all duration-300"
            />
            <div className="text-xl font-bold tracking-wide">
              <span className="text-yellow-500">Department of Production Engineering</span>
              <br />
              PSG College of Technology
            </div>
          </div>
          
          <Link to="/" className="flex justify-center items-center">
            <img
              src="/assets/prodo.png"
              alt="Logo"
              className="w-55 h-86 hover:scale-110 transition-all duration-300 pr-16"
            />
          </Link>
          
          <div className="flex flex-col items-end space-y-1">
            <div className="flex items-center space-x-2">
              <img
                src="assets/pea logo.png"
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
        </div>
      </header>

      {/* Desktop Navigation Bar */}
      <nav className="hidden lg:flex fixed top-[74px] left-0 right-0 z-50 bg-gray-100 font-extralight text-green-800 text-2xl shadow-md">
        <div className="w-full flex justify-center space-x-24 px-8 py-1">
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