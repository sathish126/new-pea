import React from "react";
import EventCard from "./EventCard"; // Import the EventCard component

const Event = () => {
  // Array of events with their respective details
  const events = [
    {
      title: "Artificial Intelligance",
      description: "Early Bird Offer valid till 17th November. Register Now!",
      imageUrl: "/assets/sample.webp", // Image URL for this event
      buttonText1: "Explore",
      buttonText2: "Register"
    },
    {
      title: "Blockchain Technology",
      description: "Join us for an in-depth discussion on the future of Blockchain. Register Today!",
      imageUrl: "/assets/sample.webp", // Another image URL for this event
      buttonText1: "Explore",
      buttonText2: "Register"
    },
    {
      title: "Virtual Reality Expo",
      description: "Experience the latest in VR tech. Early access available till 20th November.",
      imageUrl: "/assets/sample.webp", // Another image URL for this event
      buttonText1: "Explore",
      buttonText2: "Register"
    },
    {
      title: "Cybersecurity Essentials",
      description: "Experience the latest in VR tech. Early access available till 20th November.",
      imageUrl: "/assets/sample.webp", // Another image URL for this event
      buttonText1: "Explore",
      buttonText2: "Register"
    }
  ];

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
            imageUrl={event.imageUrl} // Dynamic image URL passed as prop
            buttonText1={event.buttonText1}
            buttonText2={event.buttonText2}
          />
        ))}
      </div>
    </div>
  );
};

export default Event;
