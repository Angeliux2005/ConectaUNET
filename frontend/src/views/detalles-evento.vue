<template>
  <div class="min-h-screen bg-white lg:bg-[#F8F9FB] flex flex-col font-sans w-full relative">

    <div class="hidden lg:block">
      <AppHeader />
    </div>

    <button @click="$router.go(-1)" class="lg:hidden absolute top-6 left-4 z-50 w-9 h-9 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>

    <div v-if="cargando" class="flex-grow flex items-center justify-center">
      <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1e3a8a]"></div>
    </div>

    <main v-else-if="evento" class="flex-grow w-full max-w-[1240px] mx-auto px-0 lg:px-8 mt-0 lg:mt-[72px] pb-6 lg:pb-16 pt-0 lg:pt-12 flex flex-col lg:flex-row gap-0 lg:gap-10">

      <div class="w-full lg:w-[65%] flex flex-col">

        <div class="w-full relative h-[320px] lg:h-[400px] lg:rounded-[32px] overflow-hidden lg:bg-gray-200 shrink-0">
          <img :src="evento.coverImage || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'" class="w-full h-full object-cover" :alt="evento.title" />
          <div class="hidden lg:block absolute bottom-6 left-6 bg-[#FBC02D] text-[#001D6B] text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
            {{ evento.category }}
          </div>
        </div>

        <div class="bg-white relative z-10 -mt-10 lg:mt-0 rounded-t-[32px] lg:rounded-none px-6 py-8 lg:px-2 lg:py-0 w-full flex flex-col">

          <div class="lg:hidden bg-[#F3F4F6] text-gray-600 text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider self-start mb-4">
            {{ evento.category }}
          </div>

          <h1 class="text-[26px] lg:text-[44px] font-black text-[#001D6B] leading-[1.1] tracking-tight">
            {{ evento.title }}
          </h1>

          <p class="hidden lg:block text-[18px] lg:text-[22px] text-gray-600 leading-relaxed mt-5 font-normal">
            {{ evento.description }}
          </p>

          <div class="lg:hidden mt-6 bg-white rounded-[24px] p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-5">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#1e3a8a] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <span class="text-[#1F2937] font-bold text-[14px] block">{{ formatearFecha(evento.date) }}</span>
                <span class="text-gray-400 font-medium text-[11px] uppercase tracking-wide">{{ evento.timeRange }}</span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#1e3a8a] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <span class="text-[#1F2937] font-bold text-[14px] block">{{ evento.location }}</span>
              </div>
            </div>
          </div>

          <div class="mt-8 lg:mt-12 lg:bg-white lg:rounded-3xl lg:p-10 lg:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] lg:border lg:border-gray-100/50">
            <h3 class="text-[11px] lg:text-[20px] font-bold text-gray-500 lg:text-[#001D6B] uppercase lg:capitalize tracking-widest lg:tracking-normal mb-3 lg:mb-5">Acerca del evento</h3>
            <p class="text-[14px] lg:text-[15.5px] text-gray-700 leading-[1.7]">{{ evento.description }}</p>
          </div>

          <div v-if="evento.organizer" class="lg:hidden mt-6 bg-white rounded-[20px] p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <img :src="evento.organizer.avatar || `https://ui-avatars.com/api/?name=${evento.organizer.name}&background=EBF5FF&color=1E3A8A`" :alt="evento.organizer.name" class="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100" />
              <div>
                <span class="text-gray-400 font-bold text-[9px] uppercase tracking-wide block">Organizado por</span>
                <span class="text-[#1F2937] font-bold text-[13px] block leading-tight">{{ evento.organizer.name }}</span>
              </div>
            </div>
          </div>

          <div class="lg:hidden mt-8 mb-4 space-y-3">
            <button @click="$router.push(`/editar-evento/${evento._id}`)" class="w-full bg-white border border-gray-200 text-[#1E3A8A] font-bold py-4 rounded-[16px] flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition-colors active:scale-[0.98]">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              Editar Evento
            </button>
            <button class="w-full bg-[#1E3A8A] hover:bg-[#152a6b] text-white font-bold py-4 rounded-[16px] flex items-center justify-center gap-2 shadow-md transition-colors active:scale-[0.98]">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Asistiré
            </button>
          </div>

        </div>
      </div>

      <aside class="hidden lg:flex w-full lg:w-[35%] flex-col gap-6 lg:mt-0">

        <div class="bg-white rounded-[24px] p-7 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50">
          <div class="flex gap-5">
            <div class="w-12 h-12 rounded-xl bg-[#EBF5FF] text-[#1e3a8a] flex items-center justify-center shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <span class="text-[#B8860B] font-black text-[10px] tracking-widest uppercase block mb-1">Fecha</span>
              <span class="text-gray-900 font-bold text-[17px] block">{{ formatearFecha(evento.date) }}</span>
              <span class="text-gray-500 font-medium text-[14px]">{{ evento.timeRange }}</span>
            </div>
          </div>

          <div class="w-full h-px bg-gray-100 my-6"></div>

          <div class="flex gap-5">
            <div class="w-12 h-12 rounded-xl bg-[#EBF5FF] text-[#1e3a8a] flex items-center justify-center shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div>
              <span class="text-[#B8860B] font-black text-[10px] tracking-widest uppercase block mb-1">Ubicación</span>
              <span class="text-gray-900 font-bold text-[17px] block">{{ evento.location }}</span>
            </div>
          </div>

          <div class="flex flex-col gap-3 mt-8">
            <button @click="$router.push(`/editar-evento/${evento._id}`)" class="w-full bg-white border border-gray-200 text-[#1E3A8A] font-bold py-3.5 rounded-xl shadow-sm hover:bg-gray-50 transition-colors text-[15px] flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              Editar Evento
            </button>
            <button class="w-full bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-3.5 rounded-xl shadow-md transition-colors text-[15px] flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
              Asistiré al Evento
            </button>
          </div>
        </div>

        <div v-if="evento.organizer" class="bg-white rounded-[24px] p-7 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50">
          <div class="flex items-center gap-4">
            <img :src="evento.organizer.avatar || `https://ui-avatars.com/api/?name=${evento.organizer.name}&background=EBF5FF&color=1E3A8A`" :alt="evento.organizer.name" class="w-[52px] h-[52px] rounded-full object-cover shadow-sm bg-gray-100 border border-gray-200" />
            <div>
              <span class="text-[#B8860B] font-black text-[10px] tracking-widest uppercase block mb-0.5">Organizador</span>
              <span class="text-[#001D6B] font-bold text-[18px]">{{ evento.organizer.name }}</span>
            </div>
          </div>
        </div>

      </aside>

    </main>

    <section v-if="eventosRelacionados.length > 0" class="hidden lg:block mt-10 max-w-[1240px] mx-auto px-8 w-full mb-16">
      <h2 class="text-[34px] font-black text-[#001D6B] tracking-tight">Eventos relacionados</h2>
      <div class="mt-8 grid grid-cols-3 gap-8">
        <MainCard
          v-for="item in eventosRelacionados"
          :key="item._id"
          :imagen="item.coverImage"
          :etiqueta="item.category"
          :titulo="item.title"
          :descripcion="item.description"
          :ubicacion="item.location"
          :fecha="formatearFecha(item.date)"
          :hora="item.timeRange"
          :autor="item.organizer?.name || 'Sin organizador'"
          :avatar="item.organizer?.avatar || `https://ui-avatars.com/api/?name=${item.organizer?.name || 'U'}&background=EBF5FF&color=1E3A8A`"
          :enlaceDetalle="`/eventos/${item._id}`"
        />
      </div>
    </section>

    <div class="hidden lg:block">
      <AppFooter />
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import MainCard from '../components/MainCard.vue'

const route = useRoute()
const router = useRouter()
const evento = ref(null)
const cargando = ref(true)
const eventosRelacionados = ref([])

const formatearFecha = (fechaISO) => {
  if (!fechaISO) return ''
  const fecha = new Date(fechaISO)
  return fecha.toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })
    .replace(' de ', ' de ').replace(' 20', ' del 20')
}

const cargar = async (id) => {
  cargando.value = true
  evento.value = null
  eventosRelacionados.value = []
  try {
    const [resEvento, resTodos] = await Promise.all([
      fetch(`/api/eventos/${id}`),
      fetch('/api/eventos')
    ])
    const jsonEvento = await resEvento.json()
    const jsonTodos = await resTodos.json()

    if (jsonEvento.success) evento.value = jsonEvento.data
    if (jsonTodos.success) {
      const otros = jsonTodos.data.filter(e => e._id !== id)
      eventosRelacionados.value = otros.sort(() => Math.random() - 0.5).slice(0, 3)
    }
  } catch (error) {
    console.error('Error al cargar el evento:', error)
  } finally {
    cargando.value = false
  }
}

onMounted(() => cargar(route.params.id))
watch(() => route.params.id, (nuevoId) => { if (nuevoId) cargar(nuevoId) })
</script>