<template>
  <div class="min-h-screen bg-[#F8F9FB] md:bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader />

    <main class="flex-grow w-full max-w-[1300px] mx-auto md:px-6 lg:px-8 pt-[60px] md:pt-[72px] pb-24 md:pb-16 mt-3 md:mt-10">

      <div class="flex flex-col lg:flex-row gap-0 md:gap-8 lg:gap-10">

        <aside class="w-full lg:w-[320px] shrink-0">
          <div class="bg-transparent md:bg-white md:rounded-[32px] pt-6 pb-4 md:p-8 md:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] md:border md:border-gray-100 flex flex-col items-center">

            <div class="w-[100px] h-[100px] md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white md:border-gray-50 shadow-sm md:bg-[#EBF5FF] flex items-center justify-center relative text-[#1e3a8a] font-bold text-4xl">
              <img v-if="currentUser?.avatar" :src="currentUser.avatar" alt="Perfil" class="w-full h-full object-cover" />
              <span v-else>{{ currentUser?.name?.charAt(0) || 'U' }}</span>
            </div>

            <h2 class="mt-3 md:mt-6 text-[22px] md:text-[26px] font-black text-[#001D6B] tracking-tight text-center">
              {{ currentUser?.name || 'Cargando...' }}
            </h2>

            <p class="mt-0.5 md:mt-4 text-gray-500 font-medium text-[12px] md:text-[15px]">{{ currentUser ? '@' + currentUser.username : '' }}</p>

            <div class="mt-2 md:mt-3 bg-gray-100 text-gray-600 font-bold text-[11px] md:text-[13px] px-4 md:px-5 py-1.5 md:py-2 rounded-full tracking-wide">
              Universitario
            </div>

            <div class="w-full h-px bg-gray-200/60 my-5 md:my-8 hidden md:block"></div>

            <button class="mt-4 md:mt-0 w-[140px] md:w-full bg-white border border-gray-200 md:border-2 md:border-[#1e3a8a] text-gray-700 md:text-[#1e3a8a] hover:bg-gray-50 md:hover:bg-[#1e3a8a] md:hover:text-white font-bold py-2 md:py-3.5 rounded-lg md:rounded-xl transition-all duration-300 text-[12px] md:text-[15px] flex items-center justify-center gap-2 shadow-sm md:shadow-none">
              <svg class="w-3.5 h-3.5 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              Editar Info
            </button>
          </div>
        </aside>

        <div class="flex-grow flex flex-col min-w-0 mt-2 md:mt-0 bg-gray-50 md:bg-transparent">

          <div class="md:hidden flex items-center justify-between px-4 py-3.5 bg-white border-y border-gray-200 shadow-sm">
            <button @click="cambiarVistaPrincipal" class="p-1 text-[#1e3a8a] hover:bg-gray-100 rounded-full transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            
            <span class="text-[#1e3a8a] font-black text-[12px] tracking-widest uppercase">
              VISTA {{ vistaActiva === 'eventos' ? 'EVENTOS' : 'EMPRENDIMIENTOS' }}
            </span>
            
            <button @click="cambiarVistaPrincipal" class="p-1 text-[#1e3a8a] hover:bg-gray-100 rounded-full transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

          <nav v-if="vistaActiva === 'eventos'" class="md:hidden flex w-full bg-white border-b border-gray-200">
            <button @click="tabEventos = 'mis_eventos'" :class="tabEventos === 'mis_eventos' ? 'border-[#1e3a8a] text-[#1e3a8a] font-bold' : 'border-transparent text-gray-500 font-semibold'" class="flex-1 py-3 text-[13px] border-b-[3px] text-center transition-colors">
              Mis Eventos
            </button>
            <button @click="tabEventos = 'asistire'" :class="tabEventos === 'asistire' ? 'border-[#1e3a8a] text-[#1e3a8a] font-bold' : 'border-transparent text-gray-500 font-semibold'" class="flex-1 py-3 text-[13px] border-b-[3px] text-center transition-colors">
              Asistiré
            </button>
            <button @click="tabEventos = 'guardados'" :class="tabEventos === 'guardados' ? 'border-[#1e3a8a] text-[#1e3a8a] font-bold' : 'border-transparent text-gray-500 font-semibold'" class="flex-1 py-3 text-[13px] border-b-[3px] text-center transition-colors">
              Guardados
            </button>
          </nav>

          <nav v-else class="md:hidden flex w-full bg-white border-b border-gray-200 overflow-x-auto scrollbar-hide">
            <button @click="tabEmprendimientos = 'mis_emprendimientos'" :class="tabEmprendimientos === 'mis_emprendimientos' ? 'border-[#1e3a8a] text-[#1e3a8a] font-bold' : 'border-transparent text-gray-500 font-semibold'" class="shrink-0 px-4 py-3 text-[13px] border-b-[3px] text-center transition-colors">
              Mis Emprend.
            </button>
            <button @click="tabEmprendimientos = 'seguidos'" :class="tabEmprendimientos === 'seguidos' ? 'border-[#1e3a8a] text-[#1e3a8a] font-bold' : 'border-transparent text-gray-500 font-semibold'" class="shrink-0 px-4 py-3 text-[13px] border-b-[3px] text-center transition-colors">
              Seguidos
            </button>
            <button @click="tabEmprendimientos = 'likes'" :class="tabEmprendimientos === 'likes' ? 'border-[#1e3a8a] text-[#1e3a8a] font-bold' : 'border-transparent text-gray-500 font-semibold'" class="shrink-0 px-4 py-3 text-[13px] border-b-[3px] text-center transition-colors">
              Likes
            </button>
            <button @click="tabEmprendimientos = 'guardados'" :class="tabEmprendimientos === 'guardados' ? 'border-[#1e3a8a] text-[#1e3a8a] font-bold' : 'border-transparent text-gray-500 font-semibold'" class="shrink-0 px-4 py-3 text-[13px] border-b-[3px] text-center transition-colors">
              Guardados
            </button>
          </nav>

          <div class="hidden md:flex flex-col border-b border-gray-200">
            <div class="flex flex-row items-center justify-between gap-6">
              <nav class="flex space-x-8 overflow-x-auto scrollbar-hide flex-grow">
                <button @click="vistaActiva = 'eventos'" :class="vistaActiva === 'eventos' ? 'text-[#001D6B] border-[#001D6B] font-bold' : 'text-gray-500 hover:text-gray-800 font-semibold'" class="shrink-0 pb-4 px-2 text-[17px] border-b-[3px] border-transparent transition-colors">
                  Eventos
                </button>
                <button @click="vistaActiva = 'emprendimientos'" :class="vistaActiva === 'emprendimientos' ? 'text-[#001D6B] border-[#001D6B] font-bold' : 'text-gray-500 hover:text-gray-800 font-semibold'" class="shrink-0 pb-4 px-2 text-[17px] border-b-[3px] border-transparent transition-colors">
                  Emprendimientos
                </button>
              </nav>

              <div class="pb-4">
                <button class="bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold px-6 py-3 rounded-xl shadow-sm transition-colors text-[14.5px] shrink-0">
                  Publicar {{ vistaActiva === 'eventos' ? 'Evento' : 'Emprendimiento' }}
                </button>
              </div>
            </div>
          </div>

          <div class="hidden md:flex mt-6 items-center gap-3">
            
            <template v-if="vistaActiva === 'eventos'">
              <button @click="tabEventos = 'mis_eventos'" :class="tabEventos === 'mis_eventos' ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'" class="border px-5 py-2 rounded-full font-bold text-[13.5px] shadow-sm transition-all">Mis Eventos</button>
              <button @click="tabEventos = 'asistire'" :class="tabEventos === 'asistire' ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'" class="border px-5 py-2 rounded-full font-bold text-[13.5px] shadow-sm transition-all">Asistiré</button>
              <button @click="tabEventos = 'guardados'" :class="tabEventos === 'guardados' ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'" class="border px-5 py-2 rounded-full font-bold text-[13.5px] shadow-sm transition-all">Guardados</button>
            </template>
            
            <template v-else>
              <button @click="tabEmprendimientos = 'mis_emprendimientos'" :class="tabEmprendimientos === 'mis_emprendimientos' ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'" class="border px-5 py-2 rounded-full font-bold text-[13.5px] shadow-sm transition-all">Mis Emprendimientos</button>
              <button @click="tabEmprendimientos = 'seguidos'" :class="tabEmprendimientos === 'seguidos' ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'" class="border px-5 py-2 rounded-full font-bold text-[13.5px] shadow-sm transition-all">Seguidos</button>
              <button @click="tabEmprendimientos = 'likes'" :class="tabEmprendimientos === 'likes' ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'" class="border px-5 py-2 rounded-full font-bold text-[13.5px] shadow-sm transition-all">Likes</button>
              <button @click="tabEmprendimientos = 'guardados'" :class="tabEmprendimientos === 'guardados' ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'" class="border px-5 py-2 rounded-full font-bold text-[13.5px] shadow-sm transition-all">Guardados</button>
              
              <div v-if="tabEmprendimientos === 'guardados'" class="ml-2 pl-5 border-l border-gray-300 flex items-center gap-3">
                 <span class="text-gray-400 text-[11px] font-black uppercase tracking-wider">Ver:</span>
                 <div class="bg-gray-200/70 p-1 rounded-xl flex w-[260px]">
                  <button @click="filtroGuardados = 'posts'" :class="filtroGuardados === 'posts' ? 'bg-white shadow-sm text-[#1e3a8a] font-bold' : 'text-gray-500 font-medium hover:text-gray-700'" class="flex-1 py-1.5 text-[12px] rounded-lg transition-all">
                    Publicaciones
                  </button>
                  <button @click="filtroGuardados = 'emprendimientos'" :class="filtroGuardados === 'emprendimientos' ? 'bg-white shadow-sm text-[#1e3a8a] font-bold' : 'text-gray-500 font-medium hover:text-gray-700'" class="flex-1 py-1.5 text-[12px] rounded-lg transition-all">
                    Emprendimientos
                  </button>
                </div>
              </div>
            </template>
          </div>

          <div class="p-4 md:p-0 md:mt-8">
            
            <div v-if="vistaActiva === 'emprendimientos' && tabEmprendimientos === 'guardados'" class="flex justify-center mb-4 md:hidden">
              <div class="bg-gray-200/70 p-1 rounded-xl flex w-full max-w-[300px]">
                <button @click="filtroGuardados = 'posts'" :class="filtroGuardados === 'posts' ? 'bg-white shadow-sm text-[#1e3a8a] font-bold' : 'text-gray-500 font-medium'" class="flex-1 py-1.5 text-[12px] rounded-lg transition-all">
                  Publicaciones
                </button>
                <button @click="filtroGuardados = 'emprendimientos'" :class="filtroGuardados === 'emprendimientos' ? 'bg-white shadow-sm text-[#1e3a8a] font-bold' : 'text-gray-500 font-medium'" class="flex-1 py-1.5 text-[12px] rounded-lg transition-all">
                  Emprendimientos
                </button>
              </div>
            </div>

            <div v-if="cargando" class="flex justify-center items-center py-20">
              <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1e3a8a]"></div>
            </div>

            <div v-else-if="(vistaActiva === 'eventos' && eventosFiltrados.length === 0) || (vistaActiva === 'emprendimientos' && emprendimientosFiltrados.length === 0)" class="text-center py-20 text-gray-500 font-medium bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-inner md:shadow-none p-6">
              <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              No hay elementos para mostrar en esta categoría.
            </div>

            <div v-else class="flex flex-col gap-4 md:gap-8">
              
              <template v-if="vistaActiva === 'eventos'">
                <article v-for="evento in eventosFiltrados" :key="evento._id" class="bg-white rounded-2xl md:rounded-[28px] p-4 md:p-6 shadow-sm md:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col">
                  <div class="flex gap-4">
                    <div class="w-[72px] h-[72px] md:w-[160px] md:h-[160px] shrink-0 rounded-lg md:rounded-2xl bg-gray-200 overflow-hidden">
                      <img :src="evento.coverImage" class="w-full h-full object-cover" :alt="evento.title" />
                    </div>
                    
                    <div class="flex flex-col flex-grow justify-center">
                      <h3 class="text-[14px] md:text-[22px] font-bold text-[#1F2937] md:text-[#001D6B] leading-tight mb-0.5 md:mb-2">
                        {{ evento.title }}
                      </h3>
                      <p class="text-[10px] md:text-[14px] text-gray-400 md:text-gray-500 font-medium mb-2 md:mb-4">
                        {{ evento.organizer.name }} - {{ formatearFecha(evento.date) }}
                      </p>
                      
                      <div class="space-y-1 md:space-y-2">
                        <div class="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-[14px] text-gray-500 font-medium">
                          <svg class="w-3.5 h-3.5 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                          {{ evento.location }}
                        </div>
                        <div class="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-[14px] text-gray-500 font-medium">
                          <svg class="w-3.5 h-3.5 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          {{ evento.timeRange }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4 md:mt-6 flex gap-2 md:gap-4 w-full">
                    <button @click="$router.push(`/editar-evento/${evento._id}`)" class="flex-1 bg-white border border-gray-200 text-gray-700 font-bold text-[12px] md:text-[14px] py-2 md:py-3 rounded-lg md:rounded-xl hover:bg-gray-50 transition-colors">
                      Editar Evento
                    </button>
                    <button @click="$router.push(`/detalles-evento/${evento._id}`)" class="flex-1 bg-[#1e3a8a] text-white font-bold text-[12px] md:text-[14px] py-2 md:py-3 rounded-lg md:rounded-xl hover:bg-[#152a6b] shadow-sm transition-colors">
                      Ver Evento
                    </button>
                  </div>
                </article>
              </template>

              <template v-else>
                <article v-for="emp in emprendimientosFiltrados" :key="emp._id" class="bg-white rounded-2xl md:rounded-[28px] overflow-hidden shadow-sm md:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col sm:flex-row h-auto sm:h-[280px]">
                  <div class="w-full sm:w-[320px] h-[140px] sm:h-full shrink-0 bg-slate-900 relative">
                    <img :src="emp.coverImage" class="w-full h-full object-cover opacity-80" :alt="emp.title"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                  </div>

                  <div class="flex flex-col flex-grow p-4 sm:p-8 relative">
                    <div class="mb-1">
                      <span class="text-[#B8860B] font-black text-[10px] sm:text-[11px] tracking-widest uppercase">{{ emp.category }}</span>
                    </div>
                    <h3 class="text-[20px] sm:text-[28px] font-black text-[#001D6B] mb-1 md:mb-2 leading-tight">{{ emp.title }}</h3>
                    <p class="text-[13px] sm:text-[16px] text-gray-500 font-medium mb-3 sm:mb-6 leading-relaxed line-clamp-2">{{ emp.description }}</p>
                    
                    <div class="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[14.5px] text-gray-800 font-bold mb-4 sm:mb-8">
                      <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      {{ emp.location }}
                    </div>

                    <div class="mt-auto flex gap-2 w-full">
                      <button class="flex-1 sm:flex-none flex items-center justify-center bg-white border border-gray-200 md:border-2 md:border-[#1e3a8a] text-gray-700 md:text-[#1e3a8a] hover:bg-gray-50 font-bold py-2 md:py-2.5 px-2 sm:px-6 rounded-lg md:rounded-xl transition-colors text-[11px] md:text-[14px]">
                        Editar Info
                      </button>
                      <button @click="$router.push(`/detalles-emprendimiento-dueo/${emp._id}`)" class="flex-1 sm:flex-none flex items-center justify-center bg-[#1e3a8a] md:bg-[#001D6B] hover:bg-[#152a6b] md:hover:bg-[#001242] text-white font-bold py-2 md:py-2.5 px-2 sm:px-6 rounded-lg md:rounded-xl shadow-md transition-colors text-[11px] md:text-[14px]">
                        Ver Emprendimiento
                      </button>
                    </div>
                  </div>
                </article>
              </template>

            </div>
          </div>
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
import { ref, onMounted, computed } from 'vue'
import { fetchApi } from '../utils/api.js'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import BottomNav from '../components/BottomNav.vue'

const vistaActiva = ref('eventos') 
const tabEventos = ref('mis_eventos') 
const tabEmprendimientos = ref('mis_emprendimientos') 
const filtroGuardados = ref('posts')

const eventos = ref([])
const emprendimientos = ref([])
const cargando = ref(true)

const currentUser = ref(null)

const eventosFiltrados = computed(() => {
  if (!eventos.value || !currentUser.value) return []
  if (tabEventos.value === 'mis_eventos') {
    return eventos.value.filter(e => e.organizer?._id === currentUser.value._id || e.organizer === currentUser.value._id)
  }
  if (tabEventos.value === 'asistire') {
    return eventos.value.filter(e => e.attendees && e.attendees.some(id => id === currentUser.value._id || id.toString() === currentUser.value._id))
  }
  return []
})

const emprendimientosFiltrados = computed(() => {
  if (!emprendimientos.value || !currentUser.value) return []
  if (tabEmprendimientos.value === 'mis_emprendimientos') {
    return emprendimientos.value.filter(e => e.owner?._id === currentUser.value._id || e.owner === currentUser.value._id)
  }
  if (tabEmprendimientos.value === 'seguidos') {
    return emprendimientos.value.filter(e => e.followers && e.followers.some(id => id === currentUser.value._id || id.toString() === currentUser.value._id))
  }
  return []
})

const cargarDatosPerfil = async () => {
  try {
    cargando.value = true
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
    console.error("Error conectando con el backend:", error)
  } finally {
    cargando.value = false
  }
}

const formatearFecha = (fechaISO) => {
  const opciones = { day: '2-digit', month: 'long', year: 'numeric' }
  return new Date(fechaISO).toLocaleDateString('es-ES', opciones)
}

const cambiarVistaPrincipal = () => {
  vistaActiva.value = vistaActiva.value === 'eventos' ? 'emprendimientos' : 'eventos'
}

onMounted(() => {
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    currentUser.value = JSON.parse(storedUser)
  }
  cargarDatosPerfil()
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