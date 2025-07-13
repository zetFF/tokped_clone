"use client";

import React from "react";
import AccessPanelDesktop from "./access-panel/AccessPanel";
import CustomCarouselDesktop from "./carousel/Carousel";
import ResponsiveProduct from "@/components/features/ResponsiveProduct";

function ResponsiveFeatures() {
  return (
    <div className="w-full">
      <div className="block">
        <CustomCarouselDesktop />
      </div>
      <div className="hidden lg:block">
        <AccessPanelDesktop />
      </div>
      <ResponsiveProduct />
    </div>
  );
}

export default ResponsiveFeatures;
