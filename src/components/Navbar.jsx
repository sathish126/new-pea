import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  StarsIcon, 
  GlobeIcon, 
  CalendarIcon, 
  HomeIcon, 
  ImageIcon, 
  InfoIcon, 
  UsersIcon, 
  PhoneIcon,
  XIcon
} from "lucide-react";

const CircularNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const navigate = useNavigate();

  const navRoutes = [
    { 
      path: "/", 
      label: "Home", 
      icon: HomeIcon, 
      color: "from-blue-500 to-blue-700", 
      glowColor: "group-hover:shadow-blue-500/50",
      bgPattern: "bg-gradient-to-tr from-blue-100/20 to-blue-500/20"
    },
    { 
      path: "/event", 
      label: "Event", 
      icon: CalendarIcon, 
      color: "from-green-500 to-green-700", 
      glowColor: "group-hover:shadow-green-500/50",
      bgPattern: "bg-gradient-to-tr from-green-100/20 to-green-500/20"
    },
    { 
      path: "/workshops", 
      label: "Workshops", 
      icon: GlobeIcon, 
      color: "from-yellow-500 to-yellow-700", 
      glowColor: "group-hover:shadow-yellow-500/50",
      bgPattern: "bg-gradient-to-tr from-yellow-100/20 to-yellow-500/20"
    },
    { 
      path: "/accommodation", 
      label: "Stays", 
      icon: StarsIcon, 
      color: "from-purple-500 to-purple-700", 
      glowColor: "group-hover:shadow-purple-500/50",
      bgPattern: "bg-gradient-to-tr from-purple-100/20 to-purple-500/20"
    },
    { 
      path: "/gallery", 
      label: "Gallery", 
      icon: ImageIcon, 
      color: "from-pink-500 to-pink-700", 
      glowColor: "group-hover:shadow-pink-500/50",
      bgPattern: "bg-gradient-to-tr from-pink-100/20 to-pink-500/20"
    },
    { 
      path: "/about", 
      label: "About", 
      icon: InfoIcon, 
      color: "from-indigo-500 to-indigo-700", 
      glowColor: "group-hover:shadow-indigo-500/50",
      bgPattern: "bg-gradient-to-tr from-indigo-100/20 to-indigo-500/20"
    },
    { 
      path: "/team", 
      label: "Team", 
      icon: UsersIcon, 
      color: "from-teal-500 to-teal-700", 
      glowColor: "group-hover:shadow-teal-500/50",
      bgPattern: "bg-gradient-to-tr from-teal-100/20 to-teal-500/20"
    },
    { 
      path: "/contact", 
      label: "Contact", 
      icon: PhoneIcon, 
      color: "from-red-500 to-red-700", 
      glowColor: "group-hover:shadow-red-500/50",
      bgPattern: "bg-gradient-to-tr from-red-100/20 to-red-500/20"
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculatePosition = (index, total) => {
    const radius = 200;
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setSelectedRoute(path);
  };

  const menuTriggerVariants = {
    initial: { 
      rotate: 0, 
      scale: 1,
      boxShadow: "0 0 0px 0px rgba(79, 70, 229, 0.5)"
    },
    hover: { 
      rotate: 360, 
      scale: 1.2,
      boxShadow: "0 0 20px 10px rgba(79, 70, 229, 0.5)",
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative">
      {/* Animated Menu Trigger */}
      {!isMenuOpen && (
        <motion.button
          variants={menuTriggerVariants}
          initial="initial"
          whileHover="hover"
          onClick={() => setIsMenuOpen(true)}
          className="fixed z-50 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 
            rounded-full shadow-2xl flex items-center justify-center 
            md:top-1/2 md:-translate-y-1/2 md:left-4 sm:top-4 sm:left-4
            text-white hover:animate-pulse"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="w-8 h-8"
          >
            <path 
              d="M3 3h18v18H3z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            />
            <path 
              d="M9 11l3 3 5-5" 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2"
            />
          </svg>
        </motion.button>
      )}

      {/* Circular Menu for Desktop */}
      <AnimatePresence>
        {!isMobileView && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-black/70 to-black/90 backdrop-blur-sm 
              flex items-center justify-center"
          >
            <div className="relative w-[700px] h-[700px] flex items-center justify-center">
              {/* Close Button with Pulse Effect */}
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  boxShadow: [
                    "0 0 0px 0px rgba(255,255,255,0.3)",
                    "0 0 10px 5px rgba(255,255,255,0.5)",
                    "0 0 0px 0px rgba(255,255,255,0.3)"
                  ]
                }}
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: "0 0 20px 10px rgba(255,255,255,0.7)"
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute z-50
                  w-24 h-24 bg-white/20 backdrop-blur-md 
                  rounded-full flex items-center justify-center 
                  text-white hover:bg-white/30"
              >
                <XIcon className="w-12 h-12" />
              </motion.button>

              {/* Circular Navigation Buttons */}
              {navRoutes.map((route, index) => {
                const { x, y } = calculatePosition(index, navRoutes.length);
                const IconComponent = route.icon;
                const isSelected = selectedRoute === route.path;
                return (
                  <motion.button
                    key={route.path}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: isSelected ? 1.2 : 1, 
                      opacity: 1 
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => handleNavigation(route.path)}
                    className={`group absolute w-32 h-32 rounded-full 
                      bg-gradient-to-br ${route.color} 
                      ${route.bgPattern}
                      shadow-2xl flex flex-col items-center justify-center 
                      transition-all duration-300 ${route.glowColor} 
                      hover:shadow-2xl overflow-hidden`}
                    style={{
                      left: `calc(50% + ${x}px - 64px)`,
                      top: `calc(50% + ${y}px - 64px)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <IconComponent 
                      className={`text-white w-10 h-10 mb-2 
                        group-hover:scale-110 transition-transform
                        ${isSelected ? 'scale-125 text-white/90' : ''}`}
                    />
                    <span className={`text-white text-sm font-bold uppercase tracking-wider 
                      ${isSelected ? 'text-opacity-90' : ''}`}>
                      {route.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileView && isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="fixed z-40 top-0 left-0 w-72 h-full 
              bg-gradient-to-br from-indigo-900 to-purple-900 
              shadow-2xl p-4 backdrop-blur-md"
          >
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="absolute top-4 right-4 text-2xl text-white 
                hover:text-red-300 transition transform hover:rotate-180"
            >
              ✖
            </button>
            <div className="mt-16 space-y-4">
              {navRoutes.map((route) => {
                const IconComponent = route.icon;
                const isSelected = selectedRoute === route.path;
                return (
                  <motion.button
                    key={route.path}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleNavigation(route.path)}
                    className={`flex items-center w-full p-3 
                      rounded-lg transition group
                      ${isSelected 
                        ? 'bg-white/30 shadow-lg' 
                        : 'bg-white/10 hover:bg-white/20'}`
                    }
                  >
                    <IconComponent 
                      className={`w-8 h-8 mr-4 
                        group-hover:scale-110 transition
                        ${isSelected ? 'text-white/90 scale-110' : 'text-white'}`}
                    />
                    <span className={`text-white text-lg font-medium 
                      ${isSelected ? 'font-bold' : ''}`}>
                      {route.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CircularNavbar;