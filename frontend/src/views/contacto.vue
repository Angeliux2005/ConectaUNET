<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader minimal />



        <main class="flex-grow w-full max-w-[1000px] mx-auto px-4 sm:px-6 mt-[72px] pb-16 pt-12 flex flex-col md:flex-row gap-8">

      <div class="md:w-1/3">
        <h1 class="text-[32px] font-black text-[#001D6B] mb-2 tracking-tight">Contacto</h1>
        <p class="text-gray-500 mb-8 text-[15px] font-medium leading-relaxed">
          ¿Tienes algún problema con un registro mercantil o deseas promocionar tu evento de manera prioritaria? Escríbenos.
        </p>

        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-blue-50 text-[#1e3a8a] flex items-center justify-center shrink-0">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 text-[15px]">Correo Electrónico</h4>
              <p class="text-[14px] text-gray-500 mt-0.5">soporte@conecta.unet.edu.ve</p>
            </div>
          </div>

                    <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-blue-50 text-[#1e3a8a] flex items-center justify-center shrink-0">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 text-[15px]">Ubicación</h4>
              <p class="text-[14px] text-gray-500 mt-0.5">Universidad Nacional Experimental del Táchira (UNET).<br>San Cristóbal, Venezuela.</p>
            </div>
          </div>
        </div>
      </div>

      <article class="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:w-2/3">
        <form @submit.prevent class="space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
             <div>
                <label class="block text-[14px] font-bold text-gray-700 mb-2">Nombre</label>
                <input type="text" class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] outline-none transition-all text-[14px]" placeholder="Ej. Ana Pérez" />
             </div>
             <div>
                <label class="block text-[14px] font-bold text-gray-700 mb-2">Correo</label>
                <input type="email" class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] outline-none transition-all text-[14px]" placeholder="ana@unet.edu.ve" />
             </div>
          </div>

          <div>
             <label class="block text-[14px] font-bold text-gray-700 mb-2">Asunto</label>
             <input type="text" class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] outline-none transition-all text-[14px]" placeholder="Publicidad de Emprendimiento" />
          </div>

          <div>
             <label class="block text-[14px] font-bold text-gray-700 mb-2">Mensaje</label>
             <textarea rows="5" class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] outline-none transition-all text-[14px] resize-none" placeholder="Escribe tus dudas aquí..."></textarea>
          </div>

          <button class="w-full bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-3.5 rounded-xl shadow-md transition-colors text-[15px] mt-2">
            Enviar Mensaje
          </button>
        </form>
      </article>

    </main>


        <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'Contacto',
}
</script>
