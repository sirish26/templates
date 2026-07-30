import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="p-10 md:p-16 text-center animate-in fade-in zoom-in duration-500">
      <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold rounded-full text-sm mb-8 shadow-lg shadow-pink-500/30">
        ✨ v2.0 Beta Opening Soon
      </div>
      <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-gray-900 leading-tight">
        The future of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">design tools.</span>
      </h1>
      <p className="text-xl text-gray-500 font-medium mb-10 max-w-sm mx-auto">
        We're inviting 500 creators to test our new engine. Don't miss out.
      </p>
      <form onSubmit={(e) => { e.preventDefault(); navigate('/survey'); }}>
        <input required type="email" placeholder="hello@creator.com" className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-5 text-xl mb-4 focus:outline-none focus:border-pink-500 transition-colors shadow-sm" />
        <button type="submit" className="button-3d w-full bg-gray-900 text-white font-black text-xl rounded-2xl px-6 py-5 hover:bg-gray-800">
          Claim Your Spot
        </button>
      </form>
    </div>
  );
}

function Survey() {
  const navigate = useNavigate();
  return (
    <div className="p-10 md:p-16 animate-in slide-in-from-right duration-500">
      <h1 className="text-3xl font-black mb-2 text-gray-900">Tell us about you</h1>
      <p className="text-gray-500 font-medium mb-8">This helps us personalize your beta experience.</p>
      
      <div className="space-y-4">
        {['Product Designer', 'Frontend Engineer', 'Founder', 'Other'].map(opt => (
          <button key={opt} onClick={() => navigate('/status')} className="w-full bg-white border-2 border-gray-200 hover:border-pink-500 hover:bg-pink-50 p-5 rounded-2xl text-left font-bold text-gray-700 transition-all group flex items-center justify-between">
            {opt}
            <span className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-pink-500"></span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="p-10 md:p-16 text-center animate-in zoom-in duration-500">
      <div className="w-24 h-24 bg-gradient-to-tr from-pink-500 to-orange-400 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-pink-500/30 rotate-12">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="-rotate-12"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <h1 className="text-4xl font-black mb-2 text-gray-900">You're on the list!</h1>
      <p className="text-lg text-gray-500 font-medium mb-8">Keep an eye on your inbox.</p>
      
      <div className="bg-gray-900 text-white rounded-3xl p-8 mb-8 shadow-2xl">
        <p className="font-bold text-sm text-gray-400 uppercase tracking-widest mb-1">Your Position</p>
        <p className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">#4,092</p>
      </div>
      
      <div className="text-left bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm">
        <p className="font-bold text-gray-900 mb-2">Want to jump the queue?</p>
        <p className="text-sm text-gray-500 mb-4">Share this link to move up 100 spots per referral.</p>
        <div className="flex gap-2">
           <input readOnly value="https://waitlist.app/ref/xyz123" className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-600 font-mono text-sm focus:outline-none" />
           <button className="bg-pink-500 text-white font-bold rounded-xl px-6 py-3 hover:bg-pink-600 transition-colors">Copy</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/status" element={<Status />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}