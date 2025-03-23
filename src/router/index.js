
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

const routes = [
  {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
  },
  {
      path: '/article',
      name: 'Article',
      component: () => import('../views/Article.vue')
  },
  {
    path: '/chantier',
    name: 'Chantier',
    component: () => import('../views/Chantier.vue')
  },
  {
    path: '/comission',
    name: 'Comission',
    component: () => import('../views/Comission.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/echoisy',
    name: 'Echoisy',
    component: () => import('../views/Echoisy.vue')
  },
  {
    path: '/evenement',
    name: 'Evenement',
    component: () => import('../views/Evenement.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/FAQ.vue')
  },
  {
    path: '/guinguette',
    name: 'Guinguette',
    component: () => import('../views/Guinguette.vue')
  },
  {
    path: '/membres',
    name: 'Membres',
    component: () => import('../views/Membres.vue')
  },
  {
    path: '/partenaires',
    name: 'Article',
    component: () => import('../views/Article.vue')
  },
  {
    path: '/photo',
    name: 'Photo',
    component: () => import('../views/Photo.vue')
  },
  {
    path: '/presse',
    name: 'Presse',
    component: () => import('../views/Presse.vue')
  },
  {
    path: '/recrutement',
    name: 'Recrutement',
    component: () => import('../views/Recrutement.vue')
  },
  {
    path: '/story',
    name: 'Story',
    component: () => import('../views/Story.vue')
  },
  {
    path: '/valeur',
    name: 'Valeur',
    component: () => import('../views/Valeur.vue')
  },
  {
    path: '/valtaud',
    name: 'Valtaud',
    component: () => import('../views/Valtaud.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
