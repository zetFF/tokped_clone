import React from "react";
import { Tag, CreditCard, Shirt, Heart, Pill, Store, ShoppingCart } from "lucide-react";

const categories = [
  { label: "Promo\nHari Ini", icon: Tag, color: "text-red-500" },
  { label: "Top-Up &\nTagihan", icon: CreditCard, color: "text-blue-500" },
  { label: "Mall", icon: Store, color: "text-purple-500" },
  { label: "Fashion", icon: Shirt, color: "text-pink-500" },
  { label: "Beauty", icon: Heart, color: "text-rose-500" },
  { label: "Tokopedia\nFarma", icon: Pill, color: "text-green-500" },
  { label: "Beli Lagi", icon: ShoppingCart, color: "text-orange-500" },
];

function CategorySliderMobile() {
  return (
    <div className="w-full overflow-x-auto block lg:hidden mt-2">
      <div className="flex min-w-max">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[64px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 mb-1 shadow-sm">
              <cat.icon className={`w-6 h-6 ${cat.color}`} />
            </div>
            <span className="text-xs text-center leading-tight text-neutral-700 whitespace-pre-line font-medium">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySliderMobile;
  