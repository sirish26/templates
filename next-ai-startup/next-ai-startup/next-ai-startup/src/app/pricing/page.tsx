import Link from 'next/link';
export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
       <Link href="/" className="text-[#32CD32] font-bold mb-12 block">&larr; Back</Link>
       <h1 className="text-5xl font-black tracking-tighter mb-4">Pricing</h1>
       <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-8 border border-zinc-800 rounded-xl"><h3 className="text-2xl font-bold mb-2">Hobby</h3><p className="text-4xl font-black mb-6">$0<span className="text-sm text-zinc-500 font-normal">/mo</span></p><Link href="/signup" className="block text-center bg-zinc-900 py-3 rounded text-[#32CD32] font-bold">Start Free</Link></div>
          <div className="p-8 border border-[#32CD32] rounded-xl relative"><div className="absolute top-0 right-8 -translate-y-1/2 bg-[#32CD32] text-black text-xs font-bold px-2 py-1 rounded">POPULAR</div><h3 className="text-2xl font-bold mb-2">Pro</h3><p className="text-4xl font-black mb-6">$49<span className="text-sm text-zinc-500 font-normal">/mo</span></p><Link href="/signup" className="block text-center bg-[#32CD32] text-black py-3 rounded font-bold">Upgrade</Link></div>
          <div className="p-8 border border-zinc-800 rounded-xl"><h3 className="text-2xl font-bold mb-2">Enterprise</h3><p className="text-4xl font-black mb-6">Custom</p><Link href="/contact" className="block text-center bg-zinc-900 py-3 rounded text-white font-bold">Contact Sales</Link></div>
       </div>
    </div>
  )
}