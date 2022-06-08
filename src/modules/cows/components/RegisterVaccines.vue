<template>
  <div class="q-pa-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-y-md q-gutter-x-xs row items-start justify-between"
    >
      <!-- <q-input
        :disable="editingV"
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        type="text"
        v-model="vacaForm._id"
        label="ID de la vaca*"
        hint="Identificación de la vaca"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      /> -->
      <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        type="text"
        v-model="vacaForm.name"
        label="Nombre *"
        hint="Ingresa tu nombre"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor escribe algo']"
      />
      <q-input
        class="col-md-2 col-xs-12 col-sm-5"
        filled
        type="text"
        v-model="vacaForm.description"
        label="Nombre *"
        hint="Ingresa tu nombre"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor escribe algo']"
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
import useVaccine from "../composables/useVaccine";
import Swal from "sweetalert2";
import { updateVaccine } from "../store/cows/actions";
export default {
  emits: ["tab"],
  setup(_, context) {
    const store = useStore();
    const $q = useQuasar();

    let vacaForm = ref({});

    const { updateCow } = useCow();
    const { editingV, createVaccine, updateVaccine } = useVaccine();
    onMounted(() => {
      if (editingV) {
        vacaForm.value = store.getters["cowModule/getVaccineSelected"];
      }
    });
    onUnmounted(() => {
      if (editingV) {
        store.commit("cowModule/setVaccine", {});
        store.commit("cowModule/setEditVaccine", "Agregar vacuna");
        store.commit("cowModule/setVaccineEditing", false);
      }
    });

    return {
      vacaForm,
      editingV,
      createVaccine,
      options: ["VACA", "VAQUILLA"],
      onSubmit: async () => {
        if (!store.state.cowModule.editV) {
          // vacaForm.value.id = vacaForm.value._id;
          console.log(vacaForm.value);
          // const { ok, message } = await createVaccine(vacaForm.value);
          await createVaccine(vacaForm.value);
          context.emit("tab");
          // if (!ok) Swal.fire("Error", message, "error");
          // else {
          //   context.emit("tab");
          //   Swal.fire("Registro exitoso", message, "success");
          // }
        } else {
          // const { ok, message } = await updateCow(vacaForm.value);
          await updateVaccine(vacaForm.value);
          context.emit("tab");
          // if (!ok) Swal.fire("Error", message, "error");
          // else {
          //   context.emit("tab");

          //   Swal.fire("Registro actualizado", message, "success");
          // }
        }

        // onReset();
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
