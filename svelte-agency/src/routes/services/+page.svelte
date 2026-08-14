<script>
  import { fade, slide } from 'svelte/transition';
  let activeTab = 'design';
</script>

<div in:fade={{duration: 400}} class="pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
  <h1 class="text-6xl md:text-8xl font-serif text-[#3A332C] mb-12">Capabilities.</h1>
  
  <div class="flex flex-wrap gap-4 mb-16 border-b border-[#3A332C]/10 pb-6">
    <button on:click={() => activeTab = 'design'} class={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === 'design' ? 'bg-[#D35D47] text-white shadow-lg scale-105' : 'bg-transparent text-[#3A332C]/40 hover:bg-[#3A332C]/5 hover:text-[#3A332C]'}`}>Digital Design</button>
    <button on:click={() => activeTab = 'dev'} class={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === 'dev' ? 'bg-[#D35D47] text-white shadow-lg scale-105' : 'bg-transparent text-[#3A332C]/40 hover:bg-[#3A332C]/5 hover:text-[#3A332C]'}`}>Engineering</button>
  </div>

  {#if activeTab === 'design'}
    <div in:slide class="grid grid-cols-1 md:grid-cols-2 gap-8">
       <div class="bg-white p-12 rounded-3xl shadow-xl shadow-[#3A332C]/5 border border-[#3A332C]/5 hover:shadow-2xl transition-shadow group">
         <div class="w-16 h-16 rounded-full bg-[#D35D47]/10 flex items-center justify-center mb-8 group-hover:bg-[#D35D47] transition-colors">
            <span class="text-2xl group-hover:text-white transition-colors">✨</span>
         </div>
         <h3 class="text-4xl font-serif text-[#3A332C] mb-4">Brand Identity</h3>
         <p class="text-xl text-[#3A332C]/70 leading-relaxed font-light">We craft timeless visual identities that resonate with your target audience and stand the test of time.</p>
       </div>
       <div class="bg-white p-12 rounded-3xl shadow-xl shadow-[#3A332C]/5 border border-[#3A332C]/5 hover:shadow-2xl transition-shadow group">
         <div class="w-16 h-16 rounded-full bg-[#D35D47]/10 flex items-center justify-center mb-8 group-hover:bg-[#D35D47] transition-colors">
            <span class="text-2xl group-hover:text-white transition-colors">🎨</span>
         </div>
         <h3 class="text-4xl font-serif text-[#3A332C] mb-4">UI/UX Design</h3>
         <p class="text-xl text-[#3A332C]/70 leading-relaxed font-light">Intuitive, user-centric interfaces designed for maximum conversion and seamless experiences.</p>
       </div>
    </div>
  {/if}

  {#if activeTab === 'dev'}
    <div in:slide class="grid grid-cols-1 md:grid-cols-2 gap-8">
       <div class="bg-white p-12 rounded-3xl shadow-xl shadow-[#3A332C]/5 border border-[#3A332C]/5 hover:shadow-2xl transition-shadow group">
         <div class="w-16 h-16 rounded-full bg-[#D35D47]/10 flex items-center justify-center mb-8 group-hover:bg-[#D35D47] transition-colors">
            <span class="text-2xl group-hover:text-white transition-colors">⚡</span>
         </div>
         <h3 class="text-4xl font-serif text-[#3A332C] mb-4">Frontend Engineering</h3>
         <p class="text-xl text-[#3A332C]/70 leading-relaxed font-light">High-performance applications built with modern frameworks like Svelte, React, and Vue.</p>
       </div>
       <div class="bg-white p-12 rounded-3xl shadow-xl shadow-[#3A332C]/5 border border-[#3A332C]/5 hover:shadow-2xl transition-shadow group">
         <div class="w-16 h-16 rounded-full bg-[#D35D47]/10 flex items-center justify-center mb-8 group-hover:bg-[#D35D47] transition-colors">
            <span class="text-2xl group-hover:text-white transition-colors">⚙️</span>
         </div>
         <h3 class="text-4xl font-serif text-[#3A332C] mb-4">Backend Systems</h3>
         <p class="text-xl text-[#3A332C]/70 leading-relaxed font-light">Scalable, secure cloud architectures and custom API development.</p>
       </div>
    </div>
  {/if}
</div>