import React from 'react';
import ParticlesComponent from "./particles";

const MainPage = () => {
  return (
    <main className="relative min-h-screen bg-transparent">
      {/* Particles only for the main page */}
      <ParticlesComponent />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="font-bold text-white leading-tight font-goodBrush animate-bounceSlow">
            <span className="text-yellow-300 animate-colorShift text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[6vw] 2xl:text-[2.5vw]">
              P R O D O T H O N ' 2 5
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
