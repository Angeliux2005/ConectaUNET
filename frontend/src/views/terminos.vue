<script setup>
import { useRouter } from 'vue-router';

//Router para movernos por las vistas
const router = useRouter();

// Color de marca principal
const brandBlue = '#213A8F';

// Función para volver atrás o al inicio
const goBack = () => {
  console.log('Regresando al inicio...');
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

    <main class="flex-1 flex flex-col items-center p-6 lg:py-16 w-full">
      
      <div class="w-full max-w-3xl p-8 lg:p-12 bg-white rounded-xl shadow-lg border border-[#E5E7EB]">
        
        <h2 class="text-2xl lg:text-3xl font-extrabold mb-6 lg:mb-8 text-[#1F2937]">
          Términos de Servicio
        </h2>

        <div class="space-y-8 text-[#4B5563] text-sm lg:text-base leading-relaxed">
          
          <p>
            Al navegar o publicar en ConectaUNET, aceptas automáticamente regirte por las siguientes normas académicas y comunitarias dictadas.
          </p>

          <section class="space-y-2">
            <h3 class="text-lg font-bold text-[#1F2937]">1. Uso del Servicio</h3>
            <p>
              ConectaUNET proporciona una plataforma interactiva cuyo objetivo es exclusivamente potenciar la red de proyectos, emprendimientos y eventos desarrollados en las adyacencias o con participación comunitaria relacionada a la universidad. Está estrictamente prohibido utilizar el portal para actividades ilegales o spam comercial no regulado.
            </p>
          </section>

          <section class="space-y-2">
            <h3 class="text-lg font-bold text-[#1F2937]">2. Propiedad de tu Contenido</h3>
            <p>
              Cuando publicas información sobre tu emprendimiento (fotos, logotipos, precios o ideas), retienes el 100% de la propiedad intelectual sobre dichos recursos. Sin embargo, al publicarlo concedes una licencia temporal a ConectaUNET para exhibirlo y optimizar su distribución local dentro del directorio.
            </p>
          </section>

          <section class="space-y-2">
            <h3 class="text-lg font-bold text-[#1F2937]">3. Terminación de Cuentas</h3>
            <p>
              Los moderadores se reservan el derecho absoluto de deshabilitar cuentas y borrar emprendimientos si detectan violaciones a las reglas de decencia (publicación de insultos en la sección de comentarios, contenido adulto o intentos de estafa a los visitantes).
            </p>
          </section>

          <section class="space-y-2">
            <h3 class="text-lg font-bold text-[#1F2937]">4. Modificaciones del Servicio</h3>
            <p>
              El software se proporciona de forma "Beta". Podríamos cambiar dominios, pausar interacciones o resetear la base de datos de manera parcial durante ventanas de mantenimiento tecnológico, siempre procurando notificarte primero.
            </p>
          </section>

        </div>
      </div>

    </main>

    <div class="hidden md:block">
      <AppFooter />
    </div>

  </div>

</template>


<style scoped>
</style>