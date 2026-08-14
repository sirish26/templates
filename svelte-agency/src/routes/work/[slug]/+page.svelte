<script>
  import { page } from '$app/stores';
  
  // Format slug to readable title
  let title = $derived($page.params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '));
</script>

<svelte:head>
  <title>{title} | Atelier Work</title>
</svelte:head>

<div class="pt-40 px-6 max-w-5xl mx-auto pb-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
  <div class="mb-8">
    <a href="/work" class="text-sm font-medium tracking-widest uppercase text-[#3A332C]/60 hover:text-[#D35D47] transition-colors inline-flex items-center gap-2">
      ← Back to Work
    </a>
  </div>
  
  <h1 class="text-5xl md:text-7xl font-serif text-[#3A332C] mb-8">{title}</h1>
  
  <div class="grid md:grid-cols-3 gap-12 mb-16 border-t border-[#3A332C]/10 pt-8">
    <div class="md:col-span-2">
      <p class="text-xl md:text-2xl text-[#3A332C]/80 leading-relaxed font-serif">
        We partnered with {title} to completely reimagine their digital presence, creating a cohesive brand experience that drives conversion and tells their unique story.
      </p>
    </div>
    <div class="space-y-6 text-sm font-medium tracking-widest uppercase text-[#3A332C]/60">
      <div>
        <h4 class="text-[#3A332C] mb-1">Services</h4>
        <p>Strategy, Identity, Web Design</p>
      </div>
      <div>
        <h4 class="text-[#3A332C] mb-1">Year</h4>
        <p>2026</p>
      </div>
    </div>
  </div>
  
  <div class="aspect-[16/9] bg-[#3A332C]/5 rounded-2xl w-full mb-12 flex items-center justify-center border border-[#3A332C]/10 hover:border-[#D35D47]/50 transition-colors">
    <span class="text-[#3A332C]/40 font-serif italic text-xl">Hero Image Placeholder</span>
  </div>
  
  <div class="grid md:grid-cols-2 gap-8 mb-12">
    <div class="aspect-[4/5] bg-[#3A332C]/5 rounded-2xl w-full flex items-center justify-center border border-[#3A332C]/10 hover:border-[#D35D47]/50 transition-colors">
      <span class="text-[#3A332C]/40 font-serif italic text-xl">Detail Shot 1</span>
    </div>
    <div class="aspect-[4/5] bg-[#3A332C]/5 rounded-2xl w-full flex items-center justify-center border border-[#3A332C]/10 hover:border-[#D35D47]/50 transition-colors">
      <span class="text-[#3A332C]/40 font-serif italic text-xl">Detail Shot 2</span>
    </div>
  </div>
</div>
