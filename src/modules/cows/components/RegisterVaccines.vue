<template>
  <div class="q-pa-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-y-md q-gutter-x-xs row items-start justify-between"
    >
      <q-input
        class="col-md-5 col-xs-12 col-sm-12"
        filled
        type="text"
        v-model="vacaForm.name"
        label="Nombre de la vacuna*"
        hint="Ingresa el Nombre de la Vacuna"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor escribe algo']"
      />
      <q-input
        class="col-md-5 col-xs-12 col-sm-12"
        filled
        type="text"
        v-model="vacaForm.description"
        label="Descripcion de la vacuna *"
        hint="Ingresa la descripcion de la vacuna"
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
          const { ok, message } = await createVaccine(vacaForm.value);

          if (!ok) Swal.fire("Error", message, "error");
          else {
            context.emit("tab");
            Swal.fire("Registro exitoso", message, "success");
          }
        } else {
          const { ok, message } = await updateVaccine(vacaForm.value);

          if (!ok) Swal.fire("Error", message, "error");
          else {
            context.emit("tab");

            Swal.fire("Registro actualizado", message, "success");
          }
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
