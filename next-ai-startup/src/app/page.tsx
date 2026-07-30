import Link from 'next/link';
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-black mb-4 tracking-tighter">NEXUS<span className="text-[#32CD32]">.AI</span></h1>
      <p className="text-zinc-400 mb-8 max-w-lg text-center">The ultimate infrastructure for AI applications. Scale your compute instantly.</p>
      <div className="flex gap-4">
        <Link href="/pricing" className="bg-[#32CD32] text-black px-6 py-3 font-bold rounded hover:bg-[#28a428]">View Pricing</Link>
        <Link href="/login" className="border border-zinc-800 text-white px-6 py-3 font-bold rounded hover:bg-zinc-900">Sign In</Link>
      </div>
    </div>
  )
}