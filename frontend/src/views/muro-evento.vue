<template>
  <div class="min-h-screen bg-[#F8F9FA] font-sans text-gray-800">
    
    <header class="hidden lg:flex items-center px-8 bg-white border-b relative h-16">
      <div class="w-1/3 flex items-center">
        <h1 class="text-[#213A8F] text-xl font-bold">ConectaUNET</h1>
      </div>
      
      <nav class="absolute left-1/2 -translate-x-1/2 flex h-full">
        <a href="#" class="bg-[#213A8F] text-white px-8 flex items-center text-sm font-semibold h-full">Eventos</a>
        <a href="#" class="text-gray-500 px-8 flex items-center text-sm font-semibold hover:text-[#213A8F] h-full">Emprendimientos</a>
      </nav>

      <div class="w-1/3 flex justify-end items-center gap-4">
        <button class="text-gray-500 hover:text-[#213A8F]">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </button>
        <div class="w-8 h-8 bg-[#213A8F] rounded-full flex items-center justify-center text-white font-bold">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
      </div>
    </header>

    <header class="lg:hidden bg-white border-b px-4 py-3 flex items-center justify-between">
      <button class="text-gray-500">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <h1 class="text-base font-bold text-[#1A202C]">Muro de Evento</h1>
      <div class="w-6"></div> </header>

    <div class="lg:hidden bg-[#213A8F] text-white text-center py-4 px-4 font-bold text-sm">
      Taller Práctico de Vue.js <br> y Tailwind CSS
    </div>

    <main class="w-full max-w-5xl mx-auto py-0 lg:py-10 relative px-4 lg:px-0 flex justify-center">
      
      <aside class="hidden lg:flex flex-col gap-4 absolute left-0 top-16">
        <button class="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-[#213A8F] border border-gray-100 hover:bg-gray-50">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
        </button>
        <button class="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-[#213A8F] border border-gray-100 hover:bg-gray-50">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
        </button>
      </aside>

      <div class="w-full max-w-[800px] flex flex-col relative pb-24 lg:pb-0 mt-4 lg:mt-0">
        
        <div class="hidden lg:block mb-8">
          <a href="#" class="text-[#213A8F] text-xs font-bold flex items-center gap-2 mb-4 hover:underline">
            <span>&larr;</span> Volver a detalles
          </a>
          <div class="bg-[#213A8F] rounded-xl h-[200px] flex items-center justify-center relative overflow-hidden shadow-md">
            <div class="absolute top-6 right-1/4 w-14 h-14 bg-white opacity-10 rounded-full"></div>
            <h2 class="text-white text-4xl font-bold text-center leading-tight z-10">
              Taller Práctico de Vue.js y <br> Tailwind CSS
            </h2>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div 
            v-for="msg in messages" 
            :key="msg.id" 
            class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex gap-4 overflow-hidden relative"
            :class="{'border-l-4 border-l-[#213A8F] md:border-l-gray-100': msg.role === 'Organizador'}"
          >
            <div class="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold" :class="msg.avatarColor">
              <span v-if="msg.avatarText">{{ msg.avatarText }}</span>
            </div>

            <div class="flex-1 pt-1">
              <div class="flex items-center gap-2 mb-2 flex-wrap">
                <span class="font-bold text-[15px] text-gray-900">{{ msg.author }}</span>
                <span v-if="msg.role" class="bg-gray-200 text-gray-500 text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">
                  {{ msg.role }}
                </span>
                <span class="text-xs text-gray-400 ml-auto">{{ msg.time }}</span>
              </div>
              <p class="text-[15px] text-gray-600 leading-relaxed">{{ msg.content }}</p>
            </div>
          </div>
        </div>

        <div class="fixed bottom-0 left-0 w-full bg-white p-4 lg:static lg:bg-transparent lg:p-0 lg:mt-8 border-t lg:border-none z-20 flex gap-3 lg:gap-4 items-center">
          <div class="w-10 h-10 rounded-full bg-[#1A2530] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 lg:hidden">
            Tú
          </div>
          <div class="hidden lg:flex w-12 h-12 rounded-full bg-[#1A2530] text-white items-center justify-center text-sm font-bold flex-shrink-0">
            Tú
          </div>
          
          <div class="flex-1 relative">
            <input 
              type="text" 
              placeholder="Escribe algo..." 
              class="w-full bg-white lg:bg-white text-gray-700 text-sm rounded-full py-3.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#213A8F] shadow-sm border border-gray-100"
            >
          </div>
          
          <button class="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#213A8F] flex items-center justify-center text-white flex-shrink-0 hover:bg-blue-900 transition-colors shadow-md">
            <svg class="w-4 h-4 lg:w-5 lg:h-5 ml-[-2px]" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
          </button>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([
  {
    id: 1,
    author: 'Juan Paredes',
    role: 'Organizador',
    time: 'Hace 10 min',
    content: '¡Ya abrimos las puertas del laboratorio! Vayan tomando asiento. Si traen su propia laptop, conéctense a la red de "Invitados_UNET"',
    avatarText: 'J',
    avatarColor: 'bg-[#1A2530]'
  },
  {
    id: 2,
    author: 'Juan Paredes',
    role: 'Organizador',
    time: 'Hace 10 min',
    content: '¡Habrá refrigerio en el comedor a las 10:00 am! Lleven su credencial',
    avatarText: 'J',
    avatarColor: 'bg-[#1A2530]'
  },
  {
    id: 3,
    author: 'José Bravo',
    role: '',
    time: 'Hace 5 min',
    content: 'Guardenme Asiento!',
    avatarText: 'JB',
    avatarColor: 'bg-[#4A726E]' 
  },
  {
    id: 4,
    author: 'Camila',
    role: '',
    time: 'Justo ahora',
    content: 'Ya estoy aquí, me senté en la segunda fila.',
    avatarText: 'C',
    avatarColor: 'bg-[#4A726E]'
  }
]);
</script>