// export const myMutation =  ( state ) => { las mutations siempre son sincronas

// }

export const setUsers = (state, users) => {
  state.users = users;
};
export const setEdit = (state, edit) => {
  state.editUser = edit;
};
export const setUserEditing = (state, val) => {
  state.edit = val;
};
export function setUser(state, user) {
  state.userSelected = user;
}

export function clearCows(state) {
  state.users = [];
  state.userSelected = {};
  state.editUser = "Agregar usuario";
  state.edit = false;
}
