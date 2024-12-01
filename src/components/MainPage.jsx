import React from 'react';
import { motion } from 'framer-motion';
import ParticlesComponent from "./particles";

const MainPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Particles background */}
      <ParticlesComponent />

      {/* Centered Arrow */}
      

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
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[8vw] 
                       font-goodBrush tracking-wide text-transparent bg-clip-text 
                       text-yellow-300 animate-colorShift
                       mb-6 uppercase"
          >
            PRODOTHON '25
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
        </motion.div>
      </div>
    </main>
  );
};

export default MainPage;