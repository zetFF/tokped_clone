"use client";

import React from "react";
import { SearchIcon } from "lucide-react";
import { logoUrl } from "../../lib/constants/uri";
import CartPopover from "@/features/cart/components/CartPopover";
import Link from "next/link";
import { Button } from "@/components/common/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import HeaderWrapper from "../common/header-wrapper";
import AddressModal from "@/features/address/components/SignedOut/AddressModal";
import AddAddressModal from "@/features/address/components/SignedIn/add-address";

function Navbar() {
  return (
    <>
      <SignedOut>
        <div className="flex items-center justify-between py-3 bg-whit px-7">
          <div className="flex items-center gap-6 w-full">
            <div className="shrink-0">
              <img className="h-8" src={logoUrl} alt="Tokopedia Logo" />
            </div>

            <div className="flex items-center gap-4 w-full">
              <span className="font-medium text-neutral-700 whitespace-nowrap">Kategori</span>
              <div className="w-full rounded-md flex border border-neutral-300 px-3 py-2 gap-3 focus:outline-none">
                <SearchIcon className="text-neutral-400 w-5" />
                <input type="text" placeholder="Cari di Tokopedia" className="focus:outline-none text-sm text-neutral-700" />
              </div>
            </div>
            <CartPopover />
            <p className="text-xl text-neutral-300">|</p>
            <div className="flex items-center text-sm gap-3">
              <Link href="/sign-in">
                <Button className="font-semibold tracking-tight border border-green-600 text-green-600 hover:text-green-600 hover:bg-white" variant="outline">
                  masuk
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-green-600 hover:bg-green-600 tracking-tight font-semibold">Daftar</Button>
              </Link>
            </div>
          </div>
        </div>
        <AddressModal />
      </SignedOut>

      <SignedIn>
        <div className="flex items-center justify-between py-3 bg-whit px-7">
          <div className="flex items-center gap-6 w-full">
            <div className="shrink-0">
              <img className="h-8" src={logoUrl} alt="Tokopedia Logo" />
            </div>

            <div className="flex items-center gap-4 w-full">
              <span className="font-medium text-neutral-700 whitespace-nowrap">Kategori</span>
              <div className="w-full rounded-md flex border border-neutral-300 px-3 py-2 gap-3 focus:outline-none">
                <SearchIcon className="text-neutral-400 w-5" />
                <input type="text" placeholder="Cari di Tokopedia" className="focus:outline-none text-sm text-neutral-700" />
              </div>
            </div>

            <HeaderWrapper />
            <p className="text-xl text-neutral-300">|</p>
            <div className="flex items-center text-sm gap-3">
              <UserButton appearance={{ elements: { userButtonBase: "flex items-center gap-2" } }} />
            </div>
          </div>
        </div>
        <AddAddressModal />
      </SignedIn>
    </>
  );
}

export default Navbar;
