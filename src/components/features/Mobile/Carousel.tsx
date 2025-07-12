"use client";

import React, { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/common/carousel";
import { carouselUrl } from "../../../lib/constants/uri";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CustomCarouselMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = carouselUrl.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    resetInterval();
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetInterval();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalSlides]);

  return (
    <div className="w-full mt-4 mx-auto relative group">
      <Carousel opts={{ startIndex: currentIndex }}>
        <CarouselContent className="transition-transform duration-700 gap-3">
          {carouselUrl.map((src, index) => (
            <CarouselItem key={index}>
              <div className="w-full h-[200px] overflow-hidden rounded-lg shadow-sm bg-neutral-100 flex items-center justify-center">
                <img src={src} alt={`slide-${index}`} className="w-full h-full object-cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous slide">
        <ChevronLeft className="w-4 h-4 text-gray-800" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next slide">
        <ChevronRight className="w-4 h-4 text-gray-800" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselUrl.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "bg-white w-4" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomCarouselMobile;
