<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader />

    <main class="flex-grow w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-[72px] pb-16 pt-8">
      <div class="hidden md:flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="relative w-full md:max-w-md">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input type="text" class="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] transition-all" placeholder="Buscar eventos o comunidades...">
        </div>
      </div>

      <div class="hidden md:flex mt-8 items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Misa</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Exposicion</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Taller</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Bazar</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Laboratorio</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Cultural</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Concierto</button>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MainCard
          imagen="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070"
          etiqueta="MISA"
          titulo="Misa de acción de gracias"
          descripcion="Se llevará a cabo en la capilla una misa por la celebración del 52º aniversario de la Universidad."
          ubicacion="Capilla del B"
          fecha="02 de Marzo del 2026"
          hora="8:00 AM"
          autor="Kimberly Gonzales"
          avatar="https://i.pravatar.cc/100?img=9"
        />

        <MainCard
          imagen="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070"
          etiqueta="CONCIERTO"
          titulo="Concierto"
          descripcion="Concierto en el teatro principal."
          ubicacion="Teatro Principal"
          fecha="07 de Julio del 2026"
          hora="8:00 AM"
          autor="Kimberly Gonzales"
          avatar="https://i.pravatar.cc/100?img=9"
        />

        <MainCard
          imagen="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000"
          etiqueta="TALLER"
          titulo="Taller de IA"
          descripcion="Taller práctico sobre inteligencia artificial."
          ubicacion="Hall del C"
          fecha="01 de Abril del 2026"
          hora="8:00 AM"
          autor="Kimberly Gonzales"
          avatar="https://i.pravatar.cc/100?img=9"
        />
      </div>
    </main>

    <BottomNav />

    <div class="hidden md:block">
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import BottomNav from '../components/BottomNav.vue'
import MainCard from '../components/MainCard.vue'
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