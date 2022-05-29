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

    <q-separator />

    <q-card-actions align="right">
      <q-btn flat label="Decline" color="primary" v-close-popup />
      <q-btn flat label="Accept" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "VaccineCows",
  emits: ["hide"],
};
</script>

<style></style>
