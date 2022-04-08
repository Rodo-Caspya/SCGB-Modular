// export const myAction = async ({ commit }) => { las acciones normalmente son asincronas

// }

import cowsApi from "../../../../api/cowsApi";

export const registerCow = async ({ commit }, cow) => {
  try {
    const { data } = await cowsApi.post("/ingresar", cow); //se manda el body como parametros

    if (data.success == true) {
      console.log("registro correcto");
      return { ok: true };
    } else {
      return {
        ok: false,
        message:
          data.code == 11000 ? `"El id ${cow.id} ya esta registrado"` : "",
      };
    }
  } catch (error) {
    return { ok: false, message: data.message };
  }
};
