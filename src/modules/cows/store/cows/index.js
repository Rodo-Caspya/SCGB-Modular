import state from "./state"; // se importa primerp el state y luego lo demás
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const cowModule = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default cowModule;
