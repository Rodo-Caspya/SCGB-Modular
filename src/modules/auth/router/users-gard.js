import { Store } from "../../../store";

const isAdmin = async (to, from, next) => {
  const ok = await Store.getters["authModule/isAdmin"];
  console.log("si llega al user", ok);
  if (ok) next();
  else next({ name: "get-cows" });
};

export default isAdmin;
