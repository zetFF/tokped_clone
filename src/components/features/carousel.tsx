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
    <div className="w-full max-w-6xl mt-10 mx-auto overflow-hidden">
      <Carousel opts={{ startIndex: currentIndex }}>
        <CarouselContent className="transition-transform duration-700">
          {carouselUrl.map((src, index) => (
            <CarouselItem key={index}>
              <img src={src} alt={`slide-${index}`} className="w-full h-[300px] object-cover rounded-xl" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
