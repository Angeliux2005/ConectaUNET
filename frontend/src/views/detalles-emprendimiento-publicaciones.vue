<template>
  <div class="min-h-screen bg-white md:bg-[#F8F9FB] flex flex-col font-sans w-full relative">
    
    <div class="hidden md:block">
      <AppHeader />
    </div>

    <div class="md:hidden flex items-center px-4 py-4 sticky top-0 bg-white z-50 border-b border-gray-100">
      <button @click="$router.go(-1)" class="text-gray-600 hover:text-gray-900 transition-colors p-1">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <h2 class="flex-1 text-center font-bold text-[#1F2937] text-[16px] mr-8">Emprendimiento</h2>
    </div>

    <main class="flex-grow w-full max-w-[1200px] mx-auto px-0 md:px-8 mt-0 md:mt-[72px] pb-24 md:pb-16">

      <div v-if="emp" class="relative w-full md:mt-8 px-4 md:px-0 mt-4 md:mt-8 relative z-0">
        <div class="w-full h-[140px] md:h-[320px] bg-gray-200 rounded-t-xl md:rounded-xl overflow-hidden shadow-sm relative">
          <img :src="emp.coverImage || 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'" class="w-full h-full object-cover" :alt="emp.title" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <div class="absolute -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 w-[84px] h-[84px] md:w-28 md:h-28 rounded-full border-4 border-white md:border-[#F8F9FB] bg-[#0A1128] flex items-center justify-center shadow-lg overflow-hidden z-10">
          <img v-if="emp.profileImage" :src="emp.profileImage" :alt="emp.title" class="w-full h-full object-cover" />
          <div v-else class="text-white text-[9px] md:text-[10px] tracking-wider text-center flex flex-col items-center px-2">
            <svg class="w-5 h-5 md:w-6 md:h-6 mb-1 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            {{ emp.category?.toUpperCase() }}
          </div>
        </div>
      </div>

      <div v-if="emp" class="mt-14 md:mt-16 px-5 md:px-2 flex flex-col items-center md:items-start text-center md:text-left relative z-0">
        <h1 class="text-[24px] md:text-[40px] font-black text-[#001D6B] tracking-tight leading-tight">
          {{ emp.title }}
        </h1>

        <div class="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mt-2 md:mt-3">
          <span class="bg-[#EBF5FF] text-[#1e3a8a] text-[10px] md:text-[11px] font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-wide">{{ emp.category }}</span>
        </div>

        <p class="hidden md:block mt-6 text-gray-600 text-[18px] leading-relaxed max-w-[600px]">
          {{ emp.description }}
        </p>

        <div class="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 mt-4 md:mt-6 text-[13px] md:text-[15px] font-semibold md:font-bold text-gray-500 md:text-gray-800">
          <div class="flex items-center gap-1.5 md:gap-2">
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            {{ emp.location }}
          </div>
          <div v-if="emp.socialLinks?.instagram" class="flex items-center gap-1.5 md:gap-2">
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            {{ emp.socialLinks.instagram }}
          </div>
          <div class="hidden md:flex items-center gap-2">
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            {{ emp.followersCount }} seguidores
          </div>
        </div>

        <div class="mt-6 md:mt-8 flex w-full md:w-auto gap-3">
          <template v-if="esMio">
            <button @click="$router.push(`/editar-emprendimiento/${emp._id}`)" class="flex-1 md:flex-none justify-center font-bold py-3 md:py-2.5 px-8 rounded-xl md:rounded-lg shadow transition-colors text-[14px] flex items-center gap-2 bg-[#1e3a8a] text-white hover:bg-[#152a6b]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              Editar Información
            </button>
          </template>
          <template v-else>
            <button @click="toggleFollow" :disabled="togglingFollow" class="flex-1 md:flex-none justify-center font-bold py-3 md:py-2.5 px-8 rounded-xl md:rounded-lg shadow transition-colors text-[14px] flex items-center gap-2 group disabled:opacity-50" :class="isFollowing ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' : 'bg-[#1e3a8a] text-white hover:bg-[#152a6b]'">
              <span v-if="togglingFollow" class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
              <template v-else>
                <svg v-if="isFollowing" class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                {{ isFollowing ? 'Siguiendo' : 'Seguir' }}
              </template>
            </button>
            <button @click="contactar" class="flex-1 md:flex-none bg-white hover:bg-gray-50 border border-gray-200 md:border-gray-300 text-gray-700 font-bold py-3 md:py-2.5 px-6 rounded-xl md:rounded-lg shadow-sm transition-colors text-[14px] flex items-center justify-center gap-2">
              Contactar
            </button>
          </template>
        </div>
      </div>

      <div class="mt-8 md:mt-12 border-b border-gray-200 relative z-0">
        <ul class="flex w-full md:w-auto px-0 md:px-2 md:space-x-8">
          <li class="flex-1 md:flex-none text-center md:text-left">
            <button class="w-full md:w-auto px-2 py-4 text-[14px] md:text-[15px] font-bold text-[#1e3a8a] border-b-[3px] border-[#1e3a8a]">
              Publicaciones
            </button>
          </li>
          <li class="flex-1 md:flex-none text-center md:text-left">
            <button @click="router.push(`/emprendimientos/${route.params.id}/informacion`)" class="w-full md:w-auto px-2 py-4 text-[14px] md:text-[15px] font-semibold text-gray-400 hover:text-gray-700 transition duration-150">
              Información
            </button>
          </li>
        </ul>
      </div>

      <div v-if="loadingPubs" class="mt-8 md:mt-10 flex justify-center py-12">
        <div class="w-8 h-8 border-4 border-[#1e3a8a] border-t-transparent rounded-full animate-spin"></div>
      </div>

      <div v-else-if="publicaciones.length === 0" class="mt-8 md:mt-10 text-center py-16 text-gray-400">
        <svg class="w-12 h-12 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        <p class="text-[15px] font-medium">Este emprendimiento aún no tiene publicaciones</p>
      </div>

      <div v-else class="mt-8 md:mt-10 px-px md:px-0 grid grid-cols-3 gap-px md:gap-8">
        <article
          v-for="pub in publicaciones"
          :key="pub._id"
          @click="router.push(`/publicaciones/${pub._id}`)"
          class="flex flex-col bg-gray-100 md:bg-white md:rounded-2xl md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] md:border md:border-gray-100 overflow-hidden group cursor-pointer active:opacity-80 transition-all hover:md:shadow-md"
        >
          <div class="aspect-square md:aspect-auto md:h-[220px] w-full overflow-hidden relative">
            <img :src="pub.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" :alt="pub.title" />
          </div>
          <div class="hidden md:flex flex-col flex-grow p-6">
            <h3 class="text-[17px] font-bold text-[#001D6B] mb-2 leading-tight line-clamp-1">{{ pub.title }}</h3>
            <p class="text-[14px] text-gray-500 leading-relaxed mb-5 line-clamp-2">{{ pub.content }}</p>
            <div class="mt-auto flex items-center gap-4 text-gray-400 text-[13px] font-medium">
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                {{ pub.likesCount }}
              </span>
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                {{ pub.commentsCount ?? 0 }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <section v-if="masEmprendimientos.length > 0" class="hidden md:block mt-24 px-2">
        <h2 class="text-[34px] font-black text-[#001D6B] tracking-tight">Más emprendimientos</h2>
        <p class="text-[16px] text-gray-600 mt-2 font-medium">Descubre otros proyectos del ecosistema universitario.</p>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <MainCard
            v-for="item in masEmprendimientos"
            :key="item._id"
            :imagen="item.coverImage"
            :etiqueta="item.category"
            :titulo="item.title"
            :descripcion="item.description"
            :ubicacion="item.location"
            :autor="item.owner?.name || 'Sin dueño'"
            :avatar="item.owner?.avatar || `https://ui-avatars.com/api/?name=${item.owner?.name || 'U'}&background=EBF5FF&color=1E3A8A`"
            :enlaceDetalle="`/emprendimientos/${item._id}`"
          />
        </div>
      </section>

    </main>

    <BottomNav />

    <div class="hidden md:block">
      <AppFooter />
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchApi } from '../utils/api.js'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import BottomNav from '../components/BottomNav.vue'
import MainCard from '../components/MainCard.vue'

const route = useRoute()
const router = useRouter()
const emp = ref(null)
const masEmprendimientos = ref([])
const publicaciones = ref([])
const loadingPubs = ref(true)

const currentUser = JSON.parse(localStorage.getItem('user') || 'null')
const isFollowing = ref(false)
const togglingFollow = ref(false)

const esMio = computed(() => {
  if (!emp.value || !currentUser) return false
  const ownerId = emp.value.owner?._id || emp.value.owner
  return ownerId.toString() === currentUser._id
})

const cargar = async (id) => {
  loadingPubs.value = true
  try {
    const [resEmp, resTodos, resPubs] = await Promise.all([
      fetchApi(`/api/emprendimientos/${id}`),
      fetchApi('/api/emprendimientos'),
      fetchApi(`/api/emprendimientos/${id}/publicaciones`)
    ])
    const jsonEmp = await resEmp.json()
    const jsonTodos = await resTodos.json()
    const jsonPubs = await resPubs.json()

    if (jsonEmp.success) {
      emp.value = jsonEmp.data
      isFollowing.value = currentUser && jsonEmp.data.followers ? jsonEmp.data.followers.some(id => id === currentUser._id || id.toString() === currentUser._id) : false
    }
    if (jsonTodos.success) {
      const otros = jsonTodos.data.filter(e => e._id !== id)
      masEmprendimientos.value = otros.sort(() => Math.random() - 0.5).slice(0, 3)
    }
    if (jsonPubs.success) publicaciones.value = jsonPubs.data
  } catch (error) {
    console.error('Error al cargar el emprendimiento:', error)
  } finally {
    loadingPubs.value = false
  }
}

const toggleFollow = async () => {
  if (!currentUser) {
    alert("Debes iniciar sesión para seguir a este emprendimiento.")
    return router.push('/login')
  }
  if (togglingFollow.value) return
  
  togglingFollow.value = true
  try {
    const res = await fetchApi(`/api/emprendimientos/${route.params.id}/follow`, {
      method: 'POST'
    })
    const json = await res.json()
    if (json.success) {
      isFollowing.value = json.following
      if (emp.value) {
        emp.value.followersCount = json.followersCount
      }
    }
  } catch (error) {
    console.error('Error al alternar seguir:', error)
  } finally {
    togglingFollow.value = false
  }
}

const contactar = () => {
  if (!emp.value?.socialLinks) return
  if (emp.value.socialLinks.whatsapp) {
    let wp = emp.value.socialLinks.whatsapp.replace(/\D/g, '')
    if (wp.startsWith('0')) wp = '58' + wp.substring(1)
    window.open(`https://wa.me/${wp}`, '_blank')
  } else if (emp.value.socialLinks.email) {
    window.location.href = `mailto:${emp.value.socialLinks.email}`
  } else if (emp.value.socialLinks.instagram) {
    let ig = emp.value.socialLinks.instagram.replace('@', '')
    window.open(`https://instagram.com/${ig}`, '_blank')
  } else {
    alert("Este emprendimiento no tiene datos de contacto disponibles.")
  }
}

onMounted(() => cargar(route.params.id))
watch(() => route.params.id, (nuevoId) => { if (nuevoId) cargar(nuevoId) })
</script>