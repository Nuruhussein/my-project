import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import image1 from "../assets/quran.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { FaChevronRight } from "react-icons/fa6";

function Landing() {
  const slides = [{ url: image1 }, { url: image2 }, { url: image3 }];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Change slide every 10 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const slideVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="max-w-screen-2xl w-screen mx-auto h-[680px] mb-20 pb-4 relative group">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.2)), url(${slides[currentIndex].url})`,
          }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        />
      </AnimatePresence>
      <div className="relative w-full h-full flex flex-col justify-center items-center text-center z-10">
        <TypeAnimation
          sequence={[
            "Al Mehdi Qur'anic and \n Terbiya Center",
            1500,
            "contact us \n now",
            1500,
          ]}
          wrapper="h2"
          speed={10}
          repeatDelay={1000}
          cursor={false}
          style={{ whiteSpace: "pre-line", height: "195px", display: "block" }}
          className="font-bold text-white sm:text-[48px] text-[40px] leading-[56.8px] font-poppins"
          repeat={Infinity}
        />
        <div className="sm:flex-row flex flex-col">
          <button
            type="button"
            className="py-2 mx-3 text-white my-2 px-9 font-medium text-[18px] bg-sky-500 rounded-[40px] outline-none"
          >
            <Link to="about">About us</Link>
          </button>
          <button
            type="button"
            className="py-2 my-2 cursor-pointer flex flex-row group justify-center items-center text-white mx-3 px-9 font-medium text-[18px] bg-black hover:bg-white hover:text-black rounded-[40px] outline-none"
          >
            <Link to="contact">
              <p>get contact</p>
            </Link>
            <div className="hidden group-hover:block">
              <FaChevronRight />
            </div>
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Navigation Dots */}
      <div className="flex top-4 justify-center py-2 z-10">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-4xl hover:text-6xl text-slate-300 cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
