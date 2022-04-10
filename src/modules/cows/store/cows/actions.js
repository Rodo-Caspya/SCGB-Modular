// export const myAction = async ({ commit }) => { las acciones normalmente son asincronas

// }

import cowsApi from "../../../../api/cowsApi";

export const registerCow = async ({ commit }, cow) => {
  console.log("hh", cow);
  try {
    const { data } = await cowsApi.post("/ingresar", cow); //se manda el body como parametros
    console.log("data", data);
    if (data.success == true) {
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
    console.log("dataCowws", data[0]._id);

    commit("setCows", data);
  } catch (e) {
    console.log("Error al obtener las vacas: ");
    // } finally {
    //   commit("setLoading");
    // }
  }
};

export async function deleteCow(_, cow) {
  try {
    const { data } = await cowsApi.delete(`/delete/${cow._id}`);
  } catch (e) {
    console.log("Error al eliminar vaca", e);
  }
}
