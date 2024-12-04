import React, { useState } from 'react';
import { Filter, Calendar, Users, Building, MapPin, ChevronDown } from 'lucide-react';

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
  price 
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white/90  rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 border border-gray-200">
      <div className="relative">
        <img 
          src={poster} 
          alt={title} 
          className="w-full h-48 sm:h-64 lg:h-72 object-cover"
        />
        <div className="absolute top-4 left-4 bg-purple-600/80 text-white px-3 py-1 rounded-full text-xs font-medium">
          {type} Event
        </div>
        <div className="absolute top-4 right-4 bg-green-500/80 text-white px-3 py-1 rounded-full text-xs font-medium">
          ₹{price}
        </div>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h3>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="h-5 w-5 text-purple-500" />
            <span>Day {day} | {date}</span>
          </div>
          <span className="text-sm text-gray-500">{time}</span>
        </div>

        {showDetails && (
          <div className="space-y-2 text-sm text-gray-700 mt-4">
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-purple-500" />
              <span>Coordinator: {coordinator}</span>
            </div>
            <div className="flex items-center">
            <Building className="mr-2 h-4 w-4 text-purple-500" />
              <span>Contact: {coordinatorContact}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-purple-500" />
              <span>Hall: {hall}</span>
            </div>
          </div>
        )}

        <div className="flex justify-center mb-2">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="text-purple-600 flex items-center hover:text-purple-800"
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
            <ChevronDown className={`ml-1 transition-transform ${showDetails ? 'rotate-180' : ''}`} size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="bg-purple-600 text-white py-2 sm:py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Register
          </button>
          <button className="border border-purple-600 text-purple-600 py-2 sm:py-3 rounded-lg hover:bg-purple-50 transition-colors">
            More Info
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
      price: 500
    },
    {
      title: "AI & Machine Learning Workshop",
      poster: "/assets/sample.webp",
      date: "15 Dec 2024",
      time: "10:00 AM - 4:00 PM",
      day: 2,
      type: "Non-Technical",
      coordinator: "Shanmugam S",
      coordinatorContact: "9876543210",
      hall: "G-501",
      price: 500
    },
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
      price: 500
    },
    {
      title: "AI & Machine Learning Workshop",
      poster: "/assets/sample.webp",
      date: "15 Dec 2024",
      time: "10:00 AM - 4:00 PM",
      day: 2,
      type: "Technical",
      coordinator: "Shanmugam S",
      coordinatorContact: "9876543210",
      hall: "G-501",
      price: 500
    },
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
      price: 500
    },
    {
      title: "AI & Machine Learning Workshop",
      poster: "/assets/sample.webp",
      date: "15 Dec 2024",
      time: "10:00 AM - 4:00 PM",
      day: 2,
      type: "Technical",
      coordinator: "Shanmugam S",
      coordinatorContact: "9876543210",
      hall: "G-501",
      price: 500
    },
    
    // More events here...
  ];

  const filteredEvents = events.filter(event => 
    (selectedDay === null || event.day === selectedDay) &&
    (selectedType === null || event.type === selectedType)
  );

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen p-8">
      <div className="container mx-auto max-w-7xl px-4">
        <h1 className="text-4xl sm:text-5xl font-goodBrush text-center mb-8 text-purple-700">
          Workshops
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDashboard;
