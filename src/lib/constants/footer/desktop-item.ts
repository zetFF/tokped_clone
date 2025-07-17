import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

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

export { footerLinks, appBenefits, socialMediaIcons, securityBadges };
