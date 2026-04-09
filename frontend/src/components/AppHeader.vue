<template>
  <header v-if="!minimal" class="w-full h-[72px] bg-white border-b border-gray-100 flex items-center justify-between px-6 lg:px-12 shadow-sm shrink-0 z-50 fixed top-0 left-0">
    <router-link to="/eventos" class="text-[#002177] font-bold text-[22px] tracking-tight truncate hover:opacity-80 transition-opacity">
      ConectaUNET
    </router-link>

    <nav class="hidden md:flex items-center space-x-2 h-full">
      <router-link to="/eventos" active-class="text-white bg-[#1e3a8a] shadow-inner" class="text-gray-500 hover:bg-gray-50 font-semibold px-6 h-full flex items-center transition-colors">Eventos</router-link>
      <router-link to="/emprendimientos" active-class="text-white bg-[#1e3a8a] shadow-inner" class="text-gray-500 hover:bg-gray-50 font-semibold px-6 h-full flex items-center transition-colors">Emprendimientos</router-link>
    </nav>

    <div class="hidden md:flex items-center space-x-4">
      
      <button @click="$router.push('/notificaciones')" class="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        
        <span v-if="unreadCount > 0" class="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white border-2 border-white shadow-sm">
          {{ unreadCount > 9 ? '9+' : unreadCount }}
        </span>
      </button>
      
      <button @click="$router.push('/perfil-mis-emprendimientos')" class="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-blue-800 transition-colors overflow-hidden border-2 border-transparent hover:border-[#1e3a8a]/20">
        
        <img v-if="user?.avatar" :src="user.avatar" alt="Perfil" class="w-full h-full object-cover" />
        
        <span v-else-if="user?.name || user?.username" class="font-bold text-[15px]">
          {{ (user.name || user.username).charAt(0).toUpperCase() }}
        </span>
        
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
      </button>
    </div>
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
// Quitamos la importación del NotificationsModal porque ahora usamos una página completa.
import { fetchApi } from '../utils/api.js';

export default {
  name: 'AppHeader',
  props: {
    minimal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      user: null,
      unreadCount: 0 // Lleva el conteo de notificaciones
    }
  },
  async mounted() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        this.user = JSON.parse(storedUser);
        await this.checkNotifications(); // Validamos las notificaciones al cargar el header
      } catch (e) {
        console.error("Error al leer el usuario del localStorage", e);
      }
    }
  },
  methods: {
    async checkNotifications() {
      try {
        const userId = this.user._id || this.user.id;
        
        // Pedimos los datos tal como lo hace la vista de notificaciones
        const [resEventos, resEmprend] = await Promise.all([
          fetchApi('/api/eventos'),
          fetchApi('/api/emprendimientos')
        ]);

        const [jsonEventos, jsonEmprend] = await Promise.all([
          resEventos.json(),
          resEmprend.json()
        ]);

        const descartadas = JSON.parse(localStorage.getItem('notifsDescartadas') || '[]');
        let count = 0;

        // 1. Contar Eventos Culturales nuevos
        if (jsonEventos.success) {
          const ahora = new Date();
          jsonEventos.data.forEach(evt => {
            const diasDiff = Math.ceil((new Date(evt.date) - ahora) / (1000 * 60 * 60 * 24));
            if (diasDiff >= -1 && diasDiff <= 15 && !descartadas.includes(`evt_${evt._id}`)) {
              count++;
            }
          });
        }

        // 2. Contar Emprendimientos seguidos
        if (jsonEmprend.success) {
          jsonEmprend.data.forEach(emp => {
            const loSigue = emp.followers && emp.followers.some(f => (f._id || f) === userId);
            if (loSigue && !descartadas.includes(`emp_${emp._id}`)) {
              count++;
            }
          });
        }

        this.unreadCount = count;

      } catch (error) {
        console.error("Error verificando notificaciones para el Header:", error);
      }
    }
  }
}
</script>