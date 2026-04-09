<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

//Router para movernos por las vistas
const router = useRouter();

// Datos a ingresar
const emailOrUser = ref('');
const password = ref('');

// Estados en la vista
const isLoading = ref(false);
const errorMessage = ref('');

// Color de marca
const brandBlue = '#213A8F';

// Funcion para enviar información al back (tiene autenticación)
const handleLogin = async () => {
  
  if (!emailOrUser.value.trim() || !password.value.trim()) {
    errorMessage.value = 'Por favor, completa todos los campos.';
    return;
  }

  //Juega con los estados de la vista
  errorMessage.value = '';
  isLoading.value = true;

  try {

    //Console.log de debug
    console.log('Datos listos para enviar al backend:', {

    });

    if (password.value === confirmPassword.value) {
      await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: emailOrUser.value,
          password: password.value,
        })
      })
    }

    //localStorage.setItem('token', 'tu_token_generado');
    router.push('/eventos'); 
    
  } catch (error) {
    errorMessage.value = 'Credenciales incorrectas. Intenta de nuevo.';
    console.error('Error en el login:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>


<template>

  <div class="min-h-screen flex flex-col bg-[#F5F6F8] font-sans">
    
    <header class="flex items-center justify-center lg:justify-between w-full px-6 lg:px-10 py-5 lg:py-6 border-b border-[#E5E7EB] bg-white">
      <h1 class="text-2xl lg:text-3xl font-bold" :style="{ color: brandBlue }">ConectaUNET</h1>
      <button class="hidden lg:block px-6 py-2.5 text-white rounded-md font-medium text-sm transition-colors hover:opacity-90 shadow-sm" :style="{ backgroundColor: brandBlue }" @click="router.push('/registro')">
        Regístrate
      </button>
    </header>

    <main class="flex-1 flex flex-col items-center justify-center p-6">
      
      <div class="w-full max-w-md p-8 lg:p-10 bg-white rounded-xl shadow-lg border border-[#E5E7EB]">
        
        <h2 class="text-2xl lg:text-3xl font-extrabold text-center mb-8 text-[#1F2937]">
          Inicia Sesión en<br>
          <span :style="{ color: brandBlue }">ConectaUNET</span>
        </h2>

        <form @submit.prevent="handleLogin" class="space-y-5">
          
          <div v-if="errorMessage" class="p-3 text-sm text-red-600 bg-red-50 rounded-md">
            {{ errorMessage }}
          </div>
          
          <div>
            <label for="login" class="hidden lg:block text-xs font-semibold text-[#6B7280] mb-1.5">
              Correo o nombre de usuario
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 hidden lg:flex items-center pl-4 pointer-events-none">
                <svg class="w-5 h-5 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <input 
                id="login"
                v-model="emailOrUser"
                type="text"
                placeholder="Correo o nombre de usuario"
                :disabled="isLoading"
                class="w-full px-4 py-3 lg:pl-11 border border-[#D1D5DB] rounded-md focus:ring-2 focus:ring-opacity-50 transition-colors text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                :style="{ '--tw-ring-color': brandBlue, 'border-color': '#D1D5DB' }"
              />
            </div>
          </div>

          <div>
            <div class="hidden lg:flex justify-between items-center mb-1.5">
              <label for="password" class="text-xs font-semibold text-[#6B7280]">
                Contraseña
              </label>
              <a href="#" :style="{ color: brandBlue }" class="text-xs font-bold hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 hidden lg:flex items-center pl-4 pointer-events-none">
                <svg class="w-5 h-5 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <input 
                id="password"
                v-model="password"
                type="password"
                placeholder="Contraseña"
                :disabled="isLoading"
                class="w-full px-4 py-3 lg:pl-11 border border-[#D1D5DB] rounded-md focus:ring-2 focus:ring-opacity-50 transition-colors text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                :style="{ '--tw-ring-color': brandBlue, 'border-color': '#D1D5DB' }"
              />
            </div>
          </div>

          <div class="pt-2">
            <button 
              type="submit"
              :disabled="isLoading"
              class="w-full px-8 py-3.5 text-white rounded-md font-bold text-base transition-colors hover:opacity-95 shadow-md flex justify-center text-center leading-tight disabled:opacity-70 disabled:cursor-not-allowed"
              :style="{ backgroundColor: brandBlue }"
            >
              <span v-if="isLoading">Cargando...</span>
              <span v-else>Iniciar Sesión</span>
            </button>
          </div>
        </form>
      </div>

      <p class="mt-8 text-center text-xs lg:text-sm text-[#6B7280]">
        Si no tienes una cuenta,
        <a href="#" :style="{ color: brandBlue }" class="font-bold hover:underline" @click="router.push('/registro')">
          Regístrate
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