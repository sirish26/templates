
import React from 'react';
function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-12 md:p-24 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.05)] max-w-4xl w-full text-center">
        <div className="w-16 h-16 bg-emerald-500 mx-auto mb-8 rounded-none"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">The future of SaaS is here.</h1>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">Join 10,000+ forward-thinking founders building better software. Get early access to our private beta.</p>
        <form className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input type="email" placeholder="name@company.com" className="px-6 py-4 bg-gray-100 border-none text-lg w-full focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all" />
          <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg transition-colors whitespace-nowrap">Join Waitlist</button>
        </form>
      </div>
    </div>
  )
}
export default App;
