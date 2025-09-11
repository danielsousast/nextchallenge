'use client'

import { useState } from 'react'

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "WAN 2.2",
      subtitle: "NEW IMAGE MODEL",
      description: "WAN 2.2 Image generation. Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
      backgroundImage: "bg-gradient-to-br from-purple-500 via-pink-500 to-red-500"
    },
    {
      id: 2,
      title: "FLUX.1 Krea",
      subtitle: "OPEN SOURCE MODEL",
      description: "FLUX.1 Krea. We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
      buttonText: "Try FLUX.1",
      backgroundImage: "bg-gradient-to-br from-amber-500 via-orange-500 to-red-600"
    }
  ]

  return (
    <section className="relative py-8 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Navigation arrows */}
        <button 
          onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel container */}
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <div className={`relative h-64 sm:h-80 lg:h-96 ${slide.backgroundImage} rounded-2xl overflow-hidden shadow-2xl`}>
                  {/* Background pattern overlay */}
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Decorative background elements */}
                  <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                    {/* Top label */}
                    <div className="flex justify-between items-start">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 flex items-center justify-between">
                      <div className="flex-1">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">
                          {slide.title}
                        </h1>
                        <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="hidden lg:block ml-4 lg:ml-8">
                        <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white/10 rounded-full flex items-center justify-center">
                          <div className="w-16 h-16 lg:w-24 lg:h-24 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/30 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom button */}
                    <div className="flex justify-end">
                      <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-gray-800 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
