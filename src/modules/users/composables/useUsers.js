import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

const useUser = () => {
    const store = useStore();
    const createUser = async (user) => {
      const resp = await store.dispatch("usersModule/registerUser", user);

      return resp;
    };
    const getUsers = async () => {
        await store.dispatch("usersModule/getUsers");
      };
      const updateUser = async (user) => {
        const resp = await store.dispatch("usersModule/updateUser", user);

        return resp;
      };
      onBeforeMount(async () => {
        await getUsers();
      });

      return {
          users: computed(() => store.state.usersModule.users),
          editUser: computed(() => store.state.usersModule.editUser),
          editing: computed(() => store.state.usersModule.edit),
          createUser,
          updateUser,
          columns: [
            {
              name: "actions",
              label: "Acciones",
              align: "left",
            },
            { name: "firstname", label: "Nombre", field: "firstname" },
            { name: "lastname", label: "Apellido", field: "lastname" },
            { name: "username", label: "Usuario", field: "username", sortable: true },
            { name: "email", label: "Correo", field: "email" },
            { name: "admin", label: "Admin", field: "admin", sortable: true,
            format: val => val == true ? "Administrador" : "Sin permisos" },


          ],

    }
};


export default useUser;
