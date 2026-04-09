<template>
  <div class="min-h-screen bg-white lg:bg-[#F8F9FB] flex flex-col font-sans w-full relative">
    
    <div class="hidden lg:block">
      <AppHeader />
    </div>

    <button @click="$router.go(-1)" class="lg:hidden absolute top-6 left-4 z-50 w-9 h-9 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>

    <main class="flex-grow w-full max-w-[1240px] mx-auto px-0 lg:px-8 mt-0 lg:mt-[72px] pb-6 lg:pb-16 pt-0 lg:pt-12 flex flex-col lg:flex-row gap-0 lg:gap-10">

      <div class="w-full lg:w-[65%] flex flex-col">

        <div class="w-full relative h-[320px] lg:h-[400px] lg:rounded-[32px] overflow-hidden lg:bg-gray-200 shrink-0">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover" alt="Coding Event Cover" />

          <div class="hidden lg:block absolute bottom-6 left-6 bg-[#FBC02D] text-[#001D6B] text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
            TALLER TÉCNICO
          </div>
        </div>

        <div class="bg-white relative z-10 -mt-10 lg:mt-0 rounded-t-[32px] lg:rounded-none px-6 py-8 lg:px-2 lg:py-0 w-full flex flex-col">

          <div class="lg:hidden bg-[#F3F4F6] text-gray-600 text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider self-start mb-4">
            TALLER ACADÉMICO
          </div>

          <h1 class="text-[26px] lg:text-[44px] font-black text-[#001D6B] leading-[1.1] tracking-tight">
            Taller Práctico de Vue.js y Tailwind CSS
          </h1>

          <p class="hidden lg:block text-[18px] lg:text-[22px] text-gray-600 leading-relaxed mt-5 font-normal">
            Domina las herramientas más modernas del desarrollo web frontend en un entorno académico de alto nivel.
          </p>

          <div class="lg:hidden mt-6 bg-white rounded-[24px] p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-5">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#1e3a8a] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <span class="text-[#1F2937] font-bold text-[14px] block">Lunes a Viernes</span>
                <span class="text-gray-400 font-medium text-[11px] uppercase tracking-wide">8:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#1e3a8a] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <span class="text-[#1F2937] font-bold text-[14px] block">Punto de encuentro UNET</span>
                <span class="text-gray-400 font-medium text-[12px] leading-snug block pr-2">Entregas y reuniones en el cafetín del Edificio B o en la Biblioteca.</span>
              </div>
            </div>
          </div>

          <div class="mt-8 lg:mt-12 lg:bg-white lg:rounded-3xl lg:p-10 lg:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] lg:border lg:border-gray-100/50">
            <h3 class="text-[11px] lg:text-[20px] font-bold text-gray-500 lg:text-[#001D6B] uppercase lg:capitalize tracking-widest lg:tracking-normal mb-3 lg:mb-5">Acerca del evento</h3>
            <div class="space-y-4">
              <p class="text-[14px] lg:text-[15.5px] text-gray-700 leading-[1.7]">
                Este taller intensivo está diseñado para estudiantes y profesionales que deseen elevar sus habilidades en el desarrollo de interfaces modernas. Aprenderemos desde los fundamentos de la reactividad en Vue 3 hasta la construcción de sistemas de diseño escalables utilizando Tailwind CSS.
              </p>
              <p class="text-[14px] lg:text-[15.5px] text-gray-700 leading-[1.7]">
                No se requiere experiencia previa avanzada, pero sí conocimientos básicos de HTML y JavaScript. Al finalizar, cada participante tendrá un proyecto real para su portafolio.
              </p>
            </div>
          </div>

          <div class="lg:hidden mt-6 bg-white rounded-[20px] p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?img=11" alt="Miguel Vivas" class="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100" />
              <div>
                <span class="text-gray-400 font-bold text-[9px] uppercase tracking-wide block">Organizado por</span>
                <span class="text-[#1F2937] font-bold text-[13px] block leading-tight">Miguel Vivas</span>
              </div>
            </div>
            <button class="bg-white border border-gray-200 text-gray-700 hover:text-[#1e3a8a] hover:border-[#1e3a8a] font-bold py-2 px-4 rounded-[10px] text-[11px] shadow-sm transition-colors">
              Contactar
            </button>
          </div>

          <button @click="$router.push('/muro-evento')" class="lg:hidden mt-4 w-full bg-white rounded-[20px] p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-between text-left group hover:bg-gray-50 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#1e3a8a] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <div>
                <span class="text-[#1F2937] font-bold text-[14px] block leading-tight">Ver muro del evento</span>
                <span class="text-gray-400 font-medium text-[11px] block mt-0.5">2 novedades del organizador</span>
              </div>
            </div>
            <svg class="w-5 h-5 text-gray-300 group-hover:text-[#1e3a8a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          <div class="lg:hidden mt-8 mb-4">
            <button class="w-full bg-[#1E3A8A] hover:bg-[#152a6b] text-white font-bold py-4 rounded-[16px] flex items-center justify-center gap-2 shadow-md transition-colors active:scale-[0.98]">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Asistiré
            </button>
          </div>

        </div>
      </div>

      <aside class="hidden lg:flex w-full lg:w-[35%] flex-col gap-6 lg:mt-0">
        
        <div class="bg-white rounded-[24px] p-7 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50">
          <div class="flex gap-5">
            <div class="w-12 h-12 rounded-xl bg-[#EBF5FF] text-[#1e3a8a] flex items-center justify-center shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <span class="text-[#B8860B] font-black text-[10px] tracking-widest uppercase block mb-1">Fecha</span>
              <span class="text-gray-900 font-bold text-[17px] block">11 de Junio</span>
              <span class="text-gray-500 font-medium text-[14px]">8:00 AM - 12:00 PM</span>
            </div>
          </div>

          <div class="w-full h-px bg-gray-100 my-6"></div>

          <div class="flex gap-5">
            <div class="w-12 h-12 rounded-xl bg-[#EBF5FF] text-[#1e3a8a] flex items-center justify-center shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div>
              <span class="text-[#B8860B] font-black text-[10px] tracking-widest uppercase block mb-1">Ubicación</span>
              <span class="text-gray-900 font-bold text-[17px] block">Punto de encuentro UNET</span>
              <span class="text-gray-500 font-medium text-[14px]">Hall Central, Edificio A</span>
            </div>
          </div>

          <button class="w-full mt-8 bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-3.5 rounded-xl shadow-md transition-colors text-[15px] flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
            Asistiré al Evento
          </button>
        </div>

        <div class="bg-white rounded-[24px] p-7 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50">
          <div class="flex items-center gap-4">
            <img src="https://i.pravatar.cc/150?img=11" alt="Miguel Vivas" class="w-[52px] h-[52px] rounded-full object-cover shadow-sm bg-gray-100 border border-gray-200" />
            <div>
              <span class="text-[#B8860B] font-black text-[10px] tracking-widest uppercase block mb-0.5">Organizador</span>
              <span class="text-[#001D6B] font-bold text-[18px]">Miguel Vivas</span>
            </div>
          </div>
          <button class="w-full mt-6 bg-white border border-[#1e3a8a] text-[#1e3a8a] hover:bg-gray-50 font-bold py-3 rounded-xl transition-colors text-[14.5px] flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Contactar Organizador
          </button>
        </div>

        <a href="#" class="bg-white rounded-[24px] p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50 flex items-center justify-between hover:-translate-y-1 transition-transform duration-300 group cursor-pointer">
          <div>
            <span class="text-[#001D6B] font-bold text-[16px] block">Ver muro del evento</span>
            <span class="text-gray-500 text-[13px] mt-1 block">2 novedades del organizador</span>
          </div>
          <div class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#1e3a8a] group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
        </a>

      </aside>

    </main>

    <section class="hidden lg:block mt-10 max-w-[1240px] mx-auto px-8 w-full mb-16">
      <h2 class="text-[34px] font-black text-[#001D6B] tracking-tight">Eventos relacionados</h2>
      <div class="mt-8 grid grid-cols-3 gap-8">
        
        <article class="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 group transition duration-300 hover:shadow-lg">
          <div class="h-[200px] w-full relative bg-gray-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Demo Day" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            <div class="absolute top-4 right-4 bg-white/95 text-[#001D6B] font-black text-[10px] px-3 py-1.5 rounded-full shadow-sm tracking-wider uppercase">STARTUPS</div>
          </div>
          <div class="p-6">
            <h3 class="text-[19px] font-medium text-[#7D8FB3] mb-4">Demo Day ConectaUNET 2024</h3>
            <div class="flex items-center gap-3 text-[14px] text-gray-800 font-medium mb-2">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              15 Oct, 2024
            </div>
            <div class="flex items-center gap-3 text-[14px] text-gray-800 font-medium">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
              Auditorio Principal
            </div>
          </div>
        </article>

        <article class="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 group transition duration-300 hover:shadow-lg">
          <div class="h-[200px] w-full relative bg-gray-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Networking" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            <div class="absolute top-4 right-4 bg-white/95 text-[#001D6B] font-black text-[10px] px-3 py-1.5 rounded-full shadow-sm tracking-wider uppercase">COMUNIDAD</div>
          </div>
          <div class="p-6">
            <h3 class="text-[19px] font-medium text-[#7D8FB3] mb-4">Networking para Ingenieros</h3>
            <div class="flex items-center gap-3 text-[14px] text-gray-800 font-medium mb-2">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              22 Oct, 2024
            </div>
            <div class="flex items-center gap-3 text-[14px] text-gray-800 font-medium">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
              Terraza Biblioteca
            </div>
          </div>
        </article>

        <article class="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 group transition duration-300 hover:shadow-lg">
          <div class="h-[200px] w-full relative bg-gray-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Negocio" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            <div class="absolute top-4 right-4 bg-white/95 text-[#001D6B] font-black text-[10px] px-3 py-1.5 rounded-full shadow-sm tracking-wider uppercase">EMPRENDIMIENTOS</div>
          </div>
          <div class="p-6">
            <h3 class="text-[19px] font-medium text-[#7D8FB3] mb-4">Taller de Modelos de Negocio</h3>
            <div class="flex items-center gap-3 text-[14px] text-gray-800 font-medium mb-2">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              05 Nov, 2024
            </div>
            <div class="flex items-center gap-3 text-[14px] text-gray-800 font-medium">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
              Sala de Innovación
            </div>
          </div>
        </article>

      </div>
    </section>

    <div class="hidden lg:block">
      <AppFooter />
    </div>

  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
</script>