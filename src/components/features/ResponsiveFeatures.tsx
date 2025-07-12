"use client";

import React from "react";
import AccessPanelDesktop from "./Desktop/AccessPanel";
import AccessPanelMobile from "./Mobile/AccessPanel";
import CustomCarouselDesktop from "./Desktop/Carousel";
import CustomCarouselMobile from "./Mobile/Carousel";
import ResponsiveProduct from "@/features/products/ResponsiveProduct";

function ResponsiveFeatures() {
  return (
    <div className="w-full">
      {/* Carousel */}
      <div className="hidden lg:block">
        <CustomCarouselDesktop />
      </div>
      <div className="block lg:hidden">
        <CustomCarouselMobile />
      </div>

      {/* Access Panel */}
      <div className="hidden lg:block">
        <AccessPanelDesktop />
      </div>
      <div className="hidden">
        <AccessPanelMobile />
      </div>

      {/* Product Section */}
      <ResponsiveProduct />
    </div>
  );
}

export default ResponsiveFeatures;
