"use client";

import React from "react";
import TopNavDesktop from "./Desktop/TopNav";
import TopNavMobile from "./Mobile/TopNav";
import NavbarDesktop from "./Desktop/Navbar";
import NavbarMobile from "./Mobile/Navbar";
import FooterDesktop from "./Desktop/footer";
import FooterMobile from "./Mobile/footer";

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50">
        <div className="hidden lg:block">
          <TopNavDesktop />
        </div>
        <div className="hidden">
          <TopNavMobile />
        </div>

        {/* Main Navigation */}
        <div className="hidden lg:block">
          <NavbarDesktop />
        </div>
        <div className="block lg:hidden">
          <NavbarMobile />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8">{children}</main>
      {/* Footer */}
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
