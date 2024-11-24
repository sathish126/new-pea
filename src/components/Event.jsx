import React, { useState } from "react";
import EventCard from "./EventCard"; // Import the EventCard component

const Event = () => {
  // Array of events with Google Form URLs for registration
  const events = [
    {
      title: "Artificial Intelligence",
      description: "Early Bird Offer valid till 17th November. Register Now!",
      imageUrl: "/assets/sample.webp",
      buttonText1: "Explore",
      buttonText2: "Register",
      googleFormUrl: "https://forms.gle/example1" // Google Form URL for this event
    },
    {
      title: "Blockchain Technology",
      description: "Join us for an in-depth discussion on the future of Blockchain. Register Today!",
      imageUrl: "/assets/sample.webp",
      buttonText1: "Explore",
      buttonText2: "Register",
      googleFormUrl: "https://forms.gle/example2" // Google Form URL for this event
    },
    {
      title: "Virtual Reality Expo",
      description: "Experience the latest in VR tech. Early access available till 20th November.",
      imageUrl: "/assets/sample.webp",
      buttonText1: "Explore",
      buttonText2: "Register",
      googleFormUrl: "https://forms.gle/example3" // Google Form URL for this event
    },
    {
      title: "Cybersecurity Essentials",
      description: "Experience the latest in VR tech. Early access available till 20th November.",
      imageUrl: "/assets/sample.webp",
      buttonText1: "Explore",
      buttonText2: "Register",
      googleFormUrl: "https://forms.gle/example4" // Google Form URL for this event
    }
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-white to-purple-400 min-h-screen p-5">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-5 text-gray-800">Events</h1>

      {/* Event Cards Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Map through the events array and pass data to each EventCard */}
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            imageUrl={event.imageUrl}
            buttonText1={event.buttonText1}
            buttonText2={event.buttonText2}
            googleFormUrl={event.googleFormUrl} // Pass the Google Form URL as a prop
            showDescription={activeCardIndex === index}
            toggleDescription={() => toggleDescription(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Event;
