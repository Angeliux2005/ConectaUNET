<template>
  <header v-if="!minimal" class="w-full h-[72px] bg-white border-b border-gray-100 flex items-center justify-between px-6 lg:px-12 shadow-sm shrink-0 z-50 fixed top-0 left-0">
    <router-link to="/eventos" class="text-[#002177] font-bold text-[22px] tracking-tight truncate hover:opacity-80 transition-opacity">
      ConectaUNET
    </router-link>

    <nav class="hidden md:flex items-center space-x-2 h-full">
      <router-link to="/eventos" active-class="text-white bg-[#1e3a8a] shadow-inner" class="text-gray-500 hover:bg-gray-50 font-semibold px-6 h-full flex items-center transition-colors">Eventos</router-link>
      <router-link to="/emprendimientos" active-class="text-white bg-[#1e3a8a] shadow-inner" class="text-gray-500 hover:bg-gray-50 font-semibold px-6 h-full flex items-center transition-colors">Emprendimientos</router-link>
    </nav>

    <div class="flex items-center space-x-4">
      <button @click="isNotificationsOpen = true" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
      </button>
      <button @click="$router.push('/perfil-mis-emprendimientos')" class="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-blue-800 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
      </button>
    </div>

    <NotificationsModal v-if="isNotificationsOpen" @close="isNotificationsOpen = false" />
  </header>

  <header v-else class="w-full h-[72px] bg-white border-b-0 sm:border-b border-gray-100 flex items-center justify-center sm:justify-between px-6 lg:px-12 shadow-none sm:shadow-sm shrink-0 z-50 fixed top-0 left-0">
    <router-link to="/eventos" class="text-[#002177] font-bold text-[22px] tracking-tight truncate hover:opacity-80 transition-opacity">
      ConectaUNET
    </router-link>
    
    <div class="hidden sm:block">
      <router-link to="/eventos" class="bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold px-5 py-2.5 rounded-lg shadow-sm transition-colors text-[14px]">
        Volver al Inicio
      </router-link>
    </div>
  </header>
</template>

<script>
import NotificationsModal from './NotificationsModal.vue';

export default {
  name: 'AppHeader',
  components: {
    NotificationsModal
  },
  props: {
    minimal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isNotificationsOpen: false
    }
  }
}
</script>
