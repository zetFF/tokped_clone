import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ShoppingCartIcon } from "lucide-react";
import { cartUrl } from "../../../lib/constants/uri";

function CartPopover() {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <button aria-label="Cart" className="relative">
            <ShoppingCartIcon className="w-5 ml-4 mr-4 md:ml-0 md:mr-0" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="center" sideOffset={8} className="p-0 w-56 sm:w-[350px]">
          <div className="flex flex-col items-center justify-center p-3 sm:p-6">
            <img src={cartUrl} alt="Keranjang kosong" className="w-16 h-16 sm:w-28 sm:h-28 mb-2 sm:mb-4" />
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-center mb-1 sm:mb-2">Wah, keranjang belanjamu kosong</h2>
            <p className="text-neutral-500 text-center text-xs sm:text-sm tracking-tight mb-2 sm:mb-4">Yuk, isi dengan barang-barang impianmu!</p>
            <button className="px-4 sm:px-6 py-1.5 sm:py-2 border border-green-500 text-green-600 rounded-md font-semibold hover:bg-green-50 transition text-xs sm:text-base">Mulai Belanja</button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default CartPopover;
