import React, { useState } from "react";
import WorkshopsCard from "./WorkshopsCard";

const Workshops = () => {
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
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading with Modern Typography */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight">
        Skill-Building Workshops
      </h1>

      {/* Workshops Cards Grid Section with Enhanced Spacing and Responsiveness */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {workshops.map((workshop, index) => (
          <div 
            key={index} 
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <WorkshopsCard
              title={workshop.title}
              description={workshop.description}
              imageUrl={workshop.imageUrl}
              buttonText1={workshop.buttonText1}
              buttonText2={workshop.buttonText2}
              googleFormUrl={workshop.googleFormUrl}
              showDescription={activeCardIndex === index}
              toggleDescription={() => toggleDescription(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshops;