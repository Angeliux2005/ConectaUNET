<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full md:max-w-[768px] mx-auto bg-white shadow-lg">
    
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
      <button @click="$router.go(-1)" class="text-gray-500 hover:text-gray-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      
      <div class="relative flex-1">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" autofocus placeholder="Search" class="w-full bg-[#F3F4F6] rounded-[10px] pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]">
      </div>
    </div>

    <div class="flex px-4 py-4">
      <button class="flex-1 bg-[#1E3A8A] text-white font-bold text-sm py-2.5 rounded-l-[10px]">Eventos Culturales</button>
      <button class="flex-1 bg-[#F3F4F6] text-gray-600 font-bold text-sm py-2.5 rounded-r-[10px] hover:bg-gray-200">Emprendimientos</button>
    </div>

    <div class="flex gap-2 px-4 overflow-x-auto pb-4 scrollbar-hide">
      <button class="shrink-0 bg-[#1E3A8A] text-white text-xs font-bold px-4 py-1.5 rounded-full">Todo</button>
      <button class="shrink-0 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full">Música</button>
      <button class="shrink-0 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full">Comida</button>
      <button class="shrink-0 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full">Misa</button>
    </div>

    <div class="flex-1 px-4 overflow-y-auto pb-24">
      <p class="text-xs text-gray-500 mb-4">3 resultados</p>
      
      </div>

    </div>
</template>

<script>
export default {
  name: 'Buscar'
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>