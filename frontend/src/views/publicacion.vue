<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader />

    <main class="flex-grow w-full max-w-[900px] mx-auto px-4 sm:px-6 mt-[72px] pb-16 pt-8">

      <button @click="$router.go(-1)" class="inline-flex items-center gap-2 text-[#001D6B] font-bold text-[15px] hover:text-[#1e3a8a] transition-colors mb-6 group">
        <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Volver a publicaciones
      </button>

      <div v-if="loading" class="flex justify-center py-24">
        <div class="w-8 h-8 border-4 border-[#1e3a8a] border-t-transparent rounded-full animate-spin"></div>
      </div>

      <template v-else-if="pub">
        <article class="bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden mb-8">

          <div class="px-6 py-4 flex items-center justify-between">
            <button @click="router.push(`/emprendimientos/${pub.emprendimiento._id}`)" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div class="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 overflow-hidden shrink-0">
                <img v-if="pub.emprendimiento.profileImage" :src="pub.emprendimiento.profileImage" :alt="pub.emprendimiento.title" class="w-full h-full object-cover" />
                <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div class="text-left">
                <h2 class="text-[#001D6B] font-bold text-[16px] leading-tight">{{ pub.emprendimiento.title }}</h2>
                <div class="text-gray-500 text-[13px] mt-0.5">{{ fechaRelativa(pub.createdAt) }}</div>
              </div>
            </button>

            <!-- Menú dueño -->
            <div v-if="esMio" class="relative">
              <button @click="menuAbierto = !menuAbierto" class="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
              </button>
              <div v-if="menuAbierto" class="absolute right-0 top-10 bg-white border border-gray-100 rounded-xl shadow-lg z-10 w-44 overflow-hidden">
                <button @click="iniciarEdicion" class="w-full text-left px-4 py-3 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  Editar
                </button>
                <button @click="confirmarEliminar" class="w-full text-left px-4 py-3 text-[14px] font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  Eliminar
                </button>
              </div>
            </div>
          </div>

          <!-- Modal edición -->
          <div v-if="editando" class="px-6 pb-4 flex flex-col gap-3">
            <input v-model="editTitulo" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[15px] font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30" placeholder="Título" />
            <textarea v-model="editContenido" rows="3" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 resize-none" placeholder="Descripción"></textarea>
            <div class="flex gap-2 justify-end">
              <button @click="editando = false" class="px-4 py-2 text-[13px] font-bold text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">Cancelar</button>
              <button @click="guardarEdicion" :disabled="guardando" class="px-5 py-2 text-[13px] font-bold bg-[#1e3a8a] text-white rounded-lg hover:bg-[#152a6b] transition-colors disabled:opacity-50">
                {{ guardando ? 'Guardando...' : 'Guardar' }}
              </button>
            </div>
          </div>

          <div class="w-full bg-gray-100">
            <img :src="pub.image" class="w-full h-auto max-h-[500px] object-cover" :alt="pub.title" />
          </div>

          <div class="p-6">

            <div class="flex items-center gap-5 mb-4 text-[#001D6B]">
              <button @click="toggleLike" :disabled="toggling" class="flex items-center gap-1.5 hover:opacity-70 transition-opacity disabled:opacity-50">
                <svg class="w-7 h-7 transition-colors" :fill="liked ? 'currentColor' : 'none'" :class="liked ? 'text-red-500' : ''" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                <span class="font-bold text-[15px]">{{ likesCount }}</span>
              </button>
              <button class="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                <span class="font-bold text-[15px]">{{ comentarios.length }}</span>
              </button>
            </div>

            <div class="text-[15px] text-gray-800 leading-[1.6]">
              <span class="font-bold text-[#001D6B] mr-2">{{ pub.emprendimiento.title }}</span>
              <span class="font-bold text-[#001D6B] mr-1">{{ pub.title }}</span>
              {{ pub.content }}
            </div>

          </div>
        </article>

        <section class="bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] p-6 md:p-8 mb-12">
          <h3 class="text-[#001D6B] font-bold text-[20px] mb-6">Comentarios</h3>

          <div class="flex items-center gap-4 mb-8">
            <div class="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#1e3a8a] flex items-center justify-center font-bold text-[14px] shrink-0 overflow-hidden">
              <img v-if="currentUser?.avatar" :src="currentUser.avatar" class="w-full h-full object-cover" />
              <span v-else>{{ iniciales(currentUser?.name) }}</span>
            </div>
            <div class="flex-grow flex items-center bg-[#F8F9FB] rounded-full px-5 py-2.5 border border-gray-100 focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <input
                v-model="nuevoComentario"
                @keydown.enter="enviarComentario"
                type="text"
                placeholder="Añadir un comentario..."
                class="bg-transparent w-full outline-none text-[14px] text-gray-700 placeholder-gray-400"
                :disabled="enviando"
              />
              <button
                @click="enviarComentario"
                :disabled="!nuevoComentario.trim() || enviando"
                class="text-[#1e3a8a] font-bold text-[14px] ml-3 hover:text-blue-800 transition-colors shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Publicar
              </button>
            </div>
          </div>

          <div v-if="comentarios.length === 0" class="text-gray-400 text-[14px] text-center py-6">
            Sé el primero en comentar
          </div>

          <div v-else class="space-y-6">
            <div v-for="c in comentarios" :key="c._id" class="flex gap-4">
              <div class="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#1e3a8a] flex items-center justify-center font-bold text-[14px] shrink-0 overflow-hidden">
                <img v-if="c.author.avatar" :src="c.author.avatar" class="w-full h-full object-cover" />
                <span v-else>{{ iniciales(c.author.name) }}</span>
              </div>
              <div class="flex-grow pt-1">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-[14px] text-[#001D6B]">{{ c.author.name }}</span>
                  <span class="text-[12px] text-gray-400">{{ fechaRelativa(c.createdAt) }}</span>
                </div>
                <p class="text-[14.5px] text-gray-600 mt-0.5 leading-snug">{{ c.content }}</p>
              </div>
            </div>
          </div>
        </section>
      </template>

    </main>

    <BottomNav />

    <div class="hidden md:block">
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchApi } from '../utils/api.js'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import BottomNav from '../components/BottomNav.vue'

const route = useRoute()
const router = useRouter()
const pub = ref(null)
const comentarios = ref([])
const loading = ref(true)
const nuevoComentario = ref('')
const enviando = ref(false)
const toggling = ref(false)
const liked = ref(false)
const likesCount = ref(0)
const currentUser = JSON.parse(localStorage.getItem('user') || 'null')

// Editar / eliminar
const menuAbierto = ref(false)
const editando = ref(false)
const editTitulo = ref('')
const editContenido = ref('')
const guardando = ref(false)

const esMio = computed(() => {
  if (!pub.value || !currentUser) return false
  const authorId = pub.value.author?._id || pub.value.author
  return authorId?.toString() === currentUser._id
})

const cargar = async (id) => {
  loading.value = true
  try {
    const [resPub, resComs] = await Promise.all([
      fetchApi(`/api/publicaciones/${id}`),
      fetchApi(`/api/publicaciones/${id}/comentarios`)
    ])
    const jsonPub = await resPub.json()
    const jsonComs = await resComs.json()

    if (jsonPub.success) {
      pub.value = jsonPub.data
      likesCount.value = jsonPub.data.likesCount
      liked.value = currentUser ? jsonPub.data.likes.some(id => id === currentUser._id) : false
    }
    if (jsonComs.success) comentarios.value = jsonComs.data
  } catch (error) {
    console.error('Error al cargar la publicación:', error)
  } finally {
    loading.value = false
  }
}

const toggleLike = async () => {
  if (toggling.value) return
  toggling.value = true
  try {
    const res = await fetchApi(`/api/publicaciones/${route.params.id}/like`, {
      method: 'POST'
    })
    const json = await res.json()
    if (json.success) {
      liked.value = json.liked
      likesCount.value = json.likesCount
    }
  } catch (error) {
    console.error('Error al dar like:', error)
  } finally {
    toggling.value = false
  }
}

const enviarComentario = async () => {
  if (!nuevoComentario.value.trim() || enviando.value) return
  enviando.value = true
  try {
    const res = await fetchApi(`/api/publicaciones/${route.params.id}/comentarios`, {
      method: 'POST',
      body: JSON.stringify({ content: nuevoComentario.value.trim() })
    })
    const json = await res.json()
    if (json.success) {
      comentarios.value.unshift(json.data)
      nuevoComentario.value = ''
    }
  } catch (error) {
    console.error('Error al comentar:', error)
  } finally {
    enviando.value = false
  }
}

const iniciarEdicion = () => {
  editTitulo.value = pub.value.title
  editContenido.value = pub.value.content
  editando.value = true
  menuAbierto.value = false
}

const guardarEdicion = async () => {
  guardando.value = true
  try {
    const res = await fetchApi(`/api/publicaciones/${route.params.id}`, {
      method: 'PUT',
      body: JSON.stringify({ title: editTitulo.value, content: editContenido.value })
    })
    const json = await res.json()
    if (json.success) {
      pub.value.title = json.data.title
      pub.value.content = json.data.content
      editando.value = false
    }
  } catch (error) {
    console.error('Error al editar:', error)
  } finally {
    guardando.value = false
  }
}

const confirmarEliminar = async () => {
  menuAbierto.value = false
  if (!confirm('¿Eliminar esta publicación?')) return
  try {
    const res = await fetchApi(`/api/publicaciones/${route.params.id}`, { method: 'DELETE' })
    const json = await res.json()
    if (json.success) router.go(-1)
  } catch (error) {
    console.error('Error al eliminar:', error)
  }
}

const fechaRelativa = (fecha) => {
  const diff = Date.now() - new Date(fecha).getTime()
  const min = Math.floor(diff / 60000)
  if (min < 60) return `${min}m`
  const h = Math.floor(min / 60)
  if (h < 24) return `${h}h`
  const d = Math.floor(h / 24)
  return `${d}d`
}

const iniciales = (nombre) => nombre?.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase() || '?'

onMounted(() => cargar(route.params.id))
</script>
