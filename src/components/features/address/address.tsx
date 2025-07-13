import { SignedOut, SignedIn } from "@clerk/nextjs";
import React from "react";
import { MapPin, ChevronDown, SearchIcon, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

function address({ currentLocation = "Jakarta Pusat" }) {
  return (
    <>
      <div>
        <SignedOut>
          <Sheet>
            <div className="flex justify-end">
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

            <SheetContent
              side={undefined}
              className="rounded-lg p-3 sm:p-6 h-[320px] sm:h-[400px] flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed w-11/12 sm:w-auto">
              <div className="space-y-4 sm:space-y-6">
                <SheetHeader>
                  <SheetTitle className="text-base sm:text-lg font-semibold text-left">Mau kirim belanjaan kemana?</SheetTitle>
                  <SheetDescription className="text-xs sm:text-sm text-left">Biar pengalaman belanjamu lebih baik, pilih alamat dulu.</SheetDescription>
                </SheetHeader>

                <div className="space-y-1 sm:space-y-2">
                  <h2 className="font-semibold text-xs sm:text-base">Mau pakai cara lain?</h2>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="relative w-32 sm:w-auto">
                      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Pilih Kota atau Kecamatan"
                        className="w-full pl-8 sm:pl-10 pr-2 sm:pr-4 py-1.5 sm:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-100 focus:border-transparent text-xs sm:text-sm"
                      />
                    </div>
                    <Button className="disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-100 bg-neutral-100 hover:bg-neutral-100 text-neutral-500 font-bold text-xs sm:text-base">
                      Gunakan
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </SignedOut>
        <SignedIn>
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

            <SheetContent
              side={undefined}
              className="rounded-lg p-3 sm:p-6 h-[320px] sm:h-[400px] flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed w-11/12 sm:w-auto">
              <div className="space-y-4 sm:space-y-6">
                <SheetHeader>
                  <SheetTitle className="text-base sm:text-lg font-semibold text-left">Mau kirim belanjaan kemana?</SheetTitle>
                  <SheetDescription className="text-xs sm:text-sm text-left">Biar pengalaman belanjamu lebih baik, pilih alamat dulu.</SheetDescription>
                </SheetHeader>

                <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 border rounded-lg">
                  <div className="flex-1">
                    <h2 className="font-semibold text-xs sm:text-base">Masuk</h2>
                    <p className="text-xs sm:text-sm text-muted-foreground">Masuk dulu biar bisa memilih alamat pengirimanmu</p>
                  </div>
                  <Link href="/sign-up">
                    <Button className="bg-green-600 hover:bg-green-700 font-semibold whitespace-nowrap text-xs sm:text-base">Masuk</Button>
                  </Link>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <h2 className="font-semibold text-xs sm:text-base">Mau pakai cara lain?</h2>
                  <div className="relative w-32 sm:w-auto">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Pilih Kota atau Kecamatan"
                      className="w-full pl-8 sm:pl-10 pr-2 sm:pr-4 py-1.5 sm:py-2 border rounded-md focus:outline-none focus:border-transparent text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </SignedIn>
      </div>
    </>
  );
}

export default address;
