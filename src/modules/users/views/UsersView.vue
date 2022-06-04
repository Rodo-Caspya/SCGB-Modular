<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Registro de Usuarios</div>
        <q-separator spaced />
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab
          label="Listado de Usuarios"
          name="one"
          class="col-xs-3 col-sm-6 col-md-5 col-md-6"
        />
        <q-tab
          :label="editUser"
          name="two"
          class="col-xs-3 col-sm-6 col-md-5 col-md-6"
        />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one">
          <GetCows @tab="tab = 'two'" />
        </q-tab-panel>

        <q-tab-panel name="two">
          <RegisterCow />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
import useUser from '../composables/useUsers';
export default {
  name: "UsersView",
  components: {
    GetCows: defineAsyncComponent(() => import("../components/GetUsers.vue")),
    RegisterCow: defineAsyncComponent(() =>
      import("../components/RegisterUsers.vue")
    ),
  },
  setup() {
    const {editUser} = useUser();
     return {
      tab: ref("one"),
      editUser
    };
  },
};
</script>

<style></style>
