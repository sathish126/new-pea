import React, { useState, useEffect } from 'react';
import { Camera, ZoomIn, Grid, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticlesComponent from './particles';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const galleryImages = [
    {
      id: 1,
      src: "/assets/img/gallery/Tech talk Start Up Syndrome/IMG_7546.jpeg",
      title: "Tech talk Start Up Syndrome",
      description: "The  Tech  Talk  Start-up  Syndrome  was  conducted  on  27  th  of  December 2024  from  3.00  pm  to  4.30  pm  on  New  Admin  block.  The  guest speaker  of  this  Tech  Talk  is  Mr.YUVARAJ.E,  CO-FOUNDER  OF LIGTHS  INC"
    },
    {
      id: 2,
      src: "/assets/img/gallery/Tech talk Start Up Syndrome/IMG_7548.jpeg",
      title: "Tech talk Start Up Syndrome",
      description: "The  Tech  Talk  Start-up  Syndrome  was  conducted  on  27  th  of  December 2024  from  3.00  pm  to  4.30  pm  on  New  Admin  block.  The  guest speaker  of  this  Tech  Talk  is  Mr.YUVARAJ.E,  CO-FOUNDER  OF LIGTHS  INC"
    },
    {
      id: 3,
      src: "/assets/img/gallery/Tech talk Start Up Syndrome/IMG_7591.jpeg",
      title: "Tech talk Start Up Syndrome",
      description: "The  Tech  Talk  Start-up  Syndrome  was  conducted  on  27  th  of  December 2024  from  3.00  pm  to  4.30  pm  on  New  Admin  block.  The  guest speaker  of  this  Tech  Talk  is  Mr.YUVARAJ.E,  CO-FOUNDER  OF LIGTHS  INC"
    },
    {
        id: 4,
        src: "/assets/img/gallery/Tech sprint/1000121697.jpg",
        title: "Tech Sprint",
        description: "The goal of “TECHSPRINT” was to challenge students to research and present technical topics in an engaging and professional manner. "
    },
    {
        id: 5,
        src: "/assets/img/gallery/Tech sprint/IMG_20241018_184310_901.jpg",
        title: "Tech Sprint",
        description: "The goal of “TECHSPRINT” was to challenge students to research and present technical topics in an engaging and professional manner. "
    },
    {
        id: 6,
        src: "/assets/img/gallery/Tech sprint/1000121775.jpg",
        title: "Tech Sprint",
        description: "The goal of “TECHSPRINT” was to challenge students to research and present technical topics in an engaging and professional manner. "
    },
    {
        id: 7,
        src: "/assets/img/gallery/Tech sprint/IMG_20241018_170847_133.jpg",
        title: "Tech Sprint",
        description: "The goal of “TECHSPRINT” was to challenge students to research and present technical topics in an engaging and professional manner. "
    },
    {
        id: 8,
        src: "/assets/img/gallery/Tech sprint/1000121845.jpg",
        title: "Tech Sprint",
        description: "The goal of “TECHSPRINT” was to challenge students to research and present technical topics in an engaging and professional manner. "
    },
    {
        id: 9,
        src: "assets/img/gallery/Production Forum/IMG-20241018-WA0001.jpg",
        title: "Production Forum",
        description: "The Production Engineering Association and the Society of Manufacturing Engineers - Students' Chapter have successfully conducted the Production Forum as part of the PRO-FINITY series. "
    },
    {
        id: 10,
        src: "assets/img/gallery/Production Forum/IMG20241017170909.jpg",
        title: "Production Forum",
        description: "The Production Engineering Association and the Society of Manufacturing Engineers - Students' Chapter have successfully conducted the Production Forum as part of the PRO-FINITY series. "
    },
    {
        id: 11,
        src: "assets/img/gallery/Production Forum/IMG20241017172018.jpg",
        title: "Production Forum",
        description: "The Production Engineering Association and the Society of Manufacturing Engineers - Students' Chapter have successfully conducted the Production Forum as part of the PRO-FINITY series. "
    },
    {
        id: 12,
        src: "assets/img/gallery/Production Forum/IMG20241017172356.jpg",
        title: "Production Forum",
        description: "The Production Engineering Association and the Society of Manufacturing Engineers - Students' Chapter have successfully conducted the Production Forum as part of the PRO-FINITY series. "
    },
    {
        id: 13,
        src: "assets/img/gallery/Production Forum/IMG20241017174831.jpg",
        title: "Production Forum",
        description: "The Production Engineering Association and the Society of Manufacturing Engineers - Students' Chapter have successfully conducted the Production Forum as part of the PRO-FINITY series. "
    },
    {
        id: 14,
        src: "assets/img/gallery/RPL/1.jpeg",
        title: "RPL",
        description: "PEA and SME, in collaboration with Open Lab, present a challenge to design a line follower robot that can navigate a two-stage maze. "
    },
    {
        id: 15,
        src: "assets/img/gallery/RPL/2.jpeg",
        title: "RPL",
        description: "PEA and SME, in collaboration with Open Lab, present a challenge to design a line follower robot that can navigate a two-stage maze. "
    },
    {
        id: 16,
        src: "assets/img/gallery/RPL/3.jpeg",
        title: "RPL",
        description: "PEA and SME, in collaboration with Open Lab, present a challenge to design a line follower robot that can navigate a two-stage maze. "
    },
    {
        id: 17,
        src: "assets/img/gallery/RPL/4.jpeg",
        title: "RPL",
        description: "PEA and SME, in collaboration with Open Lab, present a challenge to design a line follower robot that can navigate a two-stage maze. "
    },
    {
        id: 18,
        src: "assets/img/gallery/RPL/5.jpeg",
        title: "RPL",
        description: "PEA and SME, in collaboration with Open Lab, present a challenge to design a line follower robot that can navigate a two-stage maze. "
    },
    {
        id: 19,
        src: "assets/img/gallery/Future of Manufacturing/1.JPG",
        title: "Future of Manufacturing",
        description: "  A  guest  lecture  on  “Future  of  Manufacturing:  Industry  4.0”  was  delivered  by  Mr.  Amol  Gadre, Head  -Operations,  L&T  MDBA  Missile  Systems  Limited  Powai  Campus,  Mumbai."
    },
    {
        id: 20,
        src: "assets/img/gallery/Future of Manufacturing/2.jpeg",
        title: "Future of Manufacturing",
        description: "  A  guest  lecture  on  “Future  of  Manufacturing:  Industry  4.0”  was  delivered  by  Mr.  Amol  Gadre, Head  -Operations,  L&T  MDBA  Missile  Systems  Limited  Powai  Campus,  Mumbai."
    },
    {
        id: 21,
        src: "assets/img/gallery/Future of Manufacturing/3.jpeg",
        title: "Future of Manufacturing",
        description: "  A  guest  lecture  on  “Future  of  Manufacturing:  Industry  4.0”  was  delivered  by  Mr.  Amol  Gadre, Head  -Operations,  L&T  MDBA  Missile  Systems  Limited  Powai  Campus,  Mumbai."
    },
    
    {
        id: 22,
        src: "assets/img/gallery/FUTURE OF PRODUCTION ENGINEERING/1.jpeg",
        title: "Future of Production Engineering",
        description: "  The guest lecture on The Future of Production Engineers,held on 19th September 2024, featured Mr. Kishore Haree Gopalakrishnan, Systems Engineer at Railistics GmbH, as the chief guest."
    },
    {
        id: 23,
        src: "assets/img/gallery/FUTURE OF PRODUCTION ENGINEERING/2.jpeg",
        title: "Future of Production Engineering",
        description: "  The guest lecture on The Future of Production Engineers,held on 19th September 2024, featured Mr. Kishore Haree Gopalakrishnan, Systems Engineer at Railistics GmbH, as the chief guest."
    },
    {
        id: 24,
        src: "assets/img/gallery/FUTURE OF PRODUCTION ENGINEERING/3.jpeg",
        title: "Future of Production Engineering",
        description: "  The guest lecture on The Future of Production Engineers,held on 19th September 2024, featured Mr. Kishore Haree Gopalakrishnan, Systems Engineer at Railistics GmbH, as the chief guest."
    },
    {
        id: 25,
        src: "assets/img/gallery/Lean-O-Flex/1.jpg",
        title: "Lean-O-Flex",
        description: "  This event focuses on applying the 5S methodology (Sort, Set in Order, Shine, Standardize, Sustain) to improve machine efficiency in lean manufacturing. "
    },
    {
        id: 26,
        src: "assets/img/gallery/Lean-O-Flex/2.jpg",
        title: "Lean-O-Flex",
        description: "  This event focuses on applying the 5S methodology (Sort, Set in Order, Shine, Standardize, Sustain) to improve machine efficiency in lean manufacturing. "
    },
    {
        id: 27,
        src: "assets/img/gallery/Lean-O-Flex/3.jpg",
        title: "Lean-O-Flex",
        description: "  This event focuses on applying the 5S methodology (Sort, Set in Order, Shine, Standardize, Sustain) to improve machine efficiency in lean manufacturing. "
    },
    {
        id: 28,
        src: "assets/img/gallery/Neophytes/1.JPG",
        title: "Neophytes",
        description: "  The Department of Production Engineering is proud to present Neophytes 24', a welcome event exclusively for the first-year students. "
    },
    {
        id: 29,
        src: "assets/img/gallery/Neophytes/2.JPG",
        title: "Neophytes",
        description: "  The Department of Production Engineering is proud to present Neophytes 24', a welcome event exclusively for the first-year students. "
    },
    {
        id: 30,
        src: "assets/img/gallery/Neophytes/4.JPG",
        title: "Neophytes",
        description: "  The Department of Production Engineering is proud to present Neophytes 24', a welcome event exclusively for the first-year students. "
    },

    
    // Add more images with their titles and descriptions
  ];
 // Preload images
 useEffect(() => {
  const loadImages = async () => {
    const imagePromises = galleryImages.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    await Promise.all(imagePromises);
    setImagesLoaded(true);
  };

  loadImages();
}, [galleryImages]);

return (
  <main className="relative min-h-screen overflow-hidden">
    {/* Particles background */}
    <ParticlesComponent />

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 py-36">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-4 mb-8"
      >
        <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500 animate-pulse" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-500 to-purple-500 animate-gradient-x">
          Gallery
        </h1>
      </motion.div>

      {/* View Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center mb-8"
      >
        <div className="flex gap-2 bg-gray-700 p-1 rounded-lg">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-all duration-300 ${
              viewMode === 'grid' ? 'bg-yellow-500 text-white' : 'text-gray-300 hover:bg-gray-600'
            }`}
          >
            <Grid className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-all duration-300 ${
              viewMode === 'list' ? 'bg-yellow-500 text-white' : 'text-gray-300 hover:bg-gray-600'
            }`}
          >
            <List className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`
          ${viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'
            : 'flex flex-col gap-4 sm:gap-6'
          }
        `}
      >
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => setSelectedImage(image)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image.src}
              alt={image.title}
              loading="lazy"
              className={`w-full ${viewMode === 'list' ? 'h-48 sm:h-64 md:h-80 lg:h-96' : 'h-48 sm:h-56 md:h-64 lg:h-72'} object-cover`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300">
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 p-4">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2 text-center">{image.title}</h3>
                <p className="text-white text-xs sm:text-sm px-2 sm:px-4 text-center line-clamp-3">{image.description}</p>
                <ZoomIn className="text-yellow-500 mt-2 sm:mt-4 h-6 w-6 sm:h-8 sm:w-8 animate-bounce" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="max-w-4xl w-full relative transform transition-all duration-300 scale-95 hover:scale-100"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/50 to-transparent rounded-b-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
                <p className="text-sm sm:text-base text-white/90">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </main>
);
};

export default Gallery;