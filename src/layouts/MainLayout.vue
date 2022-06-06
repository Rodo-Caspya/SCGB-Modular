<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: #5b3405">
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> {{ username.toUpperCase() }} </q-toolbar-title>

        <div q-m>{{ isAdmin ? "ADMINISTRADOR" : "SIN PERMISOS" }}</div>
        <q-btn
          class="q-ml-md q-mr-sm"
          round
          color="brown-5"
          icon="las la-sign-out-alt"
          @click="logout"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Bienvenido {{ username.toUpperCase() }}
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Usuarios",
    caption: "Agregar usuarios",
    icon: "lar la-user",
    link: "#/users",
  },
  {
    title: "Vacas",
    caption: "Agregar vacas",
    icon: "las la-hat-cowboy",
    link: "#/cows",
  },
  {
    title: "Vacunas",
    caption: "Agregar vacunas",
    icon: "las la-plus",
    link: "https://chat.quasar.dev",
  },
  // {
  //   title: "Forum",
  //   caption: "forum.quasar.dev",
  //   icon: "record_voice_over",
  //   link: "https://forum.quasar.dev",
  // },
  // {
  //   title: "Twitter",
  //   caption: "@quasarframework",
  //   icon: "rss_feed",
  //   link: "https://twitter.quasar.dev",
  // },
  // {
  //   title: "Facebook",
  //   caption: "@QuasarFramework",
  //   icon: "public",
  //   link: "https://facebook.quasar.dev",
  // },
  // {
  //   title: "Quasar Awesome",
  //   caption: "Community Quasar projects",
  //   icon: "favorite",
  //   link: "https://awesome.quasar.dev",
  // },
];

import { defineComponent, ref } from "vue";

import useAuth from "../modules/auth/composables/useAuth";
export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const { username, isAdmin, logout } = useAuth();

    return {
      logout,
      username,
      isAdmin,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
