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

    <main class="flex-1 flex flex-col items-center p-6 lg:py-12">
      
      <div class="w-full max-w-3xl bg-white rounded-xl shadow-lg border border-[#E5E7EB] overflow-hidden">
        
        <div class="w-full h-48 md:h-64 lg:h-80 bg-gray-200 relative">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop" 
            alt="Estudiantes universitarios" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/10"></div>
        </div>

        <div class="p-8 lg:p-12 space-y-8">
          
          <h2 class="text-2xl lg:text-3xl font-extrabold text-[#1F2937]">
            Acerca de <span :style="{ color: brandBlue }">ConectaUNET</span>
          </h2>

          <div class="space-y-6 text-[#4B5563] text-sm lg:text-base leading-relaxed">
            <p>
              ConectaUNET es el núcleo digital creado por y para la comunidad de estudiantes soñadores, inventores y negociantes de la Universidad Nacional Experimental del Táchira.
            </p>
            
            <p>
              Nuestro proyecto nace bajo la premisa de darle visibilidad masiva a los pequeños negocios, startups y los talentos artesanales que residen en nuestros salones de clase. Creemos firmemente que el ecosistema universitario no se rige solo por parciales y horarios, sino también por grandes ideas innovadoras.
            </p>

            <blockquote class="p-5 lg:p-6 my-8 rounded-r-lg italic font-medium" style="background-color: #EEF2FF; border-left: 4px solid #213A8F; color: #213A8F;">
              "Transformamos la experiencia universitaria al conectar las ideas locales para construir una economía solidaria in-house."
            </blockquote>

            <section class="space-y-3 pt-2">
              <h3 class="text-xl font-bold text-[#1F2937]">Nuestra Misión</h3>
              <p>
                Proveer un puente centralizado donde un estudiante de Informática, uno de Agronomía y uno de Arquitectura puedan promocionar sus eventos y ofertar sus portafolios, reduciendo las barreras invisibles a través de un simple directorio intuitivo.
              </p>
            </section>

          </div>
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