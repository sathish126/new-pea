import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CircularNavbar from "./components/CircularNavbar";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Event from "./components/Event";
import Team from "./components/Team";
import Workshops from "./components/Workshops";
import Accommodation from "./components/Accommodation";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <CircularNavbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/event" element={<Event />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}