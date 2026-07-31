"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname() || "/";

  return (
    <nav className="fixed w-full top-0 z-50 border-b-4 border-black bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="font-black tracking-tighter text-4xl uppercase hover:text-[#ff4400] transition-colors">
          Dev.Port
        </Link>
        <div className="flex gap-4 items-center">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-bold border-2 px-6 py-2 uppercase transition-colors ${active ? 'bg-[#111111] text-white border-[#111111]' : 'border-black hover:bg-black hover:text-white'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
