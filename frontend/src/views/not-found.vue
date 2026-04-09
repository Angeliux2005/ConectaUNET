<script setup>
import { useRouter } from 'vue-router';

// Router para movernos por las vistas
const router = useRouter();

// Color de marca principal
const brandBlue = '#213A8F';

// Función para volver al inicio
const goHome = () => {
  router.push('/eventos');
};
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#F5F6F8] font-sans pt-[72px]">
    
    <header class="w-full h-[72px] bg-white border-b border-gray-100 flex items-center justify-between px-6 lg:px-12 shadow-sm shrink-0 z-50 fixed top-0 left-0">
      <router-link 
        to="/eventos" 
        class="text-[#002177] font-bold text-[22px] tracking-tight truncate hover:opacity-80 transition-opacity"
      >
        ConectaUNET
      </router-link>

      <div class="flex items-center space-x-4">
        <button @click="router.push('/notificaciones')" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
        </button>
        <button @click="$router.push('/perfil-mis-emprendimientos')" class="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-blue-800 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </button>
      </div>
    </header>

    <main class="flex-1 flex flex-col items-center justify-center p-6 text-center">
      
      <h2 
        class="text-8xl md:text-9xl lg:text-[150px] font-black tracking-tighter leading-none mb-4" 
        :style="{ color: brandBlue }"
      >
        404
      </h2>
      
      <h3 class="text-xl md:text-3xl font-bold text-[#1F2937] mb-3">
        ¡Ups! Página no encontrada
      </h3>
      
      <p class="text-sm md:text-base text-[#6B7280] max-w-md mb-8">
        Lo sentimos, pero la página que intentas solicitar no existe, ha sido movida o está temporalmente inactiva.
      </p>


    </main>

    <div class="hidden md:block">
      <AppFooter />
    </div>
    
  </div>
</template>

<style scoped>
/* Estilos adicionales si fueran necesarios */
</style>