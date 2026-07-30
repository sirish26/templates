import Link from 'next/link';
export default function Home() {
  return (
    <div className="min-h-screen px-6 flex flex-col justify-center max-w-6xl mx-auto">
      <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">Creative<br/>Developer.</h1>
      <p className="max-w-xl text-2xl font-medium mb-12">I build premium digital experiences that live at the intersection of design and engineering.</p>
      <div className="flex gap-6">
         <Link href="/work" className="border-2 border-black px-8 py-4 font-bold uppercase hover:bg-black hover:text-white transition-colors">View Work</Link>
         <Link href="/about" className="border-2 border-transparent px-8 py-4 font-bold uppercase hover:border-black transition-colors">About Me</Link>
      </div>
    </div>
  )
}