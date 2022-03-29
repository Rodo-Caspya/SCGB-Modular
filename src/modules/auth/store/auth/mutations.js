// export const myMutation =  ( state ) => { las mutations siempre son sincronas

// }

export const loginUser = (state, { user, idToken }) => {
  if (idToken) {
    localStorage.setItem("idToken", idToken);
    state.idToken = idToken;
  }
  state.user = user;
  state.status = "authenticated";
};

export const logout = (state) => {
  state.user = null;
  state.idToken = null;
  state.status = "not-authenticated";

  localStorage.removeItem("idToken");
};
