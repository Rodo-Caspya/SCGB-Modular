<template>
  <div class="q-pa-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-y-md q-gutter-x-xs row items-start justify-between"
    >
      <q-input
        :disable="editing"
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        type="text"
        v-model="vacaForm._id"
        label="ID de la vaca*"
        hint="Identificación de la vaca"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <!-- <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        v-model="vacaForm.type"
        label="Tipo de vaca *"
        hint="VACA / VAQUILLA"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      /> -->
      <q-select
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        v-model="vacaForm.type"
        hint="VACA / VAQUILLA"
        :options="options"
        label="Tipo de vaca*"
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
import useCow from "../composables/useCow";
import Swal from "sweetalert2";
export default {
  emits: ["tab"],
  setup(_, context) {
    const store = useStore();
    const $q = useQuasar();

    let vacaForm = ref({});

    const { createCow, updateCow, editing } = useCow();
    onMounted(() => {
      if (editing) {
        vacaForm.value = store.getters["cowModule/getCowSelected"];
      }
    });
    onUnmounted(() => {
      if (editing) {
        store.commit("cowModule/setCow", {});
        store.commit("cowModule/setEdit", "Agregar vaca");
        store.commit("cowModule/setCowEditing", false);
      }
    });

    return {
      vacaForm,
      editing,
      options: ["VACA", "VAQUILLA"],
      onSubmit: async () => {
        if (!store.state.cowModule.edit) {
          vacaForm.value.id = vacaForm.value._id;
          const { ok, message } = await createCow(vacaForm.value);
          if (!ok) Swal.fire("Error", message, "error");
          else {
            context.emit("tab");
            Swal.fire("Registro exitoso", message, "success");
          }
        } else {
          const { ok, message } = await updateCow(vacaForm.value);
          if (!ok) Swal.fire("Error", message, "error");
          else {
            context.emit("tab");

            Swal.fire("Registro actualizado", message, "success");
          }
        }

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
