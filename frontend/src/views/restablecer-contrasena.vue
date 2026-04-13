<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader minimal />
    <main class="flex-grow flex items-center justify-center px-4 mt-[80px] pb-12">
      <div class="bg-white rounded-[24px] shadow-sm p-8 w-full max-w-[480px] border border-gray-100">
        <h1 class="text-[24px] font-black text-[#001D6B] text-center mb-4">Nueva Contraseña</h1>
        
        <form @submit.prevent="cambiarContrasena" class="space-y-5">
          <div>
            <label class="block text-[14px] font-bold text-gray-700 mb-2">Escribe tu nueva contraseña</label>
            <input v-model="password" type="password" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#1e3a8a] outline-none" required minlength="6" />
          </div>
          <div>
            <label class="block text-[14px] font-bold text-gray-700 mb-2">Confirmar contraseña</label>
            <input v-model="confirmPassword" type="password" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#1e3a8a] outline-none" required minlength="6" />
          </div>

          <p v-if="errorMsg" class="text-red-500 text-[13px] font-semibold text-center">{{ errorMsg }}</p>

          <button type="submit" :disabled="cargando" class="w-full bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-3.5 rounded-xl shadow-md transition-colors flex justify-center">
            {{ cargando ? 'Guardando...' : 'Guardar y Entrar' }}
          </button>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'

const route = useRoute()
const router = useRouter()
const password = ref('')
const confirmPassword = ref('')
const cargando = ref(false)
const errorMsg = ref('')

const cambiarContrasena = async () => {
  if (password.value !== confirmPassword.value) {
    return errorMsg.value = 'Las contraseñas no coinciden'
  }
  
  cargando.value = true
  errorMsg.value = ''
  
  try {
    const res = await fetch(`/api/auth/resetpassword/${route.params.token}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: password.value })
    })
    const data = await res.json()
    
    if (data.success) {
      alert("¡Contraseña actualizada con éxito!")
      router.push('/')
    } else {
      errorMsg.value = data.message
    }
  } catch (error) {
    errorMsg.value = 'Error de conexión'
  } finally {
    cargando.value = false
  }
}
</script>