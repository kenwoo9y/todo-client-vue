<template>
  <v-navigation-drawer v-model="model">
    <v-list nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.link">
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { mdiHome } from '@mdi/js';
import { mdiForum } from '@mdi/js';
import { ref } from 'vue';

const model = defineModel();
const items = ref([
  { title: 'Home', icon: mdiHome, link: { name: 'home' } },
  { title: 'About', icon: mdiForum, link: { name: 'about' } },
]);
</script>
