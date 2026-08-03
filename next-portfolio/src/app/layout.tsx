import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Portfolio",
  description: "Next.js CMS Architecture",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased selection:bg-[#ff4400] selection:text-white`}>
        <nav className="fixed w-full top-0 bg-white z-50 border-b-4 border-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 lg:h-24 lg:py-0 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/" className="font-black tracking-tighter text-3xl sm:text-4xl uppercase hover:text-[#ff4400] transition-colors">STUDIO.</Link>
            <div className="flex w-full gap-4 overflow-x-auto pb-1 font-black uppercase text-base sm:text-xl lg:w-auto lg:gap-8 lg:overflow-visible lg:pb-0">
              <Link href="/projects" className="hover:underline decoration-4 underline-offset-8">Work</Link>
              <Link href="/about" className="hover:underline decoration-4 underline-offset-8">About</Link>
              <Link href="/blog" className="hover:underline decoration-4 underline-offset-8">Blog</Link>
              <Link href="/contact" className="hover:underline decoration-4 underline-offset-8">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="pt-40 sm:pt-36 lg:pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
