//Los getters sirven para traer infromación del state

// export const myGetter = ( state ) => { los getters son funciones que toman el state
//return state.algo;
// }
export function getCowSelected(state) {
  const cow = state.cowSelected;
  return { ...cow };
}
export function getVaccinesById(state) {
  const vaccines = state.vaccinesById;
  return { ...vaccines };
}
