import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteNav from "./components/SiteNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Portfolio",
  description: "Next.js CMS Architecture",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased selection:bg-[#ff4400] selection:text-white`}>
        <SiteNav />
        <main className="pt-40 sm:pt-36 lg:pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
