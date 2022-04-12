import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import authModule from "../modules/auth/store/auth";
import cowModule from "../modules/cows/store/cows";
import usersModule from "../modules/users/store/users";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
const Store = createStore({
  modules: {
    authModule,
    cowModule,
    usersModule,
    // example
  },
  plugins: [createPersistedState()],
  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
  strict: process.env.DEBUGGING,
});

export default store(function (/* { ssrContext } */) {
  return Store;
});
export { Store };
