import { Inter } from "next/font/google";
import Link from "next/link";
import { LayoutDashboard, Settings, CreditCard, Users, LogOut } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white">
      <aside className="w-64 border-r border-zinc-800 p-6 flex flex-col gap-6">
        <div className="font-bold text-2xl tracking-tighter text-[#32CD32]">NEXUS<span className="text-white">.AI</span></div>
        <nav className="flex flex-col gap-2 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 text-[#32CD32] font-medium"><LayoutDashboard size={18}/> Overview</Link>
          <Link href="/dashboard/team" className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-900/50 text-zinc-400 hover:text-white transition-colors"><Users size={18}/> Team</Link>
          <Link href="/dashboard/billing" className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-900/50 text-zinc-400 hover:text-white transition-colors"><CreditCard size={18}/> Billing</Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-900/50 text-zinc-400 hover:text-white transition-colors"><Settings size={18}/> Settings</Link>
        </nav>
        <Link href="/" className="flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors"><LogOut size={18}/> Sign Out</Link>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}