<script setup>
import { useRouter } from 'vue-router';

//Router para movernos por las vistas
const router = useRouter();

// Color de marca principal
const brandBlue = '#213A8F';

// Función para volver al inicio
const goHome = () => {
  console.log('Redirigiendo al inicio...');
  router.push('/eventos');
};
</script>


<template>

  <div class="min-h-screen flex flex-col bg-[#F5F6F8] font-sans">
    
    <header class="flex items-center justify-between w-full px-6 lg:px-10 py-5 lg:py-6 border-b border-[#E5E7EB] bg-white sticky top-0 z-10">
      <h1 class="text-xl lg:text-3xl font-bold" :style="{ color: brandBlue }">ConectaUNET</h1>
      
      <button 
        @click="goHome"
        class="px-4 py-2 lg:px-6 lg:py-2.5 text-white rounded-md font-medium text-xs lg:text-sm transition-colors hover:opacity-90 shadow-sm" 
        :style="{ backgroundColor: brandBlue }"
      >
        Volver al Inicio
      </button>
    </header>

    <main class="flex-1 flex flex-col items-center p-6 lg:py-12 w-full">
      
      <div class="w-full max-w-3xl flex flex-col gap-8">
        
        <div class="space-y-6 text-center md:text-left">
          
          <div class="space-y-2">
            <h2 class="text-3xl lg:text-4xl font-extrabold text-[#1F2937]" :style="{ color: brandBlue }">
              Contacto
            </h2>
            <p class="text-sm lg:text-base text-[#4B5563] max-w-xl">
              ¿Tienes algún problema con un registro mercantil o deseas promocionar tu evento de manera prioritaria? Escríbenos.
            </p>
          </div>

          <div class="flex flex-col md:flex-row gap-4 md:gap-8 pt-2">
            
            <div class="flex flex-col md:flex-row items-center md:items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#E5E7EB] flex-1">
              <div class="p-2 rounded-full bg-blue-50 text-blue-800" :style="{ color: brandBlue }">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div class="text-center md:text-left">
                <h4 class="text-sm font-bold text-[#1F2937]">Correo Electrónico</h4>
                <a href="mailto:soporte@conecta.unet.edu.ve" class="text-sm text-[#4B5563] hover:underline" :style="{ color: brandBlue }">
                  soporte@conecta.unet.edu.ve
                </a>
              </div>
            </div>

            <div class="flex flex-col md:flex-row items-center md:items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#E5E7EB] flex-1">
              <div class="p-2 rounded-full bg-blue-50 text-blue-800" :style="{ color: brandBlue }">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div class="text-center md:text-left">
                <h4 class="text-sm font-bold text-[#1F2937]">Ubicación</h4>
                <p class="text-sm text-[#4B5563]">
                  Universidad Nacional Experimental del Táchira (UNET).<br/>San Cristóbal, Venezuela.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg border border-[#E5E7EB] p-6 md:p-8">
          <form @submit.prevent class="space-y-5">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="space-y-1.5">
                <label for="nombre" class="text-xs font-bold text-[#4B5563]">Nombre</label>
                <input 
                  type="text" 
                  id="nombre" 
                  placeholder="Ej. Ana Pérez"
                  class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-shadow"
                  :style="{ focusRingColor: brandBlue }"
                />
              </div>
              <div class="space-y-1.5">
                <label for="correo" class="text-xs font-bold text-[#4B5563]">Correo</label>
                <input 
                  type="email" 
                  id="correo" 
                  placeholder="ana@unet.edu.ve"
                  class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-shadow"
                  :style="{ focusRingColor: brandBlue }"
                />
              </div>
            </div>

            <div class="space-y-1.5">
              <label for="asunto" class="text-xs font-bold text-[#4B5563]">Asunto</label>
              <input 
                type="text" 
                id="asunto" 
                placeholder="Publicidad de Emprendimiento"
                class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-shadow"
              />
            </div>

            <div class="space-y-1.5">
              <label for="mensaje" class="text-xs font-bold text-[#4B5563]">Mensaje</label>
              <textarea 
                id="mensaje" 
                rows="4"
                placeholder="Escribe tus dudas aquí..."
                class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-shadow resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full py-3 text-white font-bold rounded-md text-sm transition-colors hover:opacity-90 shadow-md mt-2"
              :style="{ backgroundColor: brandBlue }"
            >
              Enviar Mensaje
            </button>

          </form>
        </div>

      </div>
    </main>

    <div class="hidden md:block">
      <AppFooter />
    </div>
    
  </div>

</template>


<style scoped>
input:focus, textarea:focus {
  border-color: #213A8F;
  outline: none;
  box-shadow: 0 0 0 2px rgba(33, 58, 143, 0.2);
}
</style>