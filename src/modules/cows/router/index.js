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
  ],
};
