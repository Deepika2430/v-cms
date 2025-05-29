import React, { useState, useRef, useEffect, useCallback } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import InnovatorCard, { InnovatorCardProps } from "./InnovatorCard";

interface InnovatorCarouselProps {
  cards: InnovatorCardProps[];
}

const AUTOPLAY_INTERVAL = 1000;

const InnovatorCarousel: React.FC<InnovatorCarouselProps> = ({ cards }) => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [pause, setPause] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 1,
        },
      },
    },
    created(slider) {
      setSlidesPerView(slider.options.slides?.perView || 1);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    dragStarted() {
      stopAutoplay();
      setPause(true);
    },
  });

  const stopAutoplay = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    if (!pause && instanceRef.current) {
      timer.current = setInterval(() => {
        instanceRef.current?.next();
      }, AUTOPLAY_INTERVAL);
    }
  }, [pause, instanceRef]);

  // Restart autoplay whenever pause changes to false
  useEffect(() => {
    if (!pause) startAutoplay();
    else stopAutoplay();
  }, [pause, startAutoplay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => stopAutoplay();
  }, []);

  const handleMouseEnter = () => {
    setPause(true);
  };

  const handleMouseLeave = () => {
    setPause(false);
  };

//   const totalDots = instanceRef.current
//     ? Math.ceil(
//         cards.length / (instanceRef.current.options.slides?.perView || 1)
//       )
//     : 0;
    const totalDots = cards.length

  return (
    <div
      className="relative overflow-hidden mx-24 px-10 w-full max-w-screen-lg py-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ boxSizing: "border-box" }}
    >
      <div
        ref={sliderRef}
        className="keen-slider pl-2 pr-2 w-full max-w-screen-lg"
        style={{ boxSizing: "border-box" }}
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="keen-slider__slide box-border p-2"
            style={{ minWidth: 0, boxSizing: "border-box" }}
          >
            <InnovatorCard {...card} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      {instanceRef.current && (
  <>
    {/* Left Arrow */}
    <button
      onClick={() => instanceRef.current?.prev()}
      className="absolute top-1/2 -translate-y-1/2 -left-1 z-10 p-0 focus:outline-none focus:ring-0"
      aria-label="Previous Slide"
    >
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" />
      </svg>
    </button>

    {/* Right Arrow */}
    <button
      onClick={() => instanceRef.current?.next()}
      className="absolute top-1/2 -translate-y-1/2 -right-1 p-0 z-50 focus:outline-none focus:ring-0"
      aria-label="Next Slide"
    >
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-gray-400 hover:text-gray-600 rotate-180 transition-colors"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" />
      </svg>
    </button>
  </>
)}

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalDots }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToSlideRelative(idx)}
            className={`rounded-full p-1 transition-colors ${
              Math.floor(currentSlide / slidesPerView) === idx
                ? "bg-blue-500"
                : "bg-gray-300"
            }`}
            aria-label={`Go to page ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default InnovatorCarousel;
