<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <div class="text-h6 col">
          Registro de vacunas:
          <br />
          Vaca numero : {{ cow._id }}
        </div>
        <q-btn
          @click="$emit('hide')"
          rounded
          dense
          flat
          icon="las la-times"
          size="md"
        />
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section style="max-height: 50vh" class="scroll"> </q-card-section>
    <div class="row justify-around">
      <q-select
        class="col-5"
        v-model="model"
        :options="options"
        label="Nombre de la Vacuna"
      />

      <q-input
        filled
        class="col-5"
        v-model="date"
        mask="date"
        :rules="['date']"
      >
        <q-btn
          @click="getVaccines"
          rounded
          dense
          flat
          icon="las la-times"
          size="md"
        />
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="date">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>

    <q-card-actions align="right">
      <q-btn flat label="Cancelar" color="primary" v-close-popup />
      <q-btn flat label="Guardar vacuna" color="primary" v-close-popup />
    </q-card-actions>
    <q-separator />

    <div class="q-pa-md">
      <q-table
        :title="`Vacunas aplicadas a la vaca: ${cow._id}`"
        :rows="rows"
        :columns="vColumns"
        row-key="name"
      >
        <template v-slot:no-data>
          <q-icon
            class="q-ma-sm text-warning"
            name="las la-exclamation-triangle"
            size="2em"
          />
          <span class="text-subtitle2">Sin datos por mostrar.</span>
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
  </q-card>
</template>

<script>
import { ref } from "vue";
import useVaccine from "../composables/useVaccine";
export default {
  name: "VaccineCows",
  props: {
    cow: {
      type: Object,
      required: true,
    },
  },
  emits: ["hide"],
  setup() {
    const { vColumns, getVaccines } = useVaccine();
    return {
      filter: ref(""),
      date: ref(null),
      model: ref(null),
      vColumns,
      getVaccines,
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
};
</script>

<style></style>
