import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Event from "./components/Event";
import Team from "./components/Team";
import Workshops from "./components/Workshops";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={
              <div>
                
                <MainPage />
              </div>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/event" element={<Event />} />
            <Route path="/workshops" element={<Workshops />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}