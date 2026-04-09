import { createRouter, createWebHistory } from 'vue-router'

import Login from './views/login.vue'
import Registro from './views/registro.vue'
import RecuperarContrasena from './views/recuperar-contrasena.vue'
import DetallesEmprendimientoDueo from './views/detalles-emprendimiento-dueo.vue'
import DetallesEmprendimientoPublicaciones from './views/detalles-emprendimiento-publicaciones.vue'
import Eventos from './views/eventos.vue'
import PerfilMisEmprendimientos from './views/perfil-mis-emprendimientos.vue'
import DetallesEvento from './views/detalles-evento.vue'
import DetallesEmprendimientoInformacion from './views/detalles-emprendimiento-informacion.vue'
import Emprendimientos from './views/emprendimientos.vue'
import Publicacion from './views/publicacion.vue'
import Buscar from './views/Buscar.vue'
import Privacidad from './views/privacidad.vue'
import Terminos from './views/terminos.vue'
import Contacto from './views/contacto.vue'
import Acerca from './views/acerca.vue'
import NotFound from './views/not-found.vue'
import Notificaciones from './views/notificaciones.vue'

const routes = [
  { name: 'Login', path: '/', component: Login },
  { name: 'Registro', path: '/registro', component: Registro },
  { name: 'RecuperarContrasena', path: '/recuperar-contrasena', component: RecuperarContrasena },
  { name: 'Privacidad', path: '/privacidad', component: Privacidad },
  { name: 'Terminos', path: '/terminos', component: Terminos },
  { name: 'Contacto', path: '/contacto', component: Contacto },
  { name: 'Acerca', path: '/acerca', component: Acerca },
  { name: 'DetallesEmprendimientoDueo', path: '/detalles-emprendimiento-dueo', component: DetallesEmprendimientoDueo },
  { name: 'DetallesEmprendimientoPublicaciones', path: '/detalles-emprendimiento-publicaciones', component: DetallesEmprendimientoPublicaciones },
  { name: 'Eventos', path: '/eventos', component: Eventos },
  { name: 'PerfilMisEmprendimientos', path: '/perfil-mis-emprendimientos', component: PerfilMisEmprendimientos },
  { name: 'DetallesEvento', path: '/detalles-evento', component: DetallesEvento },
  { name: 'DetallesEmprendimientoInformacion', path: '/detalles-emprendimiento-informacion', component: DetallesEmprendimientoInformacion },
  { name: 'Emprendimientos', path: '/emprendimientos', component: Emprendimientos },
  { name: 'Publicacion', path: '/publicacion', component: Publicacion },
  { name: 'Buscar', path: '/buscar', component: Buscar },
  { name: 'Notificaciones', path: '/notificaciones', component: Notificaciones },
  { name: '404 - Not Found', path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
