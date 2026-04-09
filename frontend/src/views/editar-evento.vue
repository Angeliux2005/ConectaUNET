<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader />

    <main class="flex-grow w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mt-[72px] pb-24 pt-8">
      <div class="space-y-6">

        <!-- Mobile -->
        <section class="md:hidden">
          <div class="relative rounded-[32px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <div class="bg-[#1E3A8A] py-8 text-center text-white">
              <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white shadow-xl">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <p class="text-xs uppercase tracking-[0.35em] text-[#E9EEFF]">Subir foto de portada</p>
              <button class="mt-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-[#1E3A8A] shadow-sm hover:bg-white transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M7 7l5-4 5 4"/></svg>
                Cambiar Portada
              </button>
            </div>
          </div>

          <div class="bg-white rounded-[32px] border border-gray-100 px-5 pb-6 pt-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] -mt-10">
            <div class="flex items-center justify-between mb-6">
              <button @click="$router.back()" class="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold hover:text-[#152a6b] transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                Volver
              </button>
              <button @click.prevent="saveEvent" class="rounded-full bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#152a6b] transition-colors">Guardar</button>
            </div>

            <div class="space-y-4">
              <label class="block">
                <span class="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-500">Nombre del evento</span>
                <input v-model="form.nombre" type="text" placeholder="Taller de Vue.js y Tailwind" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
              </label>

              <label class="block">
                <span class="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-500">Categoría</span>
                <select v-model="form.categoria" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all">
                  <option value="">Seleccionar categoría</option>
                  <option value="Taller / Académico">Taller / Académico</option>
                  <option value="Concierto">Concierto</option>
                  <option value="Feria">Feria</option>
                  <option value="Otro">Otro</option>
                </select>
              </label>

              <div class="grid grid-cols-2 gap-4">
                <label class="block">
                  <span class="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-500">Fecha</span>
                  <input v-model="form.fecha" type="date" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
                </label>
                <label class="block">
                  <span class="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-500">Hora</span>
                  <input v-model="form.hora" type="text" inputmode="numeric" placeholder="10:00 AM" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
                </label>
              </div>

              <label class="block">
                <span class="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-500">Ubicación</span>
                <input v-model="form.ubicacion" type="text" placeholder="Lab. Computación UNET" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
              </label>

              <label class="block">
                <span class="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-500">Descripción</span>
                <textarea v-model="form.descripcion" rows="5" placeholder="Únete a este taller práctico..." class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all"></textarea>
              </label>
            </div>
          </div>
        </section>

        <!-- Desktop -->
        <section class="hidden md:block bg-white rounded-[32px] border border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
          <div class="px-8 py-6 border-b border-gray-200">
            <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <button @click="$router.back()" class="inline-flex items-center gap-2 text-[#1e3a8a] font-semibold hover:text-[#152a6b] transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                Volver a detalles
              </button>
              <button @click.prevent="saveEvent" class="inline-flex items-center gap-2 rounded-full bg-[#1e3a8a] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#152a6b] transition-colors">
                Guardar
              </button>
            </div>
          </div>

          <div class="p-8 space-y-10">
            <div class="space-y-4">
              <div>
                <p class="text-sm uppercase tracking-[0.35em] text-[#1e3a8a] font-black">Configurar Evento</p>
                <h1 class="text-[36px] font-bold text-[#001D6B]">Define la identidad visual y los detalles logísticos de tu evento cultural.</h1>
              </div>

              <div class="rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.25)]">
                <div class="relative h-[260px] bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=2000&auto=format&fit=crop" alt="Portada evento" class="w-full h-full object-cover" />
                  <button class="absolute left-8 top-8 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-[#1e3a8a] shadow-sm hover:bg-white transition-colors">Editar Portada</button>
                </div>
              </div>
            </div>

            <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div class="space-y-6 bg-[#F8F9FB] rounded-[32px] border border-gray-100 p-6">
                <p class="text-sm uppercase tracking-[0.35em] text-[#1e3a8a] font-black">Detalles del Evento</p>

                <label class="block">
                  <span class="text-sm font-semibold text-gray-600">Nombre del evento</span>
                  <input v-model="form.nombre" type="text" placeholder="Taller de Vue.js y Tailwind" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
                </label>

                <label class="block">
                  <span class="text-sm font-semibold text-gray-600">Categoría</span>
                  <select v-model="form.categoria" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all">
                    <option value="">Seleccionar categoría</option>
                    <option value="Taller / Académico">Taller / Académico</option>
                    <option value="Concierto">Concierto</option>
                    <option value="Feria">Feria</option>
                    <option value="Otro">Otro</option>
                  </select>
                </label>

                <label class="block">
                  <span class="text-sm font-semibold text-gray-600">Descripción</span>
                  <textarea v-model="form.descripcion" rows="5" placeholder="Únete a este taller práctico donde aprenderemos..." class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all"></textarea>
                </label>
              </div>

              <div class="space-y-6 bg-[#F8F9FB] rounded-[32px] border border-gray-100 p-6">
                <p class="text-sm uppercase tracking-[0.35em] text-[#1e3a8a] font-black">Logística del Evento</p>

                <label class="block">
                  <span class="text-sm font-semibold text-gray-600">Fecha</span>
                  <input v-model="form.fecha" type="date" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
                </label>

                <label class="block">
                  <span class="text-sm font-semibold text-gray-600">Hora</span>
                  <input v-model="form.hora" type="text" inputmode="numeric" placeholder="10:00 AM" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
                </label>

                <label class="block">
                  <span class="text-sm font-semibold text-gray-600">Ubicación</span>
                  <input v-model="form.ubicacion" type="text" placeholder="Lab. Computación UNET" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
                </label>

                <div class="rounded-[24px] border border-gray-200 bg-white p-5">
                  <p class="text-xs uppercase tracking-[0.35em] text-gray-500 font-bold mb-3">Portada actual</p>
                  <div class="rounded-[20px] h-48 bg-gray-100 flex items-center justify-center text-gray-400">No hay imagen seleccionada</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <BottomNav />
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
  fecha: '2026-04-05',
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
</style>
