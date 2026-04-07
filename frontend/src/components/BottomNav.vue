<template>
  <nav class="md:hidden fixed bottom-0 w-full bg-white h-[70px] flex justify-around items-center px-2 border-t border-[#E5E7EB] shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)] z-50">
    
    <button @click="$router.push('/eventos')" 
            :class="$route.path === '/eventos' ? 'text-[#1E3A8A]' : 'text-[#6B7280] hover:text-[#1E3A8A]'" 
            class="transition-colors">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path></svg>
    </button>

    <button @click="$router.push('/buscar')" 
            :class="$route.path === '/buscar' ? 'text-[#1E3A8A]' : 'text-[#6B7280] hover:text-[#1E3A8A]'" 
            class="transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
    </button>

    <button @click="$router.push('/nuevo-evento')" class="text-[#1E3A8A] hover:text-[#1E40AF] transition-colors">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </button>

    <button @click="$router.push('/notificaciones')" 
            :class="$route.path === '/notificaciones' ? 'text-[#1E3A8A]' : 'text-[#6B7280] hover:text-[#1E3A8A]'" 
            class="transition-colors relative">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path></svg>
    </button>

    <button @click="$router.push('/perfil')" 
            :class="$route.path.includes('/perfil') ? 'text-[#1E3A8A]' : 'text-[#6B7280] hover:text-[#1E3A8A]'" 
            class="transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
    </button>

  </nav>
</template>

<script setup>
</script>