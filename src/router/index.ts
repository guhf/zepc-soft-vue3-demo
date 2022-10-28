import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/composition",
      name: "composition",
      component: () => import("../views/composition.vue"),
    },
    {
      path: "/template",
      name: "template",
      component: () => import("../views/template/index.vue"),
    },
    {
      path: "/component",
      name: "component",
      component: () => import("../views/component/index.vue"),
    },
    {
      path: "/property",
      name: "property",
      component: () => import("../views/component/property.vue"),
    },
  ],
});

export default router;
