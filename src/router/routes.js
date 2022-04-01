import authRouter from "../modules/auth/router/index";
import cowsRouter from "../modules/cows/router/index";
import usersRouter from "../modules/users/router/index";
// import isAuthenticatedGuard from "../modules/auth/composables/auth-gard";
import { Store } from "../store";
// import cowRouter from "../modules/cow/router";
// import users from "../modules/users/router";
const routes = [
  {
    path: "/auth",
    ...authRouter,
  },
  {
    path: "/cows",
    beforeEnter: (to, from, next) => {
      // Ahora podemos hacer uso del Store en el archivo routes.js
      if (Store.dispatch("authModule/checkAuthentication")) {
        next();
      } else {
        next("login");
      }
    },
    // beforeEnter: Store.dispatch("authModule/checkAuthentication")

    // beforeEnter: [isAuthenticatedGuard],

    ...cowsRouter,
  },
  {
    path: "/users",
    ...usersRouter,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
