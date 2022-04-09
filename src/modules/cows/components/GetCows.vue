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
      title="Listado de vacas"
      :filter="searchFilter"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
  <!-- <q-btn
    class="q-mr-md"
    color="green-7"
    label="Editar"
    @click="onClick"
  />Dessert (100g serving) -->
</template>

<script>
export default {
  emits: ["tab"],
  setup(_, context) {
    return {};
  },
};
</script>

<style></style>
