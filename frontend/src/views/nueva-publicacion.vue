<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden relative">
    <AppHeader />

    <main class="flex-grow w-full max-w-[800px] mx-auto px-4 md:px-8 mt-[72px] pb-24 pt-8">
      
      <div class="mb-8">
        <button @click="$router.back()" class="inline-flex items-center gap-1.5 text-[#001D6B] font-bold text-[14px] hover:text-[#1e3a8a] transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
          Volver al emprendimiento
        </button>
        <h1 class="text-[28px] md:text-[32px] font-black text-[#0A1128] tracking-tight mt-4">Nueva Publicación</h1>
        <p class="text-gray-500 font-medium">Comparte novedades, productos o noticias con tus seguidores.</p>
      </div>

      <form @submit.prevent="crearPublicacion" class="space-y-6">
        
        <div class="space-y-2">
          <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">IMAGEN DE LA PUBLICACIÓN</span>
          <div 
            @click="triggerFile"
            class="relative w-full h-[250px] md:h-[350px] rounded-[24px] border-2 border-dashed border-gray-200 bg-white flex flex-col items-center justify-center cursor-pointer hover:border-[#1e3a8a] transition-all overflow-hidden"
          >
            <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="onFileChange" />
            
            <img v-if="previewUrl" :src="previewUrl" class="w-full h-full object-cover" />
            
            <div v-else class="flex flex-col items-center text-gray-400">
              <svg class="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span class="font-bold text-sm">Toca para subir una foto</span>
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <label class="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">TÍTULO</label>
          <input 
            v-model="form.title" 
            type="text" 
            placeholder="¿De qué trata este post?" 
            class="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[15px] font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all"
            required
          />
        </div>

        <div class="space-y-2">
          <label class="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">CONTENIDO</label>
          <textarea 
            v-model="form.content" 
            rows="5" 
            placeholder="Escribe los detalles aquí..." 
            class="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[15px] font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all resize-none"
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          :disabled="isLoading"
          class="w-full bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3"
        >
          <span v-if="isLoading" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          {{ isLoading ? 'Publicando...' : 'Publicar Ahora' }}
        </button>

      </form>
    </main>

    <BottomNav class="md:hidden" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import BottomNav from '../components/BottomNav.vue'

const route = useRoute()
const router = useRouter()
const isLoading = ref(false)
const fileInput = ref(null)
const previewUrl = ref(null)
const selectedFile = ref(null)

const form = reactive({
  title: '',
  content: ''
})

const triggerFile = () => fileInput.value.click()

const onFileChange = (e) => {
  const file = e.target.files[0]
  if (!file) return
  selectedFile.value = file
  previewUrl.value = URL.createObjectURL(file)
}

const crearPublicacion = async () => {
  if (!selectedFile.value) return alert("Por favor selecciona una imagen para tu publicación.")
  
  isLoading.value = true
  try {
    const fd = new FormData()
    fd.append('title', form.title)
    fd.append('content', form.content)
    fd.append('image', selectedFile.value)

    const token = localStorage.getItem('token')

    const res = await fetch(`/api/emprendimientos/${route.params.id}/publicaciones`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: fd
    })

    const data = await res.json()
    if (data.success) {
      alert("¡Publicación creada con éxito!")
      router.push(`/emprendimientos/${route.params.id}/publicaciones`)
    } else {
      throw new Error(data.message)
    }
  } catch (error) {
    alert("Error al crear la publicación: " + error.message)
  } finally {
    isLoading.value = false
  }
}
</script>