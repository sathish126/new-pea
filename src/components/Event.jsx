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
      poster: "assets/img/eventposters/meishuu.jpg",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
    {
      poster: "assets/img/eventposters/ADVETHON.png",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
    {
      poster: "assets/img/eventposters/ADVETHON.png",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
    {
      poster: "assets/img/eventposters/structure.jpg",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
    {
      poster: "assets/img/eventposters/deconstruction.jpg",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
    {
      poster: "assets/img/eventposters/workshop1.jpg",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
    {
      poster: "assets/img/eventposters/PAPER PRESENTATION.jpeg",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Particles background */}
      <ParticlesComponent />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-48 pt-36">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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