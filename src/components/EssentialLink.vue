<template>
  <template v-if="!isAdmin && title != 'Usuarios' && title != 'Vacunas'">
    <q-item clickable tag="a" :href="link">
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>
          {{ caption }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </template>

  <template v-if="isAdmin">
    <q-item clickable tag="a" :href="link">
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>
          {{ caption }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </template>
</template>

<script>
import { defineComponent } from "vue";
import useAuth from "../modules/auth/composables/useAuth";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
  setup() {
    const { username, isAdmin } = useAuth();

    return {
      username,
      isAdmin,
    };
  },
});
</script>
