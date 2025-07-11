"use client";

import React from "react";
import { SearchIcon } from "lucide-react";
import { logoUrl } from "../../../lib/constants/uri";
import CartPopover from "@/features/cart/components/CartPopover";
import Link from "next/link";
import { Button } from "@/components/common/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import HeaderWrapper from "../../common/header-wrapper";
import AddressModal from "@/features/address/components/SignedOut/AddressModal";
import AddAddressModal from "@/features/address/components/SignedIn/add-address";
import Mail from "../../common/email/mail";
import Notification from "../../common/notification";

function WelcomeBar() {
  return (
    <div className="flex items-center gap-2 bg-white px-3 py-2 border-b border-neutral-100 sm:hidden">
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

function Navbar() {
  return (
    <>
      <SignedOut>
        {/* MOBILE NAVBAR */}
        <nav className="w-full bg-white px-2 py-2 border-b border-neutral-200 sm:hidden">
          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center flex-1 bg-white border border-neutral-300 rounded-md px-2 py-1">
              <SearchIcon className="text-neutral-400 w-5 mr-1" />
              <input aria-label="Cari di Tokopedia" type="text" placeholder="Cari di Tokopedia" className="flex-1 bg-transparent text-sm focus:outline-none" />
              <button className="ml-2 font-semibold text-sm text-green-700 hover:text-white hover:bg-green-600 px-3 py-1 rounded transition-colors">Cari</button>
            </div>
            <CartPopover />
          </div>
        </nav>
        <WelcomeBar />
        {/* DESKTOP NAVBAR */}
        <nav className="w-full bg-whit px-3 sm:px-7 py-3  border-neutral-200 hidden sm:block">
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
              <CartPopover />
              <Link href="/sign-in">
                <Button
                  className="font-semibold tracking-tight border border-green-600 text-green-600 hover:text-white hover:bg-green-600 px-4 py-2 text-xs sm:text-sm transition-colors"
                  variant="outline"
                >
                  masuk
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-green-600 hover:bg-green-700 tracking-tight font-semibold px-4 py-2 text-xs sm:text-sm transition-colors">Daftar</Button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="hidden lg:block">
          <AddressModal />
        </div>
      </SignedOut>

      <SignedIn>
        {/* MOBILE NAVBAR */}
        <nav className="w-full bg-white px-2 py-2 border-b border-neutral-200 sm:hidden">
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
        {/* DESKTOP NAVBAR */}
        <nav className="w-full bg-whit px-3 sm:px-7 py-3 border-b border-neutral-200 hidden sm:block">
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
        <div className="hidden lg:block">
          <AddAddressModal />
        </div>
      </SignedIn>
    </>
  );
}

export default Navbar;
