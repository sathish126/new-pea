import React, { useState } from 'react';
import { Camera, Grid, List, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImage, setSelectedImage] = useState(null);

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
        id: 12,
        src: "assets/img/gallery/Production Forum/IMG20241017174831.jpg",
        title: "Production Forum",
        description: "The Production Engineering Association and the Society of Manufacturing Engineers - Students' Chapter have successfully conducted the Production Forum as part of the PRO-FINITY series. "
    },
    {
        id: 13,
        src: "assets/img/gallery/RPL/1.jpeg",
        title: "RPL",
        description: "PEA and SME, in collaboration with Open Lab, present a challenge to design a line follower robot that can navigate a two-stage maze. "
    },
    {
        id: 14,
        src: "assets/img/gallery/RPL/2.jpeg",
        title: "RPL",
        description: "PEA and SME, in collaboration with Open Lab, present a challenge to design a line follower robot that can navigate a two-stage maze. "
    },
    {
        id: 15,
        src: "assets/img/gallery/RPL/3.jpeg",
        title: "RPL",
        description: "PEA and SME, in collaboration with Open Lab, present a challenge to design a line follower robot that can navigate a two-stage maze. "
    },
    {
        id: 16,
        src: "assets/img/gallery/RPL/4.jpeg",
        title: "RPL",
        description: "PEA and SME, in collaboration with Open Lab, present a challenge to design a line follower robot that can navigate a two-stage maze. "
    },
    {
        id: 17,
        src: "assets/img/gallery/RPL/5.jpeg",
        title: "RPL",
        description: "PEA and SME, in collaboration with Open Lab, present a challenge to design a line follower robot that can navigate a two-stage maze. "
    },
    
    
    // Add more images with their titles and descriptions
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-36">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <Camera className="h-8 w-8 text-yellow-500 animate-pulse" />
        <h1 className="text-4xl font-bold text-yellow-500">Gallery</h1>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-2 bg-gray-700 p-1 rounded-lg">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-all duration-300 ${
              viewMode === 'grid' ? 'bg-yellow-500 text-white' : 'text-gray-300 hover:bg-gray-600'
            }`}
          >
            <Grid className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-all duration-300 ${
              viewMode === 'list' ? 'bg-yellow-500 text-white' : 'text-gray-300 hover:bg-gray-600'
            }`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className={`
        ${viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          : 'flex flex-col gap-6'
        }
      `}>
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              className={`w-full ${viewMode === 'list' ? 'h-96' : 'h-64'} object-cover`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300">
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                <p className="text-white text-sm px-4 text-center">{image.description}</p>
                <ZoomIn className="text-yellow-500 mt-4 h-8 w-8 animate-bounce" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full relative transform transition-all duration-300 scale-95 hover:scale-100">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent rounded-b-lg">
              <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
              <p className="text-white/90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;