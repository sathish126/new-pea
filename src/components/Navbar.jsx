import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CircularNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate();

  // Navigation routes (unchanged)
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

  // Detect screen size for mobile view (unchanged)
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate positions for circular menu (unchanged)
  const calculatePosition = (index, total) => {
    const radius = 250;
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  // Menu trigger button animation variants
  const menuTriggerVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { 
      rotate: 180,
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  // Circular menu button animation variants
  const circularButtonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: custom * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }),
    hover: { 
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="relative">
      {/* Menu Trigger */}
      {!isMenuOpen && (
        <motion.button
          variants={menuTriggerVariants}
          initial="initial"
          whileHover="hover"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`fixed z-50 w-14 h-14 animate-colorShift bg-transparent text-gray-800  flex items-center justify-center  
            transition transform 
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
        </motion.button>
      )}

      {/* Circular Menu for Desktop */}
      <AnimatePresence>
        {!isMobileView && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed z-40 top-0 bottom-0 left-0 flex items-center justify-center 
              bg-gray-100 bg-opacity-30 transition-all duration-300`}
          >
            <div className="relative w-[700px] h-[700px] flex items-center justify-center">
              {/* Central Close Button - Now precisely centered */}
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute z-50 w-24 h-24 bg-white  bg-opacity-20 rounded-full 
                  flex items-center justify-center 
                  shadow-2xl hover:bg-white text-white  text-lg font-bold"
              >
                ✖
              </motion.button>

              {/* Circular Navigation Buttons */}
              {navRoutes.map((route, index) => {
                const { x, y } = calculatePosition(index, navRoutes.length);
                return (
                  <motion.button
                    key={route.path}
                    custom={index}
                    variants={circularButtonVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    onClick={() => handleNavigation(route.path)}
                    className={`absolute w-28 h-28 rounded-full shadow-lg flex flex-col 
                      items-center justify-center transition duration-300 transform 
                      text-center ${route.color}`}
                    style={{
                      left: `calc(50% + ${x}px - 56px)`,
                      top: `calc(50% + ${y}px - 56px)`,
                    }}
                  >
                    <motion.span 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-4xl mb-2"
                    >
                      {route.icon}
                    </motion.span>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm font-medium"
                    >
                      {route.label}
                    </motion.span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar Menu for Mobile (unchanged) */}
      <AnimatePresence>
        {isMobileView && isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
            className={`fixed z-40 top-0 bottom-0 left-0 w-64 bg-black text-white`}
          >
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="p-5 text-right w-full transition"
            >
              ✖
            </motion.button>
            <motion.ul 
              initial="hidden"
              animate="visible"
              className="mt-8 space-y-4"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {navRoutes.map((route) => (
                <motion.li 
                  key={route.path}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { type: "spring", stiffness: 300 }
                    }
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleNavigation(route.path)}
                    className="flex items-center gap-3 p-1 w-full text-left hover:bg-gray-700 rounded-lg"
                  >
                    <span className="text-2xl">{route.icon}</span>
                    <span className="text-lg">{route.label}</span>
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CircularNavbar;