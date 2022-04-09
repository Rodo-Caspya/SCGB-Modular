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
