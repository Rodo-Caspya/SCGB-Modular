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
            class="q-mr-md"
            color="green-7"
            icon="las la-edit"
            @click="deleteCow(props['row'])"
          />
          <q-btn class="q-mr-md" color="red" icon="las la-trash" />
          <!-- <q-btn
            size="md"
            class="q-ml-sm"
            @click="deleteCompany(props['row'])"
            dense
            outline
            align="between"
            color="negative"
            icon="las la-trash"
            >Eliminar</q-btn
          >
          <q-btn
            size="md"
            class="q-ml-sm"
            @click="updateCompany(props['row'])"
            dense
            outline
            align="between"
            color="positive"
            icon="las la-edit"
            >Editar</q-btn
          > -->
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
        console.log("hi");
        await store.dispatch("cowModule/deleteCow", cow);
        // await store.dispatch("cowModule/getCows");
      },
      updateCow: async (patient) => {
        store.commit("patient/setPatientEditing", true);
        store.commit("patient/setTabPatient", "form");
        store.commit("patient/setPatient", patient);
      },
    };
  },
};
</script>

<style></style>
