
import Link from "next/link";
import { PROJECTS } from "./lib/projects";

export default function Portfolio() {
  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <section className="p-8 md:p-24 border-b-4 border-black">
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">I build<br/>interfaces.</h2>
        <p className="text-2xl font-bold max-w-2xl">Minimalist developer based in NY. Focused on high-performance web applications with brutalist aesthetics.</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`p-12 border-black hover:bg-gray-100 transition-colors ${index === 0 ? "border-b-4 md:border-b-0 md:border-r-4" : ""}`}
          >
            <h3 className="text-4xl font-black mb-4 uppercase">{project.title}</h3>
            <p className="text-xl font-bold">{project.description}</p>
          </Link>
        ))}
      </section>
    </div>
  )
}
