import React from 'react'

const Hero = () => {
  return (
    <div>
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('/your-image.jpg')] bg-center bg-cover animate-zoomOut"></div>
      </div>

      {/* Overlay for dimming */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-2xl text-white">
          Experience the magic as the world comes into focus
        </p>
      </div>
    </section>      
    </div>
  )
}

export default Hero
