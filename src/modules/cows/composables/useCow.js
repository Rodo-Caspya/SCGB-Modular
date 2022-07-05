import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

const useCow = () => {
  const store = useStore();
  const createCow = async (cow) => {
    const resp = await store.dispatch("cowModule/registerCow", cow);

    return resp;
  };

  const getCows = async () => {
    await store.dispatch("cowModule/getCows");
  };
  const updateCow = async (cow) => {
    const resp = await store.dispatch("cowModule/updateCow", cow);

    return resp;
  };
  onBeforeMount(async () => {
    await getCows();
  });

  return {
    cows: computed(() => store.state.cowModule.cows),
    editCow: computed(() => store.state.cowModule.editCow),

    editing: computed(() => store.state.cowModule.edit),
    createCow,
    updateCow,
    columns: [
      {
        name: "actions",
        label: "Acciones",
        align: "left",
      },
      {
        name: "id",
        align: "left",
        label: "Crotal",
        field: "_id",
      },
      {
        name: "age",
        label: "Edad",
        field: "age",
        sortable: true,
        align: "left",
      },
      {
        name: "Tipo",
        label: "Tipo de vaca",
        field: "type",
        sortable: true,
        align: "left",
      },
      // { name: "Padre", label: "Padre", field: "father" },
      {
        name: "Madre",
        label: "Madre",
        field: "mother",
        sortable: true,
        format: (val) => (val == "" ? "SIN MADRE" : val),
        align: "left",
      },
      {
        name: "bNumber",
        label: "Numero de partos",
        field: "birthNumber",
        sortable: true,
        align: "left",
      },
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
