"use client";

import React from "react";
import { MapPin, ChevronDown, SearchIcon } from "lucide-react";
import { Button } from "@/components/common/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/common/sheet";
import Link from "next/link";

interface AddressModalProps {
  currentLocation?: string;
}

const AddressModal: React.FC<AddressModalProps> = ({ currentLocation = "Jakarta Pusat" }) => {
  return (
    <Sheet>
      <div className="flex justify-end mb-5">
        <SheetTrigger asChild>
          <button aria-label="Change delivery address" className="flex items-center gap-2 px-6 cursor-pointer hover:opacity-80 transition-opacity">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">
              Dikirim ke <b>{currentLocation}</b>
            </span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </SheetTrigger>
      </div>

      <SheetContent side={undefined} className="rounded-lg p-6 h-[400px] flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed">
        <div className="space-y-6">
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold text-left">Mau kirim belanjaan kemana?</SheetTitle>
            <SheetDescription className="text-sm text-left">Biar pengalaman belanjamu lebih baik, pilih alamat dulu.</SheetDescription>
          </SheetHeader>

          <div className="flex items-center gap-4 p-4 border rounded-lg">
            <div className="flex-1">
              <h2 className="font-semibold">Masuk</h2>
              <p className="text-sm text-muted-foreground">Masuk dulu biar bisa memilih alamat pengirimanmu</p>
            </div>
            <Link href="/sign-up" passHref>
              <Button className="bg-green-600 hover:bg-green-700 font-semibold whitespace-nowrap">Masuk</Button>
            </Link>
          </div>

          <div className="space-y-2">
            <h2 className="font-semibold">Mau pakai cara lain?</h2>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input type="text" placeholder="Pilih Kota atau Kecamatan" className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:border-transparent text-sm" />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddressModal;
