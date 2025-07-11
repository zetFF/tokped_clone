"use client";

import React, { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/common/carousel";
import { carouselUrl } from "../../lib/constants/uri";

function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = carouselUrl.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalSlides]);

  return (
    <div className="w-full max-w-6xl mt-7 mx-auto">
      <Carousel opts={{ startIndex: currentIndex }}>
        <CarouselContent className="transition-transform duration-700 gap-3 sm:gap-5">
          {carouselUrl.map((src, index) => (
            <CarouselItem key={index}>
              <div className="w-full h-[300px] lg:h-[300px] overflow-hidden rounded-lg sm:rounded-xl shadow-sm bg-neutral-100 flex items-center justify-center">
                <img src={src} alt={`slide-${index}`} className="w-full h-full object-cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
