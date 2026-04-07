<template>
  <div class="min-h-screen bg-white md:bg-[#F8F9FB] flex flex-col font-sans w-full relative">
    
    <div class="hidden md:block">
      <AppHeader />
    </div>

    <div class="md:hidden flex items-center px-4 py-4 sticky top-0 bg-white z-50 border-b border-gray-100">
      <button @click="$router.go(-1)" class="text-gray-600 hover:text-gray-900 transition-colors p-1">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <h2 class="flex-1 text-center font-bold text-[#1F2937] text-[16px] mr-8">Emprendimiento</h2>
    </div>

    <main class="flex-grow w-full max-w-[1200px] mx-auto px-0 md:px-8 mt-0 md:mt-[72px] pb-24 md:pb-16">

      <div class="relative w-full md:mt-8">
        <div class="w-full h-[140px] md:h-[320px] bg-gray-200 md:rounded-xl overflow-hidden shadow-sm relative">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover" alt="Cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <div class="absolute -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 w-[84px] h-[84px] md:w-28 md:h-28 rounded-full border-4 border-white md:border-[#F8F9FB] bg-[#0A1128] flex items-center justify-center shadow-lg overflow-hidden z-10">
          <div class="text-white text-[9px] md:text-[10px] tracking-wider text-center flex flex-col items-center">
            <svg class="w-5 h-5 md:w-6 md:h-6 mb-1 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            STARTUP
          </div>
        </div>
      </div>

      <div class="mt-14 md:mt-16 px-5 md:px-2 flex flex-col items-center md:items-start text-center md:text-left">
        
        <h1 class="text-[24px] md:text-[40px] font-black text-[#001D6B] tracking-tight leading-tight">
          EcoTech Solutions.
        </h1>
        
        <div class="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mt-2 md:mt-3">
          <span class="bg-[#EBF5FF] text-[#1e3a8a] text-[10px] md:text-[11px] font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-wide">Tecnología</span>
          <span class="bg-[#EBF5FF] text-[#1e3a8a] text-[10px] md:text-[11px] font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-wide">Sostenibilidad</span>
        </div>

        <p class="hidden md:block mt-6 text-gray-600 text-[18px] leading-relaxed max-w-[600px]">
          Sistemas inteligentes de monitoreo de riego para agricultura urbana de precisión utilizando sensores de bajo costo y una app intuitiva.
        </p>

        <div class="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 mt-4 md:mt-6 text-[13px] md:text-[15px] font-semibold md:font-bold text-gray-500 md:text-gray-800">
          <div class="flex items-center gap-1.5 md:gap-2">
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Entregas UNET
          </div>
          <div class="flex items-center gap-1.5 md:gap-2">
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            @ecotech_solutions
          </div>
          <div class="hidden md:flex items-center gap-2">
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            1,032 seguidores
          </div>
        </div>

        <div class="mt-6 md:mt-8 flex w-full md:w-auto gap-3">
          <button class="flex-1 md:flex-none bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-3 md:py-2.5 px-8 rounded-xl md:rounded-lg shadow transition-colors text-[14px]">
            Seguir
          </button>
          <button class="flex-1 md:flex-none bg-white hover:bg-gray-50 border border-gray-200 md:border-gray-300 text-gray-700 font-bold py-3 md:py-2.5 px-6 rounded-xl md:rounded-lg shadow-sm transition-colors text-[14px] flex items-center justify-center gap-2">
            Contactar
          </button>
        </div>
      </div>

      <div class="mt-8 md:mt-12 border-b border-gray-200">
        <ul class="flex w-full md:w-auto px-0 md:px-2 md:space-x-8">
          <li class="flex-1 md:flex-none text-center md:text-left">
            <button @click="$router.push('/detalles-emprendimiento-publicaciones')" class="w-full md:w-auto px-2 py-4 text-[14px] md:text-[15px] font-semibold text-gray-400 hover:text-gray-700 transition duration-150">
              Publicaciones
            </button>
          </li>
          <li class="flex-1 md:flex-none text-center md:text-left">
            <button class="w-full md:w-auto px-2 py-4 text-[14px] md:text-[15px] font-bold text-[#1e3a8a] border-b-[3px] border-[#1e3a8a]">
              Información
            </button>
          </li>
        </ul>
      </div>

      <div class="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 px-4 md:px-2">

        <div class="space-y-8 md:space-y-10">
          <section>
            <h2 class="text-[17px] md:text-[22px] font-black text-gray-900 md:text-[#001D6B] mb-4 md:mb-6">Acerca del Emprendimiento</h2>
            <div class="bg-white md:rounded-2xl md:p-8 md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] md:border md:border-gray-100/50">
              <p class="text-[15px] md:text-[16px] text-gray-600 leading-[1.8] mb-4 md:mb-6">
                Somos un equipo de estudiantes de Ingeniería Informática y Electrónica dedicados a la creación de soluciones digitales sostenibles. Desarrollamos sistemas de monitoreo inteligente para optimizar recursos en agricultura urbana y entornos locales.
              </p>
              <p class="text-[15px] md:text-[16px] text-gray-600 leading-[1.8]">
                Nuestra arquitectura escalable permite democratizar el acceso a datos precisos del suelo para entusiastas y pequeños productores, reduciendo el desperdicio de agua en hasta un 40%.
              </p>
            </div>
          </section>
        </div>

        <div class="space-y-8 md:space-y-10 lg:mt-[2px]">
          
          <section class="space-y-5">
            <h2 class="text-[17px] md:text-[20px] font-black text-[#0A1128]">Contacto</h2>
            
            <div class="flex items-center gap-4">
              <div class="w-[46px] h-[46px] rounded-full bg-[#F3F4F6] flex items-center justify-center shrink-0 text-[#4B5563]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <h3 class="text-[14px] font-bold text-[#1F2937] leading-snug">
                  +58 414-XXXXXXX <br>
                  <span class="text-gray-500 font-semibold">(WhatsApp)</span>
                </h3>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-[46px] h-[46px] rounded-full bg-[#F3F4F6] flex items-center justify-center shrink-0 text-[#4B5563]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 class="text-[14px] font-bold text-[#1F2937] leading-snug">
                  contacto@webunet.<br>com
                </h3>
              </div>
            </div>
          </section>

          <section class="space-y-4">
            <h2 class="text-[17px] md:text-[20px] font-black text-[#0A1128]">Horarios y Entregas</h2>
            
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col">
              
              <div class="p-5 flex items-center gap-4">
                <div class="w-[34px] h-[34px] rounded-full border-[2px] border-[#0A1128] flex items-center justify-center shrink-0 text-[#0A1128]">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h3 class="text-[14.5px] font-bold text-[#1F2937]">Lunes a Viernes</h3>
                  <p class="text-[13px] font-medium text-gray-400 mt-0.5">8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div class="w-full h-[1px] bg-gray-100"></div>

              <div class="p-4 flex justify-center items-center">
                <span class="text-[14px] font-bold text-[#1F2937]">Punto de encuentro UNET</span>
              </div>

            </div>
          </section>

        </div>

      </div>

      <section class="hidden md:block mt-20 px-2">
        <h2 class="text-[34px] font-black text-[#001D6B] tracking-tight">Más emprendimientos</h2>
        <p class="text-[16px] text-gray-600 mt-2 font-medium">Descubre otros proyectos del ecosistema universitario.</p>

        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div class="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-100/60 hover:-translate-y-1 transition-transform duration-300">
             <div class="relative h-[220px] w-full bg-[#1A453A]">
              <img src="https://images.unsplash.com/photo-1611288870282-3e2849e75525?q=80&w=2000&auto=format&fit=crop" alt="BioPack" class="w-full h-full object-cover mix-blend-overlay opacity-60" />
              <div class="absolute top-5 left-5 bg-[#001D6B] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">Ecología</div>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-3">BioPack UNET</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6">Empaques compostables creados a partir de residuos orgánicos de la zona...</p>
            </div>
          </div>

          <div class="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-100/60 hover:-translate-y-1 transition-transform duration-300">
             <div class="relative h-[220px] w-full bg-[#0D1117]">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" alt="SmartGrid" class="w-full h-full object-cover mix-blend-overlay opacity-80" />
              <div class="absolute top-5 left-5 bg-[#001D6B] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">Software</div>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-3">SmartGrid AI</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6">Gestión inteligente de energía para complejos residenciales estudiantiles...</p>
            </div>
          </div>

          <div class="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-100/60 hover:-translate-y-1 transition-transform duration-300">
             <div class="relative h-[220px] w-full bg-[#20526B]">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop" alt="MediConnect" class="w-full h-full object-cover mix-blend-overlay opacity-60" />
              <div class="absolute top-5 left-5 bg-[#001D6B] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">Salud</div>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-3">MediConnect</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6">Plataforma de teleasistencia médica gratuita para la comunidad universitaria...</p>
            </div>
          </div>
        </div>
      </section>

    </main>

    <BottomNav />

    <div class="hidden md:block">
      <AppFooter />
    </div>

  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import BottomNav from '../components/BottomNav.vue'
</script>