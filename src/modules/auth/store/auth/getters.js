//Los getters sirven para traer infromación del state

// export const myGetter = ( state ) => { los getters son funciones que toman el state
//return state.algo;
// }
export const username = (state) => {
  return state.user?.username || "";
};

export const isAdmin = (state) => {
  return state.admin;
};

export const isAuthenticated = (state) => {
  return state.status;
};
