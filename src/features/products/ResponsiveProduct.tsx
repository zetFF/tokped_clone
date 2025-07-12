"use client";

import React from "react";
import ProductDesktop from "./Desktop/Product";
import ProductMobile from "./Mobile/Product";

function ResponsiveProduct() {
  return (
    <div className="w-full">
      {/* Desktop Product */}
      <div className="hidden lg:block">
        <ProductDesktop />
      </div>

      {/* Mobile Product */}
      <div className="block lg:hidden">
        <ProductMobile />
      </div>
    </div>
  );
}

export default ResponsiveProduct;
