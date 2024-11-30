import React, { useCallback } from 'react';
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

const MainPage = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded", container);
  }, []);

  return (
    <main className="relative min-h-screen bg-black">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1
          },
          background: {
            color: {
              value: "#000000"
            }
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
        className="absolute top-0 left-0"
      />
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