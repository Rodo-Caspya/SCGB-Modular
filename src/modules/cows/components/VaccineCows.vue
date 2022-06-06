<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <div class="text-h6 col">Registro de vacunas:</div>
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
        class="col-md-5 col-xs-11 col-sm-5 q-mb-md"
        v-model="model.name"
        :options="vaccines"
        label="Nombre de la Vacuna"
      />
      <q-input
        class="col-md-5 col-xs-11 col-sm-5 q-mb-md"
        v-model="model.description"
        filled
        type="text"
        label="Descripción de la Vacuna"
      />
      <q-input
        filled
        readonly
        class="col-md-5 col-xs-11 col-sm-5"
        v-model="model.registrationDate"
        mask="date"
        :rules="['date']"
        label="Fecha de aplicación"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="model.registrationDate">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input
        filled
        readonly
        class="col-md-5 col-xs-11 col-sm-5"
        v-model="model.expirationDate"
        mask="date"
        :rules="['date']"
        label="Fecha de vencimiento"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="model.expirationDate">
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
      <q-btn color="primary" @click="addVacuna" flat label="Guardar vacuna" />
    </q-card-actions>
    <q-separator />

    <div class="q-pa-md">
      <q-table
        class="bg-blue-grey-1"
        :title="`Vacunas aplicadas a la vaca: ${cow._id}`"
        :rows="vaccinesById"
        :columns="vColumns"
        :row-key="vaccinesById['_id']"
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
import { useStore } from "vuex";

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
  setup(props) {
    const store = useStore();

    const {
      vColumns,
      getVaccines,
      getVaccinesById,
      vaccines,
      vaccinesById,
      addVaccineById,
    } = useVaccine();
    let model = ref({});
    return {
      filter: ref(""),
      model,
      vColumns,
      vaccines,
      vaccinesById,
      getVaccines,
      getVaccinesById,

      addVacuna: async () => {
        // vacaForm.value = store.getters["cowModule/getCowSelected"];
        //abajo quite el await y funciono

        await addVaccineById(props.cow._id, model.value);
        await getVaccinesById(props.cow._id);

        // await store.dispatch("cowModule/getVaccinesById", props.cow._id); //obtiene todas en la base de datos
      },
    };
  },
};
</script>

<style></style>
