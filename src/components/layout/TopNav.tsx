import React from "react";
import { Smartphone } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

function TopNav() {
  return (
    <>
      <div className="flex items-center justify-between bg-neutral-100">
        <Popover>
          <PopoverTrigger asChild>
            <p className="flex items-center text-black hover:text-white text-sm bg-neutral-100 rounded-tr-3xl rounded-br-3xl p-1 px-5 -ml-2 hover:bg-green-600 transition">
              <Smartphone className="w-5" />
              <b>Gratis Ongkir + Banyak promo </b>belanja di aplikasi
            </p>
          </PopoverTrigger>
          <PopoverContent></PopoverContent>
        </Popover>
        <ul className="flex list-none gap-8 px-5">
          {["Tentang Tokopedia", "Kebijakan Privasi", "Syarat dan Ketentuan", "Bantuan"].map((item, idx) => (
            <li key={idx}>
              <a href="#" className="hover:text-green-600 transition-all font-medium text-sm text-neutral-500">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TopNav;
