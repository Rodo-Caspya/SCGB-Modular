import { Store } from "../../../store";

const isAuthenticatedGuard = async (to, from, next) => {
  console.log("hi");

  const { ok } = await Store.dispatch("authModule/checkAuthentication");
  if (ok) next();
  else next({ name: "login" });
};

export default isAuthenticatedGuard;
