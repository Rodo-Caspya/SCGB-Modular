<template>
  <q-separator />

  <q-btn
    v-model="tab"
    color="positive"
    icon="las la-plus-circle"
    label="Agregar vaca"
    class="q-ma-md"
    @click="$emit('tab')"
  />
  <q-separator />
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
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
const columns = [
  {
    name: "ID vaca",
    align: "left",
    label: "ID vaca",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
  },
];
export default {
  emits: ["tab"],
  setup(_, context) {
    return {
      filter: ref(""),
      columns,
      rows,
    };
  },
};
</script>

<style></style>
