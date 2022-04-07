import { useStore } from "vuex";
import { computed } from "vue";

const useCow = () => {
  const store = useStore();
  const createCow = async (user) => {
    const resp = await store.dispatch("cowModule/registerCow", user);

    return resp;
  };

  return {
    createCow,

    // authStatus: computed(() => store.getters["authModule/currentState"]),
    // username: computed(() => store.getters["authModule/username"]),
  };
};

export default useCow;
