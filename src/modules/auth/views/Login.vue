<template>
  <q-page>
    <div class="row justify-center fila items-center">
      <div
        class="q-pa-sm col-xs-12 col-sm-12 col-md-6 col-xl-3 shadow-10 container-form"
      >
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
        >
          <div class="row logo-container items-center">
            <q-img src="icons/logo.png " />
          </div>
          <q-input
            filled
            v-model="userForm.email"
            label="Correo electronico *"
            type="email"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Este campo es obligatorio',
              isValidEmail,
            ]"
          />

          <q-input
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
          <q-input
            filled
            type="password"
            v-model="userForm.password2"
            label="Repetir Contraseña *"
            hint="Ingrese su contraseña de nuevo"
            lazy-rules
            rules="[
              (val) => (val && val.length > 0) || 'Este campo es obligatorio',
              isSamePassword,
            ]"
          />

          <q-checkbox
            v-model="userForm.conditions"
            label="Acepto los terminos y las condiciones"
            :style="
              userForm.errorInConditions && !userForm.conditions && 'color: red'
            "
          />

          <div class="row justify-end">
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm q-mb-xl"
            />
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              class="q-mb-xl"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "Forms",

  setup() {
    const $q = useQuasar();

    const userForm = ref({
      email: "",
      password1: "",
      password2: "",
      conditions: false,
      errorInConditions: false,
    });
    return {
      userForm,
      onSubmit() {
        userForm.value.errorInConditions = true;

        if (!userForm.value.conditions) {
          $q.notify({
            message: "Debe de aceptar las condiciones",
            icon: "las la-exclamation-circle",
            color: "purple",
            position: "top",
            timeout: 5000,
          });

          userForm.value.errorInConditions = true;
        }
      },
      onReset() {
        userForm.value = {
          email: "",
          password1: "",
          password2: "",
          conditions: false,
          errorInConditions: false,
        };
      },
      isValidEmail(val) {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || "El correo no parece ser válido";
      },
      isSamePassword(val) {
        return (
          val === userForm.value.password1 || "Las contraseñas no coinciden"
        );
      },
    };
  },
});
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
</style>
