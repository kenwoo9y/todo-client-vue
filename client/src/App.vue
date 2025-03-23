<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';
</script>
