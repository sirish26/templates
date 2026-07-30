"use client";
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PROJECTS = [
  { id: 1, title: "Fintech Dashboard", category: "React", year: "2026" },
  { id: 2, title: "E-Commerce Headless", category: "Next.js", year: "2025" },
  { id: 3, title: "AI Image Gen UI", category: "Vue", year: "2026" },
  { id: 4, title: "Marketing Site", category: "Next.js", year: "2024" },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'React', 'Next.js', 'Vue'];
  
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-7xl font-black uppercase tracking-tighter mb-12">Index of Work</h1>
      
      <div className="flex gap-4 mb-16">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border-2 border-black font-bold uppercase text-sm transition-all ${filter === cat ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col border-t-2 border-black">
        {filtered.map((p) => (
          <motion.div layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} key={p.id} className="group border-b-2 border-black py-8 flex items-center justify-between cursor-pointer hover:px-6 transition-all duration-300">
             <div className="flex items-center gap-12">
               <span className="font-mono text-black/40 text-lg">0{p.id}</span>
               <h2 className="text-4xl font-black uppercase tracking-tighter">{p.title}</h2>
             </div>
             <div className="flex items-center gap-12 text-lg font-medium">
               <span>{p.category}</span>
               <span className="text-black/40">{p.year}</span>
               <ArrowUpRight size={32} className="opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}