<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader minimal />

    <main class="flex-grow flex items-center justify-center p-4 mt-[72px] mb-8">

            <div class="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12 p-8 w-full max-w-[500px] border border-gray-100">

                <h1 class="text-[26px] font-bold text-[#001D6B] text-center mb-8 tracking-tight">
          Crea tu cuenta gratis
        </h1>

        <form @submit.prevent="$router.push('/eventos')" class="space-y-5">

          <div>
            <label class="block text-[14px] font-bold text-gray-700 mb-2">
              Nombre Completo
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <input 
                type="text" 
                class="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] outline-none transition-all text-[15px] placeholder-gray-300 font-medium"
                placeholder="Juan Paredes"
              />
            </div>
          </div>

          <div>
            <label class="block text-[14px] font-bold text-gray-700 mb-2">
              Correo Institucional
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <input 
                type="email" 
                class="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] outline-none transition-all text-[15px] placeholder-gray-300 font-medium"
                placeholder="nombre@unet.edu.ve"
              />
            </div>
          </div>

          <div>
            <label class="block text-[14px] font-bold text-gray-700 mb-2">
              Contraseña
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <input 
                type="password" 
                class="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] outline-none transition-all text-lg tracking-widest placeholder-gray-300"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label class="block text-[14px] font-bold text-gray-700 mb-2">
              Confirmar Contraseña
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <input 
                type="password" 
                class="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] outline-none transition-all text-lg tracking-widest placeholder-gray-300"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit"
            class="w-full bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-3.5 rounded-xl shadow-md transition-colors text-[15.5px] mt-4 tracking-wide"
          >
            Crear Cuenta
          </button>
        </form>

        <div class="mt-8 text-center text-[14px] text-gray-600 font-medium pt-8 border-t border-gray-100">
          ¿Ya tienes una cuenta?
          <a href="/" class="text-[#001D6B] font-bold hover:underline">Inicia Sesión</a>
        </div>

      </div>

    </main>

    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'Registro',
}
</script>

<style scoped>
</style>
