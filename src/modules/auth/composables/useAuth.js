import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const useAuth = () => {
  const store = useStore();
  const router = useRouter();
  const route = useRoute();
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
    store.commit("cowModule/clearCows");
    router.push({ name: "login" });
  };
  return {
    checkAuthStatus,
    createUser,
    loginUser,
    logout,
    authStatus: computed(() => store.getters["authModule/currentState"]),
    username: computed(() => store.getters["authModule/username"]),
    isAdmin: computed(() => store.getters["authModule/isAdmin"]),
  };
};

export default useAuth;
