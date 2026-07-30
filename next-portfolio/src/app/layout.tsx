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
      <body className={`${inter.className} min-h-screen bg-white text-black antialiased selection:bg-black selection:text-white`}>
        <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 border-b border-black/10">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="font-black tracking-tighter text-2xl uppercase">Developer.</Link>
            <div className="flex gap-8 font-medium">
              <Link href="/projects" className="hover:line-through decoration-2">Work</Link>
              <Link href="/blog" className="hover:line-through decoration-2">Writing</Link>
              <Link href="/contact" className="hover:line-through decoration-2">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}