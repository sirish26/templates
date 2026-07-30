import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus AI",
  description: "Next.js SaaS Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-full flex flex-col antialiased bg-[#050505] text-white`}>
        <nav className="fixed w-full top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">NEXUS</Link>
            <div className="flex gap-6 items-center text-sm font-medium">
              <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link>
              <Link href="/dashboard" className="text-white/70 hover:text-white transition-colors">Dashboard</Link>
              <Link href="/login" className="text-white/70 hover:text-white transition-colors">Sign In</Link>
              <Link href="/signup" className="bg-white text-black px-4 py-2 rounded-full hover:bg-white/90 transition-colors">Get Started</Link>
            </div>
          </div>
        </nav>
        <div className="pt-16 flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}