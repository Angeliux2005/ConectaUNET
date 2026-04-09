<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    
    <div class="hidden md:block w-full">
      <AppHeader />
    </div>

    <main class="flex-grow w-full max-w-[1100px] mx-auto md:px-8 lg:px-12 md:mt-[72px] pb-24 md:pb-32 md:pt-8 relative">
      <div class="space-y-6">

        <section class="md:hidden bg-[#F8F9FB] min-h-screen">
          <div class="bg-white px-4 py-4 flex items-center justify-between sticky top-0 z-20 shadow-sm">
            <button @click="$router.back()" class="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <h1 class="text-[17px] font-bold text-[#001D6B] tracking-tight">Nuevo Emprendimiento</h1>
            <div class="w-10"></div> 
          </div>

          <div class="relative bg-[#1e3aa8] h-[160px] flex flex-col items-center justify-center text-white">
            <button class="mb-2 hover:opacity-80 transition-opacity">
              <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7h3l2-3h6l2 3h3v12H4V7z"/><path stroke-linecap="round" stroke-linejoin="round" d="M8 14h8"/></svg>
            </button>
            <p class="text-[10px] uppercase font-bold tracking-widest text-white/90">SUBIR FOTO DE PORTADA</p>
            
            <div class="absolute -bottom-10 left-6">
              <button class="w-[84px] h-[84px] rounded-full bg-[#F3F4F6] border-4 border-white shadow-md flex items-center justify-center text-gray-300 hover:bg-gray-200 transition-colors">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7h3l2-3h6l2 3h3v12H4V7z"/><circle cx="12" cy="14" r="3"/></svg>
              </button>
            </div>
          </div>

          <div class="px-5 pt-16 pb-32 space-y-5">
            <label class="block">
              <span class="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 block">NOMBRE</span>
              <input v-model="form.nombre" type="text" placeholder="Ejemplo: Mi Negocio" class="w-full rounded-xl border border-red-300 bg-white px-4 py-3 text-[14px] text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all placeholder-gray-300" />
              <span class="text-[10px] text-red-500 mt-1 block">Este campo es obligatorio</span>
            </label>

            <label class="block">
              <span class="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 block">CATEGORÍA</span>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
                <select v-model="form.categoria" class="w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 py-3 text-[14px] text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all appearance-none">
                  <option value="" disabled selected hidden>Ejemplo: Comida</option>
                  <option value="Comida">Comida</option>
                  <option value="Ropa">Ropa</option>
                  <option value="Accesorios">Accesorios</option>
                  <option value="Servicios">Servicios</option>
                </select>
              </div>
            </label>

            <label class="block">
              <span class="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 block">PUNTO DE ENTREGA / UBICACIÓN</span>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <input v-model="form.ubicacion" type="text" placeholder="Ejemplo: Cochineras" class="w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 py-3 text-[14px] text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all placeholder-gray-300" />
              </div>
            </label>

            <label class="block">
              <span class="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 block">INSTAGRAM O CONTACTO</span>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <input v-model="form.contacto" type="text" placeholder="@unetense123" class="w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 py-3 text-[14px] text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all placeholder-gray-300" />
              </div>
            </label>

            <label class="block">
              <span class="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 block">DESCRIPCIÓN</span>
              <textarea v-model="form.descripcion" rows="4" class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all"></textarea>
            </label>
          </div>

          <div class="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100 z-30">
            <button @click.prevent="createEmprendimiento" class="w-full bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-3.5 rounded-xl shadow-md transition-colors text-[15px]">Crear</button>
          </div>
        </section>

        <section class="hidden md:flex flex-col">
          
          <div class="mb-5">
            <button @click="$router.back()" class="inline-flex items-center gap-1.5 text-[#001D6B] font-bold text-[13px] hover:text-[#1e3a8a] transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
              Volver a Detalles
            </button>
          </div>

          <div class="mb-8 space-y-1">
            <h1 class="text-[28px] font-black text-[#0A1128] tracking-tight">Configurar Emprendimiento</h1>
            <p class="text-[14.5px] text-gray-500 font-medium">Personaliza la identidad visual y los detalles operativos de tu proyecto académico.</p>
          </div>

          <div class="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden mb-10 border border-gray-100">
            <div class="relative h-[220px] w-full bg-gray-200">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop" alt="Portada" class="w-full h-full object-cover" />
              
              <button class="absolute right-4 bottom-4 bg-white text-[#1e3a8a] text-[13px] font-bold px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors border border-gray-200">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Cambiar Portada
              </button>
            </div>
            
            <div class="relative h-[80px] w-full bg-white">
              <div class="absolute -top-12 left-8 w-[96px] h-[96px] rounded-full border-4 border-white bg-[#0A1128] shadow-md flex flex-col items-center justify-center text-white">
                <svg class="w-6 h-6 mb-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                <span class="text-[8px] font-bold tracking-widest text-gray-300">STARTUP</span>
              </div>
              <div class="pl-[144px] pt-4">
                 <h2 class="text-[16px] font-bold text-[#001D6B] leading-tight">Logotipo del Proyecto</h2>
                 <p class="text-[12px] text-gray-500 font-medium mt-0.5">Recomendado: PNG circular 512×512px</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            
            <label class="block">
              <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">NOMBRE</span>
              <input v-model="form.nombre" type="text" placeholder="Ejemplo: Arquipasteles" class="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all placeholder-gray-300" />
            </label>

            <label class="block">
              <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">PUNTO DE ENTREGA / UBICACIÓN</span>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <input v-model="form.ubicacion" type="text" placeholder="Ejemplo: Cochineras" class="w-full rounded-lg border border-gray-200 bg-white pl-11 pr-4 py-3 text-[14px] text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all placeholder-gray-300" />
              </div>
            </label>

            <label class="block">
              <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">CATEGORÍA</span>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
                <select v-model="form.categoria" class="w-full rounded-lg border border-gray-200 bg-white pl-11 pr-4 py-3 text-[14px] text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all appearance-none">
                  <option value="" disabled selected hidden>Ejemplo: Comida</option>
                  <option value="Comida">Comida</option>
                  <option value="Ropa">Ropa</option>
                  <option value="Accesorios">Accesorios</option>
                  <option value="Servicios">Servicios</option>
                </select>
              </div>
            </label>

            <label class="block">
              <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">INSTAGRAM O CONTACTO</span>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <input v-model="form.contacto" type="text" placeholder="@unetense123" class="w-full rounded-lg border border-gray-200 bg-white pl-11 pr-4 py-3 text-[14px] text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all placeholder-gray-300" />
              </div>
            </label>

            <label class="block md:col-span-2">
              <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">DESCRIPCIÓN</span>
              <textarea v-model="form.descripcion" rows="5" class="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all resize-none"></textarea>
            </label>
            
          </div>
        </section>

      </div>
    </main>

    <div class="hidden md:flex fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3.5 px-8 lg:px-12 justify-end items-center gap-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
      <button @click="$router.back()" class="text-gray-500 hover:text-[#1e3a8a] font-bold text-[13.5px] transition-colors px-3 py-2">
        Cancelar
      </button>
      <button @click.prevent="createEmprendimiento" class="inline-flex items-center gap-2 bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-2.5 px-6 rounded-lg shadow-md transition-colors text-[13.5px]">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
        Publicar Emprendimiento
      </button>
    </div>

  </div>
</template>

<script setup>
import { reactive } from 'vue'
import AppHeader from '../components/AppHeader.vue'

const form = reactive({
  nombre: '',
  categoria: '',
  ubicacion: '',
  contacto: '',
  descripcion: ''
})

function createEmprendimiento() {
  console.log('Crear emprendimiento', { ...form })
}
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>