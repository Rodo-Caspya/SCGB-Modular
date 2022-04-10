import { Store } from "../../../store";

const isAuthenticated = async (to, from, next) => {
  const ok = await Store.getters["authModule/isAuthenticated"];
  console.log("si llega al user", ok);
  if (ok != "authenticated") next();
  else next({ name: "get-cows" });
};

export default isAuthenticated;
