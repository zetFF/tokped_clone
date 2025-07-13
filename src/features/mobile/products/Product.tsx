import React, { useEffect, useState } from "react";
import type { Product } from "@/types/type";

interface ProductData extends Product {
  title: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

function ProductMobile() {
  const [dataProduct, setDataProduct] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setDataProduct(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">All Products</h2>
        <div className="grid grid-cols-2 gap-3">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 h-24 rounded-lg mb-2"></div>
              <div className="bg-gray-200 h-3 rounded mb-1"></div>
              <div className="bg-gray-200 h-2 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">All Products</h2>
      <div className="grid grid-cols-2 gap-1">
        {dataProduct.map((item: ProductData) => (
          <div key={item.id} className="flex flex-col items-center text-center p-2 rounded-lg border border-neutral-100 bg-white transition-shadow cursor-pointer">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mb-2" />
            <h3 className="text-xs font-semibold text-gray-800 mb-1 line-clamp-2 h-8">{item.title}</h3>
            <div className="flex items-center gap-1">
              <p className="text-sm font-bold text-green-600 mb-1">${item.price}</p>
              <div className="flex items-center justify-center mb-1">
                <span className="text-yellow-500 text-xs">★</span>
                <span className="text-xs text-gray-600 ml-1">{item.rating.rate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductMobile;
