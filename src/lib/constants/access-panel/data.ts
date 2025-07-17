import { Tag, Smartphone, CreditCard, Monitor, Zap, PawPrint, Wallet, Laptop } from "lucide-react";

// childPanel
const items = ["Kategori", "handphone & Tablet", "Top-Up", "Electronic", "Listrik PLN", "Peralatan Hewan", "Keuangan", "komputer & laptop"];

//iconsData & label
const icons = {
  Kategori: Tag,
  "handphone & Tablet": Smartphone,
  "Top-Up": CreditCard,
  Electronic: Monitor,
  "Listrik PLN": Zap,
  "Peralatan Hewan": PawPrint,
  Keuangan: Wallet,
  "komputer & laptop": Laptop,
};

//   iconsColor & label
const iconColors: Record<string, string> = {
  Kategori: "text-blue-500",
  "handphone & Tablet": "text-pink-500",
  "Top-Up": "text-green-500",
  Electronic: "text-yellow-500",
  "Listrik PLN": "text-red-500",
  "Peralatan Hewan": "text-orange-500",
  Keuangan: "text-purple-500",
  "komputer & laptop": "text-teal-500",
};

export { items, icons, iconColors };
