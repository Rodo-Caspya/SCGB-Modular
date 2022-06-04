<template>
  <div class="q-pa-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-y-md q-gutter-x-xs row items-start justify-between"
    >
      <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        type="text"
        v-model="userForm.firstname"
        label="Nombre *"
        hint="Ingresa tu nombre"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor escribe algo']"
      />
      <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        v-model="userForm.lastname"
        label="Apellido *"
        hint="Ingresa tu apellido"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor escribe algo']"
      />
      <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        v-model="userForm.username"
        label="Usuario*"
        hint="Ingresa tu usuario"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor escribe algo']"
      />
      <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        type="email"
        v-model="userForm.email"
        label="Correo electronico *"
        hint="Ingresa tu correo"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Este campo es obligatorio',
          isValidEmail,
        ]"
      />
      <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        type="password"
        v-model="userForm.password"
        label="Contraseña *"
        hint="Ingrese su contraseña"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Este campo es obligatorio',
        ]"
      />

      <div class="col-md-2 col-xs-12 col-sm-5">
        <q-toggle
          size="4rem"
          v-model="userForm.admin"
          label="Permisos de administrador"
          color="green"
          checked-icon="las la-pencil-alt"
          unchecked-icon="las la-times"
        />
        <br />
        <strong class="q-ml-lg">{{
          userForm.admin ? "CON PERMISOS" : "SIN PERMISOS"
        }}</strong>
        <!-- <q-toggle toggle-order="ft" indeterminate-value="false" v-model="userForm.admin" label="HACER ADMIN" /> -->
      </div>

      <div>
        <q-btn label="Guardar" type="submit" color="green-7" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm content-end"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import useUser from "../composables/useUsers";
import Swal from "sweetalert2";

export default {
  mits: ["tab"],
  setup(_, context) {
    const store = useStore();
    const $q = useQuasar();

    let userForm = ref({
      admin: false,
    });

    const { createUser, updateUser, editing } = useUser();
    onMounted(() => {
      if (editing) {
        userForm.value = store.getters["usersModule/getUserSelected"];
      }
    });
    onUnmounted(() => {
      if (editing) {
        store.commit("usersModule/setUser", {});
        store.commit("usersModule/setEdit", "Agregar usuario");
        store.commit("usersModule/setUserEditing", false);
      }
    });

    return {
      userForm,
      editing,

      onSubmit: async () => {
        if (!store.state.usersModule.edit) {
          const { ok, message } = await createUser(userForm.value);
          if (!ok) Swal.fire("Error", message, "error");
          else {
            context.emit("tab");
            Swal.fire("Registro exitoso", message, "success");
          }
        } else {
          let id = null;
          id = userForm.value._id;
          delete userForm.value._id;

          const { ok, message } = await updateUser(id, userForm.value);
          if (!ok) Swal.fire("Error", message, "error");
          else {
            context.emit("tab");

            Swal.fire("Registro actualizado", message, "success");
          }
        }

        // onReset()
      },
      onReset() {
        userForm.value = {
          id: "",
          type: "",
          age: "",
          father: "",
          mother: "",
        };
      },
      isValidEmail(val) {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || "El correo no parece ser válido";
      },
    };
  },
};
</script>

<style></style>
