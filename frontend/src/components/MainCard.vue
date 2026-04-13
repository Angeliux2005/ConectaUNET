<template>
  <article @click="navegar" class="cursor-pointer bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50 transition-transform duration-300 hover:-translate-y-1 flex flex-col">
    <div class="relative h-[220px] w-full">
      <img :src="imagen || 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=2000'" :alt="titulo" class="w-full h-full object-cover" />
      <div class="absolute top-5 left-5 bg-[#1e3a8a] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
        {{ etiqueta }}
      </div>
      <button
        v-if="eventoId && !esPropio"
        @click.stop="toggleSave"
        :disabled="togglingSave"
        :class="isSaved ? 'bg-[#1e3a8a] text-white' : 'bg-white/90 text-[#1e3a8a] hover:bg-white'"
        class="absolute top-5 right-5 w-9 h-9 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm transition-colors"
      >
        <svg class="w-4 h-4" :fill="isSaved ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
        </svg>
      </button>
    </div>

    <div class="p-6 md:p-8 flex-grow flex flex-col">
      <h3 class="text-[22px] font-bold text-gray-900 mb-3 tracking-tight">{{ titulo }}</h3>
      <p class="text-[15px] text-gray-600 leading-relaxed mb-6">{{ descripcion }}</p>

      <div class="space-y-3 mt-auto mb-8">
        <div v-if="ubicacion" class="flex items-center gap-3 text-sm font-semibold text-gray-700">
          <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          {{ ubicacion }}
        </div>
        <div v-if="fecha" class="flex items-center gap-3 text-sm font-semibold text-gray-700">
          <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          {{ fecha }}
        </div>
        <div v-if="hora" class="flex items-center gap-3 text-sm font-semibold text-gray-700">
          <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {{ hora }}
        </div>
      </div>

      <div class="border-t border-gray-100 pt-5 flex items-center justify-between mt-auto">
        <div class="flex items-center gap-3">
          <img :src="avatar" alt="Autor" class="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100" />
          <span class="text-[15px] font-bold text-gray-900">{{ autor }}</span>
        </div>

        <div class="flex items-center gap-2">
          <button
            v-if="isAdmin"
            @click.stop="borrarElementoAdmin"
            class="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded-full transition-colors tooltip"
            title="Borrar como Administrador"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>

          <button @click.stop="compartir" class="text-gray-400 hover:text-gray-600 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { fetchApi } from '../utils/api.js'

const router = useRouter()
const currentUser = JSON.parse(localStorage.getItem('user') || 'null')
const isAdmin = currentUser?.role === 'admin'
const emit = defineEmits(['actualizarLista'])

const props = defineProps({
  imagen: String,
  etiqueta: String,
  titulo: String,
  descripcion: String,
  ubicacion: String,
  fecha: String,
  hora: String,
  autor: String,
  avatar: String,
  enlaceDetalle: {
    type: String,
    default: '/eventos'
  },
  eventoId: {
    type: String,
    default: null
  },
  savedInicial: {
    type: Boolean,
    default: false
  },
  esPropio: {
    type: Boolean,
    default: false
  }
})

const isSaved = ref(props.savedInicial)
const togglingSave = ref(false)

const toggleSave = async () => {
  togglingSave.value = true
  try {
    const res = await fetchApi(`/api/eventos/${props.eventoId}/save`, { method: 'POST' })
    const json = await res.json()
    if (json.success) isSaved.value = json.saved
  } catch (error) {
    console.error('Error al guardar evento:', error)
  } finally {
    togglingSave.value = false
  }
}

const navegar = () => router.push(props.enlaceDetalle)

const borrarElementoAdmin = async () => {
  if (!confirm(`ADMINISTRADOR: ¿Estás seguro de que deseas ELIMINAR permanentemente esta publicación ("${props.titulo}")? Esta acción no se puede deshacer.`)) return

  try {
    const tipoEndpoint = props.enlaceDetalle.includes('emprendimientos') ? 'emprendimientos' : 'eventos'
    const idDesdeEnlace = props.enlaceDetalle.split('/').findLast(Boolean)
    const targetId = props.eventoId || idDesdeEnlace

    const res = await fetchApi(`/api/${tipoEndpoint}/${targetId}`, { method: 'DELETE' })
    const data = await res.json()

    if (data.success) {
      alert('Publicación eliminada correctamente.')
      emit('actualizarLista')
      globalThis.location.reload()
    } else {
      alert('Error: ' + data.message)
    }
  } catch (error) {
    console.error('Error al borrar:', error)
    alert('Error de conexión al intentar borrar.')
  }
}

const compartir = async () => {
  const url = `${globalThis.location.origin}${props.enlaceDetalle}`
  if (navigator.share) {
    await navigator.share({ title: props.titulo, text: props.descripcion, url })
  } else {
    await navigator.clipboard.writeText(url)
    alert('Enlace copiado al portapapeles')
  }
}
</script>
