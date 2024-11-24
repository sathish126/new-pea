import React from "react";

const WorkshopsCard = ({ title, description, imageUrl, buttonText1, buttonText2, showDescription, toggleDescription, googleFormUrl }) => {
  const handleRegisterClick = () => {
    window.location.href = googleFormUrl; // Redirect to the Google Form
  };

  return (
    <div className="relative bg-transparent border border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <img src={imageUrl} alt={title} className="w-full h-88 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300" />

      {/* Workshop Title and Description */}
      <div className="p-5 absolute inset-0 flex flex-col justify-between items-center bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-60 rounded-xl">
        <h3 className="text-xl font-semibold text-white text-center">{title}</h3>

        {/* Show description if showDescription is true */}
        {showDescription && <p className="mt-2 text-gray-200 text-center">{description}</p>}

        {/* Buttons */}
        <div className="flex justify-between mt-4 w-full">
          <button
            onClick={toggleDescription}
            className="px-4 py-2  text-white rounded-lg  transition-colors duration-300"
          >
            {buttonText1}
          </button>
          <button
            onClick={handleRegisterClick}
            className="px-4 py-2  text-white rounded-lg transition-colors duration-300"
          >
            {buttonText2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopsCard;
