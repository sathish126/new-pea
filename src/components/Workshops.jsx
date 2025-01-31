import React, { useState } from "react";
import { motion } from "framer-motion";
import ParticlesComponent from "./particles";

const EventCard = ({ poster, registrationLink, detailsPdf }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleRegistration = () => {
    window.open(registrationLink, "_blank");
  };

  const handleDownloadDetails = () => {
    window.open(detailsPdf, "_blank");
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
        className="cursor-pointer"
        onClick={toggleZoom}
        animate={{ scale: isZoomed ? 1.5 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={poster}
          alt="Event Poster"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Buttons */}
      <div className="p-4 bg-transparent">
        <div className="flex justify-between space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRegistration}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors flex-1"
          >
            Register Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadDetails}
            className="bg-white text-purple-500 px-4 py-2 rounded-lg border border-purple-500 hover:bg-purple-50 transition-colors flex-1"
          >
            More Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// ... rest of the code remains the same

const EventDashboard = () => {
  const events = [
    {
      poster: "assets/img/eventposters/workshop1.jpg",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
      detailsPdf: "/assets/production-meishu-details.pdf",
    },
    {
      poster: "assets/img/eventposters/PAPER PRESENTATION.jpg",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiC4E3es24rJCKtPy4MVe1_njBZXsPcy7iD1-VJGES9lZj3w/viewform?usp=send_form",
      detailsPdf: "/assets/adventhon-details.pdf",
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