<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden relative">
    <AppHeader />

    <main class="flex-grow w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-[72px] pb-28 md:pb-16 pt-4 md:pt-8">

      <div class="md:hidden mb-6 bg-gray-100/80 p-1.5 rounded-[16px] flex items-center shadow-inner">
        <button @click="$router.push('/eventos')" class="flex-1 text-gray-500 hover:text-gray-800 text-[13px] font-bold py-2.5 px-2 rounded-xl transition-colors text-center leading-tight">
          Eventos<br>Culturales
        </button>
        <button class="flex-1 bg-[#1e3a8a] text-white text-[13px] font-bold py-2.5 px-2 rounded-xl shadow-md transition-colors text-center">
          Emprendimientos
        </button>
      </div>

      <div class="hidden md:flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="relative w-full md:max-w-md">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="text" class="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] transition-all" placeholder="Buscar emprendimientos...">
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
            Publicar Emprendimiento
          </button>
        </div>
      </div>

      <div class="hidden md:flex mt-8 items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#1a337a] transition-colors shadow-sm tracking-wide">Comida</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#1a337a] transition-colors shadow-sm tracking-wide">Accesorios</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#1a337a] transition-colors shadow-sm tracking-wide">Prepadurias</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#1a337a] transition-colors shadow-sm tracking-wide">Artesania</button>
      </div>

      <div class="mt-8">
        <div v-if="cargando" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1e3a8a]"></div>
        </div>

        <div v-else-if="emprendimientos.length === 0" class="text-center py-20 text-gray-500 font-medium">
          <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          No hay emprendimientos registrados en este momento.
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="emp in emprendimientos"
            :key="emp._id"
            @click="$router.push(`/emprendimientos/${emp._id}`)"
            class="cursor-pointer bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50 transition-transform duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div class="relative h-[220px] w-full bg-slate-100">
              <img
                :src="emp.coverImage || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop'"
                :alt="emp.title"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-5 left-5 bg-[#1e3a8a] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                {{ emp.category }}
              </div>
            </div>
            <div class="p-6 md:p-8 flex-grow flex flex-col">
              <h3 class="text-[22px] font-bold text-gray-900 mb-2 tracking-tight">{{ emp.title }}</h3>
              <p class="text-[15px] text-gray-600 leading-relaxed mb-6">{{ emp.description }}</p>
              <div class="space-y-4 mt-auto mb-8">
                <div class="flex items-center gap-3 text-sm font-semibold text-gray-700">
                  <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {{ emp.location }}
                </div>
              </div>
              <div class="border-t border-gray-100 pt-5 flex items-center justify-between mt-auto">
                <div class="flex items-center gap-3">
                  <img
                    :src="emp.owner?.avatar || `https://ui-avatars.com/api/?name=${emp.owner?.name || 'U'}&background=EBF5FF&color=1E3A8A`"
                    :alt="emp.owner?.name"
                    class="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100"
                  />
                  <span class="text-[15px] font-bold text-gray-900">{{ emp.owner?.name || 'Usuario' }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>

    <BottomNav />

    <div class="hidden md:block">
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import BottomNav from '../components/BottomNav.vue' // Asegúrate de importar el componente

const emprendimientos = ref([])
const cargando = ref(true)

const cargarEmprendimientos = async () => {
  try {
    const respuesta = await fetch('/api/emprendimientos')
    const json = await respuesta.json()
    if (json.success) {
      emprendimientos.value = json.data
    }
  } catch (error) {
    console.error('Error al cargar los emprendimientos:', error)
  } finally {
    cargando.value = false
  }
}

onMounted(() => {
  cargarEmprendimientos()
})
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