<template>
  <div class="min-h-screen bg-white sm:bg-[#F4F7FB] flex flex-col font-sans w-full text-gray-800">
    
    <AppHeader minimal />

    <main class="flex-1 flex items-center justify-center p-4 sm:pt-24 pb-12 w-full">

      <div class="bg-white sm:rounded-2xl shadow-none sm:shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:p-10 p-2 w-full max-w-[450px] border-none sm:border sm:border-gray-100 z-10">

        <h1 class="text-2xl sm:text-[26px] font-bold text-[#001D6B] text-center mb-8 sm:mb-10 tracking-tight">
          Inicia Sesión en <br class="block sm:hidden" /> ConectaUNET
        </h1>

        <form @submit.prevent="$router.push('/eventos')" class="space-y-4 sm:space-y-6">

          <div>
            <label class="hidden sm:block text-[14px] font-bold text-gray-700 mb-2">
              Correo o nombre de usuario
            </label>
            <div class="relative">
              <div class="hidden sm:flex absolute inset-y-0 left-0 pl-4 items-center pointer-events-none text-gray-400">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <input 
                type="text" 
                class="w-full px-4 sm:pl-11 sm:pr-4 py-3 sm:py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] outline-none transition-all text-[15px] placeholder-gray-400 sm:placeholder-gray-300 font-medium"
                placeholder="Correo o nombre de usuario"
              />
            </div>
          </div>

          <div>
            <div class="hidden sm:flex flex-wrap items-center justify-between mb-2 gap-2">
              <label class="block text-[14px] font-bold text-gray-700">
                Contraseña
              </label>
              <a href="/recuperar-contrasena" class="text-[13px] font-bold text-[#001D6B] hover:text-[#1e3a8a] transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div class="relative">
              <div class="hidden sm:flex absolute inset-y-0 left-0 pl-4 items-center pointer-events-none text-gray-400">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <input 
                type="password" 
                class="w-full px-4 sm:pl-11 sm:pr-4 py-3 sm:py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] outline-none transition-all text-[15px] sm:text-lg sm:tracking-widest placeholder-gray-400 sm:placeholder-gray-300"
                placeholder="Contraseña"
              />
            </div>
          </div>

          <button 
            type="submit"
            class="w-full bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-3.5 rounded-xl shadow-md transition-colors text-[14px] sm:text-[15px] mt-4 tracking-wide"
          >
            Iniciar Sesión
          </button>
        </form>

        <div class="mt-6 sm:mt-8 text-center text-[12px] sm:text-[14px] text-gray-600 font-medium pt-4 sm:pt-8 border-t-0 sm:border-t sm:border-gray-100">
          Si no tienes una cuenta,
          <a href="/registro" class="text-[#001D6B] font-bold hover:underline">Regístrate</a>
        </div>

      </div>

    </main>

    <div class="hidden sm:block">
      <AppFooter />
    </div>
    
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>