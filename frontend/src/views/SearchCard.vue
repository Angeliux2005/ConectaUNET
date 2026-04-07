<template>
  <div class="flex gap-4 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <img :src="imagen" :alt="`Portada de ${titulo}`" class="w-20 h-20 rounded-xl object-cover" />
    <div class="flex-1">
      <div class="flex justify-between items-start">
        <h3 class="text-sm font-bold text-[#1F2937] leading-tight">{{ titulo }}</h3>
        <span :class="tagColor" class="text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
          {{ categoria }}
        </span>
      </div>
      <p class="text-[11px] text-[#4B5563] line-clamp-2 mt-1">{{ descripcion }}</p>
      <div class="flex items-center gap-2 mt-2 text-[10px] text-[#9CA3AF] font-medium">
        <img :src="avatar" :alt="`Avatar de ${autor}`" class="w-4 h-4 rounded-full" />
        <span>{{ autor }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  titulo: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  tagColor: {
    type: String,
    default: 'bg-gray-100 text-gray-600'
  }
})
</script>