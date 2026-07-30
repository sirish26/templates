<script>
  import '../app.css';
</script>

<nav class="fixed w-full top-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
  <a href="/" class="text-2xl font-serif tracking-widest uppercase">Atelier.</a>
  <div class="flex gap-8 text-sm font-medium tracking-widest uppercase">
    <a href="/services" class="hover:opacity-60 transition-opacity">Services</a>
    <a href="/work" class="hover:opacity-60 transition-opacity">Work</a>
    <a href="/contact" class="hover:opacity-60 transition-opacity">Contact</a>
  </div>
</nav>

<div class="bg-[#FDFBF7] min-h-screen selection:bg-[#D35D47] selection:text-white">
  <slot />
</div>