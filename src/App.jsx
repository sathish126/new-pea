import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Event from "./components/Event";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Accommodation from "./components/Accommodation";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay before hiding the loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
              <Route path="/event" element={<Event />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/accommodation" element={<Accommodation />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}
