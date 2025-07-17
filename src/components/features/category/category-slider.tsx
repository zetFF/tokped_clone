import React from "react";
import categories from "@/lib/constants/category/data";

function CategorySliderMobile() {
  return (
    <div className="w-full overflow-x-auto block lg:hidden mt-2 px-2">
      <div className="flex min-w-max">
        {categories.map((category, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[58px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 mb-1  overflow-hidden">
              <img
                src={category.image}
                alt={category.label}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs tracking-tight text-center leading-tight text-neutral-700 max-w-[64px] whitespace-pre-line font-medium">
              {category.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySliderMobile;