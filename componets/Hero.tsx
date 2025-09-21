"use client";
import React, { useEffect, useState } from "react";

const images = [
  // "/images/logo.png",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img10.jpg",
  "/images/img11.jpg",
  "/images/img14.jpg",
  "/images/img15.jpg",
  "/images/img18.jpg",
  "/images/img19.jpg",
  
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // auto-change every 30s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 10000); // 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full bg-center bg-cover transition-opacity duration-[2000ms] ease-in-out
            ${index === currentIndex ? "opacity-100 animate-zoomInOut" : "opacity-0"}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      {/* Overlay for dimming */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          GT Handy Projects
        </h1>
        <p className="text-lg md:text-2xl text-white">
          Your Trusted Partner in Construction & Maintenance
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition">
          REQUEST QUOTE
        </button>
      </div>
    </section>
  );
};

export default Hero;
