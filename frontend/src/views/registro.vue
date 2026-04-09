<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Datos a ingresar
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

// Color de marca definido por el usuario (usado en múltiples lugares)
const brandBlue = '#213A8F';

// Funcion para enviar información al back (tiene autenticación)
const handleRegister = async () => {
  if (password.value === confirmPassword.value) {
    await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      })
    })
  }

};
</script>


<template>

  <div class="min-h-screen flex flex-col bg-[#F5F6F8] font-sans">
    
    <header class="hidden lg:flex items-center justify-between px-10 py-6 border-b border-[#E5E7EB] bg-white">
      <h1 class="text-3xl font-bold" :style="{ color: brandBlue }">ConectaUNET</h1>
      <button @click="router.push('/')" class="px-6 py-3 text-white rounded-md font-medium text-sm transition-colors hover:opacity-90 shadow-sm" :style="{ backgroundColor: brandBlue }">
        Inicia Sesión
      </button>
    </header>

    <main class="flex-1 flex flex-col items-center justify-center p-6">
      
      <div class="w-full max-w-md lg:max-w-lg p-8 bg-white rounded-xl shadow-lg border border-[#E5E7EB]">
        
        <h2 class="text-3xl font-extrabold text-center mb-8 text-[#1F2937]">
          Bienvenido a<br>
          <span :style="{ color: brandBlue }">ConectaUNET</span>
        </h2>

        <form @submit.prevent="handleRegister" class="space-y-5">
          
          <div class="space-y-1.5">
            <label for="username" class="block text-sm font-semibold text-[#6B7280]">
              Nombre de usuario
            </label>
            <input 
              id="username"
              v-model="username"
              type="text"
              placeholder="Ej. JuanPerez"
              class="w-full px-4 py-3 border border-[#D1D5DB] rounded-md focus:ring-2 focus:ring-opacity-50 transition-colors text-sm"
              :style="{ '--tw-ring-color': brandBlue, 'border-color': '#D1D5DB' }"
            />
          </div>

          <div class="space-y-1.5">
            <label for="email" class="block text-sm font-semibold text-[#6B7280]">
              Correo electrónico
            </label>
            <input 
              id="email"
              v-model="email"
              type="email"
              placeholder="juan.perez@unet.edu.ve"
              class="w-full px-4 py-3 border border-[#D1D5DB] rounded-md focus:ring-2 focus:ring-opacity-50 transition-colors text-sm"
              :style="{ '--tw-ring-color': brandBlue, 'border-color': '#D1D5DB' }"
            />
          </div>

          <div class="space-y-1.5">
            <label for="password" class="block text-sm font-semibold text-[#6B7280]">
              Contraseña
            </label>
            <input 
              id="password"
              v-model="password"
              type="password"
              placeholder="********"
              class="w-full px-4 py-3 border border-[#D1D5DB] rounded-md focus:ring-2 focus:ring-opacity-50 transition-colors text-sm"
              :style="{ '--tw-ring-color': brandBlue, 'border-color': '#D1D5DB' }"
            />
          </div>

          <div class="space-y-1.5">
            <label for="confirmPassword" class="block text-sm font-semibold text-[#6B7280]">
              Confirmar contraseña
            </label>
            <input 
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              placeholder="********"
              class="w-full px-4 py-3 border border-[#D1D5DB] rounded-md focus:ring-2 focus:ring-opacity-50 transition-colors text-sm"
              :style="{ '--tw-ring-color': brandBlue, 'border-color': '#D1D5DB' }"
            />
          </div>

          <div class="pt-2">
            <button 
              type="submit"
              class="w-full px-8 py-3.5 text-white rounded-md font-bold text-base transition-colors hover:opacity-95 shadow-md"
              :style="{ backgroundColor: brandBlue }"
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>

      <p class="mt-6 text-center text-sm text-[#6B7280]">
        Si ya tienes una cuenta,
        <a href="#" :style="{ color: brandBlue }" class="font-bold hover:underline" @click="router.push('/')">
          inicia sesión
        </a>
      </p>

    </main>
  </div>

</template>


<style scoped>
  input:focus {
    outline: none;
    border-color: v-bind(brandBlue) !important;
  }
</style>