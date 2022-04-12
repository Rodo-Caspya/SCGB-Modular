//Los getters sirven para traer infromación del state

// export const myGetter = ( state ) => { los getters son funciones que toman el state
//return state.algo;
// }
export function getUserSelected(state) {
  const user = state.userSelected;
  return { ...user };
}
