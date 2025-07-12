"use client";

import { useState, useEffect, type FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/common/carousel";
import React from "react";
import { Product } from "../../../types/type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/common/tabs";
import AccessOption from "../../common/access-option";
import { items, icons, iconColors } from "../../../lib/constants/data";
import { Button } from "../../common/button";

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
    <div className="w-full mb-4">
      <h1 className="text-lg font-semibold tracking-tight text-gray-800">Kategori Pilihan</h1>
      <div className="rounded-xl bg-white p-2">
        <Carousel>
          <CarouselContent className="flex">
            {data.map((item: Product) => (
              <CarouselItem key={item.id} className="basis-1/2 shrink-0 grow-0">
                <div className="flex flex-col items-center text-center p-2 rounded-lg h-28 border border-neutral-100 bg-white">
                  <img src={item.image} alt={item.category} className="w-12 h-12 object-contain mb-2" />
                  <p className="text-xs font-bold text-gray-700 capitalize">{item.category}</p>
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
    <div className="w-full">
      <div className="flex items-center justify-start gap-2">
        <h1 className="text-lg font-semibold tracking-tight text-gray-800">Top Up & Tagihan</h1>
        <p className="text-green-600 hover:text-green-700 text-xs font-semibold tracking-tight mt-1">Lihat Semua</p>
      </div>
      <Tabs defaultValue="account" className="w-full border border-neutral-100 p-1 mt-2 rounded-lg">
        <TabsList className="w-full bg-white">
          {[
            { label: "Pulsa", value: "account" },
            { label: "Paket Data", value: "password" },
            { label: "Listrik PLN", value: "paketData" },
            { label: "Roaming", value: "roaming" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex-1 px-2 py-1 text-xs font-bold text-neutral-600 data-[state=active]:bg-white data-[state=active]:text-green-600 transition-all">
              {tab.label}
            </TabsTrigger>
          ))}
          <AccessOption />
        </TabsList>
        <div className="w-full h-[1px] bg-neutral-200"></div>
        <TabsContent value="account" className="mt-2">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-semibold text-neutral-500 tracking-tight">Nomor Telepon</label>
              <input type="text" className="p-2 w-full rounded-sm text-xs border bg-white border-neutral-200 focus:outline-none" placeholder="Masukan Nomor" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-semibold text-neutral-500 tracking-tight">Nominal</label>
              <div className="flex gap-2">
                <input type="text" className="p-2 w-full rounded-sm text-xs border bg-white border-neutral-200 focus:outline-none" />
                <Button className="bg-neutral-400 px-3 py-2 text-xs">Beli</Button>
              </div>
            </div>
          </div>
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
    <div className="flex flex-wrap gap-2 mt-4">
      {items.map((item) => {
        const Icon = icons[item as keyof typeof icons];
        const colorClass = iconColors[item] || "text-gray-600";
        return (
          <div key={item} className="flex items-center gap-1 border py-1 px-2 rounded-2xl text-xs hover:bg-gray-100 transition-all">
            <Icon className={`w-4 h-4 ${colorClass}`} />
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
};

function AccessPanelMobile() {
  return (
    <div className="mt-6 max-w-6xl rounded-xl shadow-sm p-2 mx-auto">
      <div className="flex flex-col justify-center items-start gap-0">
        <QuickCategory />
        <QuickEvenRight />
      </div>
      <ChildPanel />
    </div>
  );
}

export default AccessPanelMobile;
