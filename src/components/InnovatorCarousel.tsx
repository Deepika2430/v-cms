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
          spacing: 15,
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

  const totalDots = Math.ceil(cards.length / slidesPerView);

  return (
    <div
      className="relative overflow-hidden pt-2 md:py-20 max-w-screen-xl mx-auto px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ boxSizing: "border-box" }}
    >
      <div
        ref={sliderRef}
        className="keen-slider w-full"
        style={{ boxSizing: "border-box" }}
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="keen-slider__slide box-border px-2"
            style={{ minWidth: 0, boxSizing: "border-box" }}
          >
            <InnovatorCard {...card} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      {instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
            aria-label="Previous Slide"
          >
            ◀
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
            aria-label="Next Slide"
          >
            ▶
          </button>
        </>
      )}

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalDots }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToSlideRelative(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
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
