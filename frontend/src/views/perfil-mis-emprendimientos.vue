<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader />

    <main class="flex-grow w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mt-[72px] pb-16 pt-10">

            <div class="flex flex-col lg:flex-row gap-8 lg:gap-10">

        <aside class="w-full lg:w-[320px] shrink-0">
          <div class="bg-white rounded-[32px] p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center">

            <div class="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-50 shadow-sm bg-pink-100 relative">
              <img src="https://i.pravatar.cc/300?img=12" alt="Juan Paredes" class="w-full h-full object-cover" />
            </div>

            <h2 class="mt-6 text-[26px] font-black text-[#001D6B] tracking-tight">Juan Paredes</h2>

                        <div class="mt-3 bg-gray-100 text-gray-700 font-bold text-[13px] px-5 py-2 rounded-full tracking-wide">
              Ing. Informática
            </div>

            <p class="mt-4 text-gray-400 font-medium text-[15px]">C.I. 31.357.791</p>

            <div class="w-full h-px bg-gray-100 my-8"></div>

            <button class="w-full bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white font-bold py-3.5 rounded-xl transition-all duration-300 text-[15px]">
              Editar Info
            </button>
          </div>
        </aside>

        <div class="flex-grow flex flex-col min-w-0">

          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-200">

            <nav class="flex space-x-8 overflow-x-auto scrollbar-hide flex-grow">
              <button class="shrink-0 pb-4 px-2 text-[17px] font-semibold text-gray-500 hover:text-gray-800 transition-colors">
                Mis Eventos
              </button>
              <button class="shrink-0 pb-4 px-2 text-[17px] font-bold text-[#001D6B] border-b-[3px] border-[#001D6B]">
                Mis Emprendimientos
              </button>
              <button class="shrink-0 pb-4 px-2 text-[17px] font-semibold text-gray-500 hover:text-gray-800 transition-colors">
                Asistiré
              </button>
            </nav>

            <div class="pb-4 hidden md:block">
              <button class="bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold px-6 py-3 rounded-xl shadow-sm transition-colors text-[14.5px] shrink-0">
                Publicar Emprendimiento
              </button>
            </div>
          </div>

          <div class="md:hidden mt-6 mb-2">
            <button class="w-full bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold px-6 py-3.5 rounded-xl shadow-sm transition-colors text-[15px]">
              Publicar Emprendimiento
            </button>
          </div>

          <div class="mt-8 md:mt-10 flex flex-col gap-8">

            <article class="bg-white rounded-[28px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col sm:flex-row h-auto sm:h-[280px]">
              <div class="w-full sm:w-[320px] shrink-0 bg-slate-900 relative">
                <img src="https://images.unsplash.com/photo-1541535889985-78c6e268f763?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover opacity-80" alt="Pasteles Background"/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                <div class="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <h3 class="text-white text-3xl font-black italic opacity-90 drop-shadow-lg" style="font-family: serif;">Workshop<br/><span class="text-base font-medium opacity-80 not-italic">SAVE WORK</span></h3>
                </div>
              </div>

              <div class="flex flex-col flex-grow p-6 sm:p-8 relative">
                <button class="absolute top-6 right-6 text-gray-400 hover:text-gray-700">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"/></svg>
                </button>

                <div class="mb-1">
                  <span class="text-[#B8860B] font-black text-[11px] tracking-widest uppercase">Comida</span>
                </div>

                                <h3 class="text-[28px] font-black text-[#001D6B] mb-2">Pasteles</h3>
                <p class="text-[16px] text-gray-500 font-medium mb-6">Pasteles</p>

                                <div class="flex items-center gap-3 text-[14.5px] text-gray-800 font-bold mb-8">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Hall del A
                </div>

                <div class="mt-auto flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto self-end">
                  <button class="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-gray-50 font-bold py-2.5 px-6 rounded-xl transition-colors text-[14px]">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    Editar Emprendimiento
                  </button>
                  <button @click="$router.push('/detalles-emprendimiento-dueo')" class="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#001D6B] hover:bg-[#001242] text-white font-bold py-2.5 px-6 rounded-xl shadow-md transition-colors text-[14px]">
                    Ver Emprendimiento
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-[28px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col sm:flex-row h-auto sm:h-[280px]">
              <div class="w-full sm:w-[320px] shrink-0 bg-slate-900 relative">
                <img src="https://images.unsplash.com/photo-1541535889985-78c6e268f763?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover opacity-80" alt="Collares Background"/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                <div class="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <h3 class="text-white text-3xl font-black italic opacity-90 drop-shadow-lg" style="font-family: serif;">Workshop<br/><span class="text-base font-medium opacity-80 not-italic">SAVE WORK</span></h3>
                </div>
              </div>

              <div class="flex flex-col flex-grow p-6 sm:p-8 relative">
                <button class="absolute top-6 right-6 text-gray-400 hover:text-gray-700">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"/></svg>
                </button>

                <div class="mb-1">
                  <span class="text-[#B8860B] font-black text-[11px] tracking-widest uppercase">Accesorios</span>
                </div>

                                <h3 class="text-[28px] font-black text-[#001D6B] mb-2">Collares</h3>
                <p class="text-[16px] text-gray-500 font-medium mb-6">Collares</p>

                                <div class="flex items-center gap-3 text-[14.5px] text-gray-800 font-bold mb-8">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Cochineras
                </div>

                <div class="mt-auto flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto self-end">
                  <button class="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-gray-50 font-bold py-2.5 px-6 rounded-xl transition-colors text-[14px]">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    Editar Emprendimiento
                  </button>
                  <button @click="$router.push('/detalles-emprendimiento-dueo')" class="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#001D6B] hover:bg-[#001242] text-white font-bold py-2.5 px-6 rounded-xl shadow-md transition-colors text-[14px]">
                    Ver Emprendimiento
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
              </div>
            </article>

          </div>
        </div>

      </div>

    </main>

    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'PerfilMisEmprendimientos',
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
