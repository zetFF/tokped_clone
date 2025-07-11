import React from "react";
import { Tag, CreditCard, Shirt, Heart, Pill, Store, ShoppingCart } from "lucide-react";

const categories = [
  { label: "Promo\nHari Ini", icon: Tag },
  { label: "Top-Up &\nTagihan", icon: CreditCard },
  { label: "Mall", icon: Store },
  { label: "Fashion", icon: Shirt },
  { label: "Beauty", icon: Heart },
  { label: "Tokopedia\nFarma", icon: Pill },
  { label: "Beli Lagi", icon: ShoppingCart },
];

function CategorySlider() {
  return (
    <div className="w-full overflow-x-auto block sm:hidden mt-2">
      <div className="flex min-w-max">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[64px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 mb-1 shadow-sm">
              <cat.icon className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-xs text-center leading-tight text-neutral-700 whitespace-pre-line font-medium">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySlider;
