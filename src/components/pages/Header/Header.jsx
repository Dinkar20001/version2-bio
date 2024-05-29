import React, { useState, useEffect } from "react";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  // Sample data for each slide
  const slides = [
    {
      imageUrl:
        "https://www.peptidesciences.com/media/wysiwyg/5amino1mq_50mg-2.webp",
      title: "INDIAN Made Products",
      subtitle: "Purchase Peptides",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      buttonText: "Shop now",
      addresscart: "https://www.npmjs.com/package/react-icons",
    },
    {
      imageUrl:
        "https://www.peptidesciences.com/media/wysiwyg/Capsules_1_.webp",
      title: "Quality Capsules",
      subtitle: "Find Your Supplements",
      description: "High-quality supplements for all your needs.",
      buttonText: "Browse now",
      addresscart: "/",
    },
    {
      imageUrl: "https://www.peptidesciences.com/media/wysiwyg/Blends_1_.webp",
      title: "Exclusive Blends",
      subtitle: "Perfect Combinations",
      description: "Blended for your specific needs.",
      buttonText: "Discover blends",
      addresscart: "/",
    },
    {
      imageUrl:
        "https://www.peptidesciences.com/media/wysiwyg/free_ship_img.webp",
      title: "Free Shipping",
      subtitle: "On All Orders",
      description: "Enjoy free shipping on all orders.",
      buttonText: "Start shopping",
      addresscart: "/",
    },
    {
      imageUrl:
        "https://www.peptidesciences.com/media/wysiwyg/5amino1mq_50mg-2.webp",
      title: "Premium Quality",
      subtitle: "Best in the Market",
      description: "Our products are the best in the market.",
      buttonText: "Shop premium",
      addresscart: "/",
    },
  ];

  return (
    <>
      <section className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto mt-5 md:mt-0 md:text-left text-center">
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96 mt-20 md:mt-0">
            {/* Iterate over slides */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`duration-900 ease-in-out ${
                  index === currentSlide ? "" : "hidden"
                }`}
                data-carousel-item
              >
                <img
                  src={slide.imageUrl}
                  className="absolute block -translate-y-1/2 top-1/2 w-72 h-auto md:right-40 left-1/2 transform md:translate-x-0 -translate-x-1/2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="absolute w-full bottom-20 px-16">
            <div className="cursor-pointer">
              <h1 className="text-3xl mb-2 font-bold text-orange-600">
                {slides[currentSlide].title}
              </h1>
              <h3 className="text-2xl mb-1">{slides[currentSlide].subtitle}</h3>
              <p className="mt-1 mb-4">{slides[currentSlide].description}</p>
              <a href={slides[currentSlide].addresscart}>
                <button
                  type="button"
                  className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
                >
                  {slides[currentSlide].buttonText}
                </button>
              </a>
            </div>
          </div>

          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={handlePrevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={handleNextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
