// export const myAction = async ({ commit }) => { las acciones normalmente son asincronas

// }

import cowsApi from "../../../../api/cowsApi";
import vacinnesApi from "../../../../api/vaccinesApi";

export const registerCow = async ({ commit }, cow) => {
  try {
    const { data } = await cowsApi.post("/ingresar", cow); //se manda el body como parametros

    if (data.success == true) {
      return { ok: true };
    } else if (
      data == "La vaca madre que usted ingresó no se encuentra registrada"
    ) {
      return {
        ok: false,
        message: "La vaca madre que usted ingresó no se encuentra registrada",
      };
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

    commit("setCows", data);
  } catch (e) {
    console.log("Error al obtener las vacas: ");
    // } finally {
    //   commit("setLoading");
    // }
  }
};
export async function updateCow(_, cow) {
  try {
    await cowsApi.put(`/update/${cow._id}`, cow);
    return { ok: true };
  } catch (e) {
    console.log("Error al editar vaca", e);
    return { ok: false, message: "Error al editar vaca: " + e };
  }
}

export async function deleteCow(_, cow) {
  try {
    const { data } = await cowsApi.delete(`/delete/${cow._id}`);
  } catch (e) {
    console.log("Error al eliminar vaca", e);
  }
}

// Ingresar vacunas
export const registerVaccine = async ({ commit }, vaccine) => {
  try {
    const { data } = await vacinnesApi.post("/newVacuna", vaccine); //se manda el body como parametros

    return { ok: true };
    // if (data.success == true) {
    //   return { ok: true };
    // } else {
    //   return {
    //     ok: false,
    //     message:
    //       data.code == 11000 ? `"El id ${cow.id} ya esta registrado"` : "",
    //   };
    // }
  } catch (error) {
    return { ok: false, message: data.message };
  }
};
export const addVaccine = async ({ commit }, vaccine) => {
  try {
    const { data } = await cowsApi.post("/newVacuna", vaccine); //se manda el body como parametros

    // if (data.success == true) {
    //   return { ok: true };
    // } else {
    //   return {
    //     ok: false,
    //     message:
    //       data.code == 11000 ? `"El id ${cow.id} ya esta registrado"` : "",
    //   };
    // }
  } catch (error) {
    return { ok: false, message: data.message };
  }
};
export const getVaccines = async ({ commit }) => {
  const vaccines = [];
  try {
    const { data } = await vacinnesApi.get("/vacunas");

    for (let i in data) {
      // console.log(data[i].name);
      vaccines.push(data[i].name);
    }
    commit("setVaccines", vaccines);
  } catch (e) {
    console.log(e);
    console.log("Error al obtener las vacunas: ");
    // } finally {
    //   commit("setLoading");
    // }
  }
};
export const getVaccinesRows = async ({ commit }) => {
  try {
    const { data } = await vacinnesApi.get("/vacunas");

    commit("setVaccinesRows", data);
  } catch (e) {
    console.log(e);
    console.log("Error al obtener las vacas: ");
    // } finally {
    //   commit("setLoading");
    // }
  }
};
export const getVaccinesById = async ({ commit }, id) => {
  try {
    const { data } = await cowsApi.get(`/getVacunas/${id}`);
    commit("setVaccinesById", data);
    console.log("data", data);
  } catch (e) {
    console.log(e);
    console.log("Error al obtener las vacas: ");
  }
};
export const addVaccineById = async ({ commit }, { id, model }) => {
  try {
    const { data } = await cowsApi.post(`/addVacuna/${id}`, model);

    // for (var i in data) {
    //   console.log(data[i].name);
    //   vaccines.push(data[i].name);
    // }
    // console.log(vaccines);
    // commit("setVaccines", vaccines);
    // console.log("estas son", data);
  } catch (e) {
    console.log(e);
    console.log("cayo aqui");
    console.log("Error al obtener las vacas: ");
    // } finally {
    //   commit("setLoading");
    // }
  }
};
export async function updateVaccine(_, vaccine) {
  try {
    await vacinnesApi.put(`/update/${vaccine._id}`, vaccine);
    return { ok: true };
  } catch (e) {
    console.log("Error al editar vaca", e);
    return { ok: false, message: "Error al editar vaca: " + e };
  }
}
export async function deleteVaccine(_, cow) {
  try {
    const { data } = await vacinnesApi.delete(`/delete/${cow._id}`);
  } catch (e) {
    console.log("Error al eliminar vaca", e);
  }
}
