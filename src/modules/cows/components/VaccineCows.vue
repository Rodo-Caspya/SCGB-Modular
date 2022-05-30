<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <div class="text-h6 col">Registro de vacunas</div>
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
      <q-input
        autofocus
        label="Nombre de la vacuna"
        outlined
        dense
        class="col-5 q-pa-sm"
      />
      <!-- <q-input
        class="col-5 q-pa-sm"
        outlined
        dense
        label="Fecha de vacunación"
        mask="date"
        :rules="['date']"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date today-btn>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input> -->
      <q-input
        filled
        class="col-5"
        v-model="date"
        mask="date"
        :rules="['date']"
      >
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
  </q-card>
</template>

<script>
import { ref } from "vue";
export default {
  name: "VaccineCows",
  emits: ["hide"],
  setup() {
    return {
      date: ref(null),
      objectCow: async (cow) => {
        console.log(cow);
      },
    };
  },
};
</script>

<style></style>
