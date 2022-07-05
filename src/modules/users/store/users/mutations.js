// export const myMutation =  ( state ) => { las mutations siempre son sincronas

// }
import { useStore } from "vuex";

export const setUsers = (state, users) => {
  // let index = user.map((user = user.username)).indexOF("test");
  // console.log(index);
  // let index = users.findIndex((el) => el.username ==  );
  // console.log(index);

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
