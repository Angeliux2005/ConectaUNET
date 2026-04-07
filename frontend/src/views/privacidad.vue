<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader minimal />

    <main class="flex-grow w-full max-w-[800px] mx-auto px-4 sm:px-6 mt-[72px] pb-16 pt-12">

            <article class="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 sm:p-12">
        <h1 class="text-[32px] font-black text-[#001D6B] mb-6 tracking-tight">Políticas de Privacidad</h1>

                <div class="space-y-6 text-[15px] text-gray-600 leading-relaxed">
          <p>
            Última actualización: <strong>Octubre 2025</strong>
          </p>
          <p>
            En ConectaUNET, respetamos tu privacidad y estamos comprometidos a proteger los datos personales que compartes con nosotros. Esta política de privacidad explica cómo recopilamos, usamos y resguardamos tu información al utilizar nuestra plataforma estudiantil y comunitaria.
          </p>

          <h2 class="text-[20px] font-bold text-gray-900 mt-8 mb-4">1. Información que recopilamos</h2>
          <p>
            Al registrarte en ConectaUNET recopilamos datos básicos como tu nombre completo, correo institucional educativo, y la carrera a la que perteneces o área de interés. Automáticamente también podríamos almacenar datos técnicos como tu dirección IP para fines de seguridad.
          </p>

          <h2 class="text-[20px] font-bold text-gray-900 mt-8 mb-4">2. Uso de tu Información</h2>
          <p>
            Utilizamos tu información personal principalmente para:
          </p>
          <ul class="list-disc pl-5 space-y-2">
            <li>Facilitar la creación y publicación de perfiles de emprendimientos.</li>
            <li>Promocionar eventos locales orientados a la comunidad.</li>
            <li>Proteger nuestros servicios de usos no autorizados.</li>
            <li>Enviarte notificaciones relevantes respecto a las actualizaciones en tus publicaciones.</li>
          </ul>

          <h2 class="text-[20px] font-bold text-gray-900 mt-8 mb-4">3. Seguridad de Datos</h2>
          <p>
            Todos tus datos, en especial las contraseñas, son resguardadas mediante algoritmos avanzados de encriptación de un solo sentido (Hashing bcrypt) y la transmisión de sesión se rige por JSON Web Tokens. Bajo ninguna circunstancia vendemos información tuya a terceros.
          </p>

          <h2 class="text-[20px] font-bold text-gray-900 mt-8 mb-4">4. Contacto de Privacidad</h2>
          <p>
            Si tienes dudas o deseas eliminar permanentemente tus trazas de nuestra base de datos, comunícate a <strong>privacidad@conecta.unet.edu.ve</strong>.
          </p>
        </div>
      </article>

    </main>

    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'Privacidad',
}
</script>
