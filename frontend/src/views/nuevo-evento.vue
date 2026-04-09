<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader />

    <main class="flex-grow w-full max-w-[640px] mx-auto px-4 sm:px-6 mt-[72px] pb-24 pt-6">
      <div class="bg-white rounded-[32px] border border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden">

        <div class="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <button @click="$router.back()" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#EFF3FF] text-[#1e3a8a] hover:bg-[#d9e2ff] transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <h1 class="text-[18px] sm:text-[20px] font-bold text-[#001D6B]">Nuevo Evento</h1>
          <div class="w-10 h-10" />
        </div>

        <div class="space-y-6 px-5 py-6">
          <div class="space-y-3">
              <div>
                <p class="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-500">Portada</p>
              </div>
              <label class="group block rounded-[24px] border-2 border-dashed border-gray-300 bg-white h-52 flex flex-col items-center justify-center text-center text-gray-400 hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-colors cursor-pointer">
                <svg class="w-10 h-10 mb-3" width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.25 24C5.975 24 4.03125 23.2125 2.41875 21.6375C0.80625 20.0625 0 18.1375 0 15.8625C0 13.9125 0.5875 12.175 1.7625 10.65C2.9375 9.125 4.475 8.15 6.375 7.725C7 5.425 8.25 3.5625 10.125 2.1375C12 0.7125 14.125 0 16.5 0C19.425 0 21.9062 1.01875 23.9438 3.05625C25.9813 5.09375 27 7.575 27 10.5C28.725 10.7 30.1562 11.4437 31.2938 12.7312C32.4313 14.0188 33 15.525 33 17.25C33 19.125 32.3438 20.7188 31.0312 22.0312C29.7188 23.3438 28.125 24 26.25 24H18C17.175 24 16.4688 23.7062 15.8813 23.1187C15.2938 22.5312 15 21.825 15 21V13.275L12.6 15.6L10.5 13.5L16.5 7.5L22.5 13.5L20.4 15.6L18 13.275V21H26.25C27.3 21 28.1875 20.6375 28.9125 19.9125C29.6375 19.1875 30 18.3 30 17.25C30 16.2 29.6375 15.3125 28.9125 14.5875C28.1875 13.8625 27.3 13.5 26.25 13.5H24V10.5C24 8.425 23.2687 6.65625 21.8062 5.19375C20.3438 3.73125 18.575 3 16.5 3C14.425 3 12.6562 3.73125 11.1938 5.19375C9.73125 6.65625 9 8.425 9 10.5H8.25C6.8 10.5 5.5625 11.0125 4.5375 12.0375C3.5125 13.0625 3 14.3 3 15.75C3 17.2 3.5125 18.4375 4.5375 19.4625C5.5625 20.4875 6.8 21 8.25 21H12V24H8.25Z" fill="#434653"/>
                </svg>
                <span class="text-sm font-semibold">Toca para subir una imagen</span>
              </label>
            </div>

            <div class="space-y-4">
              <label class="block">
                <span class="text-sm font-semibold text-gray-700">Nombre</span>
                <input v-model="form.nombre" type="text" placeholder="Ejemplo: Evento de Primavera" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
              </label>

              <div class="grid grid-cols-2 gap-4">
                <label class="block">
                  <span class="text-sm font-semibold text-gray-700">Fecha</span>
                  <input v-model="form.fecha" type="date" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
                </label>
                <label class="block">
                  <span class="text-sm font-semibold text-gray-700">Hora</span>
                  <input v-model="form.hora" type="text" inputmode="numeric" placeholder="HH:MM" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
                </label>
              </div>

            <label class="block">
              <span class="text-sm font-semibold text-gray-700">Ubicación</span>
              <input v-model="form.ubicacion" type="text" placeholder="Ejemplo: Auditorio Principal" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
            </label>

            <label class="block">
              <span class="text-sm font-semibold text-gray-700">Descripción</span>
              <textarea v-model="form.descripcion" rows="5" placeholder="Describe brevemente el evento" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all"></textarea>
            </label>
          </div>

          <button @click.prevent="createEvent" class="w-full bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-4 rounded-[24px] shadow-md transition-colors text-base">Crear</button>
        </div>
      </div>
    </main>

    <BottomNav />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import BottomNav from '../components/BottomNav.vue'

const form = reactive({
  nombre: '',
  fecha: '',
  hora: '',
  ubicacion: '',
  descripcion: ''
})

function createEvent() {
  console.log('Crear evento', { ...form })
}
</script>

<style scoped>
</style>
