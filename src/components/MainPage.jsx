import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticlesComponent from "./particles";
import About from './About'; // Import the About component
import Contact from './Contact'; // Import the Contact component
import { Link } from 'react-scroll'; // For smooth scrolling

const MainPage = () => {
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('March 1, 2025 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col justify-between">
      {/* Particles background */}
      <ParticlesComponent />

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1 
            initial={{ y: 50, opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.3, 
              duration: 1.2, 
              ease: [0.6, -0.05, 0.01, 0.99],
              scale: { type: "spring", stiffness: 100, damping: 10 },
              rotate: { type: "spring", stiffness: 100, damping: 10 }
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[6vw] 
                       font-goodBrush tracking-wide text-transparent bg-clip-text 
                       bg-gradient-to-r from-yellow-300 via-red-500 to-purple-500 
                       animate-gradientShift mb-6 uppercase"
          >
            P R O  D O T H O N '25
          </motion.h1>

          {/* Subheader */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[2.5vw] 
                       text-white mb-8 max-w-2xl mx-auto font-goodBrush animate-colorShift"
          >
            Innovate. Collaborate. Transform.
          </motion.p>

          {/* Event Date and Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8"
          >
            <h2 className="text-4xl sm:text-5xl font-goodBrush text-white mb-4">
              March 1 & 2, 2025
            </h2>
            <div className="flex justify-center space-x-4 sm:space-x-8">
              <div className="text-center">
                <div className="text-4xl sm:text-6xl font-bold text-white bg-purple-600/50 px-4 py-2 rounded-lg">
                  {timeLeft.days}
                </div>
                <span className="text-lg sm:text-xl text-white">Days</span>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-6xl font-bold text-white bg-purple-600/50 px-4 py-2 rounded-lg">
                  {timeLeft.hours}
                </div>
                <span className="text-lg sm:text-xl text-white">Hours</span>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-6xl font-bold text-white bg-purple-600/50 px-4 py-2 rounded-lg">
                  {timeLeft.minutes}
                </div>
                <span className="text-lg sm:text-xl text-white">Minutes</span>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-6xl font-bold text-white bg-purple-600/50 px-4 py-2 rounded-lg">
                  {timeLeft.seconds}
                </div>
                <span className="text-lg sm:text-xl text-white">Seconds</span>
              </div>
            </div>
          </motion.div>

          {/* Scroll Down Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12"
          >
            <Link
              to="sponsors"
              smooth={true}
              duration={500}
              className="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors cursor-pointer"
            >
              Explore More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Sponsor Section */}
      <div id="sponsors" className="relative z-10 flex flex-col items-center justify-center w-full py-20 bg-black/20 backdrop-blur-lg">
        <h2 className="text-3xl font-goodBrush animate-colorShift text-white mb-8">Our Sponsors</h2>
        <div className="w-full max-w-6xl overflow-x-auto flex space-x-6 px-4">
          {[1, 2, 3].map((sponsor, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-shrink-0"
            >
              <img 
                src="assets/img/sponsors/sponsors.png" 
                alt={`Sponsor ${index + 1}`} 
                className="w-48 md:w-64 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </main>
  );
};

export default MainPage;