<template>
  <q-page>
    <div class="row justify-center fila items-center">
      <div
        class="col-xs-12 col-sm-8 col-md-4 col-lg-4 col-xl-3 shadow-10 container-form"
      >
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-xs q-pt-xl">
          <div class="row logo-container items-center">
            <q-img src="icons/logo.png " />
          </div>
          <q-input
            class="q-pl-sm q-pr-sm"
            filled
            v-model="userForm.email"
            label="Correo electronico *"
            hint="Ingrese su usuario"
            type="email"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Este campo es obligatorio',
              isValidEmail,
            ]"
          />

          <q-input
            class="q-pl-sm q-pr-sm"
            filled
            type="password"
            v-model="userForm.password1"
            label="Contraseña *"
            hint="Ingrese su contraseña"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Este campo es obligatorio',
            ]"
          />

          <!-- <q-checkbox
            v-model="userForm.conditions"
            label="Acepto los terminos y las condiciones"
            :style="
              userForm.errorInConditions && !userForm.conditions && 'color: red'
            "
          /> -->

          <div class="row justify-center q-pl-sm q-pr-sm q-pt-md">
            <q-btn
              label="INICIAR SESION"
              type="submit"
              class="q-mb-xl btn-ini"
            />
          </div>
          <footer
            class="footer col-xs-12 col-sm-12 col-md-6 col-xl-3 shadow-10"
          >
            <div class="column text-footer items-center">SISTEMA CGB</div>
          </footer>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";

import Swal from "sweetalert2";
export default {
  setup() {
    const router = useRouter();
    const { loginUser } = useAuth();
    const userForm = ref({
      email: "",
      password: "",
    });

    return {
      userForm,

      onSubmit: async () => {
        const { ok, message } = await loginUser(userForm.value);
        console.log(ok, message);
        if (!ok) Swal.fire("Error", message, "error");
        else router.push({ name: "no-entry" });
      },
    };
  },
};
</script>
<style scoped>
.container-form {
  border-radius: 25px;
}

.fila {
  height: 100vh;
}

.logo-container {
  width: 22vh;
  height: 22vh;

  margin: auto auto 3vh;
}

.footer {
  height: 15vh;
  background-color: #5b3405;
  border-radius: 0px 0px 25px 25px;
}
.text-footer {
  color: white;
  padding-top: 4vh;
  font-weight: bold;
  font-size: 4vh;
}
.btn-ini {
  width: 12rem;
  background-color: #5b3405;
  color: white;
  font-weight: bold;
  font-size: 1rem;

  border-radius: 30px;
}
</style>
