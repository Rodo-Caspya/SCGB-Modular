import authRouter from "../modules/auth/router/index";
// import cowRouter from "../modules/cow/router";
// import users from "../modules/users/router";
const routes = [
  {
    path: "/auth",

    ...authRouter,
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
