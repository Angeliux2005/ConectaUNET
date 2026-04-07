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

        <div class="mt-8">
          <button class="bg-[#002177] hover:bg-[#001755] text-white font-semibold py-2.5 px-8 rounded-lg shadow transition-colors text-sm">
            Editar
          </button>
        </div>
      </div>

      <div class="mt-12 border-b border-gray-200">
        <ul class="flex space-x-8 px-2 overflow-x-auto">
          <li>
            <button @click="$router.push('/detalles-emprendimiento-publicaciones')" class="px-2 py-4 text-[15px] font-semibold text-gray-500 hover:text-gray-700 transition duration-150">
              Publicaciones
            </button>
          </li>
          <li>
            <button class="px-2 py-4 text-[15px] font-bold text-[#002177] border-b-[3px] border-[#002177]">
              Información
            </button>
          </li>
        </ul>
      </div>

      <div class="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 px-2">

        <div class="space-y-10">
          <section>
            <h2 class="text-[22px] md:text-[26px] font-black text-[#001D6B] mb-6">Acerca del Emprendimiento</h2>
            <div class="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50">
              <p class="text-[15px] md:text-[16px] text-gray-600 leading-[1.8] mb-6">
                Somos un equipo de estudiantes de Ingeniería Informática y Electrónica dedicados a la creación de soluciones digitales sostenibles. Desarrollamos sistemas de monitoreo inteligente para optimizar recursos en agricultura urbana y entornos locales.
              </p>
              <p class="text-[15px] md:text-[16px] text-gray-600 leading-[1.8]">
                Nuestra arquitectura escalable permite democratizar el acceso a datos precisos del suelo para entusiastas y pequeños productores, reduciendo el desperdicio de agua en hasta un 40%.
              </p>
            </div>
          </section>

          <section>
            <h2 class="text-[22px] md:text-[26px] font-black text-[#001D6B] mb-6">Horarios y Entregas</h2>
            <div class="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 flex items-center gap-5">
              <div class="w-[52px] h-[52px] rounded-xl bg-[#EBF5FF] flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h3 class="text-[17px] font-bold text-[#001D6B]">Lunes a Viernes</h3>
                <p class="text-sm font-medium text-gray-500 mt-0.5">8:00 AM - 3:00 PM</p>
              </div>
            </div>
          </section>
        </div>

        <div class="space-y-6 lg:mt-[10px]">
          <h2 class="text-[22px] md:text-[26px] font-black text-[#001D6B] mb-4">Contacto y Redes</h2>

                    <div class="bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 flex items-center gap-5">
            <div class="w-[52px] h-[52px] rounded-xl bg-[#e3e8f8] flex items-center justify-center shrink-0 text-[#1e3a8a]">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </div>
            <div>
              <h3 class="text-[17px] font-bold text-[#001D6B]">WhatsApp</h3>
              <p class="text-[14px] md:text-[15px] font-medium text-gray-700 mt-0.5">+58 414-1234567</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 flex items-center gap-5">
            <div class="w-[52px] h-[52px] rounded-xl bg-[#e3e8f8] flex items-center justify-center shrink-0 text-[#1e3a8a]">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
            <div>
              <h3 class="text-[17px] font-bold text-[#001D6B]">Instagram</h3>
              <p class="text-[14px] md:text-[15px] font-medium text-gray-700 mt-0.5">@ecotech</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 flex items-center gap-5">
            <div class="w-[52px] h-[52px] rounded-xl bg-[#e3e8f8] flex items-center justify-center shrink-0 text-[#1e3a8a]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <h3 class="text-[17px] font-bold text-[#001D6B]">Email</h3>
              <p class="text-[14px] md:text-[15px] font-medium text-gray-700 mt-0.5">ecotech@gmail.com</p>
            </div>
          </div>
        </div>

      </div>

      <section class="mt-20 px-2">
        <h2 class="text-[28px] md:text-[34px] font-black text-[#001D6B] tracking-tight">Más emprendimientos</h2>
        <p class="text-[16px] text-gray-600 mt-2 font-medium">Descubre otros proyectos del ecosistema universitario.</p>

                <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div class="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-100/60 transition-transform duration-300 hover:-translate-y-1">
            <div class="relative h-[220px] w-full bg-[#1A453A]">
              <img src="https://images.unsplash.com/photo-1611288870282-3e2849e75525?q=80&w=2000&auto=format&fit=crop" alt="BioPack" class="w-full h-full object-cover mix-blend-overlay opacity-60" />
              <div class="absolute top-5 left-5 bg-[#001D6B] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                Ecología
              </div>
            </div>
            <div class="p-6 md:p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-3">BioPack UNET</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6">
                Empaques compostables creados a partir de residuos orgánicos de la zona. Una alternativa real al...
              </p>
              <div class="border-t border-gray-100 pt-5 flex items-center gap-4">
                <img src="https://i.pravatar.cc/100?img=4" alt="Kimberly" class="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100" />
                <span class="text-sm font-bold text-gray-900">Kimberly Gonzales</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-100/60 transition-transform duration-300 hover:-translate-y-1">
            <div class="relative h-[220px] w-full bg-[#0D1117]">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" alt="SmartGrid" class="w-full h-full object-cover mix-blend-overlay opacity-80" />
              <div class="absolute top-5 left-5 bg-[#001D6B] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                Software
              </div>
            </div>
            <div class="p-6 md:p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-3">SmartGrid AI</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6">
                Gestión inteligente de energía para complejos residenciales estudiantiles utilizando IA...
              </p>
              <div class="border-t border-gray-100 pt-5 flex items-center gap-4">
                <img src="https://i.pravatar.cc/100?img=11" alt="Carlos" class="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100" />
                <span class="text-sm font-bold text-gray-900">Carlos Mendez</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-100/60 transition-transform duration-300 hover:-translate-y-1">
            <div class="relative h-[220px] w-full bg-[#20526B]">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop" alt="MediConnect" class="w-full h-full object-cover mix-blend-overlay opacity-60" />
              <div class="absolute top-5 left-5 bg-[#001D6B] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                Salud
              </div>
            </div>
            <div class="p-6 md:p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-3">MediConnect</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6">
                Plataforma de teleasistencia médica gratuita para la comunidad universitaria con enfoque...
              </p>
              <div class="border-t border-gray-100 pt-5 flex items-center gap-4">
                <img src="https://i.pravatar.cc/100?img=5" alt="Elena" class="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100" />
                <span class="text-sm font-bold text-gray-900">Elena Rodriguez</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>

    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'DetallesEmprendimientoDueo',
}
</script>

<style scoped>

</style>
