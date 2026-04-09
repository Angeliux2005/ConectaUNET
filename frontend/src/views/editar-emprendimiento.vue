<template>
  <div class="min-h-screen bg-gray-50 flex items-start justify-center md:py-10 font-sans text-gray-800">
    
    <div class="w-full max-w-[600px] bg-white md:rounded-xl md:shadow-lg overflow-hidden flex flex-col pb-8">
      
      <header class="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <button @click="$router.back()" class="p-1 text-gray-600 hover:text-gray-900 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h1 class="text-lg font-bold text-[#1A202C]">Editar Negocio</h1>
        <button @click="saveChanges" :disabled="saving" class="bg-[#213A8F] hover:bg-blue-900 disabled:opacity-60 text-white px-5 py-2 rounded font-semibold text-sm transition-colors shadow-sm">
          {{ saving ? '...' : 'Guardar' }}
        </button>
      </header>

      <div class="relative h-32 md:h-40 w-full overflow-hidden bg-gray-800">
        <img 
          :src="preview.cover || currentCover || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80'" 
          alt="Portada" 
          class="w-full h-full object-cover opacity-80" 
        />
        <label class="absolute top-4 right-4 bg-white/95 px-3 py-1.5 rounded flex items-center gap-2 text-sm font-semibold text-[#1A202C] shadow hover:bg-gray-50 transition-colors cursor-pointer">
          <input type="file" accept="image/*" class="hidden" @change="onCoverChange" />
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          Portada
        </label>
      </div>

      <div class="px-6 relative flex flex-col">
        
        <div class="absolute -top-12 left-6 md:-top-16 md:left-1/2 md:-translate-x-1/2 z-10">
          <div class="relative">
            <div class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white bg-[#4A646C] overflow-hidden flex items-center justify-center shadow-sm">
              <img :src="preview.logo || currentLogo || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=4A646C'" alt="Avatar Emprendimiento" class="w-full h-full object-cover" />
            </div>
            <label class="absolute bottom-0 right-0 md:bottom-2 md:right-2 w-8 h-8 bg-[#1A202C] rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm hover:bg-gray-800 transition-colors cursor-pointer">
              <input type="file" accept="image/*" class="hidden" @change="onLogoChange" />
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
              </svg>
            </label>
          </div>
        </div>

        <div class="h-16 md:h-20"></div>

        <div class="flex flex-col gap-5 mt-2">
          
          <div class="flex flex-col gap-2">
            <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Nombre del Emprendimiento</label>
            <input v-model="form.nombre" type="text" placeholder="Ej: Desarrollo Web UNET" class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#213A8F] focus:ring-1 focus:ring-[#213A8F] transition-all">
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Categoría</label>
            <input v-model="form.categoria" type="text" placeholder="Ej: Tecnología" class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#213A8F] focus:ring-1 focus:ring-[#213A8F] transition-all">
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Punto de entrega / Ubicación</label>
            <input v-model="form.ubicacion" type="text" placeholder="Ej: Entregas UNET" class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#213A8F] focus:ring-1 focus:ring-[#213A8F] transition-all">
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Instagram o Contacto</label>
            <input v-model="form.contacto" type="text" placeholder="Ej: @web_unet" class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#213A8F] focus:ring-1 focus:ring-[#213A8F] transition-all">
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Biografía del Negocio</label>
            <textarea v-model="form.descripcion" placeholder="Describe tu negocio aquí..." rows="4" class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:border-[#213A8F] focus:ring-1 focus:ring-[#213A8F] transition-all"></textarea>
          </div>

        </div>

        <div v-if="error" class="text-red-600 text-sm font-semibold text-center my-2">{{ error }}</div>
        <div v-if="success" class="text-green-600 text-sm font-semibold text-center my-2">{{ success }}</div>

        <hr class="my-6 border-gray-100">

        <button @click="deleteEmprendimiento" class="w-full border border-gray-200 rounded-xl py-3.5 flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
          <svg class="w-5 h-5 text-[#EB5757]" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <span class="font-bold text-[#1A202C] text-[15px]">Eliminar Negocio</span>
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchApi } from '../utils/api.js'

const route = useRoute()
const router = useRouter()

const empId = route.params.id

const form = reactive({
  nombre: '',
  categoria: '',
  ubicacion: '',
  contacto: '',
  descripcion: ''
})

// Current images from DB
const currentCover = ref('')
const currentLogo = ref('')

// New files selected
const files = reactive({ cover: null, logo: null })
const preview = reactive({ cover: '', logo: '' })

const saving = ref(false)
const error = ref('')
const success = ref('')

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

onMounted(async () => {
  if (!empId) return
  try {
    const res = await fetchApi(`/api/emprendimientos/${empId}`)
    const data = await res.json()
    if (data.success) {
      const emp = data.data
      form.nombre = emp.title || ''
      form.categoria = emp.category || ''
      form.ubicacion = emp.location || ''
      form.contacto = emp.socialLinks?.instagram || ''
      form.descripcion = emp.description || ''
      currentCover.value = emp.coverImage || ''
      currentLogo.value = emp.profileImage || ''
    }
  } catch (err) {
    console.error('Error cargando emprendimiento', err)
  }
})

async function saveChanges() {
  error.value = ''
  success.value = ''
  try {
    saving.value = true

    // 1. Update text fields
    const res = await fetchApi(`/api/emprendimientos/${empId}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: form.nombre,
        category: form.categoria,
        location: form.ubicacion,
        description: form.descripcion,
        socialLinks: { instagram: form.contacto }
      })
    })
    const data = await res.json()
    if (!data.success) throw new Error(data.message)

    // 2. Upload images if any
    if (files.cover || files.logo) {
      const fd = new FormData()
      if (files.cover) fd.append('coverImage', files.cover)
      if (files.logo) fd.append('profileImage', files.logo)
      const imgRes = await fetchApi(`/api/uploads/emprendimiento/${empId}`, {
        method: 'POST',
        body: fd
      })
      if (!imgRes.ok) throw new Error('Error al subir imágenes')
    }

    success.value = 'Cambios guardados correctamente'
    setTimeout(() => router.back(), 1200)
  } catch (err) {
    error.value = err.message || 'Error al guardar'
  } finally {
    saving.value = false
  }
}

async function deleteEmprendimiento() {
  if (!confirm('¿Estás seguro de que deseas eliminar este emprendimiento?')) return
  try {
    const res = await fetchApi(`/api/emprendimientos/${empId}`, { method: 'DELETE' })
    const data = await res.json()
    if (!data.success) throw new Error(data.message)
    router.push('/perfil')
  } catch (err) {
    error.value = err.message || 'Error al eliminar'
  }
}
</script>