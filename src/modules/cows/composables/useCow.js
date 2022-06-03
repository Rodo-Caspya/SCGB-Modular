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
    vaccines: computed(() => store.state.cowModule.vaccines),
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
    vColumns: [
      {
        name: "id",
        align: "left",
        label: "ID vaca",
        field: "_id",
        sortable: true,
      },
      {
        name: "type",
        label: "Tipo de vaca",
        field: "type",
        sortable: true,
      },
      {
        name: "vaccineName",
        label: "Nombre de la vacuna",
        field: "vName",
        sortable: true,
      },
      {
        name: "date",
        label: "Fecha de aplicacion",
        field: "date",
        sortable: true,
      },
    ],

    // authStatus: computed(() => store.getters["authModule/currentState"]),
    // username: computed(() => store.getters["authModule/username"]),
  };
};

export default useCow;
