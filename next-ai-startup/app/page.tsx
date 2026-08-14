
export default function AIStartup() {
  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <nav className="p-6 flex justify-between items-center border-b border-gray-900">
        <div className="text-xl font-bold tracking-widest text-[#32CD32]">NEXUS_AI</div>
        <button className="text-sm font-bold bg-white text-black px-4 py-2 hover:bg-[#32CD32] transition-colors">LOGIN</button>
      </nav>
      <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col items-start">
        <div className="border border-[#32CD32] text-[#32CD32] px-3 py-1 text-xs font-bold tracking-widest mb-8">v2.0 ENGINE LIVE</div>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-8">Compute.<br/>Evolved.</h1>
        <p className="text-2xl text-gray-400 max-w-2xl mb-12">Harness the power of decentralized neural networks. No limits. Pure performance.</p>
        <div className="flex gap-6 mb-24">
          <button className="bg-[#32CD32] text-black font-black px-10 py-5 text-xl hover:bg-white transition-colors">DEPLOY NOW</button>
          <button className="border border-white text-white font-black px-10 py-5 text-xl hover:bg-gray-900 transition-colors">READ DOCS</button>
        </div>
        
        {/* Template Navigation Cards */}
        <div className="w-full">
          <div className="text-left mb-8 border-b border-gray-900 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-[#32CD32]">EXPLORE TEMPLATES</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <a href="/dashboard" className="border border-gray-800 bg-gray-950 p-8 hover:border-[#32CD32] hover:bg-gray-900 transition-colors group flex flex-col items-start gap-4">
              <span className="text-3xl">📊</span>
              <span className="font-bold tracking-wider group-hover:text-[#32CD32] transition-colors">DASHBOARD</span>
            </a>
            <a href="/shop" className="border border-gray-800 bg-gray-950 p-8 hover:border-[#32CD32] hover:bg-gray-900 transition-colors group flex flex-col items-start gap-4">
              <span className="text-3xl">🛒</span>
              <span className="font-bold tracking-wider group-hover:text-[#32CD32] transition-colors">E-COMMERCE</span>
            </a>
            <a href="/pricing" className="border border-gray-800 bg-gray-950 p-8 hover:border-[#32CD32] hover:bg-gray-900 transition-colors group flex flex-col items-start gap-4">
              <span className="text-3xl">💳</span>
              <span className="font-bold tracking-wider group-hover:text-[#32CD32] transition-colors">PRICING</span>
            </a>
            <a href="/login" className="border border-gray-800 bg-gray-950 p-8 hover:border-[#32CD32] hover:bg-gray-900 transition-colors group flex flex-col items-start gap-4">
              <span className="text-3xl">🔐</span>
              <span className="font-bold tracking-wider group-hover:text-[#32CD32] transition-colors">AUTH</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
