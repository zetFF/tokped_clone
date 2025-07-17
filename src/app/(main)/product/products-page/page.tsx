"use client";

import React, { useEffect, useState } from "react";
import { ProductData } from "@/lib/types/type";
import SkeletonCard from "@/components/features/products/skeleton-card";

function ProductsPage() {
 const [dataProduct, setDataProduct] = useState<ProductData[]>([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchProducts = async () => {
   try {
    setLoading(true);
    const apiUrl = process.env.NEXT_PUBLIC_FAKESTORE_API || "";
    const response = await fetch(apiUrl);
    const result = await response.json();
    setDataProduct(result);
   } catch (error) {
    console.error("Error fetching products:", error);
   } finally {
    setLoading(false);
   }
  };
  fetchProducts();
 }, []);

 if (loading) {
  return <SkeletonCard />;
 }

 return (
  <div className="w-full max-w-6xl mx-auto mt-3">
   <h2 className="text-2xl font-bold mb-6 px-5 tracking-tight">All Products</h2>
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
    {dataProduct.map((item: ProductData) => (
     <div key={item.id} className="flex flex-col items-center text-center p-4 rounded-lg bg-white transition-all cursor-pointer">
      <img src={item.image} alt={item.title} className="w-32 h-32 object-contain mb-4" />
      <h3 className="text-xs font-medium text-gray-800 mb-2 line-clamp-2 h-10">{item.title}</h3>
      <div className="flex items-center gap-3">
       <p className="text-sm font-bold text-green-600">${item.price}</p>
       <div className="flex items-center text-xs">
        <span className="text-yellow-500">★</span>
        <span className="text-gray-600 ml-1">{item.rating?.rate || 0}</span>
        <span className="text-gray-400 ml-1">({item.rating?.count || 0})</span>
       </div>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}

export default ProductsPage;
