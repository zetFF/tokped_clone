"use client";

import React from "react";
import ProductDesktop from "../../features/desktop/products/Product";
import ProductMobile from "../../features/mobile/products/Product";

function ResponsiveProduct() {
  return (
    <div className="w-full">
      <div className="hidden lg:block">
        <ProductDesktop />
      </div>

      <div className="block lg:hidden">
        <ProductMobile />
      </div>
    </div>
  );
}

export default ResponsiveProduct;
