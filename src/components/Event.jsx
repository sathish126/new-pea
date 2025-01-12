import React, { useState } from "react";
import { Calendar, Users, Building, Search } from "lucide-react";

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
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img src={poster} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm">
          Day {day}
        </span>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              type === "Technical"
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {type} Event
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{title}</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-purple-500" />
            {date} | {time}
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4 text-purple-500" />
            {coordinator} | {coordinatorContact}
          </div>
          <div className="flex items-center">
            <Building className="mr-2 h-4 w-4 text-purple-500" />
            {hall}
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200">
            Register
          </button>
          <button className="w-full border border-purple-500 text-purple-500 py-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
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
  const [searchQuery, setSearchQuery] = useState("");

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
    // Add more events as needed
  ];

  const filteredEvents = events.filter(
    (event) =>
      (selectedDay === null || event.day === selectedDay) &&
      (selectedType === null || event.type === selectedType) &&
      (searchQuery === "" ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-48 pt-36">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Day Filter */}
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={selectedDay || ""}
              onChange={(e) =>
                setSelectedDay(e.target.value ? parseInt(e.target.value) : null)
              }
            >
              <option value="">All Days</option>
              <option value="1">Day 1</option>
              <option value="2">Day 2</option>
            </select>

            {/* Type Filter */}
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={selectedType || ""}
              onChange={(e) => setSelectedType(e.target.value || null)}
            >
              <option value="">All Types</option>
              <option value="Technical">Technical</option>
              <option value="Non-Technical">Non-Technical</option>
            </select>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {/* No Events Found */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No events found</p>
            <button
              onClick={() => {
                setSelectedDay(null);
                setSelectedType(null);
                setSearchQuery("");
              }}
              className="mt-4 text-purple-600 hover:text-purple-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDashboard;