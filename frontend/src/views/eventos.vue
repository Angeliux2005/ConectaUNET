<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader />

    <main class="flex-grow w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-[72px] pb-16 pt-4 md:pt-8">
      
      <div class="md:hidden mb-6 bg-gray-100/80 p-1.5 rounded-[16px] flex items-center shadow-inner">
        <button class="flex-1 bg-[#1e3a8a] text-white text-[13px] font-bold py-2.5 px-2 rounded-xl shadow-md leading-tight text-center">
          Eventos<br>Culturales
        </button>
        <button @click="$router.push('/emprendimientos')" class="flex-1 text-gray-500 hover:text-gray-800 text-[13px] font-bold py-2.5 px-2 rounded-xl transition-colors text-center">
          Emprendimientos
        </button>
      </div>

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
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Exposición</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Taller</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Bazar</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Laboratorio</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Cultural</button>
        <button class="shrink-0 bg-[#254291] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#1a337a] transition-colors shadow-sm">Concierto</button>
      </div>

      <div class="mt-8">
        <div v-if="cargando" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1e3a8a]"></div>
        </div>

        <div v-else-if="eventos.length === 0" class="text-center py-20 text-gray-500 font-medium">
          <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          No hay eventos programados en este momento.
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MainCard
            v-for="evento in eventos"
            :key="evento._id"
            :imagen="evento.coverImage"
            :etiqueta="evento.category.toUpperCase()"
            :titulo="evento.title"
            :descripcion="evento.description"
            :ubicacion="evento.location"
            :fecha="formatearFecha(evento.date)"
            :hora="evento.timeRange"
            :autor="evento.organizer?.name || 'Sin organizador'"
            :avatar="evento.organizer?.avatar || `https://ui-avatars.com/api/?name=${evento.organizer?.name || 'U'}&background=EBF5FF&color=1E3A8A`"
            :enlaceDetalle="`/eventos/${evento._id}`"
          />
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
import { ref, onMounted } from 'vue' // Importamos reactividad
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import BottomNav from '../components/BottomNav.vue'
import MainCard from '../components/MainCard.vue'

// --- LÓGICA DE CONEXIÓN AL BACKEND ---
const eventos = ref([])
const cargando = ref(true)

// Función para llamar a la API
const cargarEventos = async () => {
  try {
    const respuesta = await fetch('/api/eventos')
    const json = await respuesta.json()
    
    if (json.success) {
      eventos.value = json.data
    }
  } catch (error) {
    console.error("Error al cargar los eventos desde el servidor:", error)
  } finally {
    cargando.value = false
  }
}

// Formateador de fechas para que se vea como "02 de Marzo del 2026"
const formatearFecha = (fechaISO) => {
  if (!fechaISO) return ''
  const fecha = new Date(fechaISO)
  const opciones = { day: '2-digit', month: 'long', year: 'numeric' }
  // Usamos 'es-VE' o 'es-ES' para el formato en español
  const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones)
  return fechaFormateada.replace(' de ', ' de ').replace(' 20', ' del 20') // Pequeño ajuste visual
}

// Ejecutar cuando la pantalla cargue
onMounted(() => {
  cargarEventos()
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