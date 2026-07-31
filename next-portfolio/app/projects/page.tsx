"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  { id: 1, title: "Fintech App", category: "App", color: "#ff4400" },
  { id: 2, title: "Brand Identity", category: "Design", color: "#32CD32" },
  { id: 3, title: "E-Commerce", category: "Web", color: "#4169E1" },
  { id: 4, title: "Marketing Site", category: "Web", color: "#FFD700" },
  { id: 5, title: "AI Dashboard", category: "App", color: "#9370DB" },
  { id: 6, title: "Print Campaign", category: "Design", color: "#FF1493" },
];

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

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filtered.map((p) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={p.id} 
              className="brutalist-border bg-white aspect-[4/3] flex flex-col p-8 group cursor-pointer relative overflow-hidden"
            >
               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" style={{backgroundColor: p.color}}></div>
               <div className="relative z-10 flex flex-col h-full justify-between">
                 <div className="text-2xl font-black uppercase border-2 border-[#111111] inline-block px-4 py-1 self-start bg-white group-hover:bg-[#111111] group-hover:text-white transition-colors">{p.category}</div>
                 <h2 className="text-5xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">{p.title}</h2>
               </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
