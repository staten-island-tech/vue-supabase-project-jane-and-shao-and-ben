import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignIn from "@/views/SignIn.vue";
import BankView from "@/views/BankView.vue";
import BJView from "@/views/BJView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/slots",
      name: "slots",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SlotsView.vue"),
    },
    {
      path: "/roulette",
      name: "roulette",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RouletteView.vue"),
    },
    {
      path: "/bank",
      name: "bank",
      component: BankView,
    },
    {
      path: "/BJ",
      name: "blackjack",
      component: BJView,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
  ],
});

export default router;
