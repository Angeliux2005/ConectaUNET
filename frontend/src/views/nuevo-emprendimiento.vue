<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    
    <header
      class="w-full h-[72px] bg-white border-b border-gray-100 flex items-center justify-between px-6 lg:px-12 shadow-sm shrink-0 z-50 fixed top-0 left-0">
      <router-link to="/eventos"
        class="text-[#002177] font-bold text-[22px] tracking-tight truncate hover:opacity-80 transition-opacity">
        ConectaUNET
      </router-link>

      <div class="flex items-center space-x-4">
        <button @click="isNotificationsOpen = true"
          class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
            </path>
          </svg>
        </button>
        <button @click="$router.push('/perfil-mis-emprendimientos')"
          class="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-blue-800 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </button>
      </div>
    </header>

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

          <div class="relative bg-[#1e3aa8] h-[160px] flex flex-col items-center justify-center text-white overflow-hidden">
            <img v-if="preview.cover" :src="preview.cover" class="absolute inset-0 w-full h-full object-cover opacity-60" alt="Portada" />
            <label class="relative z-10 flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
              <input type="file" accept="image/*" class="hidden" @change="onCoverChange" />
              <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7h3l2-3h6l2 3h3v12H4V7z"/><path stroke-linecap="round" stroke-linejoin="round" d="M8 14h8"/></svg>
              <p class="text-[10px] uppercase font-bold tracking-widest text-white/90 mt-2">SUBIR FOTO DE PORTADA</p>
            </label>
            <div class="absolute -bottom-10 left-6">
              <label class="block relative cursor-pointer">
                <input type="file" accept="image/*" class="hidden" @change="onLogoChange" />
                <div class="w-[84px] h-[84px] rounded-full bg-[#F3F4F6] border-4 border-white shadow-md flex items-center justify-center text-gray-300 hover:bg-gray-200 transition-colors overflow-hidden">
                  <img v-if="preview.logo" :src="preview.logo" class="w-full h-full object-cover" alt="Logo" />
                  <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7h3l2-3h6l2 3h3v12H4V7z"/><circle cx="12" cy="14" r="3"/></svg>
                </div>
              </label>
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
            <div class="relative h-[220px] w-full bg-gray-200 overflow-hidden">
              <img :src="preview.cover || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop'" alt="Portada" class="w-full h-full object-cover" />
              
              <label class="absolute right-4 bottom-4 bg-white text-[#1e3a8a] text-[13px] font-bold px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors border border-gray-200 cursor-pointer">
                <input type="file" accept="image/*" class="hidden" @change="onCoverChange" />
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Cambiar Portada
              </label>
            </div>
            
            <div class="relative h-[80px] w-full bg-white">
              <label class="absolute -top-12 left-8 w-[96px] h-[96px] rounded-full border-4 border-white bg-[#0A1128] shadow-md flex flex-col items-center justify-center text-white cursor-pointer hover:opacity-90 transition-opacity overflow-hidden">
                <input type="file" accept="image/*" class="hidden" @change="onLogoChange" />
                <img v-if="preview.logo" :src="preview.logo" class="absolute inset-0 w-full h-full object-cover" alt="Logo" />
                <template v-else>
                  <svg class="w-6 h-6 mb-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  <span class="text-[8px] font-bold tracking-widest text-gray-300">LOGO</span>
                </template>
              </label>
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

    <!-- Error message -->
    <div v-if="error" class="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-red-50 border border-red-200 text-red-700 text-[13px] font-semibold px-5 py-3 rounded-xl shadow-md">
      {{ error }}
    </div>

    <div class="hidden md:flex fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3.5 px-8 lg:px-12 justify-end items-center gap-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
      <button @click="$router.back()" class="text-gray-500 hover:text-[#1e3a8a] font-bold text-[13.5px] transition-colors px-3 py-2">
        Cancelar
      </button>
      <button @click.prevent="createEmprendimiento" :disabled="uploading" class="inline-flex items-center gap-2 bg-[#1e3a8a] hover:bg-[#152a6b] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-2.5 px-6 rounded-lg shadow-md transition-colors text-[13.5px]">
        <svg v-if="!uploading" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
        <svg v-else class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
        {{ uploading ? 'Publicando...' : 'Publicar Emprendimiento' }}
      </button>
    </div>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import { fetchApi } from '../utils/api.js'

const router = useRouter()

const form = reactive({
  nombre: '',
  categoria: '',
  ubicacion: '',
  contacto: '',
  descripcion: ''
})

// Image files selected by the user
const files = reactive({ cover: null, logo: null })
// Local preview URLs (object URLs)
const preview = reactive({ cover: '', logo: '' })

const uploading = ref(false)
const error = ref('')

function onCoverChange(e) {
  const file = e.target.files[0]
  if (!file) return
  files.cover = file
  preview.cover = URL.createObjectURL(file)
}

function onLogoChange(e) {
  const file = e.target.files[0]
  if (!file) return
  files.logo = file
  preview.logo = URL.createObjectURL(file)
}

async function uploadImages(emprendimientoId) {
  if (!files.cover && !files.logo) return

  const formData = new FormData()
  if (files.cover) formData.append('coverImage', files.cover)
  if (files.logo) formData.append('profileImage', files.logo)

  const res = await fetchApi(`/api/uploads/emprendimiento/${emprendimientoId}`, {
    method: 'POST',
    body: formData
  })
  if (!res.ok) throw new Error('Error al subir imágenes')
}

async function createEmprendimiento() {
  error.value = ''
  if (!form.nombre || !form.categoria || !form.ubicacion) {
    error.value = 'Por favor completa los campos obligatorios'
    return
  }

  try {
    uploading.value = true

    // 1. Create emprendimiento with text fields
    const body = JSON.stringify({
      title: form.nombre,
      category: form.categoria,
      location: form.ubicacion,
      description: form.descripcion,
      socialLinks: { instagram: form.contacto }
    })

    const res = await fetchApi('/api/emprendimientos', {
      method: 'POST',
      body
    })
    const data = await res.json()

    if (!data.success) throw new Error(data.message)

    const id = data.data._id

    // 2. Upload images if any were selected
    await uploadImages(id)

    router.push(`/detalles-emprendimiento-dueo/${id}`)
  } catch (err) {
    error.value = err.message || 'Error al crear el emprendimiento'
  } finally {
    uploading.value = false
  }
}
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>