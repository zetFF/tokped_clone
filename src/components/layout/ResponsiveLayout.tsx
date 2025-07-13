"use client";

import React from "react";
import TopNavDesktop from "./Desktop/TopNav";
import TopNavMobile from "./Mobile/TopNav";
import NavbarDesktop from "./Desktop/Navbar";
import NavbarMobile from "./Mobile/Navbar";
import FooterDesktop from "./Desktop/footer";
import FooterMobile from "./Mobile/footer";
import CustomCarouselDesktop from "../features/carousel/Carousel";
import AccessPanelDesktop from "../features/access-panel/AccessPanel";
import ProductDesktop from "../features/products/Product";
import CategorySliderMobile from "../features/category/CategorySlider";

function ResponsiveLayout() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50">
        <div className="hidden lg:block">
          <TopNavDesktop />
        </div>
        <div className="hidden">
          <TopNavMobile />
        </div>

        <div className="hidden lg:block">
          <NavbarDesktop />
        </div>
        <div className="block lg:hidden">
          <NavbarMobile />
        </div>
      </div>

      <div className="w-full">
        <div className="block lg:hidden">
          <CategorySliderMobile />
        </div>
      </div>

      <div className="w-full">
        <div className="block">
          <CustomCarouselDesktop />
        </div>
        <div className="hidden lg:block">
          <AccessPanelDesktop />
        </div>
        <div className="w-full">
          <div className="block">
            <ProductDesktop />
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <FooterDesktop />
      </div>
      <div className="block lg:hidden">
        <FooterMobile />
      </div>
    </div>
  );
}

export default ResponsiveLayout;
