import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Event from "./components/Event"; // Import the Event component

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header is placed at the top of the page */}
        <Header />
        
        {/* Navbar is placed below header and will be sticky */}
        <Navbar />
        
        <div className="flex-1">
          {/* Define the routes here */}
          <Routes>
            {/* Main routes */}
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<h1 className="text-4xl text-center">Team Page</h1>} />
            <Route path="/event" element={<Event />} /> {/* Event page route */}
          </Routes>
        </div>

        {/* Footer placed at the bottom of the page */}
        <Footer />
      </div>
    </Router>
  );
}
