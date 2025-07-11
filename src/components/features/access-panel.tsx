"use client";

import { useState, useEffect, type FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/common/carousel";
import React from "react";
import { Product } from "../../types/type"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/common/tabs";
import AccessOption from "../common/access-option"; 
import { items, icons, iconColors } from "../../lib/constants/data";

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
    <div className="w-full max-w-xl">
      <h1 className="text-xl font-semibold tracking-tight mb-4 text-gray-800">Kategori Pilihan</h1>
      <div className="rounded-xl bg-white p-4">
        <Carousel>
          <CarouselContent className="flex gap-1">
            {data.map((item: Product) => (
              <CarouselItem key={item.id} className="basis-[180px] shrink-0 grow-0">
                <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-gray-50">
                  <img src={item.image} alt={item.category} className="w-20 h-20 object-contain mb-2" />
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
    <div className="w-full max-w-xl py-3">
      <h1 className="text-xl font-semibold tracking-tight mb-4 text-gray-800">Pengaturan Akses</h1>
      <Tabs defaultValue="account" className="w-full border border-neutral-100 p-2 rounded-lg">
        <TabsList className="w-full bg-white ">
          {[
            { label: "Pulsa", value: "account" },
            { label: "Paket Data", value: "password" },
            { label: "Listrik PLN", value: "paketData" },
            { label: "Roaming", value: "roaming" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex-1 px-4 py-2 text-sm font-bold text-neutral-600 data-[state=active]:bg-white data-[state=active]:text-green-600 transition-all">
              {tab.label}
            </TabsTrigger>
          ))}
          <AccessOption />
        </TabsList>

        <div className="w-full h-[1px] bg-neutral-200"></div>

        <TabsContent value="account" className="mt-4">
          <p>Informasi akun kamu tampil di sini.</p>
        </TabsContent>
        <TabsContent value="password" className="mt-4">
          <p>Form untuk password akan ditampilkan di sini.</p>
        </TabsContent>
        <TabsContent value="paketData" className="mt-4">
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
    <div className="flex flex-wrap gap-3 mt-4">
      {items.map((item) => {
        const Icon = icons[item as keyof typeof icons];
        const colorClass = iconColors[item] || "text-gray-600";

        return (
          <div key={item} className="flex items-center gap-2 border p-3 rounded-2xl text-sm hover:bg-gray-100 transition-all">
            <Icon className={`w-4 h-4 ${colorClass}`} />
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
};

function AccessPanel() {
  return (
    <>
      <div className="mt-6 max-w-6xl rounded-xl shadow-sm p-3 mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-start">
          <QuickCategory />
          <QuickEvenRight />
        </div>
        <ChildPanel />
      </div>
    </>
  );
}

export default AccessPanel;
