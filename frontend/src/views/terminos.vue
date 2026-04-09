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
    
    <header class="w-full h-[72px] bg-white border-b border-gray-100 flex items-center px-6 lg:px-12 shadow-sm shrink-0 z-50 fixed top-0 left-0">
      <router-link 
        to="/eventos" 
        class="text-[#002177] font-bold text-[22px] tracking-tight truncate hover:opacity-80 transition-opacity"
      >
        ConectaUNET
      </router-link>
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