// export const myMutation =  ( state ) => { las mutations siempre son sincronas

// }

export const loginUser = (state, { user, idToken, isAdmin }) => {
  console.log("si llega");
  if (idToken) {
    localStorage.setItem("idToken", idToken);
    state.idToken = idToken;
  }
  state.user = user;
  state.admin = isAdmin;
  state.status = "authenticated";
};

export const logout = (state) => {
  state.user = null;
  state.admin = false;
  state.status = "not-authenticated";
  state.idToken = null;
  localStorage.removeItem("idToken");
};
