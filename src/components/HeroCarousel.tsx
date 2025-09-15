'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import './HeroCarousel.css'

export default function HeroCarousel() {

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
      description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
      buttonText: "Try FLUX.1",
      backgroundImage: "bg-gradient-to-br from-amber-500 via-orange-500 to-red-600"
    },
    {
      id: 3,
      title: "OCELOT",
      subtitle: "medium-sized wild cat",
      description: "The ocelot (Leopardus pardalis) is a medium-sized spotted wild cat that reaches 40–50 cm (16–20 in) at the shoulders and weighs between 7 and 15.5 kg (15 and 34 lb) on average.",
      buttonText: "Try OCELOT",
      backgroundImage: "bg-gradient-to-br from-amber-500 via-yellow-400 to-orange-600"
    },
    {
      id: 4,
      title: "GRAY FOX",
      subtitle: "omnivorous mammal",
      description: "The gray fox (Urocyon cinereoargenteus), or grey fox, is an omnivorous mammal of the family Canidae, widespread throughout North America and Central America.",
      buttonText: "Try GRAY FOX",
      backgroundImage: "bg-gradient-to-br from-blue-200 via-gray-00 to-gray-600"
    },
    {
      id: 5,
      title: "PEQUOD",
      subtitle: "19th-century Nantucket whaling ship",
      description: "Pequod is a fictional 19th-century Nantucket whaling ship that appears in the 1851 novel Moby-Dick by American author Herman Melville.",
      buttonText: "Try PEQUOD",
      backgroundImage: "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="relative sm:pt-18 px-4 sm:pl-8 sm:pr-0 bg-white">



      {/* Swiper testing */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        pagination={{ clickable: true }}
        slideToClickedSlide
        loop={true}
        navigation={{
          prevEl: '.custom-swiper-prev',
          nextEl: '.custom-swiper-next',
        }}
        breakpoints={{
          640: { spaceBetween: 20, slidesPerView: 1 },
          641: { spaceBetween: 300, slidesPerView: 2 },
          1000: { spaceBetween: 550, slidesPerView: 2 }
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="sm:w-[60vw] w-full flex-shrink-0 mr-2] rounded-2xl pb-12">
              <div className={`relative h-64 sm:h-80 lg:h-[50vh] ${slide.backgroundImage} rounded-2xl overflow-hidden`}>
                {/* Background pattern overlay */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Decorative background elements */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>

                {/* Content */}
                <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                  {/* Top label */}
                  <div className="flex justify-between items-start">
                    <span className="uppercase bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 flex items-center justify-between w-full">
                    <div className="flex-1 w-fit items-center">
                      <h1 className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
                        {slide.title}
                      </h1>
                      <p className="lg:absolute lg:bottom-5 lg:left-10 lg:w-[70%] mt-4 text-white/90 text-sm sm:text-base lg:text-lg lg:pb-2 max-w-2xl leading-relaxed">
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
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-4xl font-semibold transition-colors text-sm sm:text-base cursor-pointer">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Swiper buttons */}
        <div className="flex absolute justify-between w-full sm:justify-center sm:w-fit bottom-[0] sm:right-8 gap-2 z-10">
          <button className={`custom-swiper-prev z-10 p-2 sm:p-3 bg-gray-100 hover:bg-white hover:shadow-md rounded-full transition-all cursor-pointer`}>
            <svg className="size-5 sm:size-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className={`custom-swiper-next z-10 p-2 sm:p-3 bg-gray-100 hover:bg-white hover:shadow-md rounded-full transition-all cursor-pointer`}>
            <svg className="size-5 sm:size-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Swiper>

    </section>
  )
}
