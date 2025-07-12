"use client";

import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FooterMobile = () => {
  const footerSections = [
    {
      title: "Tokopedia",
      links: [
        "Tentang Tokopedia",
        "Hak Kekayaan Intelektual",
        "Karir",
        "Blog",
        "Tokopedia Affiliate Program",
        "Tokopedia B2B Digital",
        "Tokopedia Marketing Solutions",
        "Kalkulator Indeks Masa Tubuh",
        "Tokopedia Farma",
        "Promo Hari Ini",
        "Beli Lokal",
        "Promo Guncang",
      ],
    },
    {
      title: "Beli",
      links: ["Tagihan & Top Up", "Tokopedia COD", "Bebas Ongkir"],
    },
    {
      title: "Jual",
      links: ["Pusat Edukasi Seller", "Daftar Mall"],
    },
    {
      title: "Bantuan & Panduan",
      links: ["Tokopedia Care", "Syarat dan Ketentuan", "Kebijakan Privasi"],
    },
  ];

  const appBenefits = [
    {
      icon: "$",
      text: "Diskon 70%* hanya di aplikasi",
    },
    {
      icon: "*",
      text: "Promo khusus aplikasi",
    },
    {
      icon: "*",
      text: "Gratis Ongkir tiap hari",
    },
  ];

  const socialMediaIcons = [
    { name: "Facebook", icon: "F" },
    { name: "Twitter", icon: "T" },
    { name: "Pinterest", icon: "P" },
    { name: "Instagram", icon: "I" },
  ];

  const securityBadges = [
    { src: "/file.svg", alt: "PCI DSS" },
    { src: "/globe.svg", alt: "BSI ISO" },
    { src: "/globe.svg", alt: "BSI ISO" },
  ];

  const appStores = [
    { src: "/next.svg", alt: "Google Play" },
    { src: "/vercel.svg", alt: "App Store" },
    { src: "/globe.svg", alt: "AppGallery" },
  ];

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 pt-4 pb-4 px-4">
      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {/* Accordion Sections */}
        <Accordion type="multiple" className="w-full">
          {footerSections.map((section, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="py-3 hover:no-underline">
                <h2 className="font-bold text-base text-left">{section.title}</h2>
              </AccordionTrigger>
              <AccordionContent className="pb-2">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {section.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href="#" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                      {link}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* App Promo Section - Always visible */}
        <div className="space-y-3 mt-2">
          <h2 className="font-bold text-base">Nikmatin keuntungan spesial di aplikasi:</h2>
          <ul className="space-y-1">
            {appBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-green-600 mt-0.5">{benefit.icon}</span>
                {benefit.text}
              </li>
            ))}
          </ul>

          <Link href="#" className="text-green-600 text-sm font-medium text-start mt-3 block hover:underline">
            Pelajari Selengkapnya &rarr;
          </Link>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col items-center mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500 gap-3">
          <span>&copy; 2009 - {new Date().getFullYear()}, PT. Tokopedia. All Rights Reserved.</span>
          <div className="flex gap-2">
            <Button variant="default" size="sm" className="bg-green-500 hover:bg-green-600">
              Indonesia
            </Button>
            <Button variant="outline" size="sm">
              English
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
