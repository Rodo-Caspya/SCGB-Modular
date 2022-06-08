<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Registro de vacunas</div>
        <q-separator spaced />
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab
          label="Listado de vacunas"
          name="one"
          class="col-xs-3 col-sm-6 col-md-5 col-md-6"
        />
        <q-tab
          :label="editVaccine"
          name="two"
          class="col-xs-3 col-sm-6 col-md-5 col-md-6"
        />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one">
          <GetCows @tab="tab = 'two'" />
        </q-tab-panel>

        <q-tab-panel name="two">
          <RegisterCow @tab="tab = 'one'" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
// import { useStore } from "vuex";
import useVaccine from "../composables/useVaccine";

export default {
  name: "CowView",
  components: {
    GetCows: defineAsyncComponent(() =>
      import("../components/GetVaccines.vue")
    ),
    RegisterCow: defineAsyncComponent(() =>
      import("../components/RegisterVaccines.vue")
    ),
  },

  setup() {
    // const store = useStore();
    const { editVaccine } = useVaccine();

    return {
      tab: ref("one"),
      editVaccine,
    };
  },
};
</script>

<style></style>
