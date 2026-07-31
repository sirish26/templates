
export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <nav className="p-8 flex justify-between items-center border-b-4 border-black">
        <h1 className="text-3xl font-black tracking-tighter uppercase">Dev.Port</h1>
        <div className="flex gap-4 items-center">
          <a href="/about" className="font-bold border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">About</a>
          <a href="/projects" className="font-bold border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">Projects</a>
          <a href="/blog" className="font-bold border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">Blog</a>
          <a href="/contact" className="font-bold border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">Contact</a>
        </div>
      </nav>
      <section className="p-8 md:p-24 border-b-4 border-black">
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">I build<br/>interfaces.</h2>
        <p className="text-2xl font-bold max-w-2xl">Minimalist developer based in NY. Focused on high-performance web applications with brutalist aesthetics.</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-black hover:bg-gray-100 transition-colors">
          <h3 className="text-4xl font-black mb-4 uppercase">Project Alpha</h3>
          <p className="text-xl font-bold">E-commerce platform</p>
        </div>
        <div className="p-12 hover:bg-gray-100 transition-colors">
          <h3 className="text-4xl font-black mb-4 uppercase">Project Beta</h3>
          <p className="text-xl font-bold">Fintech dashboard</p>
        </div>
      </section>
    </main>
  )
}