// export const myMutation =  ( state ) => { las mutations siempre son sincronas

// }

export const setCows = (state, cows) => {
  state.cows = cows;
};
export const setEdit = (state, edit) => {
  state.editCow = edit;
};
export const setEditVaccine = (state, edit) => {
  state.editVaccine = edit;
};
export const setCowEditing = (state, val) => {
  state.edit = val;
};
export const setVaccineEditing = (state, val) => {
  state.editV = val;
};
export function setCow(state, cow) {
  state.cowSelected = cow;
}
export function setVaccine(state, cow) {
  state.vaccineSelected = cow;
}
// apartado vacunas
export const setVaccines = (state, vaccines) => {
  state.vaccines = vaccines;
};
export const setVaccinesRows = (state, vaccines) => {
  state.vaccinesRows = vaccines;
};
export const setVaccinesById = (state, vaccines) => {
  state.vaccinesById = vaccines;
};
export function clearCows(state) {
  state.cows = [];
  state.cowSelected = {};
  state.editCow = "Agregar vaca";
  state.edit = false;
}
