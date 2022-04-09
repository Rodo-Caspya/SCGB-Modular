<template>
  <div class="q-pa-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md row items-start justify-between"
    >
      <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        type="text"
        v-model="vacaForm.id"
        label="ID de la vaca*"
        hint="Identificación de la vaca"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        v-model="vacaForm.type"
        label="Tipo de vaca *"
        hint="VACA / VAQUILLA"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        type="Edad"
        v-model="vacaForm.age"
        label="Edad de la vaca *"
        hint="Ingrese la edad de la vaca"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />
      <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        type="text"
        v-model="vacaForm.father"
        label="Padre de la vaca*"
        hint="Ingrese el id del padre de la vaca"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        type="text"
        v-model="vacaForm.mother"
        label="Madre de la vaca*"
        hint="Ingrese el id de la madre de la vaca"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
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
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import useCow from "../composables/useCow";
import Swal from "sweetalert2";
export default {
  setup() {
    const store = useStore();
    const $q = useQuasar();

    let vacaForm = ref({});
    const { createCow } = useCow();
    onMounted(() => {
      if (store.state.cowModule.edit) {
        vacaForm.value = store.getters["cowModule/getCowSelected"];
      }
    });
    return {
      vacaForm,

      onSubmit: async () => {
        console.log("se manda esto", vacaForm.value);
        const { ok, message } = await createCow(vacaForm.value);
        console.log(ok);
        if (!ok) Swal.fire("Error", message, "error");
        else Swal.fire("Registro exitoso", message, "success");
        // onReset()
      },
      onReset() {
        vacaForm.value = {
          id: "",
          type: "",
          age: "",
          father: "",
          mother: "",
        };
      },
    };
  },
};
</script>

<style></style>
