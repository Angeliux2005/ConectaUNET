<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader minimal />



        <main class="flex-grow w-full max-w-[800px] mx-auto px-4 sm:px-6 mt-[72px] pb-16 pt-12">
      <article class="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 sm:p-12">
        <h1 class="text-[32px] font-black text-[#001D6B] mb-6 tracking-tight">Términos de Servicio</h1>

                <div class="space-y-6 text-[15px] text-gray-600 leading-relaxed">
          <p>
            Al navegar o publicar en ConectaUNET, aceptas automáticamente regirte por las siguientes normas académicas y comunitarias dictadas.
          </p>

          <h2 class="text-[20px] font-bold text-gray-900 mt-8 mb-4">1. Uso del Servicio</h2>
          <p>
            ConectaUNET proporciona una plataforma interactiva cuyo objetivo es exclusivamente potenciar la red de proyectos, emprendimientos y eventos desarrollados en las adyacencias o con participación comunitaria relacionada a la universidad. Está estrictamente prohibido utilizar el portal para actividades ilegales o spam comercial no regulado.
          </p>

          <h2 class="text-[20px] font-bold text-gray-900 mt-8 mb-4">2. Propiedad de tu Contenido</h2>
          <p>
            Cuando publicas información sobre tu emprendimiento (fotos, logotipos, precios o ideas), retienes el 100% de la propiedad intelectual sobre dichos recursos. Sin embargo, al publicarlo concedes una licencia temporal a ConectaUNET para exhibirlo y optimizar su distribución local dentro del directorio.
          </p>

          <h2 class="text-[20px] font-bold text-gray-900 mt-8 mb-4">3. Terminación de Cuentas</h2>
          <p>
            Los moderadores se reservan el derecho absoluto de deshabilitar cuentas y borrar emprendimientos si detectan violaciones a las reglas de decencia (publicación de insultos en la sección de comentarios, contenido adulto o intentos de estafa a los visitantes).
          </p>

          <h2 class="text-[20px] font-bold text-gray-900 mt-8 mb-4">4. Modificaciones del Servicio</h2>
          <p>
            El software se proporciona de forma "Beta". Podríamos cambiar dominios, pausar interacciones o restear la base de datos de manera parcial durante ventanas de mantenimiento tecnológico, siempre procurando notificarte primero.
          </p>
        </div>
      </article>
    </main>


        <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'Terminos',
}
</script>
