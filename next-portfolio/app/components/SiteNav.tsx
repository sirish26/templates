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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 lg:h-24 lg:py-0 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="font-black tracking-tighter text-3xl sm:text-4xl uppercase hover:text-[#ff4400] transition-colors">
          Dev.Port
        </Link>
        <div className="flex w-full gap-2 overflow-x-auto pb-1 sm:gap-3 lg:w-auto lg:overflow-visible lg:pb-0">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 font-bold border-2 px-4 py-2 text-sm uppercase transition-colors sm:px-5 sm:text-base lg:px-6 ${active ? 'bg-[#111111] text-white border-[#111111]' : 'border-black hover:bg-black hover:text-white'}`}
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
