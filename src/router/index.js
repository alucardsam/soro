import { createRouter, createWebHistory } from "vue-router";
import InicioView from "@views/InicioView.vue";
//import TazasView from "@views/TazasView.vue";
//import PlayerasView from "@views/PlayerasView.vue";
import LlaverosView from "@views/LlaverosView.vue";
import BolsasView from "@views/BolsasView.vue";
import StickersView from "@views/StickersView.vue";
import ContactanosView from "@views/ContactanosView.vue";

const DEFAULT_TITLE = 'Creaciones SORO';

const routes = [
  {
    path: "/",
    name: "Home",
    component: InicioView,
    meta: {
      title: DEFAULT_TITLE + " - Inicio",
      enterClass: "animate__animated animate__fadeInDown",
      leaveClass: "animate__animated animate__fadeOutDown",
    }
  },
  {
    path: "/tazas",
    name: "Tazas",
    //component: TazasView,
    component: () => import(/* webpackChunkName: "Tazas" */ '@views/TazasView.vue'),
    meta: {
      title: DEFAULT_TITLE + " - Tazas",
      enterClass: "animate__animated animate__fadeInDown",
      leaveClass: "animate__animated animate__fadeOutDown",
    }
  },
  {
    path: "/playeras",
    name: "Playeras",
    //component: PlayerasView,
    component: () => import(/* webpackChunkName: "Playeras" */ '@views/PlayerasView.vue'),
    meta: {
      title: DEFAULT_TITLE + " - Playeras",
      enterClass: "animate__animated animate__fadeInDown",
      leaveClass: "animate__animated animate__fadeOutDown",
    }
  },
  {
    path: "/bolsas",
    name: "Bolsas",
    component: BolsasView,
    meta: {
      title: DEFAULT_TITLE + " - Bolsas",
      enterClass: "animate__animated animate__fadeInDown",
      leaveClass: "animate__animated animate__fadeOutDown",
    }
  },
  {
    path: "/llaveros",
    name: "Llaveros",
    component: LlaverosView,
    meta: {
      title: DEFAULT_TITLE + " - Llaveros",
      enterClass: "animate__animated animate__fadeInDown",
      leaveClass: "animate__animated animate__fadeOutDown",
    }
  },
  {
    path: "/stickers",
    name: "Stickers",
    component: StickersView,
    meta: {
      title: DEFAULT_TITLE + " - Stickers",
      enterClass: "animate__animated animate__fadeInDown",
      leaveClass: "animate__animated animate__fadeOutDown",
    }
  },
  {
    path: "/contactanos",
    name: "Contactanos",
    component: ContactanosView,
    meta: {
      title: DEFAULT_TITLE + " - Contactanos",
      enterClass: "animate__animated animate__fadeInDown",
      leaveClass: "animate__animated animate__fadeOutDown",
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE;
  //next();
})

export default router;