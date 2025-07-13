"use client";

import React from "react";
import { SearchIcon } from "lucide-react";
import CartPopover from "@/components/features/cart/CartPopover";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Mail from "../../common/email/mail";
import Notification from "../../common/notification";
import Address from "../../features/address/address";

function WelcomeBar() {
  return (
    <div className="flex items-center gap-2 bg-white px-3 py-2 border-b border-neutral-100">
      <UserButton />
      <div className="flex-1">
        <div className="font-semibold text-sm leading-tight">Hai</div>
        <div className="text-xs text-neutral-500 leading-tight">Cek update di akunmu, yuk-</div>
      </div>
      <Link href="/sign-in">
        <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-1 text-xs rounded-md">Masuk</Button>
      </Link>
    </div>
  );
}

function NavbarMobile() {
  return (
    <>
      <SignedOut>
        {/* MOBILE NAVBAR */}
        <nav className="w-full bg-white px-2 py-2 border-b border-neutral-200">
          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center flex-1 bg-white border border-neutral-300 rounded-md px-2 py-1">
              <SearchIcon className="text-neutral-400 w-5 mr-1" />
              <input aria-label="Cari di Tokopedia" type="text" placeholder="Cari di Tokopedia" className="flex-1 bg-transparent text-sm focus:outline-none" />
              <button className="ml-2 font-semibold text-sm text-green-700 hover:text-white hover:bg-green-600 px-3 py-1 rounded transition-colors">Cari</button>
            </div>
            <CartPopover />
          </div>
          <div className="mt-2 flex -ml-6 -mb-3">
            <Address />
          </div>
        </nav>
        <WelcomeBar />
      </SignedOut>

      <SignedIn>
        {/* MOBILE NAVBAR */}
        <nav className="w-full bg-white px-2 py-2 border-b border-neutral-200">
          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center flex-1 bg-white border border-neutral-300 rounded-md px-2 py-1">
              <SearchIcon className="text-neutral-400 w-5 mr-1" />
              <input aria-label="Cari di Tokopedia" type="text" placeholder="Cari di Tokopedia" className="flex-1 bg-transparent text-sm focus:outline-none" />
              <button className="ml-2 font-semibold text-sm text-green-700 hover:text-white hover:bg-green-600 px-3 py-1 rounded transition-colors">Cari</button>
            </div>
            <Mail />
            <Notification />
            <CartPopover />
          </div>
        </nav>
        <WelcomeBar />
      </SignedIn>
    </>
  );
}

export default NavbarMobile;
