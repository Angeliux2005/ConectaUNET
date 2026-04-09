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

  <div class="min-h-screen flex flex-col bg-[#F5F6F8] font-sans">
    
    <header class="flex items-center justify-between w-full px-6 lg:px-10 py-5 lg:py-6 border-b border-[#E5E7EB] bg-white sticky top-0 z-10">
      <h1 class="text-xl lg:text-3xl font-bold" :style="{ color: brandBlue }">ConectaUNET</h1>
      
      <button 
        @click="goBack"
        class="px-4 py-2 lg:px-6 lg:py-2.5 text-white rounded-md font-medium text-xs lg:text-sm transition-colors hover:opacity-90 shadow-sm" 
        :style="{ backgroundColor: brandBlue }"
      >
        Volver al Inicio
      </button>
    </header>

    <main class="flex-1 flex flex-col items-center p-6 lg:py-12">
      
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

    <footer class="w-full px-6 lg:px-10 py-6 border-t border-[#E5E7EB] bg-white flex flex-col md:flex-row items-center justify-between gap-4 mt-auto">
      
      <div class="text-xs text-[#6B7280] text-center md:text-left">
        <span class="font-bold" :style="{ color: brandBlue }">ConectaUNET</span><br class="md:hidden" />
        <span class="md:ml-2">© 2025 Todos los derechos reservados.</span>
      </div>

      <div class="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-[#6B7280]">
        <a href="#" class="hover:text-gray-900 hover:underline transition-colors" @click="router.push('/privacidad')">Privacidad</a>
        <a href="#" class="hover:text-gray-900 hover:underline transition-colors":style="{ color: brandBlue }" @click="router.push('/terminos')">Términos</a>
        <a href="#" class="hover:text-gray-900 hover:underline transition-colors" @click="router.push('/contacto')">Contáctanos</a>
        <a href="#" class="font-medium hover:underline transition-colors"  @click="router.push('/acerca')">Acerca de ConectaUNET</a>
      </div>

    </footer>
  </div>

</template>


<style scoped>
</style>