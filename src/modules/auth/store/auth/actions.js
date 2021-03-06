//las acciones son asincronas y son las que llegan al servidor o a la base de datos

// export const myAction = async ({ commit }) => { las acciones normalmente son asincronas

// }
import authApi from "../../../../api/authApi";

export const signInUser = async ({ commit }, user) => {
  const { username, password } = user;
  try {
    const { data } = await authApi.post("/login", {
      username,
      password,
    });

    //se manda el body como parametros
    // const { displayName, idToken, refreshToken } = data;
    // user.name = displayName;
    if (data.success == true) {
      delete user.password;
      const idToken = data.token;
      const isAdmin = data.admin;

      commit("loginUser", { user, idToken, isAdmin });
      return { ok: true };
    } else {
      return {
        ok: false,
        message:
          data.err.name == "IncorrectUsernameError"
            ? // ? "Usuario incorrecto"
              //: "Contraseña incorrecta",
              "Usuario o contraseña incorrecto"
            : "Usuario o contraseña incorrecto",
      };
    }
  } catch (error) {
    return { ok: false, message: data.err.name };
  }
};

export const checkAuthentication = async ({ commit }) => {
  const idToken = localStorage.getItem("idToken");

  if (!idToken) {
    commit("logout");
    return { ok: false, message: "No hay token en la petición" };
  } else {
    return { ok: true };
  }
};

export const login = async ({ commit }, user) => {
  //metodo asincrono para peticin https
  await authApi.post("/login", user).then((data) => {
    let userDB = {
      //creacion de usuario
      userToken: data.data.token,
      username: user.username,
      userStatus: data.data.status,
    };
    if (data.data.status == "Login Successful") {
      //validacion de la data
      commit("setUser", userDB);
    } else {
      let errorR = {
        //creacion del error en caso de que la respuesta no sea exirtosa
        error: true,
        errorMsg: data.data.err.message,
      };
      commit("setError", errorR);
    }
  });
};

export const register = async ({ commit }, user) => {
  //metodo asincrono para peticion htttps

  //Con el Método Post con Axios hacemos el request al servidor de la base de Datos
  authApi.post("/signup", user).then((data) => {
    //peticion a la base de datos para registro

    let errorR = {
      //inicializacion del error
      error: false,
      errorMsg: "",
    };
    commit("setError", errorR); //manda el error al state
    let userR = data.data.status;
    if (data.data.status == "Registration Successful!") {
      //registro exitoso

      commit("setUserR", userR);
    } else {
      let errorR = {
        //creacion del error para mandar al state
        error: true,
        errorMsg: data.data.err.message,
      };
      commit("setError", errorR);
    }
  });
};
