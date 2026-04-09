<template>
  <div class="min-h-screen bg-[#F8F9FB] flex flex-col font-sans w-full overflow-hidden">
    
    <header class="w-full h-[72px] bg-white border-b border-gray-100 flex items-center justify-center px-4 shadow-sm shrink-0 sticky top-0 z-20">
      <button @click="$router.back()" class="absolute left-4 p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <h1 class="text-[#001D6B] font-black text-[20px] md:text-[22px] tracking-tight">Notificaciones</h1>
    </header>

    <main class="flex-grow w-full max-w-[768px] mx-auto p-4 space-y-4 md:space-y-5 pb-20 mt-2">

      <div v-if="cargando" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1e3a8a]"></div>
      </div>

      <div v-else-if="notificaciones.length === 0" class="text-center py-20 text-gray-500 font-medium">
        <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
        </svg>
        <p>No tienes notificaciones nuevas.</p>
        <p class="text-sm mt-1">¡Sigue emprendimientos y únete a eventos para ver más!</p>
      </div>

      <article 
        v-for="notif in notificaciones" 
        :key="notif.id"
        class="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 p-4 md:p-5 flex gap-3 md:gap-4 hover:shadow-md transition-all animate-fade-in"
      >
        
        <img :src="notif.image" class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shrink-0 mt-1" :alt="notif.title" />

        <div class="flex-grow flex flex-col min-w-0">
          
          <div class="flex justify-between items-start gap-2">
            <h3 class="text-[15px] md:text-[16px] font-bold text-gray-900 leading-tight truncate">{{ notif.title }}</h3>
            <span :class="notif.tagColor" class="text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest shrink-0 mt-0.5">
              {{ notif.tag }}
            </span>
          </div>

          <p class="text-[12px] md:text-[13px] text-[#1e3a8a] font-semibold mt-1 mb-1.5">{{ notif.time }}</p>

          <p class="text-[14px] md:text-[14.5px] text-gray-600 mb-4 leading-snug">{{ notif.message }}</p>

          <div class="border-t border-gray-100 pt-3 flex items-center gap-6 md:gap-8">
            <button @click="$router.push(notif.route)" class="flex items-center gap-1.5 text-[#001D6B] font-bold text-[13px] md:text-[14px] hover:text-blue-800 transition-colors">
              <svg class="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              Ver detalles
            </button>
            <button @click="quitarNotificacion(notif.id)" class="flex items-center gap-1.5 text-gray-400 font-bold text-[13px] md:text-[14px] hover:text-gray-600 transition-colors">
              <svg class="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              Quitar
            </button>
          </div>

        </div>
      </article>

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchApi } from '../utils/api.js'

const router = useRouter()
const notificaciones = ref([])
const cargando = ref(true)

// Helper para crear mensajes de fecha relativos
const calcularTiempoRelativo = (fechaISO) => {
  const fecha = new Date(fechaISO);
  const ahora = new Date();
  const diffDias = Math.ceil((fecha - ahora) / (1000 * 60 * 60 * 24));
  
  if (diffDias === 0) return '¡Es hoy!';
  if (diffDias === 1) return 'Es Mañana';
  if (diffDias > 1 && diffDias <= 7) return `Faltan ${diffDias} días`;
  if (diffDias < 0) return 'Evento Finalizado';
  
  return fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
}

const cargarNotificaciones = async () => {
  cargando.value = true;
  try {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/');
      return;
    }
    const user = JSON.parse(storedUser);
    const userId = user._id || user.id;

    // Obtenemos los datos desde tu API real
    const [resEventos, resEmprend] = await Promise.all([
      fetchApi('/api/eventos'),
      fetchApi('/api/emprendimientos')
    ]);

    const [jsonEventos, jsonEmprend] = await Promise.all([
      resEventos.json(),
      resEmprend.json()
    ]);

    let notifsGeneradas = [];
    
    // Leemos el caché de "notificaciones descartadas" para no mostrar las que el usuario ya quitó
    const descartadas = JSON.parse(localStorage.getItem('notifsDescartadas') || '[]');

    // 1. GENERAR NOTIFICACIONES DE EVENTOS (Solo mostramos los que no han pasado hace mucho)
    if (jsonEventos.success) {
      const ahora = new Date();
      jsonEventos.data.forEach(evt => {
        const fechaEvt = new Date(evt.date);
        const diasDiferencia = Math.ceil((fechaEvt - ahora) / (1000 * 60 * 60 * 24));
        
        // Mostrar solo si el evento es pronto (ej. los próximos 15 días) y no ha sido descartado
        if (diasDiferencia >= -1 && diasDiferencia <= 15 && !descartadas.includes(`evt_${evt._id}`)) {
          notifsGeneradas.push({
            id: `evt_${evt._id}`,
            type: 'evento',
            title: evt.title,
            image: evt.coverImage || 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=200',
            tag: 'EVENTO CULTURAL',
            tagColor: 'bg-blue-50 text-blue-600',
            time: calcularTiempoRelativo(evt.date),
            message: `Un evento cultural se aproxima. Ubicación: ${evt.location}.`,
            dateObj: fechaEvt, // Usado para ordenar
            route: `/eventos/${evt._id}`
          });
        }
      });
    }

    // 2. GENERAR NOTIFICACIONES DE EMPRENDIMIENTOS (De los que el usuario sigue)
    if (jsonEmprend.success) {
      jsonEmprend.data.forEach(emp => {
        // ¿El usuario lo sigue?
        const loSigue = emp.followers && emp.followers.some(f => (f._id || f) === userId);
        
        if (loSigue && !descartadas.includes(`emp_${emp._id}`)) {
          notifsGeneradas.push({
            id: `emp_${emp._id}`,
            type: 'emprendimiento',
            title: emp.title,
            image: emp.profileImage || emp.coverImage || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=200',
            tag: 'EMPRENDIMIENTO',
            tagColor: 'bg-orange-50 text-orange-600',
            time: 'Siguiendo',
            message: `Chequea las nuevas actualizaciones de ${emp.title}.`,
            dateObj: new Date(emp.createdAt), 
            route: `/emprendimientos/${emp._id}`
          });
        }
      });
    }

    // 3. ORDENAR PARA MOSTRAR LAS MÁS IMPORTANTES ARRIBA
    notifsGeneradas.sort((a, b) => b.dateObj - a.dateObj);
    notificaciones.value = notifsGeneradas;

  } catch (error) {
    console.error("Error al cargar notificaciones:", error);
  } finally {
    cargando.value = false;
  }
}

// Oculta la notificación y la guarda en la memoria del dispositivo
const quitarNotificacion = (notifId) => {
  // 1. Quitar de la vista instantáneamente
  notificaciones.value = notificaciones.value.filter(n => n.id !== notifId);
  
  // 2. Guardar en la "lista negra" local para que no vuelva a salir al recargar
  const descartadas = JSON.parse(localStorage.getItem('notifsDescartadas') || '[]');
  descartadas.push(notifId);
  localStorage.setItem('notifsDescartadas', JSON.stringify(descartadas));
}

onMounted(() => {
  cargarNotificaciones();
})
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>