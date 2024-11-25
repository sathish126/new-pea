import React, { useState } from "react";
import WorkshopsCard from "./WorkshopsCard"; // Import WorkshopsCard component

const Workshops = () => {
  // Array of workshops with Google Form URLs for registration
  const workshops = [
    {
      title: "AI Workshop",
      description: "Learn the fundamentals of AI in this hands-on workshop.",
      imageUrl: "/assets/sample.webp",
      buttonText1: "Explore",
      buttonText2: "Register",
      googleFormUrl: "https://forms.gle/aiWorkshopForm"
    },
    {
      title: "Web Development",
      description: "Build modern websites with React and Tailwind CSS.",
      imageUrl: "/assets/sample.webp",
      buttonText1: "Explore",
      buttonText2: "Register",
      googleFormUrl: "https://forms.gle/webDevWorkshopForm"
    },
    {
      title: "Cybersecurity Basics",
      description: "Understand the basics of cybersecurity and stay safe online.",
      imageUrl: "/assets/sample.webp",
      buttonText1: "Explore",
      buttonText2: "Register",
      googleFormUrl: "https://forms.gle/cybersecurityForm"
    },
    {
      title: "Data Science Crash Course",
      description: "A beginner's guide to data analysis and machine learning.",
      imageUrl: "/assets/sample.webp",
      buttonText1: "Explore",
      buttonText2: "Register",
      googleFormUrl: "https://forms.gle/dataScienceForm"
    }
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-400 min-h-screen p-6 md:p-8 lg:p-10">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800">
        Workshops
      </h1>

      {/* Workshops Cards Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {workshops.map((workshop, index) => (
          <WorkshopsCard
            key={index}
            title={workshop.title}
            description={workshop.description}
            imageUrl={workshop.imageUrl}
            buttonText1={workshop.buttonText1}
            buttonText2={workshop.buttonText2}
            googleFormUrl={workshop.googleFormUrl}
            showDescription={activeCardIndex === index}
            toggleDescription={() => toggleDescription(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Workshops;
