<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader minimal />

    <main class="flex-grow flex items-center justify-center px-4 sm:px-6 mt-[80px] md:mt-[100px] pb-12">

      <div class="bg-white rounded-[24px] md:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:shadow-[0_20px_40px_rgb(0,0,0,0.03)] p-6 sm:p-10 md:p-12 w-full max-w-[480px] border border-gray-100 z-10">

        <h1 class="text-[22px] md:text-[28px] font-black text-[#001D6B] text-center mb-2 md:mb-3 tracking-tight">
          Recuperar Contraseña
        </h1>

        <p class="text-center text-[14px] md:text-[15px] font-medium text-gray-500 mb-8 md:mb-10 leading-relaxed px-2 md:px-0">
          Ingresa tu correo o usuario y te enviaremos instrucciones para obtener una nueva contraseña.
        </p>

        <form @submit.prevent="$router.push('/')" class="space-y-5 md:space-y-6">

          <div>
            <label class="block text-[13px] md:text-[14px] font-bold text-gray-700 mb-2">
              Correo o nombre de usuario
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <input 
                type="text" 
                class="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] outline-none transition-all text-[14px] md:text-[15px] placeholder-gray-400 font-medium"
                placeholder="nombre@unet.edu.ve"
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            class="w-full bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-3.5 md:py-4 rounded-xl md:rounded-2xl shadow-md transition-colors text-[14px] md:text-[15px] mt-2 tracking-wide"
          >
            Enviar Enlace de Recuperación
          </button>
        </form>

        <div class="mt-8 md:mt-10 text-center flex justify-center">
          <a href="/" class="inline-flex items-center justify-center gap-2 text-[#001D6B] font-bold text-[13px] md:text-[14.5px] hover:text-[#152a6b] transition-colors group">
            <svg class="h-4 w-4 md:h-5 md:w-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver a Iniciar Sesión
          </a>
        </div>

      </div>

    </main>

    <AppFooter />
  </div>
</template>

<script setup>
// Usando script setup para mantener la coherencia
</script>

<style scoped>
</style>