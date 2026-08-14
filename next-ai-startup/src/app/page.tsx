import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-32 px-6 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
        <Sparkles size={16} className="text-blue-400" />
        <span className="text-sm font-medium text-white/80">Introducing Nexus Engine 2.0</span>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-bold text-center tracking-tight mb-8 max-w-5xl leading-[1.1]">
        Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">intelligent apps</span> faster than ever.
      </h1>
      
      <p className="text-xl text-white/60 text-center max-w-2xl mb-12">
        The ultimate Next.js boilerplate for AI startups. Includes authentication, payments, dashboards, and UI components out of the box.
      </p>
      
      <div className="flex gap-6 z-10">
        <Link href="/signup" className="glow-button bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
          Start Building <ArrowRight size={20} />
        </Link>
        <Link href="/dashboard" className="glass-panel px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
          View Demo
        </Link>
      </div>

      {/* Template Navigation Cards */}
      <div className="w-full max-w-6xl mt-32 z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore the Template</h2>
          <p className="text-white/60">Fully built-out pages ready for your application.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/dashboard" className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles size={24} className="text-blue-400" />
            </div>
            <span className="font-bold">Dashboard</span>
          </Link>
          <Link href="/shop" className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles size={24} className="text-purple-400" />
            </div>
            <span className="font-bold">E-Commerce</span>
          </Link>
          <Link href="/pricing" className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles size={24} className="text-emerald-400" />
            </div>
            <span className="font-bold">Pricing Plans</span>
          </Link>
          <Link href="/login" className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield size={24} className="text-orange-400" />
            </div>
            <span className="font-bold">Auth Flow</span>
          </Link>
        </div>
      </div>
      
      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-32 max-w-6xl w-full">
         <div className="glass-panel p-8 rounded-2xl">
           <Zap className="text-blue-400 mb-6" size={32} />
           <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
           <p className="text-white/60">Optimized App Router architecture for sub-second page loads globally.</p>
         </div>
         <div className="glass-panel p-8 rounded-2xl">
           <Shield className="text-purple-400 mb-6" size={32} />
           <h3 className="text-2xl font-bold mb-3">Secure Auth</h3>
           <p className="text-white/60">Pre-configured authentication flows with session management.</p>
         </div>
         <div className="glass-panel p-8 rounded-2xl">
           <Sparkles className="text-emerald-400 mb-6" size={32} />
           <h3 className="text-2xl font-bold mb-3">Premium UI</h3>
           <p className="text-white/60">Dozens of handcrafted, fully responsive Tailwind components.</p>
         </div>
      </div>
    </div>
  )
}