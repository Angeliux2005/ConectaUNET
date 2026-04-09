<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    
    <header class="w-full h-[72px] bg-white border-b border-gray-100 flex items-center justify-center px-4 shadow-sm shrink-0 sticky top-0 z-20">
      <button @click="$router.back()" class="absolute left-4 p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <h1 class="text-[#001D6B] font-black text-[20px] md:text-[22px] tracking-tight">Notificaciones</h1>
    </header>

    <main class="flex-grow w-full max-w-[768px] mx-auto p-4 space-y-4 md:space-y-5 pb-20 mt-2">

      <article class="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 p-4 md:p-5 flex gap-3 md:gap-4 hover:shadow-md transition-shadow">
        
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=200&auto=format&fit=crop" class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shrink-0 mt-1" alt="Concierto de primavera" />

        <div class="flex-grow flex flex-col min-w-0">
          
          <div class="flex justify-between items-start gap-2">
            <h3 class="text-[15px] md:text-[16px] font-bold text-gray-900 leading-tight">Concierto de primavera</h3>
            <span class="bg-blue-50 text-blue-600 text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest shrink-0 mt-0.5">
              EVENTO CULTURAL
            </span>
          </div>

          <p class="text-[12px] md:text-[13px] text-gray-400 mt-1 mb-2.5">10:45 AM</p>

          <p class="text-[14px] md:text-[14.5px] text-gray-600 mb-4 leading-snug">Nueva actualización en el evento</p>

          <div class="border-t border-gray-100 pt-3 flex items-center gap-6 md:gap-8">
            <button class="flex items-center gap-1.5 text-[#001D6B] font-bold text-[13px] md:text-[14px] hover:text-blue-800 transition-colors">
              <svg class="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              Ver
            </button>
            <button class="flex items-center gap-1.5 text-gray-400 font-bold text-[13px] md:text-[14px] hover:text-gray-600 transition-colors">
              <svg class="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              Quitar
            </button>
          </div>

        </div>
      </article>

      <article class="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 p-4 md:p-5 flex gap-3 md:gap-4 hover:shadow-md transition-shadow">
        
        <img src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=200&auto=format&fit=crop" class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shrink-0 mt-1" alt="ArquiPasteles" />

        <div class="flex-grow flex flex-col min-w-0">
          
          <div class="flex justify-between items-start gap-2">
            <h3 class="text-[15px] md:text-[16px] font-bold text-gray-900 leading-tight">ArquiPasteles</h3>
            <span class="bg-orange-50 text-orange-600 text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest shrink-0 mt-0.5">
              EMPRENDIMIENTO
            </span>
          </div>

          <p class="text-[12px] md:text-[13px] text-gray-400 mt-1 mb-2.5">9:15 AM</p>

          <p class="text-[14px] md:text-[14.5px] text-gray-600 mb-4 leading-snug">Subió un nuevo Post</p>

          <div class="border-t border-gray-100 pt-3 flex items-center gap-6 md:gap-8">
            <button class="flex items-center gap-1.5 text-[#001D6B] font-bold text-[13px] md:text-[14px] hover:text-blue-800 transition-colors">
              <svg class="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              Ver
            </button>
            <button class="flex items-center gap-1.5 text-gray-400 font-bold text-[13px] md:text-[14px] hover:text-gray-600 transition-colors">
              <svg class="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              Quitar
            </button>
          </div>

        </div>
      </article>

      <article class="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 p-4 md:p-5 flex gap-3 md:gap-4 hover:shadow-md transition-shadow">
        
        <img src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=200&auto=format&fit=crop" class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shrink-0 mt-1" alt="ArquiPasteles" />

        <div class="flex-grow flex flex-col min-w-0">
          
          <div class="flex justify-between items-start gap-2">
            <h3 class="text-[15px] md:text-[16px] font-bold text-gray-900 leading-tight">ArquiPasteles</h3>
            <span class="bg-orange-50 text-orange-600 text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest shrink-0 mt-0.5">
              EMPRENDIMIENTO
            </span>
          </div>

          <p class="text-[12px] md:text-[13px] text-gray-400 mt-1 mb-2.5">8:07 AM</p>

          <p class="text-[14px] md:text-[14.5px] text-gray-600 mb-4 leading-snug">Actualización en el emprendimiento</p>

          <div class="border-t border-gray-100 pt-3 flex items-center gap-6 md:gap-8">
            <button class="flex items-center gap-1.5 text-[#001D6B] font-bold text-[13px] md:text-[14px] hover:text-blue-800 transition-colors">
              <svg class="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              Ver
            </button>
            <button class="flex items-center gap-1.5 text-gray-400 font-bold text-[13px] md:text-[14px] hover:text-gray-600 transition-colors">
              <svg class="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              Quitar
            </button>
          </div>

        </div>
      </article>

    </main>
  </div>
</template>

<script setup>
// Cambiado a script setup
</script>

<style scoped>
</style>