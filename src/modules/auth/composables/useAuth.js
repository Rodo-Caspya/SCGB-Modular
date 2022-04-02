import { useStore } from "vuex";
import { computed } from "vue";

const useAuth = () => {
  const store = useStore();
  const createUser = async (user) => {
    const resp = await store.dispatch("authModule/createUser", user);

    return resp;
  };
  const loginUser = async (user) => {
    const resp = await store.dispatch("authModule/signInUser", user);
    return resp;
  };

  const checkAuthStatus = async () => {
    const resp = await store.dispatch("authModule/checkAuthentication");
    return resp;
  };

  const logout = () => {
    store.commit("authModule/logout");
    store.commit("journalModule/clearEntries");
  };
  return {
    checkAuthStatus,
    createUser,
    loginUser,
    logout,
    authStatus: computed(() => store.getters["authModule/currentState"]),
    username: computed(() => store.getters["authModule/username"]),
  };
};

export default useAuth;
