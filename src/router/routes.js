import authRouter from "../modules/auth/router/index";
import cowsRouter from "../modules/cows/router/index";
import usersRouter from "../modules/users/router/index";
import isAuthenticatedGuard from "../modules/auth/router/auth-gard";
import isAuthenticated from "../modules/auth/router/authenticated-gard";
import isAdmin from "../modules/auth/router/users-gard";
import { Store } from "../store";

// import cowRouter from "../modules/cow/router";
// import users from "../modules/users/router";
const routes = [
  {
    path: "/auth",
    beforeEnter: [isAuthenticated],
    ...authRouter,
  },
  {
    path: "/cows",
    beforeEnter: [isAuthenticatedGuard],
    ...cowsRouter,
  },
  {
    path: "/users",
    beforeEnter: [isAuthenticatedGuard && isAdmin],
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
