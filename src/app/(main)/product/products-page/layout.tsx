import React from "react";
import { TopNavDesktop } from "@/components/layout/Desktop";
import NavbarDesktop from "@/components/layout/Desktop/Navbar";
import FooterDesktop from "@/components/layout/Desktop/footer";

export default function ProductsPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNavDesktop />
      <NavbarDesktop />
      <main>{children}</main>
      <FooterDesktop />
    </>
  );
}
