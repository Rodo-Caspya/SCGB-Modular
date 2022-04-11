<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Registro de vacas</div>
        <q-separator spaced />
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab
          label="Listado de vacas"
          name="one"
          class="col-xs-3 col-sm-6 col-md-5 col-md-6"
        />
        <q-tab
          :label="editCow"
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
import useCow from "../composables/useCow";

export default {
  name: "CowView",
  components: {
    GetCows: defineAsyncComponent(() => import("../components/GetCows.vue")),
    RegisterCow: defineAsyncComponent(() =>
      import("../components/RegisterCow.vue")
    ),
  },

  setup() {
    // const store = useStore();
    const { editCow } = useCow();

    return {
      tab: ref("one"),
      editCow,
    };
  },
};
</script>

<style></style>
