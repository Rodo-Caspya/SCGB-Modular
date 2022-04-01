import store from "../../auth/store/auth/index";

const isAuthenticatedGuard = async (to, from, next) => {
  console.log("hi");

  const { ok } = await store.dispatch("authModule/checkAuthentication");
  if (ok) next();
  else next({ name: "login" });
};

export default isAuthenticatedGuard;
