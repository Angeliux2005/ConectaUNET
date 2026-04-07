<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader />

    <main class="flex-grow w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-[72px] pb-16 pt-8 md:pt-12">

            <div class="flex flex-col lg:flex-row gap-8 lg:gap-10">

        <div class="w-full lg:w-[65%] flex flex-col">

          <div class="w-full relative h-[250px] md:h-[400px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-sm bg-gray-200">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover" alt="Coding Event Cover" />

            <div class="absolute bottom-6 left-6 bg-[#FBC02D] text-[#001D6B] text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              TALLER TÉCNICO
            </div>
          </div>

          <div class="mt-8 md:mt-10 px-2">
            <h1 class="text-[32px] md:text-[44px] font-black text-[#001D6B] leading-[1.1] tracking-tight">
              Taller Práctico de Vue.js y Tailwind CSS
            </h1>
            <p class="text-[18px] md:text-[22px] text-gray-600 leading-relaxed mt-5 font-normal">
              Domina las herramientas más modernas del desarrollo web frontend en un entorno académico de alto nivel.
            </p>
          </div>

          <div class="mt-10 md:mt-12 bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50">
            <h3 class="text-[20px] font-bold text-[#001D6B] mb-5">Acerca del evento</h3>
            <div class="space-y-4">
              <p class="text-[15.5px] text-gray-700 leading-[1.8]">
                Este taller intensivo está diseñado para estudiantes y profesionales que deseen elevar sus habilidades en el desarrollo de interfaces modernas. Aprenderemos desde los fundamentos de la reactividad en Vue 3 hasta la construcción de sistemas de diseño escalables utilizando Tailwind CSS.
              </p>
              <p class="text-[15.5px] text-gray-700 leading-[1.8]">
                No se requiere experiencia previa avanzada, pero sí conocimientos básicos de HTML y JavaScript. Al finalizar, cada participante tendrá un proyecto real para su portafolio.
              </p>
            </div>
          </div>

                  </div>

        <aside class="w-full lg:w-[35%] flex flex-col gap-6 lg:mt-0">

          <div class="bg-white rounded-[24px] p-7 md:p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50">

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

          <div class="bg-white rounded-[24px] p-7 md:p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50">
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
      </div>

      <section class="mt-20 md:mt-24">
        <h2 class="text-[28px] md:text-[34px] font-black text-[#001D6B] tracking-tight">Eventos relacionados</h2>

                <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          <article class="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 group transition duration-300 hover:shadow-lg">
            <div class="h-[200px] w-full relative bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Demo Day" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              <div class="absolute top-4 right-4 bg-white/95 text-[#001D6B] font-black text-[10px] px-3 py-1.5 rounded-full shadow-sm tracking-wider uppercase">
                STARTUPS
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-[19px] font-medium text-[#7D8FB3] mb-4">Demo Day ConectaUNET 2024</h3>
              <div class="flex items-center gap-3 text-[14px] text-gray-800 font-medium mb-2">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                15 Oct, 2024
              </div>
              <div class="flex items-center gap-3 text-[14px] text-gray-800 font-medium">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Auditorio Principal
              </div>
            </div>
          </article>

          <article class="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 group transition duration-300 hover:shadow-lg">
            <div class="h-[200px] w-full relative bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Networking" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              <div class="absolute top-4 right-4 bg-white/95 text-[#001D6B] font-black text-[10px] px-3 py-1.5 rounded-full shadow-sm tracking-wider uppercase">
                COMUNIDAD
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-[19px] font-medium text-[#7D8FB3] mb-4">Networking para Ingenieros</h3>
              <div class="flex items-center gap-3 text-[14px] text-gray-800 font-medium mb-2">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                22 Oct, 2024
              </div>
              <div class="flex items-center gap-3 text-[14px] text-gray-800 font-medium">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Terraza Biblioteca
              </div>
            </div>
          </article>

          <article class="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 group transition duration-300 hover:shadow-lg">
            <div class="h-[200px] w-full relative bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Negocio" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              <div class="absolute top-4 right-4 bg-white/95 text-[#001D6B] font-black text-[10px] px-3 py-1.5 rounded-full shadow-sm tracking-wider uppercase">
                EMPRENDIMIENTOS
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-[19px] font-medium text-[#7D8FB3] mb-4">Taller de Modelos de Negocio</h3>
              <div class="flex items-center gap-3 text-[14px] text-gray-800 font-medium mb-2">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                05 Nov, 2024
              </div>
              <div class="flex items-center gap-3 text-[14px] text-gray-800 font-medium">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Sala de Innovación
              </div>
            </div>
          </article>
        </div>
      </section>

    </main>

    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'DetallesEvento',
}
</script>

<style scoped>
</style>
