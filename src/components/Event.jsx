import React, { useState } from "react";
import { motion } from "framer-motion";
import ParticlesComponent from "./particles";

const EventCard = ({ poster, registrationLink }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleRegistration = () => {
    window.open(registrationLink, "_blank");
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
    >
      
      {/* Poster */}
      <motion.div
        className="cursor-pointer relative"
        onClick={toggleZoom}
        animate={{ scale: isZoomed ? 1.5 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={poster}
          alt="Event Poster"
          className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300"></div>
      </motion.div>

      {/* Button */}
      <div className="p-4 bg-transparent">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRegistration}
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-colors"
        >
          Register Now
        </motion.button>
      </div>
    </motion.div>
  );
};

const EventDashboard = () => {
  const events = [
    {
      poster: "assets/img/eventposters/meishuu.png",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
    {
      poster: "assets/img/eventposters/ADVETHON.png",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
    {
      poster: "assets/img/eventposters/Robo Evade.jpg",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
    {
      poster: "assets/img/eventposters/structure.jpg",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
    {
      poster: "assets/img/eventposters/deconstruction.jpeg",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
    {
      poster: "assets/img/eventposters/workshop1.jpeg",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
    {
      poster: "assets/img/eventposters/PAPER PRESENTATION.jpeg",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden z-10">
        <div className="relative z-10 container mx-auto px-4 py-48 pt-36">
      {/* Particles background */}
      <ParticlesComponent />
      <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="bg-gradient-to-br from-purple-800/70 to-blue-800/70 p-4 sm:p-8 rounded-3xl shadow-2xl border border-purple-500/20 backdrop-blur-lg hover:shadow-purple-500/40 transition-all mb-6 sm:mb-12 max-w-3xl mx-auto"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-romanSD text-center mb-1 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient-x">
        REGISTRATION FEE DETAILS
      </h2>
      <div className="flex justify-center w-full">
        <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 overflow-x-auto">
          <table className="w-full border-collapse border text-center border-purple-500/20 mt-4">
            <thead>
              <tr className="bg-purple-600/50">
                <th className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-serif text-base sm:text-lg">Category</th>
                <th className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-serif text-base sm:text-lg">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-serif text-sm sm:text-base">PSG TECH</td>
                <td className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-serif text-sm sm:text-base">NIL</td>
              </tr>
              <tr>
                <td className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-serif text-sm sm:text-base">PSG I-Tech</td>
                <td className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-serif text-sm sm:text-base">₹100</td>
              </tr>
              <tr>
                <td className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-serif text-sm sm:text-base">Other Colleges</td>
                <td className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-serif text-sm sm:text-base">₹200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
      

      {/* Main Content */}
      
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </motion.div>
        
      </div>
    </main>
  );
};

export default EventDashboard;