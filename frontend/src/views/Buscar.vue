<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full md:max-w-[768px] mx-auto bg-white shadow-lg">
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
      <button @click="$router.go(-1)" class="text-gray-500 hover:text-gray-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="relative flex-1">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input
          v-model="query"
          type="text"
          autofocus
          placeholder="Search"
          class="w-full bg-[#F3F4F6] rounded-[10px] pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]"
        />
      </div>
    </div>

    <div class="flex px-4 py-4">
      <button
        @click="tabActiva = 'eventos'"
        :class="tabActiva === 'eventos' ? 'bg-[#1E3A8A] text-white' : 'bg-[#F3F4F6] text-gray-600 hover:bg-gray-200'"
        class="flex-1 font-bold text-sm py-2.5 rounded-l-[10px] transition-colors"
      >
        Eventos Culturales
      </button>

      <button
        @click="tabActiva = 'emprendimientos'"
        :class="tabActiva === 'emprendimientos' ? 'bg-[#1E3A8A] text-white' : 'bg-[#F3F4F6] text-gray-600 hover:bg-gray-200'"
        class="flex-1 font-bold text-sm py-2.5 rounded-r-[10px] transition-colors"
      >
        Emprendimientos
      </button>
    </div>

    <div v-if="tabActiva === 'eventos'" class="flex gap-2 px-4 overflow-x-auto pb-4 scrollbar-hide">
      <button class="shrink-0 bg-[#1E3A8A] text-white text-xs font-bold px-4 py-1.5 rounded-full">Todo</button>
      <button class="shrink-0 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full">Música</button>
      <button class="shrink-0 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full">Comida</button>
      <button class="shrink-0 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full">Misa</button>
    </div>

    <div v-else class="flex gap-2 px-4 overflow-x-auto pb-4 scrollbar-hide">
      <button class="shrink-0 bg-[#1E3A8A] text-white text-xs font-bold px-4 py-1.5 rounded-full">Todo</button>
      <button class="shrink-0 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full">Ropa</button>
      <button class="shrink-0 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full">Accesorios</button>
      <button class="shrink-0 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full">Servicios</button>
    </div>

    <div class="flex-1 px-4 overflow-y-auto pb-24 mt-4">
      <p class="text-xs text-gray-500 mb-4">
        {{ tabActiva === 'eventos' ? eventosFiltrados.length : emprendimientosFiltrados.length }} resultados
      </p>

      <div v-if="tabActiva === 'eventos'" class="space-y-4">
        <SearchCard
          v-for="evento in eventosFiltrados"
          :key="evento.id"
          v-bind="evento"
          tagColor="bg-purple-100 text-purple-600"
        />
      </div>

      <div v-else class="space-y-4">
        <SearchCard
          v-for="emp in emprendimientosFiltrados"
          :key="emp.id"
          v-bind="emp"
          tagColor="bg-green-100 text-green-600"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import SearchCard from './SearchCard.vue'

const tabActiva = ref('eventos')
const query = ref('')

const eventos = [
  {
    id: 1,
    titulo: 'Festival de Musica Andina',
    categoria: 'Musica',
    descripcion: 'Presentaciones en vivo con agrupaciones universitarias y artistas invitados.',
    autor: 'Cultura UNET',
    imagen: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80',
    avatar: 'https://i.pravatar.cc/40?img=12'
  },
  {
    id: 2,
    titulo: 'Feria Gastronomica Universitaria',
    categoria: 'Comida',
    descripcion: 'Sabores regionales preparados por estudiantes emprendedores y chefs locales.',
    autor: 'Bienestar Estudiantil',
    imagen: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=300&q=80',
    avatar: 'https://i.pravatar.cc/40?img=22'
  },
  {
    id: 3,
    titulo: 'Misa de Accion de Gracias',
    categoria: 'Misa',
    descripcion: 'Encuentro espiritual de cierre de semestre en la capilla universitaria.',
    autor: 'Pastoral UNET',
    imagen: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=300&q=80',
    avatar: 'https://i.pravatar.cc/40?img=32'
  }
]

const emprendimientos = [
  {
    id: 101,
    titulo: 'Ropa Creativa ULA',
    categoria: 'Ropa',
    descripcion: 'Coleccion de prendas urbanas con disenos inspirados en la vida universitaria.',
    autor: 'Ana Perez',
    imagen: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80',
    avatar: 'https://i.pravatar.cc/40?img=5'
  },
  {
    id: 102,
    titulo: 'Accesorios Artesanales Merida',
    categoria: 'Accesorios',
    descripcion: 'Pulseras, collares y piezas tejidas a mano con materiales sostenibles.',
    autor: 'Luis Gonzalez',
    imagen: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=300&q=80',
    avatar: 'https://i.pravatar.cc/40?img=45'
  },
  {
    id: 103,
    titulo: 'Diseno de Flyers Academicos',
    categoria: 'Servicios',
    descripcion: 'Creacion de piezas graficas para eventos estudiantiles y marcas personales.',
    autor: 'Maria Rivas',
    imagen: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=300&q=80',
    avatar: 'https://i.pravatar.cc/40?img=16'
  },
  {
    id: 104,
    titulo: 'Snack Bar Estudiantil',
    categoria: 'Comida',
    descripcion: 'Meriendas saludables y combos rapidos para estudiantes durante la jornada.',
    autor: 'Carlos Mora',
    imagen: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=300&q=80',
    avatar: 'https://i.pravatar.cc/40?img=29'
  }
]

const normalizar = (valor) => valor.toLowerCase().trim()

const coincideConQuery = (item) => {
  const termino = normalizar(query.value)

  if (!termino) {
    return true
  }

  return [item.titulo, item.descripcion, item.categoria, item.autor]
    .some((campo) => normalizar(campo).includes(termino))
}

const eventosFiltrados = computed(() => eventos.filter(coincideConQuery))
const emprendimientosFiltrados = computed(() => emprendimientos.filter(coincideConQuery))
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>