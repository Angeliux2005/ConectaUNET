<template>
  <footer class="w-full bg-[#F8F9FB] border-t border-gray-200 mt-auto shrink-0 relative z-10">
    <div class="max-w-[1240px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="text-center md:text-left">
        <h4 class="text-[#001D6B] font-bold text-lg mb-1">ConectaUNET</h4>
        <p class="text-gray-500 text-sm">© 2025 ConectaUNET</p>
      </div>

            <div class="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500">
        <router-link to="/privacidad" class="hover:text-[#001D6B] transition-colors">Privacy Policy</router-link>
        <router-link to="/terminos" class="hover:text-[#001D6B] transition-colors">Terms of Service</router-link>
        <router-link to="/contacto" class="hover:text-[#001D6B] transition-colors">Contact Us</router-link>
        <router-link to="/acerca" class="hover:text-[#001D6B] transition-colors">About ConectaUNET</router-link>
      </div>

      <div class="flex items-center gap-4 text-gray-400">
        <button class="hover:text-[#001D6B] transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
        </button>
        <button class="hover:text-[#001D6B] transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>
