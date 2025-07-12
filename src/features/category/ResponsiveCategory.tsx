"use client";

import React from "react";
import CategorySliderDesktop from "./Desktop/CategorySlider";
import CategorySliderMobile from "./Mobile/CategorySlider";

function ResponsiveCategory() {
  return (
    <div className="w-full">
      {/* Desktop Category Slider */}
      <div className="hidden">
        <CategorySliderDesktop />
      </div>

      {/* Mobile Category Slider */}
      <div className="block lg:hidden">
        <CategorySliderMobile />
      </div>
    </div>
  );
}

export default ResponsiveCategory;
