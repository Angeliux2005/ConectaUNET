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
import NuevoEvento from './views/nuevo-evento.vue'
import NuevoEmprendimiento from './views/nuevo-emprendimiento.vue'
import EditarEvento from './views/editar-evento.vue'
import Privacidad from './views/privacidad.vue'
import Terminos from './views/terminos.vue'
import Contacto from './views/contacto.vue'
import Acerca from './views/acerca.vue'
import NotFound from './views/not-found.vue'
import Notificaciones from './views/notificaciones.vue'
import MuroEvento from './views/muro-evento.vue'
import EditarEmprendimiento from './views/editar-emprendimiento.vue'
import EditarPerfil from './views/editar-perfil.vue'

const routes = [
  { name: 'Login', path: '/', component: Login },
  { name: 'Registro', path: '/registro', component: Registro },
  { name: 'RecuperarContrasena', path: '/recuperar-contrasena', component: RecuperarContrasena },
  { name: 'Privacidad', path: '/privacidad', component: Privacidad },
  { name: 'Terminos', path: '/terminos', component: Terminos },
  { name: 'Contacto', path: '/contacto', component: Contacto },
  { name: 'Acerca', path: '/acerca', component: Acerca },
  { name: 'DetallesEmprendimientoDueo', path: '/detalles-emprendimiento-dueo', component: DetallesEmprendimientoDueo },
  { name: 'DetallesEmprendimientoPublicaciones', path: '/emprendimientos/:id/publicaciones', component: DetallesEmprendimientoPublicaciones },
  { name: 'DetallesEmprendimientoInformacion', path: '/emprendimientos/:id/informacion', component: DetallesEmprendimientoInformacion },
  { path: '/emprendimientos/:id', redirect: to => `/emprendimientos/${to.params.id}/publicaciones` },
  { name: 'Eventos', path: '/eventos', component: Eventos },
  { name: 'PerfilMisEmprendimientos', path: '/perfil-mis-emprendimientos', component: PerfilMisEmprendimientos },
  { name: 'DetallesEvento', path: '/eventos/:id', component: DetallesEvento },
  { name: 'Emprendimientos', path: '/emprendimientos', component: Emprendimientos },
  { name: 'EditarEvento', path: '/editar-evento/:id', component: EditarEvento },
  { name: 'EditarEmprendimiento', path: '/editar-emprendimiento', component: EditarEmprendimiento },
  { name: 'EditarPerfil', path: '/editar-perfil', component: EditarPerfil },
  { name: 'Publicacion', path: '/publicaciones/:id', component: Publicacion },
  { name: 'Muro', path: '/muro-evento', component: MuroEvento },
  { name: 'Buscar', path: '/buscar', component: Buscar },
  { name: 'NuevoEvento', path: '/nuevo-evento', component: NuevoEvento },
  { name: 'NuevoEmprendimiento', path: '/nuevo-emprendimiento', component: NuevoEmprendimiento },
  { name: 'Notificaciones', path: '/notificaciones', component: Notificaciones },
  { name: '404 - Not Found', path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
