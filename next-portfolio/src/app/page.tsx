import Link from 'next/link';
export default function Home() {
  return (
    <div className="min-h-[calc(100vh-6rem)] px-6 flex flex-col justify-center max-w-7xl mx-auto py-20">
      <h1 className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter mb-12">
        We Design<br/>
        <span className="text-white" style={{ WebkitTextStroke: '4px #111111' }}>Digital</span><br/>
        Futures.
      </h1>
      <p className="max-w-2xl text-3xl font-medium mb-16 leading-tight">
        An independent design and engineering studio crafting premium web experiences for forward-thinking brands.
      </p>
      <div className="flex gap-8 flex-wrap">
         <Link href="/projects" className="bg-[#111111] text-white px-12 py-6 text-2xl font-black uppercase brutalist-border !border-transparent !box-shadow-[6px_6px_0px_#ff4400] hover:!border-[#111111] hover:!bg-[#ff4400]">
           Explore Work
         </Link>
         <Link href="/contact" className="bg-transparent text-[#111111] px-12 py-6 text-2xl font-black uppercase brutalist-border">
           Start a Project
         </Link>
      </div>
    </div>
  )
}