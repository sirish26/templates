<script>
  import { onMount } from 'svelte';
  let loaded = false;
  onMount(() => { loaded = true; });
</script>

<div class="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D35D47]/5 rounded-full blur-[100px] -z-10"></div>
  
  <div class="text-center max-w-5xl z-10">
    <h1 class="text-7xl md:text-[9rem] font-serif leading-[0.9] text-[#2D2C2A] mb-12 overflow-hidden">
      <div class="block transition-transform duration-1000 ease-out {loaded ? 'translate-y-0' : 'translate-y-full'}">Digital</div>
      <div class="block italic text-[#D35D47] transition-transform duration-1000 delay-100 ease-out {loaded ? 'translate-y-0' : 'translate-y-full'}">Craftsmanship.</div>
    </h1>
    
    <div class="overflow-hidden mb-16">
       <p class="text-2xl text-[#2D2C2A]/70 max-w-2xl mx-auto transition-transform duration-1000 delay-300 ease-out {loaded ? 'translate-y-0' : 'translate-y-full'}">
         We partner with ambitious brands to design and engineer premium web experiences.
       </p>
    </div>
    
    <div class="transition-opacity duration-1000 delay-500 {loaded ? 'opacity-100' : 'opacity-0'}">
      <a href="/work" class="inline-block bg-[#2D2C2A] text-white px-10 py-5 tracking-widest uppercase text-sm hover:bg-[#D35D47] transition-colors rounded-full">
        Explore Portfolio
      </a>
    </div>
  </div>
</div>