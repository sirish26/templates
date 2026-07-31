import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, PROJECTS } from "../../lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-12 flex flex-col gap-4">
        <Link href="/projects" className="self-start text-sm uppercase tracking-widest border-2 border-black px-5 py-3 hover:bg-black hover:text-white transition-colors">
          Back to projects
        </Link>
        <span className="text-sm uppercase tracking-[0.35em] text-[#555]">Project / {project.category}</span>
        <h1 className="text-7xl font-black uppercase tracking-tighter">{project.title}</h1>
        <p className="text-xl font-medium max-w-3xl leading-relaxed">{project.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl border-4 border-black p-10 bg-white">
          <h2 className="text-3xl font-black uppercase mb-6">Project details</h2>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#777]">Slug</p>
          <div className="mb-8 text-2xl font-bold">{project.slug}</div>
          <p className="text-base leading-relaxed">This page is generated from the shared project data set. The slug is used to resolve the project route dynamically in the app router.</p>
        </div>

        <div className="rounded-2xl border-4 border-black p-10 bg-white">
          <h2 className="text-3xl font-black uppercase mb-6">What you get</h2>
          <ul className="space-y-4 list-disc list-inside text-lg leading-relaxed">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
