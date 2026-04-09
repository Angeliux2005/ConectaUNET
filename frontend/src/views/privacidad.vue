<script setup>
import { useRouter } from 'vue-router';

//Router para movernos por las vistas
const router = useRouter();

// Color de marca principal
const brandBlue = '#213A8F';

// Función para volver atrás o al inicio
const goBack = () => {
  console.log('Regresando al inicio...');
  router.push('/eventos');
};
</script>


<template>

  <div class="min-h-screen flex flex-col bg-[#F5F6F8] font-sans pt-[72px]">
    
    <header class="w-full h-[72px] bg-white border-b border-gray-100 flex items-center px-6 lg:px-12 shadow-sm shrink-0 z-50 fixed top-0 left-0">
      <router-link 
        to="/eventos" 
        class="text-[#002177] font-bold text-[22px] tracking-tight truncate hover:opacity-80 transition-opacity"
      >
        ConectaUNET
      </router-link>
    </header>

    <main class="flex-1 flex flex-col items-center p-6 lg:py-16 w-full">
      
      <div class="w-full max-w-3xl p-8 lg:p-12 bg-white rounded-xl shadow-lg border border-[#E5E7EB]">
        
        <h2 class="text-2xl lg:text-3xl font-extrabold mb-2" :style="{ color: brandBlue }">
          Políticas de Privacidad
        </h2>
        
        <p class="text-xs lg:text-sm text-[#6B7280] mb-8">
          Última actualización: <span class="font-medium">Octubre 2025</span>
        </p>

        <div class="space-y-8 text-[#4B5563] text-sm lg:text-base leading-relaxed">
          
          <p>
            En ConectaUNET, respetamos tu privacidad y estamos comprometidos a proteger los datos personales que compartes con nosotros. Esta política de privacidad explica cómo recopilamos, usamos y resguardamos tu información al utilizar nuestra plataforma estudiantil y comunitaria.
          </p>

          <section class="space-y-2">
            <h3 class="text-lg font-bold text-[#1F2937]">1. Información que recopilamos</h3>
            <p>
              Al registrarte en ConectaUNET recopilamos datos básicos como tu nombre completo, correo institucional educativo, y la carrera a la que perteneces o área de interés. Automáticamente también podríamos almacenar datos técnicos como tu dirección IP para fines de seguridad.
            </p>
          </section>

          <section class="space-y-2">
            <h3 class="text-lg font-bold text-[#1F2937]">2. Uso de tu Información</h3>
            <p>
              Utilizamos tu información personal principalmente para:
            </p>
            <ul class="list-disc pl-5 space-y-1.5 text-[#4B5563]">
              <li>Facilitar la creación y publicación de perfiles de emprendimientos.</li>
              <li>Promocionar eventos locales orientados a la comunidad.</li>
              <li>Proteger nuestros servicios de usos no autorizados.</li>
              <li>Enviarte notificaciones relevantes respecto a las actualizaciones en tus publicaciones.</li>
            </ul>
          </section>

          <section class="space-y-2">
            <h3 class="text-lg font-bold text-[#1F2937]">3. Seguridad de Datos</h3>
            <p>
              Todos tus datos, en especial las contraseñas, son resguardadas mediante algoritmos avanzados de encriptación de un solo sentido (Hashing bcrypt) y la transmisión de sesión se rige por JSON Web Tokens. Bajo ninguna circunstancia vendemos información tuya a terceros.
            </p>
          </section>

          <section class="space-y-2">
            <h3 class="text-lg font-bold text-[#1F2937]">4. Contacto de Privacidad</h3>
            <p>
              Si tienes dudas o deseas eliminar permanentemente tus trazas de nuestra base de datos, comunícate a <a href="mailto:privacidad@conecta.unet.edu.ve" class="font-medium hover:underline" :style="{ color: brandBlue }">privacidad@conecta.unet.edu.ve</a>.
            </p>
          </section>

        </div>
      </div>

    </main>

        <div class="hidden md:block">
      <AppFooter />
    </div>

  </div>

</template>


<style scoped>
</style>