"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => window.location.href = '/dashboard', 1000);
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-8 border border-zinc-800 bg-zinc-950 rounded-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block font-bold text-3xl tracking-tighter text-[#32CD32] mb-2">NEXUS<span className="text-white">.AI</span></Link>
          <p className="text-zinc-400">Sign in to your compute cluster</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">Email</label>
            <input required type="email" placeholder="dev@company.com" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#32CD32] focus:ring-1 focus:ring-[#32CD32] transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">Password</label>
            <input required type="password" placeholder="••••••••" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#32CD32] focus:ring-1 focus:ring-[#32CD32] transition-all" />
          </div>
          
          <button disabled={loading} type="submit" className="w-full bg-[#32CD32] hover:bg-[#28a428] text-black font-bold rounded-lg px-4 py-3 mt-6 transition-all disabled:opacity-50">
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-sm text-zinc-500 mt-6">
          Don't have an account? <Link href="/signup" className="text-[#32CD32] hover:underline">Request Access</Link>
        </p>
      </div>
    </div>
  )
}