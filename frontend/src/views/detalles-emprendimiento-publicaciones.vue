<template>
  <div class="min-h-screen bg-white md:bg-[#F8F9FB] flex flex-col font-sans w-full relative">
    
    <div class="hidden md:block">
      <AppHeader />
    </div>

    <div class="md:hidden flex items-center px-4 py-4 sticky top-0 bg-white z-50 border-b border-gray-100">
      <button @click="$router.go(-1)" class="text-gray-600 hover:text-gray-900 transition-colors p-1">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <h2 class="flex-1 text-center font-bold text-[#1F2937] text-[16px] mr-8">Emprendimiento</h2>
    </div>

    <main class="flex-grow w-full max-w-[1200px] mx-auto px-0 md:px-8 mt-0 md:mt-[72px] pb-24 md:pb-16">

      <div class="relative w-full md:mt-8 px-4 md:px-0 mt-4 md:mt-8 relative z-0">
        <div class="w-full h-[140px] md:h-[320px] bg-gray-200 rounded-t-xl md:rounded-xl overflow-hidden shadow-sm relative">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover" alt="Cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <div class="absolute -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 w-[84px] h-[84px] md:w-28 md:h-28 rounded-full border-4 border-white md:border-[#F8F9FB] bg-[#0A1128] flex items-center justify-center shadow-lg overflow-hidden z-10">
          <div class="text-white text-[9px] md:text-[10px] tracking-wider text-center flex flex-col items-center">
            <svg class="w-5 h-5 md:w-6 md:h-6 mb-1 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            STARTUP
          </div>
        </div>
      </div>

      <div class="mt-14 md:mt-16 px-5 md:px-2 flex flex-col items-center md:items-start text-center md:text-left relative z-0">
        <h1 class="text-[24px] md:text-[40px] font-black text-[#001D6B] tracking-tight leading-tight">
          EcoTech Solutions.
        </h1>
        
        <div class="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mt-2 md:mt-3">
          <span class="bg-[#EBF5FF] text-[#1e3a8a] text-[10px] md:text-[11px] font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-wide">Tecnología</span>
          <span class="bg-[#EBF5FF] text-[#1e3a8a] text-[10px] md:text-[11px] font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-wide">Sostenibilidad</span>
        </div>

        <p class="hidden md:block mt-6 text-gray-600 text-[18px] leading-relaxed max-w-[600px]">
          Sistemas inteligentes de monitoreo de riego para agricultura urbana de precisión utilizando sensores de bajo costo y una app intuitiva.
        </p>

        <div class="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 mt-4 md:mt-6 text-[13px] md:text-[15px] font-semibold md:font-bold text-gray-500 md:text-gray-800">
          <div class="flex items-center gap-1.5 md:gap-2">
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Entregas UNET
          </div>
          <div class="flex items-center gap-1.5 md:gap-2">
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            @ecotech_solutions
          </div>
          <div class="hidden md:flex items-center gap-2">
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            1,032 seguidores
          </div>
        </div>

        <div class="mt-6 md:mt-8 flex w-full md:w-auto gap-3">
          <button class="flex-1 md:flex-none bg-[#1e3a8a] hover:bg-[#152a6b] text-white font-bold py-3 md:py-2.5 px-8 rounded-xl md:rounded-lg shadow transition-colors text-[14px]">
            Seguir
          </button>
          <button class="flex-1 md:flex-none bg-white hover:bg-gray-50 border border-gray-200 md:border-gray-300 text-gray-700 font-bold py-3 md:py-2.5 px-6 rounded-xl md:rounded-lg shadow-sm transition-colors text-[14px] flex items-center justify-center gap-2">
            Contactar
          </button>
        </div>
      </div>

      <div class="mt-8 md:mt-12 border-b border-gray-200 relative z-0">
        <ul class="flex w-full md:w-auto px-0 md:px-2 md:space-x-8">
          <li class="flex-1 md:flex-none text-center md:text-left">
            <button class="w-full md:w-auto px-2 py-4 text-[14px] md:text-[15px] font-bold text-[#1e3a8a] border-b-[3px] border-[#1e3a8a]">
              Publicaciones
            </button>
          </li>
          <li class="flex-1 md:flex-none text-center md:text-left">
            <button @click="$router.push('/detalles-emprendimiento-informacion')" class="w-full md:w-auto px-2 py-4 text-[14px] md:text-[15px] font-semibold text-gray-400 hover:text-gray-700 transition duration-150">
              Información
            </button>
          </li>
        </ul>
      </div>

      <div class="mt-8 md:mt-10 px-px md:px-0 grid grid-cols-3 gap-px md:gap-8">
        
        <article class="flex flex-col bg-gray-100 md:bg-white md:rounded-2xl md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] md:border md:border-gray-100 overflow-hidden group cursor-pointer active:opacity-80 transition-all hover:md:shadow-md">
          <div class="aspect-square md:aspect-auto md:h-[220px] w-full overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Placa" />
          </div>
          <div class="hidden md:flex flex-col flex-grow p-6">
            <h3 class="text-[17px] font-bold text-[#001D6B] mb-2 leading-tight line-clamp-1">Prototipado de Placas V2.0</h3>
            <p class="text-[14px] text-gray-500 leading-relaxed mb-5 line-clamp-2">
              Probando la nueva arquitectura de bajo consumo para nuestros nodos de monitoreo...
            </p>
            <div class="mt-auto flex items-center gap-4 text-gray-400 text-[13px] font-medium">
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> 134</span>
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg> 12</span>
            </div>
          </div>
        </article>

        <article class="flex flex-col bg-gray-100 md:bg-white md:rounded-2xl md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] md:border md:border-gray-100 overflow-hidden group cursor-pointer active:opacity-80 transition-all hover:md:shadow-md">
          <div class="aspect-square md:aspect-auto md:h-[220px] w-full overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Cultivo" />
          </div>
          <div class="hidden md:flex flex-col flex-grow p-6">
            <h3 class="text-[17px] font-bold text-[#001D6B] mb-2 leading-tight line-clamp-1">Instalación en la Terraza UNET</h3>
            <p class="text-[14px] text-gray-500 leading-relaxed mb-5 line-clamp-2">
              Nuestro primer despliegue a gran escala para el huerto experimental de ingeniería...
            </p>
            <div class="mt-auto flex items-center gap-4 text-gray-400 text-[13px] font-medium">
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> 89</span>
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg> 5</span>
            </div>
          </div>
        </article>

        <article class="flex flex-col bg-gray-100 md:bg-white md:rounded-2xl md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] md:border md:border-gray-100 overflow-hidden group cursor-pointer active:opacity-80 transition-all hover:md:shadow-md">
          <div class="aspect-square md:aspect-auto md:h-[220px] w-full overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="App" />
          </div>
          <div class="hidden md:flex flex-col flex-grow p-6">
            <h3 class="text-[17px] font-bold text-[#001D6B] mb-2 leading-tight line-clamp-1">Nueva Dashboard para Usuarios</h3>
            <p class="text-[14px] text-gray-500 leading-relaxed mb-5 line-clamp-2">
              Actualizamos nuestra app con visualizaciones de datos en tiempo real más intuitivas...
            </p>
            <div class="mt-auto flex items-center gap-4 text-gray-400 text-[13px] font-medium">
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> 215</span>
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg> 32</span>
            </div>
          </div>
        </article>

        <article class="flex flex-col bg-gray-100 md:bg-white md:rounded-2xl md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] md:border md:border-gray-100 overflow-hidden group cursor-pointer active:opacity-80 transition-all hover:md:shadow-md">
          <div class="aspect-square md:aspect-auto md:h-[220px] w-full overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Workshop" />
          </div>
          <div class="hidden md:flex flex-col flex-grow p-6">
            <h3 class="text-[17px] font-bold text-[#001D6B] mb-2 leading-tight line-clamp-1">Workshop: Tecnología y Agro</h3>
            <p class="text-[14px] text-gray-500 leading-relaxed mb-5 line-clamp-2">
              Compartiendo nuestra experiencia en el último foro de innovación tecnológica...
            </p>
            <div class="mt-auto flex items-center gap-4 text-gray-400 text-[13px] font-medium">
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> 156</span>
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg> 10</span>
            </div>
          </div>
        </article>

        <article class="flex flex-col bg-gray-100 md:bg-white md:rounded-2xl md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] md:border md:border-gray-100 overflow-hidden group cursor-pointer active:opacity-80 transition-all hover:md:shadow-md">
          <div class="aspect-square md:aspect-auto md:h-[220px] w-full overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Dashboard" />
          </div>
          <div class="hidden md:flex flex-col flex-grow p-6">
            <h3 class="text-[17px] font-bold text-[#001D6B] mb-2 leading-tight line-clamp-1">Eficiencia Energética</h3>
            <p class="text-[14px] text-gray-500 leading-relaxed mb-5 line-clamp-2">
              Integrando paneles solares compactos para la autonomía total de nuestros sensores...
            </p>
            <div class="mt-auto flex items-center gap-4 text-gray-400 text-[13px] font-medium">
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> 72</span>
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg> 4</span>
            </div>
          </div>
        </article>

        <article class="flex flex-col bg-gray-100 md:bg-white md:rounded-2xl md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] md:border md:border-gray-100 overflow-hidden group cursor-pointer active:opacity-80 transition-all hover:md:shadow-md">
          <div class="aspect-square md:aspect-auto md:h-[220px] w-full overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Sostenibilidad" />
          </div>
          <div class="hidden md:flex flex-col flex-grow p-6">
            <h3 class="text-[17px] font-bold text-[#001D6B] mb-2 leading-tight line-clamp-1">El Futuro es Verde</h3>
            <p class="text-[14px] text-gray-500 leading-relaxed mb-5 line-clamp-2">
              Nuestro compromiso con la sostenibilidad se refleja en cada línea de código...
            </p>
            <div class="mt-auto flex items-center gap-4 text-gray-400 text-[13px] font-medium">
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> 184</span>
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg> 21</span>
            </div>
          </div>
        </article>

      </div>

      <section class="hidden md:block mt-24 px-2">
        <h2 class="text-[34px] font-black text-[#001D6B] tracking-tight">Más emprendimientos</h2>
        <p class="text-[16px] text-gray-600 mt-2 font-medium">Descubre otros proyectos del ecosistema universitario.</p>

        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          <article class="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-100/60 group hover:-translate-y-1 transition-transform duration-300">
             <div class="relative h-[220px] w-full bg-[#1A453A]">
              <img src="https://images.unsplash.com/photo-1611288870282-3e2849e75525?q=80&w=2000&auto=format&fit=crop" alt="BioPack" class="w-full h-full object-cover mix-blend-overlay opacity-60" />
              <div class="absolute top-5 left-5 bg-[#001D6B] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">Ecología</div>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1e3a8a] transition-colors">BioPack UNET</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6">Empaques compostables creados a partir de residuos orgánicos de la zona...</p>
            </div>
          </article>

          <article class="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-100/60 group hover:-translate-y-1 transition-transform duration-300">
             <div class="relative h-[220px] w-full bg-[#0D1117]">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" alt="SmartGrid" class="w-full h-full object-cover mix-blend-overlay opacity-80" />
              <div class="absolute top-5 left-5 bg-[#001D6B] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">Software</div>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1e3a8a] transition-colors">SmartGrid AI</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6">Gestión inteligente de energía para complejos residenciales estudiantiles...</p>
            </div>
          </article>

          <article class="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-100/60 group hover:-translate-y-1 transition-transform duration-300">
             <div class="relative h-[220px] w-full bg-[#20526B]">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop" alt="MediConnect" class="w-full h-full object-cover mix-blend-overlay opacity-60" />
              <div class="absolute top-5 left-5 bg-[#001D6B] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">Salud</div>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1e3a8a] transition-colors">MediConnect</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6">Plataforma de teleasistencia médica gratuita para la comunidad universitaria...</p>
            </div>
          </article>
        </div>
      </section>

    </main>

    <BottomNav />

    <div class="hidden md:block">
      <AppFooter />
    </div>

  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import BottomNav from '../components/BottomNav.vue'
</script>