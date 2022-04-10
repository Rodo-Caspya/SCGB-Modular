<template>
  <q-separator />

  <q-btn
    color="positive"
    icon="las la-plus-circle"
    label="Agregar vaca"
    class="q-ma-md"
    @click="$emit('tab')"
  />
  <q-separator />
  <div class="q-pa-md">
    <q-table
      title="Listado de vacas"
      :columns="columns"
      :rows="cows"
      :row-key="cows['_id']"
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
            @click="updateCow(props['row'], 'Editar vaca')"
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
import { useStore } from "vuex";
import useCow from "../composables/useCow";
import Swal from "sweetalert2";
export default {
  emits: ["tab"],
  setup(_, context) {
    const store = useStore();
    const { cows, columns } = useCow();
    return {
      filter: ref(""),
      columns,
      cows,

      deleteCow: async (cow) => {
        const res = Swal.fire({
          title: "Seguro que desea borrar este registro?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ff4040",
          confirmButtonText: "Eliminar",
          denyButtonText: "Cancelar",
        });
        if ((await res).isConfirmed) {
          await store.dispatch("cowModule/deleteCow", cow);
          await store.dispatch("cowModule/getCows");
        }
      },
      updateCow: async (cow, edit) => {
        context.emit("tab");
        store.commit("cowModule/setCow", cow);
        store.commit("cowModule/setEdit", edit);
        store.commit("cowModule/setCowEditing", true);
      },
    };
  },
};
</script>

<style></style>
