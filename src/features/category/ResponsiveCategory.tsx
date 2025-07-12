"use client";

import React from "react";
import CategorySliderMobile from "./Mobile/CategorySlider";

function ResponsiveCategory() {
  return (
    <div className="w-full">
      <div className="block lg:hidden">
        <CategorySliderMobile />
      </div>
    </div>
  );
}

export default ResponsiveCategory;
