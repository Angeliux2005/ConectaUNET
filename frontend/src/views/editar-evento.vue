<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    
    <div class="hidden md:block w-full">
      <AppHeader />
    </div>

    <main class="flex-grow w-full max-w-[1100px] mx-auto md:px-8 lg:px-12 md:mt-[72px] pb-24 md:pb-32 md:pt-8 relative">
      <div class="space-y-6">

        <section class="md:hidden bg-[#F8F9FB] min-h-screen flex flex-col">
          
          <div class="bg-white px-4 py-3.5 flex items-center justify-between sticky top-0 z-20 shadow-sm border-b border-gray-100">
            <button @click="$router.back()" class="p-1.5 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <h1 class="text-[18px] font-black text-[#0A1128] tracking-tight">Editar Evento</h1>
            <button @click.prevent="saveEvent" class="bg-[#1e3a8a] text-white text-[13px] font-bold px-5 py-2 rounded-xl shadow-sm hover:bg-[#152a6b] transition-colors">
              Save
            </button>
          </div>

          <div class="bg-[#1e3aa8] py-14 flex flex-col items-center justify-center shrink-0">
            <button class="bg-white text-[#1e3a8a] text-[13px] font-bold px-7 py-3.5 rounded-2xl flex items-center gap-2.5 shadow-md hover:bg-gray-50 transition-colors">
              <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Cambiar Portada
            </button>
          </div>

          <div class="bg-white rounded-t-[28px] -mt-5 z-10 px-6 pt-8 pb-32 flex-grow flex flex-col shadow-[0_-8px_20px_rgba(0,0,0,0.05)]">
            <div class="space-y-5 flex-grow">

              <label class="block">
                <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">NOMBRE DEL EVENTO</span>
                <input v-model="form.nombre" type="text" class="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
              </label>

              <label class="block">
                <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">CATEGORÍA</span>
                <div class="relative">
                  <select v-model="form.categoria" class="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all appearance-none pr-10">
                    <option value="Taller / Académico">Taller / Académico</option>
                    <option value="Concierto">Concierto</option>
                    <option value="Feria">Feria</option>
                    <option value="Otro">Otro</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
              </label>

              <div class="grid grid-cols-2 gap-4">
                <label class="block">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">FECHA</span>
                  <div class="relative">
                    <input v-model="form.fecha" type="text" placeholder="DD/MM/AAAA" class="w-full rounded-2xl border border-gray-200 bg-white pl-4 pr-10 py-3.5 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    </div>
                  </div>
                </label>
                <label class="block">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">HORA</span>
                  <input v-model="form.hora" type="text" placeholder="10:00 AM" class="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
                </label>
              </div>

              <label class="block">
                <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">UBICACIÓN</span>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <input v-model="form.ubicacion" type="text" class="w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 py-3.5 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
                </div>
              </label>

              <label class="block">
                <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">DESCRIPCIÓN</span>
                <textarea v-model="form.descripcion" rows="5" class="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[14px] text-gray-800 font-medium leading-relaxed focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all resize-none"></textarea>
              </label>

              <div class="pt-4 border-t border-gray-100 mt-2">
                <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">OPCIONES AVANZADAS</p>
                <button class="w-full flex items-center justify-center gap-3 rounded-2xl border border-red-100 bg-white px-4 py-4 text-[14px] font-bold text-[#001D6B] hover:bg-red-50 transition-colors shadow-sm">
                  <div class="bg-red-500 rounded-full p-1 text-white flex items-center justify-center shrink-0">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>
                  </div>
                  Eliminar evento
                </button>
              </div>

            </div>
          </div>
        </section>

        <section class="hidden md:flex flex-col">
          
          <div class="mb-8">
            <button @click="$router.back()" class="inline-flex items-center gap-1.5 text-[#001D6B] font-bold text-[13px] hover:text-[#1e3a8a] transition-colors mb-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              Volver a Detalles
            </button>
            <h1 class="text-[32px] font-black text-[#0A1128] tracking-tight mb-2">Configurar Evento</h1>
            <p class="text-[14.5px] text-gray-500 font-medium">Define la identidad visual y los detalles logísticos de tu evento cultural.</p>
          </div>

          <div class="relative h-[280px] w-full bg-[#050B14] rounded-2xl overflow-hidden mb-8 shadow-sm">
            <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=2000&auto=format&fit=crop" alt="Portada evento" class="w-full h-full object-cover mix-blend-overlay opacity-60" />
            
            <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#1e3a8a] text-[13px] font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg hover:bg-gray-50 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
              Editar Portada
            </button>
          </div>

          <div class="flex flex-col lg:flex-row gap-6 mb-8">
            
            <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex-grow lg:w-[60%]">
              <h2 class="text-[16px] font-bold text-[#001D6B] mb-6">Detalles del Evento</h2>
              <div class="space-y-6">
                <label class="block">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">NOMBRE DEL EVENTO</span>
                  <input v-model="form.nombre" type="text" class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
                </label>

                <label class="block">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">CATEGORÍA</span>
                  <div class="relative">
                    <select v-model="form.categoria" class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all appearance-none pr-10">
                      <option value="Taller / Académico">Taller / Académico</option>
                      <option value="Concierto">Concierto</option>
                      <option value="Feria">Feria</option>
                      <option value="Otro">Otro</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </div>
                  </div>
                </label>

                <label class="block">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">DESCRIPCIÓN</span>
                  <textarea v-model="form.descripcion" rows="4" class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-800 font-medium leading-relaxed focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all resize-none"></textarea>
                </label>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex-grow lg:w-[40%]">
              <h2 class="text-[16px] font-bold text-[#001D6B] mb-6">Logística del Evento</h2>
              <div class="space-y-6">
                <label class="block">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">FECHA</span>
                  <div class="relative">
                    <input v-model="form.fecha" type="text" placeholder="DD/MM/AAAA" class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
                  </div>
                </label>
                <label class="block">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">HORA</span>
                  <input v-model="form.hora" type="text" placeholder="10:00 AM" class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
                </label>
                <label class="block">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">UBICACIÓN</span>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <input v-model="form.ubicacion" type="text" class="w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 py-3 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
                  </div>
                </label>
              </div>
            </div>

          </div>

          <div class="flex justify-end items-center gap-4 mt-2">
            <button @click="$router.back()" class="text-[13px] font-bold text-gray-400 hover:text-gray-700 transition-colors px-4 py-2.5">
              Cancelar
            </button>
            <button @click.prevent="saveEvent" class="bg-[#1e3a8a] text-white text-[13px] font-bold px-6 py-2.5 rounded-xl shadow-sm hover:bg-[#152a6b] transition-colors flex items-center gap-2">
              <svg class="w-4 h-4 transform rotate-45 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              Publicar Evento
            </button>
          </div>

        </section>

      </div>
    </main>

    <BottomNav class="md:hidden" />

  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import BottomNav from '../components/BottomNav.vue'

const route = useRoute()
const eventoId = route.params.id || null

const form = reactive({
  nombre: 'Taller de Vue.js y Tailwind',
  categoria: 'Taller / Académico',
  fecha: '05/04/2026',
  hora: '10:00 AM',
  ubicacion: 'Lab. Computación UNET',
  descripcion: 'Únete a este taller práctico donde aprenderemos las bases de Vue.js y cómo estilizar componentes rápidamente usando Tailwind CSS.'
})

onMounted(() => {
  if (eventoId) {
    console.log('Editando evento', eventoId)
  }
})

function saveEvent() {
  console.log('Guardar evento', { id: eventoId, ...form })
}
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>