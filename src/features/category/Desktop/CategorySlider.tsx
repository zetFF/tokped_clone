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

function CategorySliderDesktop() {
  return (
    <div className="w-full mt-4 hidden lg:block">
      <div className="flex justify-center gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[80px]">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-neutral-100 mb-2 shadow-sm hover:shadow-md transition-shadow">
              <cat.icon className="w-8 h-8 text-green-600" />
            </div>
            <span className="text-sm text-center leading-tight text-neutral-700 whitespace-pre-line font-medium">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySliderDesktop;
