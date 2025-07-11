import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/common/popover"; 
import { Mail } from "lucide-react"; 

function mail() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button aria-label="Cart" className="relative">
          <Mail className="w-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="center" sideOffset={8} className=" w-[150px] grid gap-1 list-none text-xs p-2">
        {["Chat", "Email", "Pesan Bantuan", "Pesan Dikomplain"].map((item, idx) => (
          <li key={idx} className="hover:bg-neutral-100 px-1 py-1 rounded-sm">
            <a href="">{item}</a>
          </li>
        ))}
      </PopoverContent>
    </Popover>
  );
}

export default mail;
