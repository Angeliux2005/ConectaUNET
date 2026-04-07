<template>
  <div class="fixed inset-0 z-[100] flex justify-end md:justify-center md:items-center bg-black/50 backdrop-blur-sm transition-all" @click.self="$emit('close')">

    <div class="w-full h-full md:h-auto md:w-[500px] md:max-h-[85vh] bg-[#F8F9FB] rounded-none md:rounded-xl shadow-2xl flex flex-col transform transition-transform" role="dialog" aria-modal="true">

      <div class="flex items-center px-6 py-5 border-b border-gray-100 bg-white md:rounded-t-xl shrink-0">
        <button @click="$emit('close')" class="p-1 hover:bg-gray-100 rounded-full text-gray-500 transition-colors mr-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h2 class="text-[#001D6B] font-bold text-[22px]">Notificaciones</h2>
      </div>

      <div class="flex-grow overflow-y-auto p-4 space-y-4">

        <article class="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=200&auto=format&fit=crop" class="w-12 h-12 rounded-full object-cover shadow-sm" alt="Concierto de primavera" />
              <div>
                <h3 class="text-[16px] font-bold text-gray-900 leading-tight">Concierto de primavera</h3>
                <p class="text-[13px] text-gray-400 mt-0.5">10:45 AM</p>
              </div>
            </div>
            <div class="bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded bg-opacity-70 uppercase tracking-widest">
              EVENTO CULTURAL
            </div>
          </div>
          <div class="mt-4 mb-4">
            <p class="text-[14.5px] text-gray-600">Nueva actualización en el evento</p>
          </div>
          <div class="border-t border-gray-50 pt-4 flex items-center gap-6">
            <button class="flex items-center gap-2 text-[#001D6B] font-bold text-[14px] hover:text-blue-800 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              Ver
            </button>
            <button class="flex items-center gap-2 text-gray-400 font-bold text-[14px] hover:text-gray-600 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              Quitar
            </button>
          </div>
        </article>

        <article class="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=200&auto=format&fit=crop" class="w-12 h-12 rounded-full object-cover shadow-sm" alt="ArquiPasteles" />
              <div>
                <h3 class="text-[16px] font-bold text-gray-900 leading-tight">ArquiPasteles</h3>
                <p class="text-[13px] text-gray-400 mt-0.5">9:15 AM</p>
              </div>
            </div>
            <div class="bg-orange-50 text-orange-600 text-[10px] font-bold px-2.5 py-1 rounded bg-opacity-70 uppercase tracking-widest">
              EMPRENDIMIENTO
            </div>
          </div>
          <div class="mt-4 mb-4">
            <p class="text-[14.5px] text-gray-600">Subió un nuevo Post</p>
          </div>
          <div class="border-t border-gray-50 pt-4 flex items-center gap-6">
            <button class="flex items-center gap-2 text-[#001D6B] font-bold text-[14px] hover:text-blue-800 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              Ver
            </button>
            <button class="flex items-center gap-2 text-gray-400 font-bold text-[14px] hover:text-gray-600 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              Quitar
            </button>
          </div>
        </article>

        <article class="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=200&auto=format&fit=crop" class="w-12 h-12 rounded-full object-cover shadow-sm" alt="ArquiPasteles" />
              <div>
                <h3 class="text-[16px] font-bold text-gray-900 leading-tight">ArquiPasteles</h3>
                <p class="text-[13px] text-gray-400 mt-0.5">8:07 AM</p>
              </div>
            </div>
            <div class="bg-orange-50 text-orange-600 text-[10px] font-bold px-2.5 py-1 rounded bg-opacity-70 uppercase tracking-widest">
              EMPRENDIMIENTO
            </div>
          </div>
          <div class="mt-4 mb-4">
            <p class="text-[14.5px] text-gray-600">Actualización en el emprendimiento</p>
          </div>
          <div class="border-t border-gray-50 pt-4 flex items-center gap-6">
            <button class="flex items-center gap-2 text-[#001D6B] font-bold text-[14px] hover:text-blue-800 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              Ver
            </button>
            <button class="flex items-center gap-2 text-gray-400 font-bold text-[14px] hover:text-gray-600 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              Quitar
            </button>
          </div>
        </article>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationsModal'
}
</script>
