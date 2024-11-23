import React from "react";

const EventCard = ({ title, description, imageUrl, buttonText1, buttonText2 }) => {
  return (
    <div className="max-w-sm w-full p-5 bg-transparent rounded-lg border border-white/10 shadow-md backdrop-blur-md flex flex-col items-center justify-center text-center">
      <div
        className="w-full h-72 rounded-lg bg-cover bg-center border border-white/25"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <h1 className="mt-6 text-white text-3xl font-extrabold">{title}</h1>
      <p className="mt-4 text-white text-sm leading-relaxed tracking-wider">{description}</p>
      <div className="mt-6 flex space-x-3">
        <button className="px-6 py-3 border-2 border-white text-white rounded-full  hover:text-green-600 hover:border-green-600 transition duration-300 ease-in-out">
          {buttonText1}
        </button>
        <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-white hover:text-green-600 transition duration-300 ease-in-out">
          {buttonText2}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
