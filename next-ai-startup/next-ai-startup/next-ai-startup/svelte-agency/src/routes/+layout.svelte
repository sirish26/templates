<script>
  import '../app.css';
</script>

<nav class="fixed w-full top-0 z-50 px-8 py-8 flex justify-between items-center mix-blend-difference text-white">
  <a href="/" class="text-3xl font-serif italic tracking-wide hover:opacity-70 transition-opacity">Atelier.</a>
  <div class="flex gap-12 text-sm font-medium tracking-widest uppercase">
    <a href="/work" class="hover:opacity-60 transition-opacity relative group">
      Work
      <span class="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
    </a>
    <a href="/contact" class="hover:opacity-60 transition-opacity relative group">
      Contact
      <span class="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
    </a>
  </div>
</nav>

<div class="min-h-screen selection:bg-[#D35D47] selection:text-white">
  <slot />
</div>