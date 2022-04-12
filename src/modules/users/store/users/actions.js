// export const myAction = async ({ commit }) => { las acciones normalmente son asincronas

// }

import usersApi from "../../../../api/usersApi";


export const getUsers = async ({ commit }) => {
  try {
    const { data } = await usersApi.get("/consultar");
    console.log(data);
    commit("setUsers", data);
  } catch (e) {
    console.log("Error al obtener los usuarios: ");
    // } finally {
    //   commit("setLoading");
    // }
  }
};


