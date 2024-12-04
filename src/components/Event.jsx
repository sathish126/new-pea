import React, { useState } from "react";
import { Filter, Calendar, Users, Building } from "lucide-react";

const EventCard = ({
  title,
  poster,
  date,
  time,
  day,
  type,
  coordinator,
  coordinatorContact,
  hall,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <img src={poster} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              type === "Technical"
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {type} Event
          </span>
          <span className="text-sm text-gray-500">Day {day}</span>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {date} | {time}
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            {coordinator} | {coordinatorContact}
          </div>
          <div className="flex items-center">
            <Building className="mr-2 h-4 w-4" />
            {hall}
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
            Register
          </button>
          <button className="w-full border border-purple-500 text-purple-500 py-2 rounded-lg hover:bg-purple-50">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

const EventDashboard = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const events = [
    {
      title: "AI & Machine Learning Workshop",
      poster: "/assets/sample.webp",
      date: "15 Dec 2024",
      time: "10:00 AM - 4:00 PM",
      day: 1,
      type: "Technical",
      coordinator: "Shanmugam S",
      coordinatorContact: "9876543210",
      hall: "G-501",
    },
    {
      title: "Startup Pitching Challenge",
      poster: "/assets/sample.webp",
      date: "16 Dec 2024",
      time: "2:00 PM - 6:00 PM",
      day: 1,
      type: "Non-Technical",
      coordinator: "Balaji C",
      coordinatorContact: "8765432109",
      hall: "G-302",
    },
    {
      title: "Startup Pitching Challenge",
      poster: "/assets/sample.webp",
      date: "16 Dec 2024",
      time: "2:00 PM - 6:00 PM",
      day: 2,
      type: "Non-Technical",
      coordinator: "Balaji C",
      coordinatorContact: "8765432109",
      hall: "G-302",
    },
    {
      title: "Startup Pitching Challenge",
      poster: "/assets/sample.webp",
      date: "16 Dec 2024",
      time: "2:00 PM - 6:00 PM",
      day: 1,
      type: "Non-Technical",
      coordinator: "Balaji C",
      coordinatorContact: "8765432109",
      hall: "G-302",
    },
    {
      title: "Startup Pitching Challenge",
      poster: "/assets/sample.webp",
      date: "16 Dec 2024",
      time: "2:00 PM - 6:00 PM",
      day: 2,
      type: "Non-Technical",
      coordinator: "Balaji C",
      coordinatorContact: "8765432109",
      hall: "G-302",
    },
    // Additional event data...
  ];

  const filteredEvents = events.filter(
    (event) =>
      (selectedDay === null || event.day === selectedDay) &&
      (selectedType === null || event.type === selectedType)
  );

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-goodBrush text-center mb-8 text-purple-600">
          Events
        </h1>

        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          <div className="space-y-1">
            <select
              className="block w-full px-3 py-2 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={selectedDay || ""}
              onChange={(e) =>
                setSelectedDay(e.target.value ? parseInt(e.target.value) : null)
              }
            >
              <option value="">All Days</option>
              <option value="1">Day 1</option>
              <option value="2">Day 2</option>
            </select>
          </div>

          <div className="space-y-1">
            <select
              className="block w-full px-3 py-2 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={selectedType || ""}
              onChange={(e) =>
                setSelectedType(e.target.value || null)
              }
            >
              <option value="">All Types</option>
              <option value="Technical">Technical</option>
              <option value="Non-Technical">Non-Technical</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default EventDashboard;
