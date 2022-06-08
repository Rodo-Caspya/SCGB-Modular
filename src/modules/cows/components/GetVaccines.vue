<template>
  <q-separator />

  <q-btn
    color="positive"
    icon="las la-plus-circle"
    label="Agregar vacuna"
    class="q-ma-md"
    @click="$emit('tab')"
  />
  <q-separator />
  <div class="q-pa-md">
    <q-table
      title="Listado de vacunass"
      :columns="columns"
      :rows="vaccinesRows"
      :row-key="vaccinesRows['_id']"
      :filter="filter"
      rows-per-page-label="Registros por página"
      :rows-per-page-options="[10, 20, 30]"
    >
      <template v-slot:no-data>
        <q-icon
          class="q-ma-sm text-warning"
          name="las la-exclamation-triangle"
          size="2em"
        />
        <span class="text-subtitle2">Sin datos por mostrar.</span>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            dense
            outline
            class="q-mr-md"
            color="green-7"
            icon="las la-edit"
            @click="updateCow(props['row'], 'Editar vacuna')"
          />
          <q-btn
            dense
            outline
            class="q-mr-md"
            color="red"
            icon="las la-trash"
            @click="deleteCow(props['row'])"
          />
        </q-td>
      </template>

      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="500"
          v-model="filter"
          placeholder="Buscar"
        >
          <template v-slot:append>
            <q-icon name="las la-search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>

  <!-- <q-btn
    class="q-mr-md"
    color="green-7"
    label="Editar"
    @click="onClick"
  />Dessert (100g serving) -->
</template>

<script>
import { ref } from "vue";
import { defineAsyncComponent } from "vue";
import { useStore } from "vuex";

import useVaccine from "../composables/useVaccine";
import Swal from "sweetalert2";
export default {
  emits: ["tab"],

  setup(_, context) {
    const store = useStore();
    const { vaccinesRows, columns } = useVaccine();

    return {
      filter: ref(""),
      vaccinesRows,
      columns,

      deleteCow: async (cow) => {
        const res = Swal.fire({
          title: "Seguro que desea borrar este registro?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ff4040",
          confirmButtonText: "Eliminar",
          cancelButtonText: "Cancelar",
        });
        if ((await res).isConfirmed) {
          await store.dispatch("cowModule/deleteVaccine", cow);
          await store.dispatch("cowModule/getVaccinesRows");
        }
      },
      updateCow: (cow, edit) => {
        context.emit("tab");
        store.commit("cowModule/setVaccine", cow);
        store.commit("cowModule/setEditVaccine", edit);
        store.commit("cowModule/setVaccineEditing", true);
      },
    };
  },
};
</script>

<style></style>
