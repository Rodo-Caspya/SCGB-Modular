export default {
  name: "users",
  component: () =>
    import(/* webpackChunkName: "Auth Layout" */ "layouts/MainLayout.vue"),
  children: [
    {
      path: "/users",
      redirect: "get-users",
    },
    {
      path: "/get-users",
      name: "get-users",
      component: () =>
        import(/* webpackChunkName: "Login" */ "../views/UsersView.vue"),
    },
  ],
};
