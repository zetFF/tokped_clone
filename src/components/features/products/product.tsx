"use client";

import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductData } from "@/lib/types/type";
import SkeletonCard from "./skeleton-card";

function ProductDesktop() {
 const [dataProduct, setDataProduct] = useState<ProductData[]>([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchProducts = async () => {
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

  fetchProducts();
 }, []);

 const getFilteredProducts = (tabValue: string) => {
  switch (tabValue) {
   case "forHer":
    return dataProduct.filter((product) => product.category === "women's clothing" || product.category === "jewelery");
   case "forHim":
    return dataProduct.filter((product) => product.category === "men's clothing");
   case "forYou":
   default:
    return dataProduct;
  }
 };

 if (loading) {
  return <SkeletonCard />;
 }

 return (
  <div className="w-full max-w-6xl mx-auto mt-8 flex">
   <Tabs defaultValue="forYou" className="flex gap-6">
    <TabsList className="flex items-center gap-1 lg:gap-10 bg-white p-2 rounded-lg">
     {[
      { label: "For You", value: "forYou" },
      { label: "For Her", value: "forHer" },
      { label: "For Him", value: "forHim" },
      { label: "All Products", value: "allProducts" },
     ].map((tab) =>
      tab.value === "allProducts" ? (
       <button
        key={tab.value}
        onClick={() => {
         // Navigasi ke halaman products-page
         if (typeof window !== "undefined") {
          window.location.href = "/product/products-page";
         }
        }}
        className="w-full px-4 py-2 text-sm text-neutral-600 transition-all rounded-md text-left hover:bg-neutral-100"
        type="button"
       >
        {tab.label}
       </button>
      ) : (
       <TabsTrigger
        key={tab.value}
        value={tab.value}
        className="w-full px-4 py-2 text-sm  text-neutral-600 
                 data-[state=active]:font-semibold transition-all rounded-md text-left"
       >
        {tab.label}
       </TabsTrigger>
      )
     )}
    </TabsList>

    <div className="flex-1 mt-3">
     {["forYou", "forHer", "forHim"].map((tabValue) => (
      <TabsContent key={tabValue} value={tabValue} className="mt-0">
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {getFilteredProducts(tabValue).map((item: ProductData) => (
         <div
          key={item.id}
          className="flex flex-col items-center text-center p-4 rounded-lg bg-white 
                      transition-all cursor-pointer"
         >
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
      </TabsContent>
     ))}
    </div>
   </Tabs>
  </div>
 );
}

export default ProductDesktop;
