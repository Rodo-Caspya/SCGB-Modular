// export default () => ({ //se hace de esta manera la funcion para el objeto que este dentro sea reactivo

// })
export default function () {
  return {
    cows: [],
    cowSelected: {},
    vaccineSelected: {},
    editCow: "Agregar vaca",
    editVaccine: "Agregar vacuna",
    edit: false,
    editV: false,
    // apartado vacunas
    vaccines: [],
    vaccinesRows: [],
    vaccinesById: [],
  };
}
