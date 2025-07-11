import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ShoppingCartIcon } from "lucide-react";
import { cartUrl } from "@/lib/uri";

function CartPopover() {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <button aria-label="Cart" className="relative ml-5">
            <ShoppingCartIcon className="w-5" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="center" sideOffset={8} className="p-0 w-[350px]">
          <div className="flex flex-col items-center justify-center p-6">
            <img src={cartUrl} alt="Keranjang kosong" className="w-28 h-28 mb-4" />
            <h2 className="text-lg font-bold tracking-tight text-center mb-2">Wah, keranjang belanjamu kosong</h2>
            <p className="text-neutral-500 text-center text-sm tracking-tight mb-4">Yuk, isi dengan barang-barang impianmu!</p>
            <button className="px-6 py-2 border border-green-500 text-green-600 rounded-md font-semibold hover:bg-green-50 transition">Mulai Belanja</button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default CartPopover;
