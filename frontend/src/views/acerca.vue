<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    <AppHeader minimal />



        <main class="flex-grow w-full max-w-[800px] mx-auto px-4 sm:px-6 mt-[72px] pb-16 pt-12">
      <article class="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">

        <div class="w-full h-[250px] bg-gray-200">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover" alt="University campus" />
        </div>

        <div class="p-8 sm:p-12">
          <h1 class="text-[32px] font-black text-[#001D6B] mb-4 tracking-tight">Acerca de ConectaUNET</h1>

                    <div class="space-y-6 text-[15px] text-gray-600 leading-relaxed">
            <p class="text-[18px] font-medium text-gray-800">
              ConectaUNET es el núcleo digital creado por y para la comunidad de estudiantes soñadores, inventores y negociantes de la Universidad Nacional Experimental del Táchira.
            </p>

                        <p>
              Nuestro proyecto nace bajo la premisa de darle <strong>visibilidad masiva</strong> a los pequeños negocios, startups y los talentos artesanales que residen en nuestros salones de clase. Creemos firmemente que el ecosistema universitario no se rige solo por parciales y horarios, sino también por grandes ideas innovadoras.
            </p>

            <div class="bg-blue-50/50 border border-blue-100 rounded-xl p-6 my-6 italic text-[#1e3a8a]">
              "Transformamos la experiencia universitaria al conectar las ideas locales para construir una economía solidaria in-house."
            </div>

            <h2 class="text-[20px] font-bold text-gray-900 mt-8 mb-3">Nuestra Misión</h2>
            <p>
              Proveer un puente centralizado donde un estudiante de Informática, uno de Agronomía y uno de Arquitectura puedan promocionar sus eventos y ofertar sus portafolios, reduciendo las barreras invisibles a través de un simple directorio intuitivo.
            </p>
          </div>
        </div>
      </article>
    </main>


        <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'Acerca',
}
</script>
