"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const FooterDesktop = () => {
  const footerLinks = {
    tokopedia: [
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
    buy: ["Tagihan & Top Up", "Tokopedia COD", "Bebas Ongkir"],
    sell: ["Pusat Edukasi Seller", "Daftar Mall"],
    help: ["Tokopedia Care", "Syarat dan Ketentuan", "Kebijakan Privasi"],
  };

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
    { icon: Facebook, name: "Facebook" },
    { icon: Twitter, name: "Twitter" },
    { icon: Instagram, name: "Instagram" },
    { icon: Youtube, name: "YouTube" },
  ];

  const securityBadges = ["/file.svg", "/globe.svg", "/globe.svg"];

  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-4 px-8 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-5 gap-8">
        {/* Tokopedia Information */}
        <div>
          <h2 className="font-bold text-lg mb-2 tracking-tight">Tokopedia</h2>
          <ul className="text-neutral-500 flex flex-col gap-3 text-xs min-w-[180px]">
            {footerLinks.tokopedia.map((link) => (
              <li key={link}>
                <Link href="#" className="hover:text-green-600 transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Buy & Sell Section */}
        <div className="flex flex-col gap-6 min-w-[150px]">
          <div>
            <h2 className="font-bold text-lg mb-2 tracking-tight">Beli</h2>
            <ul className="text-neutral-500 flex flex-col gap-3 text-xs min-w-[180px]">
              {footerLinks.buy.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-green-600 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Jual</h2>
            <ul className="text-neutral-500 flex flex-col gap-3 text-xs min-w-[180px]">
              {footerLinks.sell.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-green-600 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="font-bold text-lg mb-2 tracking-tight">Bantuan dan Panduan</h2>
          <ul className="text-neutral-500 flex flex-col gap-3 text-xs min-w-[180px]">
            {footerLinks.help.map((link) => (
              <li key={link}>
                <Link href="#" className="hover:text-green-600 transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Security & Social Media */}
        <div className="flex flex-col gap-4 min-w-[200px]">
          <div>
            <h2 className="font-bold text-lg mb-2 tracking-tight">Keamanan & Privasi</h2>
            <div className="flex flex-col gap-5">
              {securityBadges.map((src, index) => (
                <Image key={index} src={src} alt="Security badge" width={64} height={40} className="object-contain" />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Ikuti Kami</h2>
            <div className="flex gap-2">
              {socialMediaIcons.map(({ icon: Icon, name }) => (
                <button key={name} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label={name}>
                  <Icon className="w-4 h-4 text-gray-600" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* App Promo */}
        <div>
          <h2 className="font-bold text-lg mb-2 tracking-tight">Nikmatin keuntungan spesial di aplikasi:</h2>
          <ul className="text-neutral-500 flex flex-col gap-3 text-xs min-w-[180px]">
            {appBenefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-600">{benefit.icon}</span>
                {benefit.text}
              </li>
            ))}
          </ul>
          <Link href="#" className="text-green-600 mt-5 text-xs hover:underline inline-block">
            Pelajari Selengkapnya &rarr;
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-200 pt-4 text-xs text-gray-500 gap-4">
        <span>&copy; 2009 - {new Date().getFullYear()}, PT. Tokopedia. All Rights Reserved.</span>
        <div className="flex gap-2">
          <button className="bg-green-500 text-white rounded px-3 py-1 hover:bg-green-600 transition-colors">Indonesia</button>
          <button className="bg-gray-200 text-gray-700 rounded px-3 py-1 hover:bg-gray-300 transition-colors">English</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterDesktop;
