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
    
    <header class="w-full h-[72px] bg-white border-b border-gray-100 flex items-center px-6 lg:px-12 shadow-sm shrink-0 z-50 fixed top-0 left-0">
      <router-link 
        to="/eventos" 
        class="text-[#002177] font-bold text-[22px] tracking-tight truncate hover:opacity-80 transition-opacity"
      >
        ConectaUNET
      </router-link>
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