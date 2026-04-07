<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader minimal />

    <main class="flex-grow flex items-center justify-center p-4">

            <div class="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12 p-8 w-full max-w-[500px] border border-gray-100">

                <h1 class="text-[26px] font-bold text-[#001D6B] text-center mb-3 tracking-tight">
          Recuperar Contraseña
        </h1>

        <p class="text-center text-[15px] font-medium text-gray-500 mb-10 px-2 leading-relaxed">
          Ingresa tu correo o usuario y te enviaremos instrucciones para obtener una nueva contraseña.
        </p>

        <form @submit.prevent="$router.push('/')" class="space-y-6">

          <div>
            <label class="block text-[14px] font-bold text-gray-700 mb-2">
              Correo o nombre de usuario
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <input 
                type="email" 
                class="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] outline-none transition-all text-[15px] placeholder-gray-300 font-medium"
                placeholder="nombre@unet.edu.ve"
              />
            </div>
          </div>

          <button 
            type="submit"
            class="w-full bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-3.5 rounded-xl shadow-md transition-colors text-[15.5px] mt-2 tracking-wide"
          >
            Enviar Enlace de Recuperación
          </button>
        </form>

        <div class="mt-8 text-center text-[14px] text-gray-600 font-medium pt-8 border-t border-gray-100">
          <a href="/" class="text-[#001D6B] font-bold hover:underline flex items-center justify-center gap-2">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver a Iniciar Sesión
          </a>
        </div>

      </div>

    </main>

    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'RecuperarContrasena',
}
</script>

<style scoped>
</style>
