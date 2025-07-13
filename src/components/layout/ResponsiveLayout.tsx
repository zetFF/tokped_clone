"use client";

import React, { ReactNode } from "react";
import TopNavDesktop from "./Desktop/TopNav";
import TopNavMobile from "./Mobile/TopNav";
import NavbarDesktop from "./Desktop/Navbar";
import NavbarMobile from "./Mobile/Navbar";
import FooterDesktop from "./Desktop/footer";
import FooterMobile from "./Mobile/footer";

function ResponsiveLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50">
        <div className="hidden lg:block">
          <TopNavDesktop />
        </div>
        <div className="hidden">
          <TopNavMobile />
        </div>
        <div className="hidden lg:block">
          <NavbarDesktop />
        </div>
        <div className="block lg:hidden">
          <NavbarMobile />
        </div>
      </div>
      <main className="w-full">{children}</main>
      <div className="hidden lg:block">
        <FooterDesktop />
      </div>
      <div className="block lg:hidden">
        <FooterMobile />
      </div>
    </div>
  );
}

export default ResponsiveLayout;
