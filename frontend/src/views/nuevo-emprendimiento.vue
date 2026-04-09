<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader />

    <main class="flex-grow w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mt-[72px] pb-24 pt-8">
      <div class="space-y-6">

        <!-- Mobile -->
        <section class="md:hidden">
          <div class="relative rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <div class="bg-white px-5 py-4 border-b border-gray-200 flex items-center justify-between">
              <button @click="$router.back()" class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-[#1e3a8a] hover:bg-gray-200 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              <h1 class="text-lg font-bold text-[#1E3A8A]">Nuevo Emprendimiento</h1>
              <div class="w-10" />
            </div>

            <div class="bg-[#1E3A8A] pb-28 pt-5 text-center text-white overflow-hidden">
              <div class="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white shadow-xl">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7h3l2-3h6l2 3h3v12H4V7z"/><path stroke-linecap="round" stroke-linejoin="round" d="M8 14h8"/></svg>
              </div>
              <p class="mt-4 text-xs uppercase tracking-[0.35em] text-[#E9EEFF]">Subir foto de portada</p>
            </div>

            <button class="absolute left-5 top-[270px] flex h-16 w-16 items-center justify-center rounded-full bg-white border border-gray-200 shadow-xl z-10">
              <div class="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-gray-400">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
            </button>
          </div>

          <div class="bg-white rounded-[32px] border border-gray-100 px-5 pb-6 pt-14 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] -mt-10">
            <div class="space-y-4">
              <label class="block">
                <span class="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-500">Nombre</span>
                <input v-model="form.nombre" type="text" placeholder="Ejemplo: Mi Negocio" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
              </label>

              <label class="block">
                <span class="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-500">Categoría</span>
                <select v-model="form.categoria" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all">
                  <option value="">Seleccionar categoría</option>
                  <option value="Comida">Comida</option>
                  <option value="Tecnología">Tecnología</option>
                  <option value="Arte">Arte</option>
                  <option value="Servicios">Servicios</option>
                  <option value="Otro">Otro</option>
                </select>
              </label>

              <label class="block">
                <span class="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-500">Punto de entrega / Ubicación</span>
                <div class="relative mt-2">
                  <span class="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                  </span>
                  <input v-model="form.ubicacion" type="text" placeholder="Ejemplo: Cochineras" class="mt-0 w-full rounded-[24px] border border-gray-200 bg-white px-12 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
                </div>
              </label>

              <label class="block">
                <span class="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-500">Instagram o contacto</span>
                <div class="relative mt-2">
                  <span class="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </span>
                  <input v-model="form.contacto" type="text" placeholder="@unetense123" class="mt-0 w-full rounded-[24px] border border-gray-200 bg-white px-12 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
                </div>
              </label>

              <label class="block">
                <span class="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-500">Descripción</span>
                <textarea v-model="form.descripcion" rows="5" placeholder="Describe brevemente tu emprendimiento" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all"></textarea>
              </label>

              <button @click.prevent="createEmprendimiento" class="w-full bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-4 rounded-[24px] shadow-md transition-colors text-base">Crear</button>
            </div>
          </div>
        </section>

        <!-- Desktop -->
        <section class="hidden md:block bg-white rounded-[32px] border border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
          <div class="px-8 py-6 border-b border-gray-200">
            <button @click="$router.back()" class="inline-flex items-center gap-2 text-[#1e3a8a] font-semibold hover:text-[#152a6b] transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              Volver a detalles
            </button>
          </div>

          <div class="p-8 space-y-10">
            <div class="space-y-4">
              <div>
                <p class="text-sm uppercase tracking-[0.35em] text-[#1e3a8a] font-black">Configurar Emprendimiento</p>
                <h1 class="text-[32px] font-bold text-[#001D6B]">Personaliza tu identidad y los detalles operativos</h1>
                <p class="max-w-2xl text-sm text-gray-500">Personaliza la identidad visual y los detalles operativos de tu proyecto académico.</p>
              </div>

              <div class="rounded-[32px] border border-gray-100 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.25)] overflow-hidden">
                <div class="relative h-[300px] bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop" alt="Portada emprendimiento" class="w-full h-full object-cover" />
                  <button class="absolute right-6 top-6 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#1e3a8a] shadow-sm hover:bg-white transition-colors">Cambiar Portada</button>
                </div>
                <div class="relative bg-white px-6 py-5">
                  <div class="absolute -top-12 left-8 flex items-center gap-4 rounded-full bg-white px-4 py-3 shadow-xl border border-gray-200">
                    <div class="h-20 w-20 rounded-full bg-[#0F172A] flex items-center justify-center text-white text-2xl font-black">LP</div>
                    <div>
                      <p class="text-[18px] font-bold text-[#001D6B]">Logotipo del Proyecto</p>
                      <p class="text-sm text-gray-500">Recomendado: PNG circular 512×512px</p>
                    </div>
                  </div>
                  <div class="h-24"></div>
                </div>
              </div>
            </div>

            <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div class="space-y-6">
                <label class="block">
                  <span class="text-sm font-semibold text-gray-600">Nombre</span>
                  <input v-model="form.nombre" type="text" placeholder="Ejemplo: Arquipasteles" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
                </label>

                <label class="block">
                  <span class="text-sm font-semibold text-gray-600">Categoría</span>
                  <select v-model="form.categoria" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all">
                    <option value="">Seleccionar categoría</option>
                    <option value="Comida">Comida</option>
                    <option value="Tecnología">Tecnología</option>
                    <option value="Arte">Arte</option>
                    <option value="Servicios">Servicios</option>
                    <option value="Otro">Otro</option>
                  </select>
                </label>

                <label class="block">
                  <span class="text-sm font-semibold text-gray-600">Descripción</span>
                  <textarea v-model="form.descripcion" rows="5" placeholder="Describe brevemente tu emprendimiento" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all"></textarea>
                </label>
              </div>

              <div class="space-y-6">
                <label class="block">
                  <span class="text-sm font-semibold text-gray-600">Punto de entrega / Ubicación</span>
                  <input v-model="form.ubicacion" type="text" placeholder="Ejemplo: Cochineras" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
                </label>

                <label class="block">
                  <span class="text-sm font-semibold text-gray-600">Instagram o contacto</span>
                  <input v-model="form.contacto" type="text" placeholder="@unetense123" class="mt-2 w-full rounded-[24px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all" />
                </label>

                <div class="rounded-[24px] border border-gray-200 bg-[#F8F9FB] p-6">
                  <p class="text-xs uppercase tracking-[0.35em] text-gray-500 font-bold mb-2">Portada actual</p>
                  <div class="rounded-[24px] h-48 bg-gray-100 flex items-center justify-center text-gray-400">No hay imagen seleccionada</div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between pt-4">
              <button @click="$router.back()" class="text-gray-500 hover:text-gray-800 font-semibold transition-colors">Cancelar</button>
              <button @click.prevent="createEmprendimiento" class="inline-flex items-center gap-2 bg-[#001D6B] hover:bg-[#001242] text-white font-bold py-3.5 px-8 rounded-[24px] shadow-md transition-colors">Publicar Emprendimiento</button>
            </div>
          </div>
        </section>
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
</style>
