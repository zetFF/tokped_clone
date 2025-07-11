import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "NextApp - Modern Authentication",
  description: "A modern Next.js application with Clerk authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
