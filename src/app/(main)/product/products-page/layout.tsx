import React from "react";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";

export default function ProductsPageLayout({ children }: { children: React.ReactNode }) {
 return <ResponsiveLayout>{children}</ResponsiveLayout>;
}
