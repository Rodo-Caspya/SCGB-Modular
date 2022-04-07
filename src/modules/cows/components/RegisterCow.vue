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
        v-model="vacaForm.edad"
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

      <!-- <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      /> -->

      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

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
import { ref } from "vue";
import useCow from "../composables/useCow";

export default {
  setup() {
    const $q = useQuasar();

    const vacaForm = ref({});
    const { createCow } = useCow();

    return {
      vacaForm,

      onSubmit: async () => {
        await createCow(vacaForm.value);
        // if (!ok) Swal.fire("Error", message, "error");
        // else router.push({ name: "get-cows" });
      },
      onReset() {
        vacaForm = null;
      },
    };
  },
};
</script>

<style></style>
