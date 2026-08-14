import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="p-10 md:p-16 text-center animate-in fade-in zoom-in duration-700 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl -z-10 rounded-[40px]"></div>
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md text-white font-medium rounded-full text-sm mb-8 shadow-2xl shadow-blue-500/20">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
        v2.0 Beta Opening Soon
      </div>
      <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white leading-[1.1]">
        The future of <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 filter drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]">design tools.</span>
      </h1>
      <p className="text-xl text-white/60 font-medium mb-10 max-w-sm mx-auto leading-relaxed">
        We're inviting 500 creators to test our new engine. Experience sub-second performance.
      </p>
      <form onSubmit={(e) => { e.preventDefault(); navigate('/survey'); }} className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
        <div className="relative flex flex-col gap-4 bg-black/40 p-2 rounded-2xl border border-white/10 backdrop-blur-xl">
          <input required type="email" placeholder="hello@creator.com" className="w-full bg-transparent px-4 py-4 text-white text-lg placeholder-white/30 focus:outline-none focus:ring-0" />
          <button type="submit" className="w-full bg-white text-black font-bold text-lg rounded-xl px-6 py-4 hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Claim Your Spot
          </button>
        </div>
      </form>
    </div>
  );
}

function Survey() {
  const navigate = useNavigate();
  return (
    <div className="p-10 md:p-16 animate-in slide-in-from-right duration-500 relative z-10">
      <h1 className="text-4xl font-black mb-2 text-white tracking-tight">Tell us about you</h1>
      <p className="text-white/50 font-medium mb-10 text-lg">This helps us personalize your beta experience.</p>
      
      <div className="space-y-4">
        {['Product Designer', 'Frontend Engineer', 'Founder', 'Other'].map(opt => (
          <button key={opt} onClick={() => navigate('/status')} className="w-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 p-5 rounded-2xl text-left font-semibold text-white/90 transition-all group flex items-center justify-between backdrop-blur-sm">
            {opt}
            <span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-all flex items-center justify-center">
               <span className="w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="p-10 md:p-16 text-center animate-in zoom-in duration-500 relative z-10">
      <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(96,165,250,0.4)] rotate-12 hover:rotate-0 transition-transform duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="-rotate-12 group-hover:rotate-0 transition-transform duration-500"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <h1 className="text-4xl font-black mb-2 text-white tracking-tight">You're on the list!</h1>
      <p className="text-lg text-white/50 font-medium mb-8">Keep an eye on your inbox.</p>
      
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
        <p className="font-bold text-xs text-blue-400 uppercase tracking-widest mb-2 relative z-10">Your Position</p>
        <p className="text-6xl font-black text-white relative z-10">#4,092</p>
      </div>
      
      <div className="text-left bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
        <p className="font-bold text-white mb-2">Want to jump the queue?</p>
        <p className="text-sm text-white/50 mb-4">Share this link to move up 100 spots.</p>
        <div className="flex gap-2">
           <input readOnly value="https://waitlist.app/ref/xyz" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/70 font-mono text-sm focus:outline-none" />
           <button className="bg-white text-black font-bold rounded-xl px-6 py-3 hover:bg-gray-200 transition-colors">Copy</button>
        </div>
      </div>
    </div>
  );
}

function Product() {
  return (
    <div className="p-10 md:p-16 text-center animate-in fade-in duration-500">
      <h1 className="text-4xl font-black mb-6 text-white tracking-tight">Features</h1>
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-left hover:bg-white/10 transition-colors cursor-default">
           <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">⚡ Sub-second Performance</h3>
           <p className="text-white/50 leading-relaxed">Built on a proprietary Rust engine, delivering 120fps rendering directly in the browser.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-left hover:bg-white/10 transition-colors cursor-default">
           <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">🧠 AI-Native Design</h3>
           <p className="text-white/50 leading-relaxed">Describe your layout in natural language and watch it generate production-ready code in real-time.</p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div className="p-10 md:p-16 text-left animate-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-black mb-8 text-white tracking-tight">FAQ</h1>
      <div className="mb-8 border-b border-white/10 pb-6">
        <h3 className="font-bold text-lg mb-2 text-white">When is launch?</h3>
        <p className="text-white/50">Q4 2026. Invites go out weekly.</p>
      </div>
      <div className="mb-8 border-b border-white/10 pb-6">
        <h3 className="font-bold text-lg mb-2 text-white">Is it free?</h3>
        <p className="text-white/50">The beta is completely free for early access members.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] selection:bg-blue-500/30 selection:text-white">
        
        {/* Global Navigation for all 5 Waitlist Pages */}
        <nav className="mb-10 flex gap-2 p-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl">
           <Link to="/" className="text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Home</Link>
           <Link to="/survey" className="text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Survey</Link>
           <Link to="/status" className="text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Status</Link>
           <Link to="/product" className="text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Product</Link>
           <Link to="/faq" className="text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">FAQ</Link>
        </nav>

        <div className="w-full max-w-5xl bg-black/40 rounded-[40px] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10 relative backdrop-blur-2xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/status" element={<Status />} />
            <Route path="/product" element={<Product />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}