import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

const useCow = () => {
  const store = useStore();
  const createCow = async (cow) => {
    console.log("cow", cow.id);
    const resp = await store.dispatch("cowModule/registerCow", cow);

    return resp;
  };

  const getCows = async () => {
    await store.dispatch("cowModule/getCows");
  };
  onBeforeMount(async () => {
    await getCows();
  });

  return {
    cows: computed(() => store.state.cowModule.cows),
    editCow: computed(() => store.state.cowModule.editCow),
    createCow,
    columns: [
      {
        name: "actions",
        label: "Acciones",
        align: "left",
      },
      {
        name: "id",
        align: "left",
        label: "ID vaca",
        field: "_id",
        sortable: true,
      },
      { name: "age", label: "Edad", field: "age", sortable: true },
      { name: "Tipo", label: "Tipo de vaca", field: "type", sortable: true },
      { name: "Padre", label: "Padre", field: "father" },
      { name: "Madre", label: "Madre", field: "mother" },
      {
        name: "registroVacunas",
        label: "Registro de vacunas",
        field: "registroVacunas",
      },
    ],

    // authStatus: computed(() => store.getters["authModule/currentState"]),
    // username: computed(() => store.getters["authModule/username"]),
  };
};

export default useCow;
