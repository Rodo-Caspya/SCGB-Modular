// export const myAction = async ({ commit }) => { las acciones normalmente son asincronas

// }

import cowsApi from "../../../../api/cowsApi";

export const registerCow = async ({ commit }, cow) => {
  //metodo asincrno para peticion https a registrar baca
  //Con el Método Post con Axios hacemos el request al servidor de la base de Datos
  //   await cowsApi.post("/ingresar", cow).then((data) => {
  //     console.log(data);
  //     // let userR = user.username
  //     // console.log(userR);
  //     let cowId = cow.id;
  //     if (data.data.status == "Successful") {
  //       //validacion exitosa de la data
  //       console.log("Registro exitoso!");
  //       commit("setCow", cowId);
  //     } else {
  //       let errorR = {
  //         //creacion del error para mandar al state
  //         error: true,
  //         errorMsg: data.data.message,
  //       };
  //       commit("setError", errorR); //se manda el commit al state
  //     }
  //   });

  try {
    const { data } = await cowsApi.post("/ingresar", cow); //se manda el body como parametros
    // const { displayName, idToken, refreshToken } = data;
    // user.name = displayName;
    if (data.success == true) {
      //   delete user.password;
      //   const idToken = data.token;
      //   commit("loginUser", { user, idToken });
      console.log("registro correcto");
      return { ok: true };
    } else {
      return {
        ok: false,
        message: data.message,
      };
    }
  } catch (error) {
    return { ok: false, message: data.message };
  }
};
