import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="glass-panel w-full max-w-md p-10 rounded-3xl border-t border-l border-white/20 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-white/50">Sign in to your Nexus account</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
            <input type="email" placeholder="name@company.com" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-white/20" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
               <label className="block text-sm font-medium text-white/70">Password</label>
               <a href="#" className="text-xs text-blue-400 hover:text-blue-300">Forgot?</a>
            </div>
            <input type="password" placeholder="••••••••" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-white/20" />
          </div>
          
          <button type="button" className="glow-button w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl px-5 py-4 transition-all">
            Sign In
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-white/50">
          Don't have an account? <Link href="/signup" className="text-white hover:text-blue-400 font-medium transition-colors">Create one</Link>
        </div>
      </div>
    </div>
  )
}