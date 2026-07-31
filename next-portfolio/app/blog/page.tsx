import Link from 'next/link';

export default function Blog() {
  const posts = [
    { slug: 'architecture-2026', title: 'Frontend Architecture in 2026', date: 'Jul 24, 2026' },
    { slug: 'brutalism-web', title: 'Why Brutalism Never Dies', date: 'Jun 12, 2026' },
    { slug: 'state-management', title: 'State Management is Dead', date: 'May 05, 2026' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-7xl font-black uppercase tracking-tighter mb-16">Writing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <div className="aspect-[4/3] bg-zinc-100 mb-6 group-hover:bg-black transition-colors flex items-center justify-center">
              <span className="text-black/20 font-black text-9xl group-hover:text-white/10 transition-colors">📄</span>
            </div>
            <div className="font-mono text-sm mb-2">{post.date}</div>
            <h2 className="text-3xl font-black uppercase tracking-tight group-hover:underline">{post.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
