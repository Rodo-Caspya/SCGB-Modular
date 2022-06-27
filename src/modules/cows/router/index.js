import isAdmin from "../../auth/router/users-gard";
import isAuthenticatedGuard from "../../auth/router/auth-gard";

export default {
  name: "cows",
  component: () =>
    import(/* webpackChunkName: "Auth Layout" */ "layouts/MainLayout.vue"),
  children: [
    {
      path: "/cows",
      redirect: "get-cows",
    },
    {
      path: "/get-cows",
      name: "get-cows",
      component: () =>
        import(/* webpackChunkName: "Login" */ "../views/CowView.vue"),
    },
    {
      path: "/vaccines-cows",
      name: "vaccines-cows",
      beforeEnter: [isAuthenticatedGuard && isAdmin],
      component: () =>
        import(/* webpackChunkName: "Login" */ "../views/VaccinesView.vue"),
    },
  ],
};
