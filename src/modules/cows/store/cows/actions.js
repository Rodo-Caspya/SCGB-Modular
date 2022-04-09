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
export const getCows = async ({ commit }) => {
  try {
    const { data } = await cowsApi.get("/consultar");
    console.log(data);
    commit("setCows", data);
  } catch (e) {
    console.log("Error al obtener las vacas: ");
    // } finally {
    //   commit("setLoading");
    // }
  }
};

export async function deleteCow(_, cow) {
  console.log("llego aqui");
  try {
    const { data } = await cowsApi.delete(`/delete/${cow._id}`);
  } catch (e) {
    console.log("Error al eliminar vaca", e);
  }
}
