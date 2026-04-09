<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 sticky top-0 bg-white z-20 shadow-sm w-full">
      <button @click="$router.go(-1)" class="text-gray-500 hover:text-gray-800 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="relative flex-1 max-w-[768px] mx-auto">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input
          v-model="query"
          type="text"
          autofocus
          placeholder="Buscar en ConectaUNET..."
          class="w-full bg-[#F3F4F6] rounded-xl pl-10 pr-4 py-3 text-[15px] font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:bg-white transition-all border border-transparent focus:border-[#1e3a8a]"
        />
      </div>
    </div>

    <main class="flex-grow w-full max-w-[768px] mx-auto flex flex-col relative pb-20 md:pb-10">
      
      <div class="flex px-4 py-4 shrink-0">
        <button
          @click="tabActiva = 'eventos'"
          :class="tabActiva === 'eventos' ? 'bg-[#1E3A8A] text-white shadow-md' : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50'"
          class="flex-1 font-bold text-[14px] py-3 rounded-l-xl transition-all"
        >
          Eventos Culturales
        </button>

        <button
          @click="tabActiva = 'emprendimientos'"
          :class="tabActiva === 'emprendimientos' ? 'bg-[#1E3A8A] text-white shadow-md border-l-[#1E3A8A]' : 'bg-white border border-gray-200 border-l-0 text-gray-500 hover:bg-gray-50'"
          class="flex-1 font-bold text-[14px] py-3 rounded-r-xl transition-all"
        >
          Emprendimientos
        </button>
      </div>

      <div v-if="tabActiva === 'eventos'" class="flex gap-2 px-4 overflow-x-auto pb-4 scrollbar-hide shrink-0">
        <button v-for="filtro in filtrosEventos" :key="filtro" 
          @click="filtroCatEventos = filtro"
          :class="filtroCatEventos === filtro ? 'bg-[#1E3A8A] text-white border-[#1e3a8a]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'"
          class="shrink-0 border text-[13px] font-bold px-5 py-2 rounded-full transition-colors shadow-sm">
          {{ filtro }}
        </button>
      </div>

      <div v-else class="flex gap-2 px-4 overflow-x-auto pb-4 scrollbar-hide shrink-0">
        <button v-for="filtro in filtrosEmprendimientos" :key="filtro"
          @click="filtroCatEmprend = filtro"
          :class="filtroCatEmprend === filtro ? 'bg-[#1E3A8A] text-white border-[#1e3a8a]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'"
          class="shrink-0 border text-[13px] font-bold px-5 py-2 rounded-full transition-colors shadow-sm">
          {{ filtro }}
        </button>
      </div>

      <div class="flex-1 px-4 overflow-y-auto">
        
        <div v-if="cargando" class="flex justify-center py-20">
          <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1e3a8a]"></div>
        </div>

        <template v-else>
          <p class="text-[13px] font-bold text-gray-400 mb-4 px-1 uppercase tracking-wider">
            {{ tabActiva === 'eventos' ? eventosFiltrados.length : emprendimientosFiltrados.length }} resultados encontrados
          </p>

          <div v-if="tabActiva === 'eventos'" class="space-y-4">
            <SearchCard
              v-for="evento in eventosFiltrados"
              :key="evento._id"
              :imagen="evento.coverImage"
              :titulo="evento.title"
              :etiqueta="evento.category"
              :descripcion="evento.description"
              :ubicacion="evento.location"
              :autor="evento.organizer?.name"
              :avatar="evento.organizer?.avatar || generarAvatarGenerico(evento.organizer?.name)"
              :tagColor="getColorEtiqueta(evento.category)"
              @click="$router.push(`/eventos/${evento._id}`)"
              class="cursor-pointer hover:shadow-md transition-shadow"
            />
            
            <div v-if="eventosFiltrados.length === 0" class="text-center py-10 text-gray-500">
              No se encontraron eventos con esa búsqueda.
            </div>
          </div>

          <div v-else class="space-y-4">
            <SearchCard
              v-for="emp in emprendimientosFiltrados"
              :key="emp._id"
              :imagen="emp.coverImage"
              :titulo="emp.title"
              :etiqueta="emp.category"
              :descripcion="emp.description"
              :ubicacion="emp.location"
              :autor="emp.owner?.name"
              :avatar="emp.owner?.avatar || generarAvatarGenerico(emp.owner?.name)"
              :tagColor="getColorEtiqueta(emp.category)"
              @click="$router.push(`/emprendimientos/${emp._id}`)"
              class="cursor-pointer hover:shadow-md transition-shadow"
            />
            
            <div v-if="emprendimientosFiltrados.length === 0" class="text-center py-10 text-gray-500">
              No se encontraron emprendimientos con esa búsqueda.
            </div>
          </div>
        </template>
        
      </div>
    </main>

    <BottomNav />
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import SearchCard from '../components/SearchCard.vue'
import BottomNav from '../components/BottomNav.vue'
import { fetchApi } from '../utils/api.js'

// --- ESTADOS DE LA VISTA ---
const tabActiva = ref('eventos')
const query = ref('')
const cargando = ref(true)

// --- LISTAS DE DATOS REALES ---
const eventos = ref([])
const emprendimientos = ref([])

// --- FILTROS DE CATEGORÍAS (Píldoras) ---
const filtrosEventos = ['Todo', 'Concierto', 'Comida', 'Misa', 'Taller', 'Bazar']
const filtroCatEventos = ref('Todo')

const filtrosEmprendimientos = ['Todo', 'Ropa', 'Accesorios', 'Servicios', 'Comida']
const filtroCatEmprend = ref('Todo')

// --- CONEXIÓN AL BACKEND ---
const cargarDatos = async () => {
  cargando.value = true
  try {
    const [resEventos, resEmprend] = await Promise.all([
      fetchApi('/api/eventos'),
      fetchApi('/api/emprendimientos')
    ])
    
    const [jsonEventos, jsonEmprend] = await Promise.all([
      resEventos.json(),
      resEmprend.json()
    ])
    
    if (jsonEventos.success) eventos.value = jsonEventos.data
    if (jsonEmprend.success) emprendimientos.value = jsonEmprend.data
  } catch (error) {
    console.error("Error al buscar datos:", error)
  } finally {
    cargando.value = false
  }
}

// Ejecutar al entrar a la pantalla
onMounted(() => {
  cargarDatos()
})

// --- LÓGICA DE FILTRADO LOCAL ---
const normalizar = (valor) => (valor ? valor.toString().toLowerCase().trim() : '')

// Filtramos Eventos: Por categoría y luego por texto
const eventosFiltrados = computed(() => {
  return eventos.value.filter(item => {
    // 1. Validar Filtro de Píldora
    if (filtroCatEventos.value !== 'Todo' && item.category !== filtroCatEventos.value) return false;
    
    // 2. Validar Búsqueda de Texto
    const termino = normalizar(query.value)
    if (!termino) return true;
    
    return [item.title, item.description, item.category, item.organizer?.name]
      .some((campo) => normalizar(campo).includes(termino))
  })
})

// Filtramos Emprendimientos: Por categoría y luego por texto
const emprendimientosFiltrados = computed(() => {
  return emprendimientos.value.filter(item => {
    // 1. Validar Filtro de Píldora
    if (filtroCatEmprend.value !== 'Todo' && item.category !== filtroCatEmprend.value) return false;
    
    // 2. Validar Búsqueda de Texto
    const termino = normalizar(query.value)
    if (!termino) return true;
    
    return [item.title, item.description, item.category, item.owner?.name]
      .some((campo) => normalizar(campo).includes(termino))
  })
})

// --- HELPERS VISUALES ---
// Genera un color bonito dependiendo de la categoría (como tu tagColor)
const getColorEtiqueta = (categoria) => {
  const cat = normalizar(categoria)
  const colores = {
    'comida': 'bg-orange-100 text-orange-600',
    'concierto': 'bg-purple-100 text-purple-600',
    'música': 'bg-purple-100 text-purple-600',
    'misa': 'bg-sky-100 text-sky-600',
    'taller': 'bg-emerald-100 text-emerald-600',
    'ropa': 'bg-pink-100 text-pink-600',
    'accesorios': 'bg-amber-100 text-amber-700',
    'servicios': 'bg-blue-100 text-blue-600',
  }
  return colores[cat] || 'bg-gray-100 text-gray-600'
}

// Genera imagen con iniciales si el usuario no tiene avatar
const generarAvatarGenerico = (nombre) => {
  return `https://ui-avatars.com/api/?name=${nombre}&background=EBF5FF&color=1E3A8A`
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>