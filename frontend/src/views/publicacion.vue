<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader />

    <main class="flex-grow w-full max-w-[900px] mx-auto px-4 sm:px-6 mt-[72px] pb-16 pt-8">

      <a href="/detalles-emprendimiento-publicaciones" class="inline-flex items-center gap-2 text-[#001D6B] font-bold text-[15px] hover:text-[#1e3a8a] transition-colors mb-6 group">
        <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Volver a publicaciones
      </a>

      <article class="bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden mb-8">

        <div class="px-6 py-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 overflow-hidden shrink-0">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <div>
              <h2 class="text-[#001D6B] font-bold text-[16px] leading-tight">Desarrollo Web UNET</h2>
              <div class="flex items-center gap-1 text-gray-500 text-[13px] mt-0.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                San Cristóbal, Táchira
              </div>
            </div>
          </div>
          <button class="text-gray-400 hover:text-gray-700 p-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"/></svg>
          </button>
        </div>

        <div class="w-full bg-gray-100">
          <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop" class="w-full h-auto max-h-[500px] object-cover" alt="Web Design workspace" />
        </div>

        <div class="p-6">

          <div class="flex items-center justify-between mb-4 text-[#001D6B]">
            <div class="flex items-center gap-4">
              <button class="hover:opacity-70 transition-opacity">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
              <button class="hover:opacity-70 transition-opacity">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </button>
              <button class="hover:opacity-70 transition-opacity -mt-1">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </div>
            <button class="hover:opacity-70 transition-opacity">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
            </button>
          </div>

          <div class="font-bold text-[15px] text-gray-900 mb-2.5">
            1,032 Me gusta
          </div>

          <div class="text-[15px] text-gray-800 leading-[1.6]">
            <span class="font-bold text-[#001D6B] mr-2">Desarrollo Web UNET</span>
            ¡Impulsa tu negocio con una página web profesional! 🚀 Ofrecemos diseño de landing pages, portafolios interactivos y sistemas de gestión a medida.<br/><br/>
            💻 Tecnología: Vue.js + Tailwind CSS<br/>
            🎨 Diseño Responsive y Moderno<br/><br/>
            ¡Pregunta por nuestras promociones para estudiantes! 👇
          </div>

          <div class="mt-4 text-[11px] font-bold tracking-wider text-gray-400 uppercase">
            Hace 2 horas
          </div>

        </div>
      </article>

      <section class="bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] p-6 md:p-8 mb-12">
        <h3 class="text-[#001D6B] font-bold text-[20px] mb-6">Comentarios</h3>

        <div class="flex items-center gap-4 mb-8">
          <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 shrink-0 overflow-hidden">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <div class="flex-grow flex items-center bg-[#F8F9FB] rounded-full px-5 py-2.5 border border-gray-100 focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <input type="text" placeholder="Añadir un comentario..." class="bg-transparent w-full outline-none text-[14px] text-gray-700 placeholder-gray-400" />
            <button class="text-[#1e3a8a] font-bold text-[14px] ml-3 hover:text-blue-800 transition-colors shrink-0">Publicar</button>
          </div>
        </div>

        <div class="space-y-6">

          <div class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#1e3a8a] flex items-center justify-center font-bold text-[14px] shrink-0">
              JP
            </div>
            <div class="flex-grow pt-1">
              <div class="flex items-center justify-between">
                <span class="font-bold text-[14px] text-[#001D6B]">Juan Paredes</span>
                <span class="text-[12px] text-gray-400">2h</span>
              </div>
              <p class="text-[14.5px] text-gray-600 mt-0.5 leading-snug">
                ¿Tienen descuentos por cantidad? Estoy interesado en actualizar las webs de 3 sucursales.
              </p>
              <div class="flex items-center gap-4 mt-2">
                <button class="text-[12px] font-bold text-gray-500 hover:text-gray-800 transition-colors">Responder</button>
                <div class="flex items-center gap-1.5 text-gray-400">
                  <button class="hover:text-red-500 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button>
                  <span class="text-[12px]">2</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[14px] shrink-0">
              MV
            </div>
            <div class="flex-grow pt-1">
              <div class="flex items-center justify-between">
                <span class="font-bold text-[14px] text-[#001D6B]">Miguel Vivas</span>
                <span class="text-[12px] text-gray-400">5h</span>
              </div>
              <p class="text-[14.5px] text-gray-600 mt-0.5 leading-snug">
                Excelente trabajo muchachos 🔥 La web de mi cafetería quedó increíble. ¡100% recomendados!
              </p>
              <div class="flex items-center gap-4 mt-2">
                <button class="text-[12px] font-bold text-gray-500 hover:text-gray-800 transition-colors">Responder</button>
                <div class="flex items-center gap-1.5 text-gray-400">
                  <button class="hover:text-red-500 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button>
                  <span class="text-[12px]">12</span>
                </div>
              </div>

              <div class="flex gap-4 mt-5">
                <div class="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-[11px] shrink-0">
                  DW
                </div>
                <div class="flex-grow pt-0.5">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-[13.5px] text-[#001D6B]">Desarrollo Web UNET</span>
                    <span class="text-[12px] text-gray-400">1h</span>
                  </div>
                  <p class="text-[14px] text-gray-600 mt-0.5 leading-snug">
                    ¡Gracias Miguel! Nos alegra mucho que te haya gustado 🙏
                  </p>
                  <div class="flex items-center gap-4 mt-2">
                    <button class="text-[12px] font-bold text-gray-500 hover:text-gray-800 transition-colors">Responder</button>
                    <div class="flex items-center gap-1.5 text-gray-400">
                      <button class="hover:text-red-500 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button>
                    </div>
                  </div>
                </div>
              </div>

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
