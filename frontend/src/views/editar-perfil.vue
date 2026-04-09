<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden relative">
    
    <div class="hidden md:block w-full">
      <AppHeader />
    </div>

    <input 
      type="file" 
      ref="avatarInput" 
      class="hidden" 
      accept="image/png, image/jpeg, image/webp" 
      @change="onAvatarChange" 
    />

    <main class="flex-grow w-full max-w-[1100px] mx-auto md:px-8 lg:px-12 pb-24 md:pb-16 md:pt-10 relative flex justify-center">
      
      <section class="md:hidden w-full bg-[#F8F9FB] min-h-screen flex flex-col relative">
        
        <div class="bg-white px-4 py-3.5 flex items-center justify-between sticky top-0 z-20 shadow-sm border-b border-gray-100">
          <button @click="$router.back()" class="p-1.5 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <h1 class="text-[18px] font-black text-[#0A1128] tracking-tight">Editar Perfil</h1>
          <button @click.prevent="saveProfile" :disabled="isLoading" class="bg-[#1e3a8a] text-white text-[13px] font-bold px-5 py-2 rounded-xl shadow-sm hover:bg-[#152a6b] transition-colors disabled:opacity-70">
            {{ isLoading ? '...' : 'Save' }}
          </button>
        </div>

        <div class="bg-[#1e3aa8] pt-10 pb-16 flex flex-col items-center justify-center shrink-0 relative">
          <div class="relative">
            <div class="w-[100px] h-[100px] rounded-full bg-[#0A1128] border-4 border-[#1e3aa8] shadow-lg flex items-center justify-center text-white text-[32px] font-black overflow-hidden">
              <img v-if="userAvatarPreview" :src="userAvatarPreview" alt="Avatar" class="w-full h-full object-cover" />
              <span v-else>{{ form.name.charAt(0).toUpperCase() || 'U' }}</span>
            </div>
            <button @click="triggerAvatarClick" class="absolute bottom-0 right-0 bg-white text-[#1e3a8a] p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </button>
          </div>
        </div>

        <div class="bg-white rounded-t-[28px] -mt-8 z-10 px-6 pt-8 pb-32 flex-grow flex flex-col shadow-[0_-8px_20px_rgba(0,0,0,0.05)] border-t border-gray-100">
          <div class="space-y-5 flex-grow">

            <label class="block">
              <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">NOMBRE COMPLETO</span>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <input v-model="form.name" type="text" placeholder="Ej: Juan Paredes" class="w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-4 py-3.5 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
              </div>
            </label>

            <label class="block">
              <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">NOMBRE DE USUARIO</span>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <span class="text-[16px] font-bold">@</span>
                </div>
                <input v-model="form.username" type="text" placeholder="Ej: juanparedes_unet" class="w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 py-3.5 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
              </div>
            </label>

            <label class="block">
              <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">CORREO INSTITUCIONAL</span>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <input v-model="form.email" type="email" disabled class="w-full rounded-2xl border border-gray-200 bg-gray-50 text-gray-500 pl-12 pr-4 py-3.5 text-[14px] font-medium outline-none cursor-not-allowed" />
              </div>
              <p class="text-[10px] text-gray-400 mt-1.5 ml-1">El correo institucional no puede ser modificado.</p>
            </label>

            <div class="grid grid-cols-2 gap-4">
              <label class="block">
                <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">CÉDULA</span>
                <div class="relative">
                  <input v-model="form.identityCard" type="text" placeholder="V-12345678" class="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
                </div>
              </label>
              
              <label class="block">
                <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 block">CARRERA</span>
                <div class="relative">
                  <select v-model="form.career" class="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-[13px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all appearance-none pr-8">
                    <option value="" disabled hidden>Seleccionar</option>
                    <option value="Ingeniería Informática">Ing. Informática</option>
                    <option value="Ingeniería Industrial">Ing. Industrial</option>
                    <option value="Ingeniería Electrónica">Ing. Electrónica</option>
                    <option value="Arquitectura">Arquitectura</option>
                    <option value="Otra">Otra</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
              </label>
            </div>

            <div class="pt-6 border-t border-gray-100 mt-6">
              <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">SEGURIDAD Y CUENTA</p>
              
              <button @click.prevent="showPasswordModal = true" class="w-full flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 hover:bg-gray-50 transition-colors shadow-sm mb-3">
                <div class="flex items-center gap-3">
                  <div class="bg-[#F3F4F6] rounded-full p-2 text-gray-600 shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  </div>
                  <span class="text-[14px] font-bold text-gray-700">Cambiar Contraseña</span>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>

              <button @click="logout" class="w-full flex items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50/50 px-4 py-3.5 text-[14px] font-bold text-red-600 hover:bg-red-100 transition-colors shadow-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                Cerrar Sesión
              </button>
            </div>

          </div>
        </div>
      </section>

      <section class="hidden md:flex flex-col w-full max-w-[840px]">
        
        <div class="mb-5 flex justify-between items-center">
          <button @click="$router.back()" class="inline-flex items-center gap-1.5 text-[#001D6B] font-bold text-[13px] hover:text-[#1e3a8a] transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            Volver a Mi Perfil
          </button>
        </div>

        <div class="mb-8 space-y-1">
          <h1 class="text-[28px] font-black text-[#0A1128] tracking-tight">Editar Información</h1>
          <p class="text-[14.5px] text-gray-500 font-medium">Actualiza tus datos personales y credenciales universitarias.</p>
        </div>

        <div class="bg-white rounded-[32px] border border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden flex">
          
          <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] w-full">
            
            <div class="bg-[#F8F9FB] border-r border-gray-100 p-8 flex flex-col items-center">
              
              <div class="relative mb-6">
                <div class="w-[120px] h-[120px] rounded-full bg-[#0A1128] shadow-md flex items-center justify-center text-white text-[36px] font-black overflow-hidden border-4 border-white">
                  <img v-if="userAvatarPreview" :src="userAvatarPreview" alt="Avatar" class="w-full h-full object-cover" />
                  <span v-else>{{ form.name.charAt(0).toUpperCase() || 'U' }}</span>
                </div>
              </div>

              <button @click="triggerAvatarClick" class="w-full bg-white border border-gray-200 text-[#1e3a8a] text-[13px] font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition-colors mb-8">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Cambiar Foto
              </button>

              <div class="w-full h-px bg-gray-200 mb-6"></div>

              <button @click="showPasswordModal = true" class="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-[#1e3a8a] font-bold text-[13px] py-2 transition-colors mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Cambiar Contraseña
              </button>

              <button @click="logout" class="w-full flex items-center justify-center gap-2 text-red-500 hover:text-red-700 font-bold text-[13px] py-2 transition-colors mt-auto">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                Cerrar Sesión
              </button>
            </div>

            <div class="p-8 lg:p-10 space-y-6">
              
              <label class="block">
                <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">NOMBRE COMPLETO</span>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  </div>
                  <input v-model="form.name" type="text" placeholder="Ej: Juan Paredes" class="w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-4 py-3.5 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
                </div>
              </label>

              <label class="block">
                <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">NOMBRE DE USUARIO</span>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <span class="text-[16px] font-bold">@</span>
                  </div>
                  <input v-model="form.username" type="text" placeholder="Ej: juanparedes_unet" class="w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 py-3.5 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
                </div>
              </label>

              <label class="block">
                <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">CORREO INSTITUCIONAL</span>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <input v-model="form.email" type="email" disabled class="w-full rounded-2xl border border-gray-200 bg-gray-50 text-gray-500 pl-12 pr-4 py-3.5 text-[14px] font-medium outline-none cursor-not-allowed" />
                </div>
              </label>

              <div class="grid grid-cols-2 gap-6">
                <label class="block">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">CÉDULA DE IDENTIDAD</span>
                  <input v-model="form.identityCard" type="text" placeholder="V-12345678" class="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
                </label>

                <label class="block">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">CARRERA</span>
                  <div class="relative">
                    <select v-model="form.career" class="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-[14px] text-gray-800 font-medium focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all appearance-none pr-10">
                      <option value="" disabled hidden>Seleccionar</option>
                      <option value="Ingeniería Informática">Ing. Informática</option>
                      <option value="Ingeniería Industrial">Ing. Industrial</option>
                      <option value="Ingeniería Electrónica">Ing. Electrónica</option>
                      <option value="Arquitectura">Arquitectura</option>
                      <option value="Otra">Otra</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </div>
                  </div>
                </label>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>

    <BottomNav class="md:hidden" />

    <div class="hidden md:flex fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3.5 px-8 lg:px-12 justify-end items-center gap-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
      <button @click="$router.back()" class="text-gray-500 hover:text-[#1e3a8a] font-bold text-[13.5px] transition-colors px-3 py-2">
        Cancelar
      </button>
      <button @click.prevent="saveProfile" :disabled="isLoading" class="inline-flex items-center gap-2 bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-2.5 px-6 rounded-lg shadow-md transition-colors text-[13.5px] disabled:opacity-70">
        <span v-if="isLoading">Guardando...</span>
        <span v-else>Guardar Cambios</span>
      </button>
    </div>

    <div v-if="showPasswordModal" class="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div class="bg-white rounded-3xl w-full max-w-[400px] shadow-2xl overflow-hidden animate-fade-in-up">
        <div class="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-black text-[#001D6B] text-[18px]">Cambiar Contraseña</h3>
          <button @click="showPasswordModal = false" class="text-gray-400 hover:text-gray-700 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <div class="p-6 space-y-4">
          <label class="block">
            <span class="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 block">CONTRASEÑA ACTUAL</span>
            <input v-model="passForm.current" type="password" placeholder="********" class="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-800 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
          </label>
          <label class="block">
            <span class="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 block">NUEVA CONTRASEÑA</span>
            <input v-model="passForm.new" type="password" placeholder="Mínimo 6 caracteres" class="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-800 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
          </label>
          <label class="block">
            <span class="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 block">CONFIRMAR NUEVA CONTRASEÑA</span>
            <input v-model="passForm.confirm" type="password" placeholder="Repite la contraseña" class="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-800 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 outline-none transition-all" />
          </label>
        </div>

        <div class="p-6 pt-0 flex gap-3">
          <button @click="showPasswordModal = false" class="flex-1 py-3 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors text-[14px]">Cancelar</button>
          <button @click="updatePassword" :disabled="isPassLoading" class="flex-1 py-3 rounded-xl font-bold text-white bg-[#1e3a8a] hover:bg-[#152a6b] transition-colors text-[14px] disabled:opacity-70">
            {{ isPassLoading ? 'Actualizando...' : 'Actualizar' }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import BottomNav from '../components/BottomNav.vue'
import { fetchApi } from '../utils/api.js' // <-- IMPORTAMOS TU API

const router = useRouter()
const isLoading = ref(false)

// Estados de la Foto
const avatarInput = ref(null)
const userAvatarPreview = ref('')
const selectedAvatarFile = ref(null)

// Estados de Contraseña
const showPasswordModal = ref(false)
const isPassLoading = ref(false)
const passForm = reactive({
  current: '',
  new: '',
  confirm: ''
})

// Datos del formulario
const form = reactive({
  name: '',
  username: '',
  email: '',
  identityCard: '',
  career: ''
})

onMounted(() => {
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser)
      form.name = user.name || ''
      form.username = user.username || ''
      form.email = user.email || ''
      form.identityCard = user.identityCard || ''
      form.career = user.career || ''
      userAvatarPreview.value = user.avatar || ''
    } catch (e) {
      console.error("Error leyendo datos", e)
    }
  } else {
    router.push('/')
  }
})

// ==========================================
// 1. LÓGICA DE LA FOTO
// ==========================================
const triggerAvatarClick = () => {
  avatarInput.value.click()
}

const onAvatarChange = (e) => {
  const file = e.target.files[0]
  if (!file) return

  if (!file.type.startsWith('image/')) {
    alert('Por favor selecciona una imagen válida.')
    return
  }

  selectedAvatarFile.value = file
  userAvatarPreview.value = URL.createObjectURL(file)
}

// ==========================================
// 2. GUARDAR PERFIL (TEXTO + FOTO)
// ==========================================
async function saveProfile() {
  if (!form.name.trim() || !form.username.trim()) {
    alert("El nombre y el nombre de usuario son obligatorios.")
    return
  }

  isLoading.value = true

  try {
    let userDataUpdated = null;

    // PASO A: ¿Hay foto nueva? La subimos primero usando tu ruta de uploads
    if (selectedAvatarFile.value) {
      const fd = new FormData()
      fd.append('avatar', selectedAvatarFile.value)
      
      const uploadRes = await fetchApi('/api/uploads/avatar', {
        method: 'POST',
        body: fd
      })
      const uploadData = await uploadRes.json()
      if (!uploadData.success) throw new Error(uploadData.message || "Error al subir la imagen")
      
      // Guardamos la info actualizada que devuelve el servidor
      userDataUpdated = uploadData.data; 
    }

    // PASO B: Actualizamos el texto (Nombre, username, etc.)
    const body = JSON.stringify({
      name: form.name,
      username: form.username,
      identityCard: form.identityCard,
      career: form.career
    })

    const res = await fetchApi('/api/auth/profile', {
      method: 'PUT',
      body
    })

    const data = await res.json()
    if (!data.success) throw new Error(data.message)

    // Fusionamos los datos actualizados
    const finalUser = { ...data.data, avatar: userDataUpdated?.avatar || data.data.avatar }

    localStorage.setItem('user', JSON.stringify(finalUser))
    alert("¡Perfil actualizado con éxito!")
    router.push('/perfil-mis-emprendimientos')

  } catch (error) {
    console.error("Error al guardar:", error)
    // Mostramos el mensaje exacto para saber qué falló
    alert(error.message || "Error de conexión con el servidor.")
  } finally {
    isLoading.value = false
  }
}

// ==========================================
// 3. CAMBIAR CONTRASEÑA
// ==========================================
async function updatePassword() {
  if (!passForm.current || !passForm.new || !passForm.confirm) {
    alert("Por favor completa todos los campos.")
    return
  }
  if (passForm.new.length < 6) {
    alert("La nueva contraseña debe tener al menos 6 caracteres.")
    return
  }
  if (passForm.new !== passForm.confirm) {
    alert("Las contraseñas nuevas no coinciden.")
    return
  }

  isPassLoading.value = true

  try {
    const body = JSON.stringify({
      currentPassword: passForm.current,
      newPassword: passForm.new
    })

    // NOTA: Asegúrate con backend de que esta ruta existe, si no dará error 404
    const res = await fetchApi('/api/auth/updatepassword', {
      method: 'PUT',
      body
    })

    const data = await res.json()
    if (!data.success) throw new Error(data.message)

    alert("Contraseña actualizada con éxito.")
    showPasswordModal.value = false
    passForm.current = ''
    passForm.new = ''
    passForm.confirm = ''

  } catch (error) {
    console.error("Error:", error)
    alert(error.message || "Error al actualizar la contraseña.")
  } finally {
    isPassLoading.value = false
  }
}

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/')
}
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Animación suave para el Modal */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>