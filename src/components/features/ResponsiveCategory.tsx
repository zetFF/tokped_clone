"use client";

import React from "react";
import CategorySliderMobile from "./category/CategorySlider";

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
