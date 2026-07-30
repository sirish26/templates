import { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans text-gray-900">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {step === 1 && (
          <div className="p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </div>
            <h1 className="text-4xl font-black tracking-tight mb-4 text-gray-900">Join the beta</h1>
            <p className="text-gray-500 mb-8 text-lg">We're opening early access to 500 designers next week. Claim your spot.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="hello@company.com" className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-4 text-lg mb-4 focus:outline-none focus:border-emerald-500 transition-colors" />
              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded-xl px-5 py-4 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/30">
                Continue
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="p-12 text-center animate-in fade-in slide-in-from-right-8 duration-500">
            <h2 className="text-2xl font-bold mb-8">What best describes you?</h2>
            <div className="flex flex-col gap-3">
               {['Product Designer', 'Frontend Engineer', 'Founder', 'Other'].map(opt => (
                 <button key={opt} onClick={() => setStep(3)} className="w-full bg-gray-50 hover:bg-emerald-50 border-2 border-gray-100 hover:border-emerald-200 text-left font-medium text-gray-700 rounded-xl px-6 py-4 transition-all">
                   {opt}
                 </button>
               ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="p-12 text-center animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/40">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <h1 className="text-4xl font-black tracking-tight mb-2">You're on the list!</h1>
            <p className="text-gray-500 mb-8 text-lg">You are #14,092 in line. Want to jump ahead?</p>
            
            <div className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-6 text-left">
               <p className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-2">Your Referral Link</p>
               <div className="flex gap-2">
                 <input readOnly value="https://waitlist.app/ref/xyz123" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-600 font-mono text-sm" />
                 <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg px-6 py-3 whitespace-nowrap">Copy</button>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}