// export default () => ({ //se hace de esta manera la funcion para el objeto que este dentro sea reactivo

// })

export default () => ({
  status: "authenticating", //'autenticated', 'not-authenticated', 'authenticating'
  admin: false,
  user: null,
  idToken: null,
});
