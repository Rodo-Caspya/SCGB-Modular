import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

const useVaccine = () => {
  const store = useStore();
  const getVaccines = async () => {
    await store.dispatch("cowModule/getVaccines");
  };
  const getVaccinesById = async (id) => {
    await store.dispatch("cowModule/getVaccinesById", id);
  };
  onBeforeMount(async () => {
    await getVaccines();
  });

  return {
    getVaccines,
    getVaccinesById,
    vaccines: computed(() => store.state.cowModule.vaccines),
    vColumns: [
      {
        name: "id",
        align: "left",
        label: "ID vaca",
        field: "_id",
        sortable: true,
      },
      {
        name: "vaccineName",
        label: "Nombre de la vacuna",
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
  };
};
export default useVaccine;
