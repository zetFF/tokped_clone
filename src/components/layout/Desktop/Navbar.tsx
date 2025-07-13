"use client";

import React from "react";
import { SearchIcon } from "lucide-react";
import { logoUrl } from "../../../lib/constants/uri";
import CartPopover from "../../features/cart/CartPopover";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import HeaderWrapper from "../../common/header-wrapper";
import Address from "../../features/address/address";

function NavbarDesktop() {
  return (
    <>
      <SignedOut>
        {/* DESKTOP NAVBAR */}
        <nav className="w-full bg-white px-7 py-3 border-neutral-200">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex items-center">
              <img className="h-8" src={logoUrl} alt="Tokopedia Logo" />
              <span className="font-medium text-neutral-700 whitespace-nowrap ml-4">Kategori</span>
            </div>
            <div className="flex-1 mx-6">
              <div className="flex items-center w-full rounded-md border border-neutral-300 px-3 py-2 gap-3 focus-within:ring-2 focus-within:ring-green-200 bg-white transition">
                <SearchIcon className="text-neutral-400 w-5" />
                <input aria-label="Cari di Tokopedia" type="text" placeholder="Cari di Tokopedia" className="flex-1 bg-transparent text-sm focus:outline-none" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-5 flex items-center">
                <CartPopover />
              </div>
              <Link href="/sign-in">
                <Button className="font-semibold tracking-tight border border-green-600 text-green-600 hover:text-white hover:bg-green-600 px-4 py-2 text-sm transition-colors" variant="outline">
                  masuk
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-green-600 hover:bg-green-700 tracking-tight font-semibold px-4 py-2 text-sm transition-colors">Daftar</Button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="mt-2">
          <Address />
        </div>
      </SignedOut>

      <SignedIn>
        {/* DESKTOP NAVBAR */}
        <nav className="w-full bg-white px-7 py-2 border-b border-neutral-100">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex items-center">
              <img className="h-8" src={logoUrl} alt="Tokopedia Logo" />
              <span className="font-medium text-neutral-700 whitespace-nowrap ml-4">Kategori</span>
            </div>
            <div className="flex-1 mx-6">
              <div className="flex items-center w-full rounded-md border border-neutral-300 px-3 py-2 gap-3 focus-within:ring-2 focus-within:ring-green-200 bg-white transition">
                <SearchIcon className="text-neutral-400 w-5" />
                <input aria-label="Cari di Tokopedia" type="text" placeholder="Cari di Tokopedia" className="flex-1 bg-transparent text-sm focus:outline-none" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <HeaderWrapper />
              <UserButton appearance={{ elements: { userButtonBase: "flex items-center gap-2" } }} />
            </div>
          </div>
        </nav>
        <div className="mt-2">
          <Address />
        </div>
      </SignedIn>
    </>
  );
}

export default NavbarDesktop;
