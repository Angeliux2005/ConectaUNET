<template>
  <div class="min-h-screen bg-[#F8F9FA] font-sans text-gray-800">

    <!-- Header Desktop -->
    <div class="hidden lg:block">
      <AppHeader />
    </div>

    <!-- Header Mobile -->
    <header class="lg:hidden bg-white border-b px-4 py-3 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      <button @click="$router.go(-1)" class="text-gray-500 hover:text-gray-800 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <h1 class="text-base font-bold text-[#1A202C] truncate max-w-[220px]">{{ evento?.title || 'Muro de Evento' }}</h1>
      <div class="w-6"></div>
    </header>

    <div class="lg:hidden bg-[#213A8F] text-white text-center py-4 px-4 font-bold text-sm mt-[53px]">
      {{ evento?.title || 'Cargando...' }}
    </div>

    <main class="w-full max-w-5xl mx-auto py-0 lg:py-10 relative px-4 lg:px-0 flex justify-center mt-0 lg:mt-[72px]">

      <div class="w-full max-w-[800px] flex flex-col relative pb-24 lg:pb-0 mt-4 lg:mt-0">

        <!-- Banner Desktop -->
        <div class="hidden lg:block mb-8">
          <button @click="$router.go(-1)" class="text-[#213A8F] text-xs font-bold flex items-center gap-2 mb-4 hover:underline">
            <span>&larr;</span> Volver a detalles
          </button>
          <div class="bg-[#213A8F] rounded-xl h-[180px] flex items-center justify-center relative overflow-hidden shadow-md">
            <div class="absolute top-6 right-1/4 w-14 h-14 bg-white opacity-10 rounded-full"></div>
            <h2 class="text-white text-3xl font-bold text-center leading-tight z-10 px-8">
              {{ evento?.title || 'Cargando...' }}
            </h2>
          </div>
        </div>

        <!-- Loading -->
        <div v-if="cargando" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-[#213A8F]"></div>
        </div>

        <!-- Sin comentarios -->
        <div v-else-if="comentarios.length === 0" class="text-center py-16 text-gray-400">
          <svg class="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
          <p class="font-medium">Aún no hay mensajes en este muro.</p>
          <p class="text-sm mt-1">¡Sé el primero en escribir algo!</p>
        </div>

        <!-- Lista de comentarios -->
        <div v-else class="flex flex-col gap-4">
          <div
            v-for="msg in comentarios"
            :key="msg._id"
            class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex gap-4 overflow-hidden relative"
            :class="{ 'border-l-4 border-l-[#213A8F]': esOrganizador(msg) }"
          >
            <img
              v-if="msg.author?.avatar"
              :src="msg.author.avatar"
              :alt="msg.author.name"
              class="w-10 h-10 rounded-full object-cover flex-shrink-0 bg-gray-100"
            />
            <div v-else class="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold bg-[#1A2530] text-sm">
              {{ msg.author?.name?.charAt(0).toUpperCase() || '?' }}
            </div>

            <div class="flex-1 pt-1 min-w-0">
              <div class="flex items-center gap-2 mb-2 flex-wrap">
                <span class="font-bold text-[15px] text-gray-900">{{ msg.author?.name || 'Usuario' }}</span>
                <span v-if="esOrganizador(msg)" class="bg-gray-200 text-gray-500 text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">Organizador</span>
                <span class="text-xs text-gray-400 ml-auto">{{ formatearTiempo(msg.createdAt) }}</span>

                <!-- Opciones editar/eliminar -->
                <div v-if="esMiMensaje(msg) || soyOrganizador" class="flex items-center gap-1 ml-1">
                  <button v-if="esMiMensaje(msg)" @click="iniciarEdicion(msg)" class="text-gray-400 hover:text-[#213A8F] transition-colors p-1 rounded">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  </button>
                  <button @click="eliminarComentario(msg._id)" class="text-gray-400 hover:text-red-500 transition-colors p-1 rounded">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
              </div>

              <!-- Modo edición -->
              <div v-if="editandoId === msg._id" class="flex gap-2">
                <input
                  v-model="textoEdicion"
                  @keyup.enter="guardarEdicion(msg._id)"
                  class="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#213A8F]"
                />
                <button @click="guardarEdicion(msg._id)" class="text-xs font-bold text-white bg-[#213A8F] px-3 py-1.5 rounded-lg hover:bg-blue-900 transition-colors">Guardar</button>
                <button @click="cancelarEdicion" class="text-xs font-bold text-gray-500 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">✕</button>
              </div>
              <p v-else class="text-[15px] text-gray-600 leading-relaxed">{{ msg.content }}</p>
            </div>
          </div>
        </div>

        <!-- Error de permisos -->
        <div v-if="errorPermiso" class="mt-4 bg-red-50 border border-red-200 text-red-700 text-sm font-medium px-4 py-3 rounded-xl">
          {{ errorPermiso }}
        </div>

        <!-- Input para escribir -->
        <div class="fixed bottom-0 left-0 w-full bg-white p-4 lg:static lg:bg-transparent lg:p-0 lg:mt-8 border-t lg:border-none z-20 flex gap-3 lg:gap-4 items-center">
          <img
            v-if="currentUser?.avatar"
            :src="currentUser.avatar"
            :alt="currentUser.name"
            class="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover flex-shrink-0 bg-gray-100"
          />
          <div v-else class="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#1A2530] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
            {{ currentUser?.name?.charAt(0).toUpperCase() || 'Tú' }}
          </div>

          <div class="flex-1 relative">
            <input
              v-model="nuevoMensaje"
              @keyup.enter="enviarMensaje"
              type="text"
              placeholder="Escribe algo..."
              :disabled="enviando"
              class="w-full bg-white text-gray-700 text-sm rounded-full py-3.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#213A8F] shadow-sm border border-gray-100 disabled:opacity-60"
            />
          </div>

          <button
            @click="enviarMensaje"
            :disabled="enviando || !nuevoMensaje.trim()"
            class="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#213A8F] flex items-center justify-center text-white flex-shrink-0 hover:bg-blue-900 transition-colors shadow-md disabled:opacity-50"
          >
            <div v-if="enviando" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <svg v-else class="w-4 h-4 lg:w-5 lg:h-5 ml-[-2px]" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
          </button>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { fetchApi } from '../utils/api.js'
import AppHeader from '../components/AppHeader.vue'

const route = useRoute()
const comentarios = ref([])
const evento = ref(null)
const cargando = ref(true)
const nuevoMensaje = ref('')
const enviando = ref(false)
const errorPermiso = ref('')
const editandoId = ref(null)
const textoEdicion = ref('')

const currentUser = JSON.parse(localStorage.getItem('user') || 'null')

const soyOrganizador = computed(() => {
  if (!evento.value || !currentUser) return false
  const orgId = evento.value.organizer?._id || evento.value.organizer
  return orgId === currentUser._id
})

const esOrganizador = (msg) => {
  if (!evento.value) return false
  const orgId = evento.value.organizer?._id || evento.value.organizer
  const authorId = msg.author?._id || msg.author
  return orgId === authorId
}

const esMiMensaje = (msg) => {
  if (!currentUser) return false
  const authorId = msg.author?._id || msg.author
  return authorId === currentUser._id
}

const formatearTiempo = (iso) => {
  if (!iso) return ''
  const diff = Date.now() - new Date(iso).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Justo ahora'
  if (mins < 60) return `Hace ${mins} min`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `Hace ${hrs} h`
  return new Date(iso).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })
}

const cargar = async () => {
  const id = route.params.id
  cargando.value = true
  try {
    const [resEvento, resMuro] = await Promise.all([
      fetchApi(`/api/eventos/${id}`),
      fetchApi(`/api/eventos/${id}/muro`)
    ])
    const jsonEvento = await resEvento.json()
    const jsonMuro = await resMuro.json()

    if (jsonEvento.success) evento.value = jsonEvento.data
    if (jsonMuro.success) comentarios.value = jsonMuro.data.reverse()
  } catch (error) {
    console.error('Error al cargar el muro:', error)
  } finally {
    cargando.value = false
  }
}

const enviarMensaje = async () => {
  if (!nuevoMensaje.value.trim() || enviando.value) return
  errorPermiso.value = ''
  enviando.value = true
  try {
    const res = await fetchApi(`/api/eventos/${route.params.id}/muro`, {
      method: 'POST',
      body: JSON.stringify({ content: nuevoMensaje.value.trim() })
    })
    const json = await res.json()
    if (json.success) {
      comentarios.value.push(json.data)
      nuevoMensaje.value = ''
    } else {
      errorPermiso.value = json.message || 'No puedes comentar en este muro.'
    }
  } catch (error) {
    console.error('Error al enviar mensaje:', error)
  } finally {
    enviando.value = false
  }
}

const iniciarEdicion = (msg) => {
  editandoId.value = msg._id
  textoEdicion.value = msg.content
}

const cancelarEdicion = () => {
  editandoId.value = null
  textoEdicion.value = ''
}

const guardarEdicion = async (comentarioId) => {
  if (!textoEdicion.value.trim()) return
  try {
    const res = await fetchApi(`/api/eventos/${route.params.id}/muro/${comentarioId}`, {
      method: 'PUT',
      body: JSON.stringify({ content: textoEdicion.value.trim() })
    })
    const json = await res.json()
    if (json.success) {
      const idx = comentarios.value.findIndex(c => c._id === comentarioId)
      if (idx !== -1) comentarios.value[idx] = json.data
      cancelarEdicion()
    }
  } catch (error) {
    console.error('Error al editar comentario:', error)
  }
}

const eliminarComentario = async (comentarioId) => {
  try {
    const res = await fetchApi(`/api/eventos/${route.params.id}/muro/${comentarioId}`, {
      method: 'DELETE'
    })
    const json = await res.json()
    if (json.success) {
      comentarios.value = comentarios.value.filter(c => c._id !== comentarioId)
    }
  } catch (error) {
    console.error('Error al eliminar comentario:', error)
  }
}

onMounted(cargar)
watch(() => route.params.id, cargar)
</script>
