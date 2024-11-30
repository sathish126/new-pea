import React, { useState } from "react";
import EventCard from "./EventCard";

const Event = () => {
  const events = [
    {
      title: "Artificial Intelligence",
      description: "Early Bird Offer valid till 17th November. Register Now!",
      imageUrl: "/assets/sample.webp",
      buttonText1: "Explore",
      buttonText2: "Register",
      googleFormUrl: "https://forms.gle/example1"
    },
    {
      title: "Blockchain Technology",
      description: "Join us for an in-depth discussion on the future of Blockchain. Register Today!",
      imageUrl: "/assets/sample.webp",
      buttonText1: "Explore",
      buttonText2: "Register",
      googleFormUrl: "https://forms.gle/example2"
    },
    {
      title: "Virtual Reality Expo",
      description: "Experience the latest in VR tech. Early access available till 20th November.",
      imageUrl: "/assets/sample.webp",
      buttonText1: "Explore",
      buttonText2: "Register",
      googleFormUrl: "https://forms.gle/example3"
    },
    {
      title: "Cybersecurity Essentials",
      description: "Learn the essentials of cybersecurity and protect your data. Register Now!",
      imageUrl: "/assets/sample.webp",
      buttonText1: "Explore",
      buttonText2: "Register",
      googleFormUrl: "https://forms.gle/example4"
    }
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br bgg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading with Modern Typography */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 tracking-tight">
        Upcoming Events
      </h1>

      {/* Event Cards Grid Section with Enhanced Spacing and Responsiveness */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event, index) => (
          <div 
            key={index} 
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <EventCard
              title={event.title}
              description={event.description}
              imageUrl={event.imageUrl}
              buttonText1={event.buttonText1}
              buttonText2={event.buttonText2}
              googleFormUrl={event.googleFormUrl}
              showDescription={activeCardIndex === index}
              toggleDescription={() => toggleDescription(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;