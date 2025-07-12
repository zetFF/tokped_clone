import React from "react";
import { Smartphone } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

function TopNavMobile() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-neutral-100 px-2 py-1 gap-2 sm:gap-0">
      <Popover>
        <PopoverTrigger asChild>
          <p className="flex items-center text-black hover:text-white text-xs sm:text-sm bg-neutral-100 rounded-tr-3xl rounded-br-3xl p-1 px-3 sm:px-5 -ml-2 hover:bg-green-600 transition whitespace-nowrap">
            <Smartphone className="w-4 sm:w-5" />
            <b className="ml-1">Gratis Ongkir + Banyak promo </b>
            <span className="hidden xs:inline">belanja di aplikasi</span>
          </p>
        </PopoverTrigger>
        <PopoverContent></PopoverContent>
      </Popover>

      {/* Desktop menu */}
      <ul className="hidden sm:flex list-none gap-4 sm:gap-8 px-0 sm:px-5">
        {["Tentang Tokopedia", "Kebijakan Privasi", "Syarat dan Ketentuan", "Bantuan"].map((item, idx) => (
          <li key={idx}>
            <a href="#" className="hover:text-green-600 transition-all font-medium text-xs sm:text-sm text-neutral-500">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      <div className="flex sm:hidden w-full justify-end">
        <Popover>
          <PopoverTrigger asChild>
            <button className="text-neutral-500 text-xs px-2 py-1 border rounded-md">Menu</button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-40 p-2 bg-white rounded-lg shadow-lg z-50 relative">
            {/* Backdrop */}
            <div className="fixed inset-0 z-40" style={{ pointerEvents: "none" }} />
            <ul className="flex flex-col gap-2 relative z-50">
              {["Tentang Tokopedia", "Kebijakan Privasi", "Syarat dan Ketentuan", "Bantuan"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-green-600 transition-all font-medium text-xs text-neutral-500 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default TopNavMobile;
