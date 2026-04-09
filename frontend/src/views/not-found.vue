<script setup>
import { useRouter } from 'vue-router';

//Router para movernos por las vistas
const router = useRouter();

// Color de marca principal
const brandBlue = '#213A8F';

// Función para volver al inicio
const goHome = () => {
  console.log('Redirigiendo al inicio...');
  router.push('/'); 
};
</script>


<template>

  <div class="min-h-screen flex flex-col bg-[#F5F6F8] font-sans">
    
    <header class="flex items-center justify-between w-full px-6 lg:px-10 py-4 border-b border-[#E5E7EB] bg-white">
      <h1 class="text-xl lg:text-2xl font-bold" :style="{ color: brandBlue }">ConectaUNET</h1>
      
      <nav class="hidden md:flex space-x-8 text-sm font-medium text-[#4B5563]">
        <a href="#" class="hover:text-gray-900 transition-colors">Eventos</a>
        <a href="#" class="hover:text-gray-900 transition-colors">Emprendimientos</a>
      </nav>

      <div class="flex items-center space-x-4">
        <button class="text-[#6B7280] hover:text-[#1F2937] transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
        </button>
        <button class="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold shadow-sm" :style="{ backgroundColor: brandBlue }">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

      <button 
        @click="goHome"
        class="px-8 py-3.5 text-white rounded-md font-bold text-sm md:text-base transition-colors hover:opacity-90 shadow-md flex items-center gap-2"
        :style="{ backgroundColor: brandBlue }"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Volver al Inicio
      </button>

    </main>

    <footer class="w-full px-6 lg:px-10 py-6 border-t border-[#E5E7EB] bg-white flex flex-col md:flex-row items-center justify-between gap-4">
      
      <div class="text-xs text-[#6B7280] text-center md:text-left">
        <span class="font-bold" :style="{ color: brandBlue }">ConectaUNET</span><br class="md:hidden" />
        <span class="md:ml-2">© 2025 Todos los derechos reservados.</span>
      </div>

      <div class="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-[#6B7280]">
        <a href="#" class="hover:text-gray-900 hover:underline">Políticas de Privacidad</a>
        <a href="#" class="hover:text-gray-900 hover:underline">Términos de Servicio</a>
        <a href="#" class="hover:text-gray-900 hover:underline">Contáctanos</a>
        <a href="#" class="hover:text-gray-900 hover:underline">Sobre ConectaUNET</a>
      </div>

    </footer>
  </div>
  
</template>