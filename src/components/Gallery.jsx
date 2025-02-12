import React, { useState, useEffect } from 'react';
import { Camera, Grid, List } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import ParticlesComponent from './particles';
import LazyImage from './LazyImage'; // Import the LazyImage component

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Scroll progress using Framer Motion hooks
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const galleryImages = [
    {
      "id": 1,
      "src": "assets/img/gallery/nan1.jpeg",
      "title": "Inaguration"
    },
    {
      "id": 1,
      "src": "assets/img/gallery/nan2.jpeg",
      "title": "Inaguration"
    },
          {
        "id": 1,
        "src": "assets/img/gallery/prodthon24/1.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 2,
        "src": "assets/img/gallery/prodthon24/2.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 3,
        "src": "assets/img/gallery/prodthon24/3.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 4,
        "src": "assets/img/gallery/prodthon24/4.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 5,
        "src": "assets/img/gallery/prodthon24/5.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 6,
        "src": "assets/img/gallery/prodthon24/6.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 7,
        "src": "assets/img/gallery/prodthon24/7.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 8,
        "src": "assets/img/gallery/prodthon24/8.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 9,
        "src": "assets/img/gallery/prodthon24/9.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 10,
        "src": "assets/img/gallery/prodthon24/10.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 11,
        "src": "assets/img/gallery/prodthon24/11.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 12,
        "src": "assets/img/gallery/prodthon24/12.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 13,
        "src": "assets/img/gallery/prodthon24/13.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 14,
        "src": "assets/img/gallery/prodthon24/14.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 15,
        "src": "assets/img/gallery/prodthon24/15.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 16,
        "src": "assets/img/gallery/prodthon24/16.jpeg",
        "title": "Prodothon'24"
      },
      {
        "id": 17,
        "src": "assets/img/gallery/prodthon24/17.jpeg",
        "title": "Prodothon'24"
      },
      
      {
        "id": 19,
        "src": "/assets/img/gallery/Tech talk Start Up Syndrome/IMG_7591.jpeg",
        "title": "Tech Talk: Start Up Syndrome"
      },
      {
        "id": 20,
        "src": "/assets/img/gallery/Tech sprint/IMG_20241018_184310_901.jpg",
        "title": "Tech Sprint"
      },
      {
        "id": 21,
        "src": "/assets/img/gallery/Tech sprint/1000121775.jpg",
        "title": "Tech Sprint"
      },
      {
        "id": 22,
        "src": "/assets/img/gallery/Tech sprint/IMG_20241018_170847_133.jpg",
        "title": "Tech Sprint"
      },
      {
        "id": 23,
        "src": "/assets/img/gallery/Tech sprint/1000121845.jpg",
        "title": "Tech Sprint"
      },
      {
        "id": 24,
        "src": "assets/img/gallery/Production Forum/IMG-20241018-WA0001.jpg",
        "title": "Production Forum"
      },
      {
        "id": 25,
        "src": "assets/img/gallery/Production Forum/IMG20241017172018.jpg",
        "title": "Production Forum"
      },
      {
        "id": 26,
        "src": "assets/img/gallery/Production Forum/IMG20241017172356.jpg",
        "title": "Production Forum"
      },
      {
        "id": 27,
        "src": "assets/img/gallery/Production Forum/IMG20241017174831.jpg",
        "title": "Production Forum"
      },
      {
        "id": 28,
        "src": "assets/img/gallery/RPL/1.jpeg",
        "title": "RPL"
      },
      {
        "id": 29,
        "src": "assets/img/gallery/RPL/2.jpeg",
        "title": "RPL"
      },
      {
        "id": 30,
        "src": "assets/img/gallery/RPL/3.jpeg",
        "title": "RPL"
      },
      {
        "id": 31,
        "src": "assets/img/gallery/RPL/4.jpeg",
        "title": "RPL"
      },
      {
        "id": 32,
        "src": "assets/img/gallery/RPL/5.jpeg",
        "title": "RPL"
      },
      {
        "id": 35,
        "src": "assets/img/gallery/Lean-O-Flex/1.jpg",
        "title": "Lean-O-Flex"
      },
      {
        "id": 36,
        "src": "assets/img/gallery/Lean-O-Flex/2.jpg",
        "title": "Lean-O-Flex"
      },
      {
        "id": 37,
        "src": "assets/img/gallery/Neophytes/1.JPG",
        "title": "Neophytes"
      },
      {
        "id": 38,
        "src": "assets/img/gallery/Neophytes/2.JPG",
        "title": "Neophytes"
      },
      {
        "id": 39,
        "src": "assets/img/gallery/Neophytes/4.JPG",
        "title": "Neophytes"
      }
    ];
    

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
        {/* Smooth Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-2 bg-yellow-500 z-50"
          style={{ scaleX }}
        />
  
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-romanSD text-yellow-500 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-500 to-purple-500 animate-gradient-x">
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
                <LazyImage
                  src={image.src}
                  alt={image.title}
                  className={`w-full ${viewMode === 'list' ? 'h-48 sm:h-64 md:h-80 lg:h-96' : 'h-48 sm:h-56 md:h-64 lg:h-72'} object-cover`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 p-4">
                    <h3 className="text-white text-lg sm:text-xl font-bold text-center">{image.title}</h3>
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