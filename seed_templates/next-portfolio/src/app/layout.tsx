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
        <nav className="fixed w-full top-0 bg-[#f4f4f0] z-50 border-b-4 border-[#111111]">
          <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            <Link href="/" className="font-black tracking-tighter text-4xl uppercase hover:text-[#ff4400] transition-colors">STUDIO.</Link>
            <div className="flex gap-8 font-black uppercase text-xl">
              <Link href="/projects" className="hover:underline decoration-4 underline-offset-8">Work</Link>
              <Link href="/about" className="hover:underline decoration-4 underline-offset-8">About</Link>
              <Link href="/blog" className="hover:underline decoration-4 underline-offset-8">Blog</Link>
              <Link href="/contact" className="hover:underline decoration-4 underline-offset-8">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}