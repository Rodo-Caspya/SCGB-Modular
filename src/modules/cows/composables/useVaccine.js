import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

const useVaccine = () => {
  const store = useStore();
  const getVaccines = async () => {
    await store.dispatch("cowModule/getVaccines");
  };

  return {
    getVaccines,
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
  };
};
export default useVaccine;
