export default {
  name: "auth",
  component: () =>
    import(/* webpackChunkName: "Auth Layout" */ "layouts/MainLayout.vue"),
  children: [
    {
      path: "/",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "Registro" */ "../views/Register.vue"),
    },
  ],
};
