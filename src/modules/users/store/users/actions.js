// export const myAction = async ({ commit }) => { las acciones normalmente son asincronas

// }
import { useStore } from "vuex";

import usersApi from "../../../../api/usersApi";
export const registerUser = async ({ commit }, user) => {
  try {
    const { data } = await usersApi.post("/signup", user); //se manda el body como parametros

    if (data.success == true) {
      return { ok: true };
    } else {
      return {
        ok: false,
        message:
          data.code == 11000 ? `"El id ${user.id} ya esta registrado"` : "",
      };
    }
  } catch (error) {
    return { ok: false, message: data.message };
  }
};

export const getUsers = async ({ commit }) => {
  const store = useStore();
  try {
    const { data } = await usersApi.get("/consultar");
    let index = data.findIndex(
      (el) => el.username == store.state.authModule.user.username
    );
    data.splice(index, 1);
    commit("setUsers", data);
  } catch (e) {
    console.log("Error al obtener los usuarios: ");
    // } finally {
    //   commit("setLoading");
    // }
  }
};
export async function updateUser(_, { id, user }) {
  try {
    await usersApi.put(`/update/${id}`, user);
    return { ok: true };
  } catch (e) {
    console.log("Error al editar usuario", e);
    return { ok: false, message: "Error al editar usuario: " + e };
  }
}
export async function deleteUser(_, user) {
  try {
    const { data } = await usersApi.delete(`/delete/${user._id}`);
  } catch (e) {
    console.log("Error al eliminar usuario", e);
  }
}
