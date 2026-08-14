import { Inter } from "next/font/google";
import Link from "next/link";
import { LayoutDashboard, Users, CreditCard, Settings, Search, Bell, Menu } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 glass-panel border-r border-white/10 flex flex-col z-20">
        <div className="h-20 flex items-center px-8 border-b border-white/10">
          <Link href="/" className="font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">NEXUS</Link>
        </div>
        <nav className="flex-1 px-4 py-8 space-y-2">
          <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-4 px-4">Menu</div>
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600/10 text-blue-400 font-medium"><LayoutDashboard size={18}/> Overview</Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-colors"><Users size={18}/> Customers</Link>
          <Link href="/pricing" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-colors"><CreditCard size={18}/> Billing</Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-colors"><Settings size={18}/> Settings</Link>
        </nav>
        <div className="p-4 border-t border-white/10">
           <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
             <div>
               <div className="text-sm font-medium">Jane Doe</div>
               <div className="text-xs text-white/40">Pro Plan</div>
             </div>
           </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
        
        {/* Header */}
        <header className="h-20 glass-panel border-b border-white/10 flex items-center justify-between px-8 z-10 sticky top-0">
           <div className="flex items-center gap-4 w-96 bg-black/50 border border-white/10 rounded-full px-4 py-2 text-white/50 focus-within:border-blue-500 focus-within:text-white transition-colors">
             <Search size={16} />
             <input type="text" placeholder="Search resources..." className="bg-transparent border-none focus:outline-none w-full text-sm" />
           </div>
           <button className="relative p-2 text-white/60 hover:text-white transition-colors">
             <Bell size={20} />
             <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
           </button>
        </header>
        
        <div className="flex-1 overflow-y-auto p-8 z-0">
          {children}
        </div>
      </main>
    </div>
  )
}