// export const myMutation =  ( state ) => { las mutations siempre son sincronas

// }

export const setCows = (state, cows) => {
  state.cows = cows;
};
export const setEdit = (state, edit) => {
  state.editCow = edit;
};
export const setCowEditing = (state, val) => {
  state.edit = val;
};
export function setCow(state, cow) {
  state.cowSelected = cow;
}
// apartado vacunas
export const setVaccines = (state, vaccines) => {
  state.vaccines = vaccines;
};
export function clearCows(state) {
  state.cows = [];
  state.cowSelected = {};
  state.editCow = "Agregar vaca";
  state.edit = false;
}
