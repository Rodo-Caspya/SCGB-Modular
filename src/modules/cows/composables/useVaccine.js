import { useStore } from "vuex";
import { computed, onBeforeMount, Mounted } from "vue";

const useVaccine = () => {
  const store = useStore();
  const getVaccines = async () => {
    await store.dispatch("cowModule/getVaccines");
  };
  const getVaccinesRows = async () => {
    await store.dispatch("cowModule/getVaccinesRows");
  };
  const createVaccine = async (vaccine) => {
    const resp = await store.dispatch("cowModule/registerVaccine", vaccine);
    return resp;
  };
  const addVaccineById = async (id, model) => {
    await store.dispatch("cowModule/addVaccineById", { id, model });
  };
  const updateVaccine = async (vaccine) => {
    const resp = await store.dispatch("cowModule/updateVaccine", vaccine);

    return resp;
  };
  const getVaccinesById = async (id) => {
    await store.dispatch("cowModule/getVaccinesById", id);
  };

  onBeforeMount(async () => {
    await getVaccines();
    await getVaccinesRows();
  });

  return {
    createVaccine,
    updateVaccine,
    getVaccines,
    getVaccinesRows,
    getVaccinesById,
    addVaccineById,
    editVaccine: computed(() => store.state.cowModule.editVaccine),
    editingV: computed(() => store.state.cowModule.editV),
    vaccinesRows: computed(() => store.state.cowModule.vaccinesRows),
    vaccines: computed(() => store.state.cowModule.vaccines),
    vaccinesById: computed(() => store.state.cowModule.vaccinesById),
    vColumns: [
      {
        name: "vaccineName",
        label: "Nombre de la vacuna",
        align: "left",
        field: "name",
        sortable: true,
      },
      {
        name: "vaccineDescription",
        label: "Descripcion de la vacuna",
        field: "description",
        sortable: true,
      },
      {
        name: "date",
        label: "Fecha de aplicacion",
        field: "registrationDate",
        sortable: true,
      },
      {
        name: "dateE",
        label: "Fecha de vencimiento",
        field: "expirationDate",
        sortable: true,
      },
    ],
    columns: [
      {
        name: "actions",
        label: "Acciones",
        align: "left",
      },

      {
        name: "vaccineName",
        label: "Nombre de la vacuna",
        field: "name",
        align: "left",
        sortable: true,
      },
      {
        name: "vaccineName",
        label: "Descripcion de la vacuna",
        field: "description",
        align: "left",
        sortable: true,
      },
    ],
  };
};
export default useVaccine;
