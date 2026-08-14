<script>
  import { fade, slide } from 'svelte/transition';
  let activeTab = 'design';
</script>

<div in:fade={{duration: 400}} className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
  <h1 className="text-6xl md:text-8xl font-serif text-[#3A332C] mb-8">Capabilities.</h1>
  
  <div className="flex gap-8 mb-16 border-b border-[#3A332C]/10 pb-4">
    <button on:click={() => activeTab = 'design'} className={`text-lg font-medium transition-colors ${activeTab === 'design' ? 'text-[#3A332C]' : 'text-[#3A332C]/40 hover:text-[#3A332C]/70'}`}>Digital Design</button>
    <button on:click={() => activeTab = 'dev'} className={`text-lg font-medium transition-colors ${activeTab === 'dev' ? 'text-[#3A332C]' : 'text-[#3A332C]/40 hover:text-[#3A332C]/70'}`}>Engineering</button>
  </div>

  {#if activeTab === 'design'}
    <div in:slide class="grid grid-cols-1 md:grid-cols-2 gap-16">
       <div>
         <h3 class="text-3xl font-serif text-[#D35D47] mb-4">Brand Identity</h3>
         <p class="text-lg text-[#3A332C]/70 leading-relaxed">We craft timeless visual identities that resonate with your target audience and stand the test of time.</p>
       </div>
       <div>
         <h3 class="text-3xl font-serif text-[#D35D47] mb-4">UI/UX Design</h3>
         <p class="text-lg text-[#3A332C]/70 leading-relaxed">Intuitive, user-centric interfaces designed for maximum conversion and seamless experiences.</p>
       </div>
    </div>
  {/if}

  {#if activeTab === 'dev'}
    <div in:slide class="grid grid-cols-1 md:grid-cols-2 gap-16">
       <div>
         <h3 class="text-3xl font-serif text-[#D35D47] mb-4">Frontend Engineering</h3>
         <p class="text-lg text-[#3A332C]/70 leading-relaxed">High-performance applications built with modern frameworks like Svelte, React, and Vue.</p>
       </div>
       <div>
         <h3 class="text-3xl font-serif text-[#D35D47] mb-4">Backend Systems</h3>
         <p class="text-lg text-[#3A332C]/70 leading-relaxed">Scalable, secure cloud architectures and custom API development.</p>
       </div>
    </div>
  {/if}
</div>