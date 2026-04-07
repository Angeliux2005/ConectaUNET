<template>
  <div class="flex gap-3 p-3.5 bg-white rounded-[16px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    
    <img :src="imagen" class="w-[84px] h-[84px] rounded-[12px] object-cover shrink-0 bg-gray-100" :alt="titulo" />

    <div class="flex-1 min-w-0 flex flex-col justify-between">
      
      <div class="flex justify-between items-start gap-2">
        <h3 class="text-[15px] font-bold text-[#1F2937] leading-tight truncate">{{ titulo }}</h3>
        <span :class="tagColor" class="text-[9px] font-black px-2 py-0.5 rounded-[4px] uppercase shrink-0">
          {{ etiqueta }}
        </span>
      </div>

      <p class="text-[11px] text-[#6B7280] line-clamp-2 mt-1 leading-snug">
        {{ descripcion }}
      </p>

      <div class="mt-2 space-y-1">
        <div v-if="ubicacion" class="flex items-center gap-1.5 text-[10px] font-semibold text-[#1E3A8A]">
          <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
          <span class="truncate">{{ ubicacion }}</span>
        </div>
        
        <div class="flex items-center justify-between mt-1">
          <div class="flex items-center gap-1.5 text-[10px] font-bold text-[#1F2937]">
            <img :src="avatar" :alt="`Avatar de ${autor}`" class="w-4 h-4 rounded-full bg-gray-200" />
            <span class="truncate">{{ autor }}</span>
          </div>
          <button class="text-gray-300 hover:text-[#1E3A8A] transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  imagen: String,
  titulo: String,
  etiqueta: String,
  descripcion: String,
  ubicacion: String,
  autor: String,
  avatar: String,
  // Prop especial para darle el color exacto a la etiqueta (Morado, Naranja, etc.)
  tagColor: {
    type: String,
    default: 'bg-purple-100 text-purple-600' 
  }
})
</script>