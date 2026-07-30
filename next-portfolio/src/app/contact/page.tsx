"use client";
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-8xl font-black uppercase tracking-tighter mb-8 leading-none">Let's Talk.</h1>
      
      {status === 'success' ? (
        <div className="bg-black text-white p-12 text-2xl font-bold uppercase tracking-tight">
          Message received. I will be in touch shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <input required type="text" placeholder="YOUR NAME" className="border-b-4 border-black text-4xl py-4 font-black uppercase placeholder:text-black/20 focus:outline-none focus:border-red-500 transition-colors" />
          <input required type="email" placeholder="YOUR EMAIL" className="border-b-4 border-black text-4xl py-4 font-black uppercase placeholder:text-black/20 focus:outline-none focus:border-red-500 transition-colors" />
          <textarea required placeholder="PROJECT DETAILS" rows={4} className="border-b-4 border-black text-4xl py-4 font-black uppercase placeholder:text-black/20 focus:outline-none focus:border-red-500 transition-colors resize-none"></textarea>
          
          <button disabled={status === 'loading'} type="submit" className="bg-black text-white self-start px-12 py-6 text-2xl font-black uppercase tracking-tight hover:bg-red-500 transition-colors disabled:opacity-50 mt-8">
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  )
}