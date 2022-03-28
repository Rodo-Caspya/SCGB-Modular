//las acciones son asincronas y son las que llegan al servidor o a la base de datos

// export const myAction = async ({ commit }) => { las acciones normalmente son asincronas

// }
import authApi from "@/api/authApi";

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
    console.log(data);
    let errorR = {
      //inicializacion del error
      error: false,
      errorMsg: "",
    };
    commit("setError", errorR); //manda el error al state
    let userR = data.data.status;
    if (data.data.status == "Registration Successful!") {
      //registro exitoso
      console.log("Registro exitoso!");
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
