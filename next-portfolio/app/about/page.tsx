export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-7xl font-black uppercase tracking-tighter mb-12">Background</h1>
      <div className="prose prose-xl font-medium">
        <p className="mb-6">With over a decade of experience, I specialize in crafting high-performance front-end applications.</p>
        <p className="mb-6">My approach is rooted in brutalism, minimalism, and strict attention to performance. I do not use unnecessary dependencies. I write clean, raw code.</p>
        <div className="grid grid-cols-2 gap-8 mt-12 border-t-2 border-black pt-12">
          <div>
            <h3 className="font-black uppercase mb-4">Core Stack</h3>
            <ul className="space-y-2"><li>Next.js</li><li>React</li><li>TypeScript</li><li>Tailwind CSS</li></ul>
          </div>
          <div>
            <h3 className="font-black uppercase mb-4">Experience</h3>
            <ul className="space-y-2"><li>Lead Engineer @ TechCo (2023-Present)</li><li>Frontend Dev @ Agency (2020-2023)</li></ul>
          </div>
        </div>
      </div>
    </div>
  )
}
