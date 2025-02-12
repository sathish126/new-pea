import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ParticlesComponent from "./particles";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particles background */}
      <ParticlesComponent />

      {/* Smooth Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-green-600 z-50"
        style={{ scaleX }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-romanSD text-center mb-4 mt-28 bg-clip-text text-transparent 
          bg-gradient-to-r from-green-600 to-emerald-500 animate-gradient-x tracking-tight"
        >
          About Prodothon
        </motion.h1>

        {/* Content Wrapper with Subtle Shadow and Rounded Corners */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-transparent backdrop-blur-lg shadow-xl rounded-3xl p-8 sm:p-12 space-y-12"
        >
          {/* Prodothon Overview Section */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-6"
          >
            <div className="w-16 h-16 bg-transparent rounded-full flex items-center justify-center mb-4 sm:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-4">
                What is Prodothon?
              </h2>
              <p className="text-white leading-relaxed text-lg">
                Prodothon is an Inter-College Festival at the Department of Production
                Engineering, PSG College of Technology. Spanning two days, this event
                is tailored for undergraduate students from the Mechanical Stream.
                The festival aims to embrace the students’ spirit in the Mechanical
                Stream with events, competitions, workshops, entrepreneur initiatives,
                presentations, and exhibitions. It serves as a dynamic platform for
                students to showcase their technical expertise, problem-solving skills,
                and innovative thinking.
              </p>
            </div>
          </motion.section>

          {/* Mission Section */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-6"
          >
            <div className="w-16 h-16 bg-transparent rounded-full flex items-center justify-center mb-4 sm:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.192a3 3 0 01-4.243-4.243"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">
                Our Vision
              </h2>
              <p className="text-white  leading-relaxed text-lg">
                To become a flagship event that inspires the next generation of engineers
                to embrace excellence in manufacturing and mechanical engineering,
                bridging the gap between academic learning and industry practices while
                promoting sustainable and innovative solutions. We aim to engage in
                activities guided by values and ethics with a sense of responsibility
                to society and the environment.
              </p>
            </div>
          </motion.section>

          {/* Vision Section */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-6"
          >
            <div className="w-16 h-16 bg-transparent rounded-full flex items-center justify-center mb-4 sm:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.768-.231-1.48-.631-2.202M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.768.231-1.48.631-2.202M10 12a4 4 0 11-8 0 4 4 0 018 0zm4 4a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-amber-700 mb-4">
                Our Mission
              </h2>
              <p className="text-white leading-relaxed text-lg">
                To foster innovation, technical proficiency, and collaborative learning
                among engineering students by providing a competitive platform that
                emphasizes cutting-edge technologies, practical knowledge,
                industry-relevant skills, and teamwork.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;