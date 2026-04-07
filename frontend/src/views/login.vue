<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader minimal />

    <main class="flex-grow flex items-center justify-center p-4">

            <div class="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12 p-8 w-full max-w-[500px] border border-gray-100">

                <h1 class="text-[26px] font-bold text-[#001D6B] text-center mb-10 tracking-tight">
          Inicia Sesión en ConectaUNET
        </h1>

        <form @submit.prevent="$router.push('/eventos')" class="space-y-6">

          <div>
            <label class="block text-[14px] font-bold text-gray-700 mb-2">
              Correo o nombre de usuario
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <input 
                type="text" 
                class="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] outline-none transition-all text-[15px] placeholder-gray-300 font-medium"
                placeholder="nombre@unet.edu.ve"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between mb-2">
              <label class="block text-[14px] font-bold text-gray-700">
                Contraseña
              </label>
              <a href="/recuperar-contrasena" class="text-[13px] font-bold text-[#001D6B] hover:text-[#1e3a8a] transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <input 
                type="password" 
                class="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] outline-none transition-all text-lg tracking-widest placeholder-gray-300"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit"
            class="w-full bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-3.5 rounded-xl shadow-md transition-colors text-[15.5px] mt-2 tracking-wide"
          >
            Iniciar Sesión
          </button>
        </form>

        <div class="mt-8 text-center text-[14px] text-gray-600 font-medium pt-8 border-t border-gray-100">
          Si no tienes una cuenta,
          <a href="/registro" class="text-[#001D6B] font-bold hover:underline">Regístrate</a>
        </div>

      </div>

    </main>

    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped>
</style>
