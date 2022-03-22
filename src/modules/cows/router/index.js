export default {
  name: "cows",
  component: () =>
    import(/* webpackChunkName: "Auth Layout" */ "layouts/MainLayout.vue"),
  children: [
    {
      path: "/register-cows",
      name: "register-cows",
      component: () =>
        import(/* webpackChunkName: "Login" */ "../views/RegisterCows.vue"),
    },
    {
      path: "/get-cows",
      name: "get-cows",
      component: () =>
        import(/* webpackChunkName: "get-cows" */ "../views/GetCows.vue"),
    },
  ],
};
