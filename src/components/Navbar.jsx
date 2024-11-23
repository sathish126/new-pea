// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="sticky top-0 z-50 bg-white border-t-2 border-green-600 border-b-2">
    <nav className="py-2">
      <div className="container mx-auto flex justify-between px-6">
        <div className="flex space-x-12">
          <Link
            to="/"
            className="border-2 border-green-600 rounded-md py-1 px-4 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition"
          >
            Home
          </Link>
          <Link
            to="/event"
            className="border-2 border-green-600 rounded-md py-1 px-4 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition"
          >
            Event
          </Link>
          <Link
            to="/workshops"
            className="border-2 border-green-600 rounded-md py-1 px-4 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition"
          >
            Workshops
          </Link>
        </div>
        <div className="flex space-x-12">
          <Link
            to="/accommodation"
            className="border-2 border-green-600 rounded-md py-1 px-4 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition"
          >
            Accommodation
          </Link>
          <Link
            to="/gallery"
            className="border-2 border-green-600 rounded-md py-1 px-4 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition"
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
