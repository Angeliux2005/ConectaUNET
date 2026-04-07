<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader />

    <main class="flex-grow w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-[72px] pb-16">

      <div class="w-full relative mt-8 rounded-xl bg-gray-200 h-[280px] md:h-[320px] overflow-hidden shadow-sm">
        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover" alt="Cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        <div class="absolute bottom-[-40px] left-8 w-24 h-24 rounded-full border-4 border-[#F8F9FB] bg-[#0A1128] flex items-center justify-center shadow-lg overflow-hidden">
          <div class="text-white text-[10px] tracking-wider text-center flex flex-col items-center">
            <svg class="w-6 h-6 mb-1 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            STARTUP
          </div>
        </div>
      </div>

      <div class="mt-14 px-2">
        <h1 class="text-[32px] md:text-[40px] font-bold text-[#001D6B] tracking-tight">EcoTech Solutions.</h1>
        <div class="flex flex-wrap gap-3 md:gap-4 mt-3">
          <span class="bg-[#EBF5FF] text-[#1e3a8a] text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">Tecnología</span>
          <span class="bg-[#EBF5FF] text-[#1e3a8a] text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">Sostenibilidad</span>
        </div>

                <p class="mt-6 text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-[600px]">
          Sistemas inteligentes de monitoreo de riego para agricultura urbana de precisión utilizando sensores de bajo costo y una app intuitiva.
        </p>

        <div class="flex flex-wrap items-center gap-6 mt-6 text-sm md:text-[15px] font-bold text-gray-800">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Hall del A
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            @ecotech_solutions
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            1,032 seguidores
          </div>
        </div>

        <div class="mt-8 flex gap-3">
          <button class="bg-[#002177] hover:bg-[#001755] text-white font-semibold py-2.5 px-8 rounded-lg shadow transition-colors text-sm">
            Seguir
          </button>
          <button class="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-lg shadow-sm transition-colors text-sm flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            Mensaje
          </button>
        </div>
      </div>

      <div class="mt-12 border-b border-gray-200">
        <ul class="flex space-x-8 px-2 overflow-x-auto">
          <li>
            <button class="px-2 py-4 text-[15px] font-bold text-[#002177] border-b-[3px] border-[#002177]">
              Publicaciones
            </button>
          </li>
          <li>
            <button @click="$router.push('/detalles-emprendimiento-informacion')" class="px-2 py-4 text-[15px] font-semibold text-gray-500 hover:text-gray-700 transition duration-150">
              Información
            </button>
          </li>
        </ul>
      </div>

      <div class="mt-10 px-2">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          <article @click="$router.push('/publicacion')" class="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 group transition duration-300 hover:shadow-lg">
            <div class="h-[200px] w-full overflow-hidden relative bg-gray-200">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" alt="Post Image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div class="p-6">
              <h3 class="text-[19px] font-bold text-[#001D6B] mb-2 leading-tight">Prototipado de Placas V2.0</h3>
              <p class="text-[15px] text-gray-600 leading-relaxed mb-6">
                Probando la nueva arquitectura de bajo consumo para nuestros nodos de monitoreo...
              </p>
              <div class="flex items-center gap-6 text-gray-500 border-t border-gray-100 pt-5">
                <div class="flex items-center gap-2 font-medium">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  124
                </div>
                <div class="flex items-center gap-2 font-medium">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  18
                </div>
              </div>
            </div>
          </article>

          <article @click="$router.push('/publicacion')" class="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 group transition duration-300 hover:shadow-lg">
            <div class="h-[200px] w-full overflow-hidden relative bg-gray-200">
              <img src="https://images.unsplash.com/photo-1592834375971-ceb5c1abddb3?q=80&w=2070&auto=format&fit=crop" alt="Post Image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div class="p-6">
              <h3 class="text-[19px] font-bold text-[#001D6B] mb-2 leading-tight">Instalación en la Terraza UNET</h3>
              <p class="text-[15px] text-gray-600 leading-relaxed mb-6">
                Nuestro primer despliegue a gran escala para el huerto experimental de Ingeniería...
              </p>
              <div class="flex items-center gap-6 text-gray-500 border-t border-gray-100 pt-5">
                <div class="flex items-center gap-2 font-medium">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  89
                </div>
                <div class="flex items-center gap-2 font-medium">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  0
                </div>
              </div>
            </div>
          </article>

          <article @click="$router.push('/publicacion')" class="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 group transition duration-300 hover:shadow-lg">
            <div class="h-[200px] w-full overflow-hidden relative bg-gray-200">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Post Image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div class="p-6">
              <h3 class="text-[19px] font-bold text-[#001D6B] mb-2 leading-tight">Nueva Dashboard para Usuarios</h3>
              <p class="text-[15px] text-gray-600 leading-relaxed mb-6">
                Actualizamos nuestra app con visualizaciones de datos en tiempo real más intuitivas...
              </p>
              <div class="flex items-center gap-6 text-gray-500 border-t border-gray-100 pt-5">
                <div class="flex items-center gap-2 font-medium">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  215
                </div>
                <div class="flex items-center gap-2 font-medium">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  32
                </div>
              </div>
            </div>
          </article>

          <article @click="$router.push('/publicacion')" class="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 group transition duration-300 hover:shadow-lg">
            <div class="h-[200px] w-full overflow-hidden relative bg-gray-200">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Post Image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div class="p-6">
              <h3 class="text-[19px] font-bold text-[#001D6B] mb-2 leading-tight">Workshop: Tecnología y Agro</h3>
              <p class="text-[15px] text-gray-600 leading-relaxed mb-6">
                Compartiendo nuestra experiencia en el último foro de innovación tecnológica...
              </p>
              <div class="flex items-center gap-6 text-gray-500 border-t border-gray-100 pt-5">
                <div class="flex items-center gap-2 font-medium">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  156
                </div>
                <div class="flex items-center gap-2 font-medium">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  12
                </div>
              </div>
            </div>
          </article>

          <article @click="$router.push('/publicacion')" class="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 group transition duration-300 hover:shadow-lg">
            <div class="h-[200px] w-full overflow-hidden relative bg-gray-200">
              <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" alt="Post Image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div class="p-6">
              <h3 class="text-[19px] font-bold text-[#001D6B] mb-2 leading-tight">Eficiencia Energética</h3>
              <p class="text-[15px] text-gray-600 leading-relaxed mb-6">
                Integrando paneles solares compactos para la autonomía total de nuestros sensores...
              </p>
              <div class="flex items-center gap-6 text-gray-500 border-t border-gray-100 pt-5">
                <div class="flex items-center gap-2 font-medium">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  72
                </div>
                <div class="flex items-center gap-2 font-medium">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  5
                </div>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 group transition duration-300 hover:shadow-lg">
            <div class="h-[200px] w-full overflow-hidden relative bg-gray-200">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop" alt="Post Image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div class="p-6">
              <h3 class="text-[19px] font-bold text-[#001D6B] mb-2 leading-tight">El Futuro es Verde</h3>
              <p class="text-[15px] text-gray-600 leading-relaxed mb-6">
                Nuestro compromiso con la sostenibilidad se refleja en cada línea de código...
              </p>
              <div class="flex items-center gap-6 text-gray-500 border-t border-gray-100 pt-5">
                <div class="flex items-center gap-2 font-medium">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  198
                </div>
                <div class="flex items-center gap-2 font-medium">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  21
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>

    </main>

    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'DetallesEmprendimientoPublicaciones',
}
</script>

<style scoped>
</style>
