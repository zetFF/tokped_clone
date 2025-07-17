"use client";

import React from "react";
import { SearchIcon } from "lucide-react";
import CartPopover from "@/components/common/header-wrapper/cart-popover";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Mail from "../../common/header-wrapper/mail";
import Notification from "../../common/header-wrapper/notification";
import Address from "../../features/address/address";

function WelcomeBar() {
 return (
  <div className="flex items-center gap-2 bg-white px-3 py-2 border-b border-neutral-100">
   <UserButton />
   <div className="flex-1">
    <div className="font-semibold text-sm leading-tight">Hai</div>
    <div className="text-xs text-neutral-500 leading-tight">Cek update di akunmu, yuk-</div>
   </div>
   <Button className="bg-green-600 hover:bg-green-700 font-bold px-6">Masuk</Button>
  </div>
 );
}

function NavbarMobile() {
 return (
  <>
   <SignedOut>
    {/* MOBILE NAVBAR FOR SIGNED OUT USERS */}
    <nav className="w-full bg-white px-2 py-2 border-b border-neutral-200">
     <div className="flex items-center gap-2 w-full">
      <div className="flex items-center flex-1 bg-white border border-neutral-900 rounded-md px-2 py-1">
       <SearchIcon className="text-neutral-400 w-4 md:w-5 mr-1" />
       <input
        aria-label="Cari di Tokopedia"
        type="text"
        placeholder="Cari di Tokopedia"
        className="flex-1 bg-transparent text-sm md:text-base font-semibold tracking-tight focus:outline-none"
       />
       <button className="ml-2 font-bold text-xs md:text-base px-2 md:px-3 py-1 rounded transition-colors">Cari</button>
      </div>
      <div className="flex items-center gap-1 md:gap-2">
       <Mail />
       <Notification />
       <CartPopover />
      </div>
     </div>
    </nav>
    <WelcomeBar />
   </SignedOut>

   <SignedIn>
    {/* MOBILE NAVBAR FOR SIGNED IN USERS */}
    <nav className="w-full bg-white px-2 py-2 border-b border-neutral-200">
     <div className="flex items-center gap-2 w-full">
      <div className="flex items-center flex-1 bg-white border border-neutral-300 rounded-md px-2 py-1">
       <SearchIcon className="text-neutral-400 w-4 md:w-5 mr-1" />
       <input
        aria-label="Cari di Tokopedia"
        type="text"
        placeholder="Cari di Tokopedia"
        className="flex-1 bg-transparent text-xs md:text-sm focus:outline-none"
       />
       <button className="ml-2 font-semibold text-xs md:text-sm text-green-700 hover:text-white hover:bg-green-600 px-2 md:px-3 py-1 rounded transition-colors">
        Cari
       </button>
      </div>
      <div className="hidden lg:block">
       <Mail />
      </div>
      <div className="flex items-center gap-1 md:gap-2">
       <Notification />
       <CartPopover />
      </div>
     </div>
     <div className="mt-2 flex -ml-6 -mb-5">
      <Address />
     </div>
    </nav>
   </SignedIn>
  </>
 );
}

export default NavbarMobile;
