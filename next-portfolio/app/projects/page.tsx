"use client";
import { useState } from 'react';
import Link from 'next/link';
import { PROJECTS } from '../lib/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web', 'App', 'Design'];
  
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-8xl font-black uppercase tracking-tighter mb-16 border-b-4 border-[#111111] pb-8">Archive</h1>
      
      <div className="flex gap-4 mb-16 flex-wrap">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`px-8 py-4 text-xl font-black uppercase brutalist-border ${filter === cat ? 'bg-[#111111] text-white' : 'bg-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={`/projects/${p.slug}`}
            className="brutalist-border bg-white aspect-[4/3] relative overflow-hidden group flex h-full flex-col p-8"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" style={{backgroundColor: p.color}}></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="text-2xl font-black uppercase border-2 border-[#111111] inline-block px-4 py-1 self-start bg-white group-hover:bg-[#111111] group-hover:text-white transition-colors">{p.category}</div>
              <div>
                <h2 className="text-5xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">{p.title}</h2>
                <p className="mt-4 text-lg font-bold group-hover:text-white transition-colors">{p.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
