<template>
  <q-separator />

  <q-btn
    color="positive"
    icon="las la-plus-circle"
    label="Agregar Usuario"
    class="q-ma-md"
    @click="$emit('tab')"
  />
  <q-separator />

  <div class="q-pa-md">
    <q-table
      title="Listado de vacas"
      :columns="columns"
      :rows="users"
      :row-key="users['_id']"
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
            @click="updateUser(props['row'], 'Editar vaca')"
          />
          <q-btn
            dense
            outline
            class="q-mr-md"
            color="red"
            icon="las la-trash"
            @click="deleteUser(props['row'])"
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
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import useUser from "../composables/useUsers";
import Swal from "sweetalert2";
export default {
  emits: ["tab"],
  setup(_, context) {
    const store = useStore();
    const { users, columns } = useUser();
    return {
      filter: ref(""),
      columns,
      users,
    };
  },
};
</script>

<style></style>
