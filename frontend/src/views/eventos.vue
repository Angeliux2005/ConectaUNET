<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader />

    <main class="flex-grow w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-[72px] pb-16 pt-8">

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="relative w-full md:max-w-md">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="text" class="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] transition-all" placeholder="Buscar eventos o comunidades...">
        </div>

        <div class="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0">
          <button class="shrink-0 flex items-center gap-2 bg-[#E1E5EF] hover:bg-[#d5dbe9] text-[#1e3a8a] font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
            Filtrar
          </button>
          <button class="shrink-0 flex items-center gap-2 bg-[#E1E5EF] hover:bg-[#d5dbe9] text-[#1e3a8a] font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            Fecha
          </button>
          <button class="shrink-0 flex items-center gap-2 bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-semibold px-6 py-2.5 rounded-xl shadow transition-colors text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            Publicar Evento
          </button>
        </div>
      </div>

      <div class="mt-8 flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Misa</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Exposicion</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Taller</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Bazar</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Laboratorio</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Cultural</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Concierto</button>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <article @click="$router.push('/detalles-evento')" class="cursor-pointer bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50 transition-transform duration-300 hover:-translate-y-1 flex flex-col">
          <div class="relative h-[220px] w-full">
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" alt="Mountain Landscape" class="w-full h-full object-cover" />
            <div class="absolute top-5 left-5 bg-[#1e3a8a] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              MISA
            </div>
            <button class="absolute top-5 right-5 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1e3a8a] shadow-sm hover:bg-white transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
            </button>
          </div>
          <div class="p-6 md:p-8 flex-grow flex flex-col">
            <h3 class="text-[22px] font-bold text-gray-900 mb-3 tracking-tight">Misa de acción de gracias</h3>
            <p class="text-[15px] text-gray-600 leading-relaxed mb-6">
              Se llevará a cabo en la capilla una misa por la celebración del 52º aniversario de la Universidad.
            </p>

            <div class="space-y-3 mt-auto mb-8">
              <div class="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Capilla del B
              </div>
              <div class="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                02 de Marzo del 2026
              </div>
              <div class="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                8:00 AM
              </div>
            </div>

            <div class="border-t border-gray-100 pt-5 flex items-center justify-between mt-auto">
              <div class="flex items-center gap-3">
                <img src="https://i.pravatar.cc/100?img=9" alt="Kimberly" class="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100" />
                <span class="text-[15px] font-bold text-gray-900">Kimberly Gonzales</span>
              </div>
              <button class="text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
              </button>
            </div>
          </div>
        </article>

        <article class="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50 transition-transform duration-300 hover:-translate-y-1 flex flex-col">
          <div class="relative h-[220px] w-full">
            <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop" alt="Lake Landscape" class="w-full h-full object-cover" />
            <div class="absolute top-5 left-5 bg-[#1e3a8a] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              CONCIERTO
            </div>
            <button class="absolute top-5 right-5 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1e3a8a] shadow-sm hover:bg-white transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
            </button>
          </div>
          <div class="p-6 md:p-8 flex-grow flex flex-col">
            <h3 class="text-[22px] font-bold text-gray-900 mb-3 tracking-tight">Concierto</h3>
            <p class="text-[15px] text-gray-600 leading-relaxed mb-6">
              Concierto en el teatro
            </p>

                        <div class="space-y-3 mt-auto mb-8">
              <div class="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Teatro Principal
              </div>
              <div class="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                07 de Julio del 2026
              </div>
              <div class="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                8:00 AM
              </div>
            </div>

            <div class="border-t border-gray-100 pt-5 flex items-center justify-between mt-auto">
              <div class="flex items-center gap-3">
                <img src="https://i.pravatar.cc/100?img=9" alt="Kimberly" class="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100" />
                <span class="text-[15px] font-bold text-gray-900">Kimberly Gonzales</span>
              </div>
              <button class="text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
              </button>
            </div>
          </div>
        </article>

        <article class="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50 transition-transform duration-300 hover:-translate-y-1 flex flex-col">
          <div class="relative h-[220px] w-full">
            <img src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop" alt="Haze Trees" class="w-full h-full object-cover" />
            <div class="absolute top-5 left-5 bg-[#1e3a8a] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              TALLER
            </div>
            <button class="absolute top-5 right-5 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1e3a8a] shadow-sm hover:bg-white transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
            </button>
          </div>
          <div class="p-6 md:p-8 flex-grow flex flex-col">
            <h3 class="text-[22px] font-bold text-gray-900 mb-3 tracking-tight">Taller de IA</h3>
            <p class="text-[15px] text-gray-600 leading-relaxed mb-6">
              Taller de IA
            </p>

                        <div class="space-y-3 mt-auto mb-8">
              <div class="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Hall del C
              </div>
              <div class="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                01 de Abril del 2026
              </div>
              <div class="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                8:00 AM
              </div>
            </div>

            <div class="border-t border-gray-100 pt-5 flex items-center justify-between mt-auto">
              <div class="flex items-center gap-3">
                <img src="https://i.pravatar.cc/100?img=9" alt="Kimberly" class="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100" />
                <span class="text-[15px] font-bold text-gray-900">Kimberly Gonzales</span>
              </div>
              <button class="text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
              </button>
            </div>
          </div>
        </article>

      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'Eventos',

    data() {
    return {
      }
  }
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
