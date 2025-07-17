"use client";

import { useState, useEffect, type FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import React from "react";
import { Product } from "../../../lib/types/type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccessOption from "../../common/access-option";
import { items, icons, iconColors } from "../../../lib/constants/access-panel/data";
import Pulsa from "./content/pulsa";
import PaketData from "./content/paket-data";
import Skeleton from "./skeleton";

const QuickCategory: FC = () => {
 const [data, setData] = useState<Product[]>([]);

 useEffect(() => {
  const getData = async () => {
   const apiUrl = process.env.NEXT_PUBLIC_FAKESTORE_API;
   if (!apiUrl) {
    console.error("API URL not set in environment variables");
    return;
   }
   const response = await fetch(apiUrl);
   const result = await response.json();
   setData(result);
  };
  getData();
 }, []);

 return (
  <div className="w-full max-w-xl mb-4">
   <h1 className="text-xl font-semibold tracking-tight text-gray-800">Kategori Pilihan</h1>
   <div className="rounded-xl bg-white p-4">
    {data.length === 0 ? <Skeleton /> : null}
    <Carousel>
     <CarouselContent className="flex">
      {data.map((item: Product) => (
       <CarouselItem key={item.id} className="basis-[140px] shrink-0 grow-0">
        <div className="flex flex-col items-center text-center p-4 rounded-lg h-36 border border-neutral-100 bg-white">
         <img src={item.image} alt={item.category} className="w-16 h-16 object-contain mb-2" />
         <p className="text-sm font-bold text-gray-700 capitalize">{item.category}</p>
        </div>
       </CarouselItem>
      ))}
     </CarouselContent>
    </Carousel>
   </div>
  </div>
 );
};

const QuickEvenRight: FC = () => {
 return (
  <div className="w-full max-w-xl">
   <div className="flex items-center justify-start gap-2">
    <h1 className="text-xl font-semibold tracking-tight text-gray-800">Top Up & Tagihan</h1>
    <p className="text-green-600 hover:text-green-700 text-sm font-semibold tracking-tight mt-1">Lihat Semua</p>
   </div>
   <Tabs defaultValue="pulsa" className="w-full border border-neutral-100 p-2 mt-4 rounded-lg">
    <TabsList className="w-full bg-white">
     {[
      { label: "Pulsa", value: "pulsa" },
      { label: "Paket Data", value: "paketData" },
      { label: "Listrik PLN", value: "listrikPLN" },
      { label: "Roaming", value: "roaming" },
     ].map((tab) => (
      <TabsTrigger
       key={tab.value}
       value={tab.value}
       className="flex-1 px-4 py-2 text-sm font-bold text-neutral-600 data-[state=active]:bg-white data-[state=active]:text-green-600 transition-all"
      >
       {tab.label}
      </TabsTrigger>
     ))}
     <AccessOption />
    </TabsList>
    <div className="w-full h-[1px] bg-neutral-200"></div>
    <TabsContent value="pulsa" className="mt-2">
     <Pulsa />
    </TabsContent>
    <TabsContent value="paketData" className="mt-2 ">
     <PaketData />
    </TabsContent>
    <TabsContent value="listrikPLN" className="mt-4">
     <p>Form untuk Paket Data akan ditampilkan di sini.</p>
    </TabsContent>
    <TabsContent value="roaming" className="mt-4">
     <p>Form untuk Roaming akan ditampilkan di sini.</p>
    </TabsContent>
   </Tabs>
  </div>
 );
};

const ChildPanel: FC = () => {
 return (
  <div className="flex flex-wrap gap-3">
   {items.map((item) => {
    const Icon = icons[item as keyof typeof icons];
    const colorClass = iconColors[item] || "text-gray-600";
    return (
     <div key={item} className="flex items-center gap-2 border py-2 px-3 rounded-2xl text-sm hover:bg-gray-100 transition-all">
      <Icon className={`w-4 h-4 ${colorClass}`} />
      <span>{item}</span>
     </div>
    );
   })}
  </div>
 );
};

function AccessPanelDesktop() {
 return (
  <div className="mt-6 max-w-6xl rounded-xl shadow-sm p-3 mx-auto">
   <div className="flex flex-row justify-center items-start gap-4">
    <QuickCategory />
    <QuickEvenRight />
   </div>
   <ChildPanel />
  </div>
 );
}

export default AccessPanelDesktop;
