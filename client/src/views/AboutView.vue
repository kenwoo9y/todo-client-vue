<template>
  <Footer />
  <Header />
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-divider />
        <h1 class="my-4">About Us</h1>
        <p>This is an about page</p>
        <v-divider />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Header from '@/components/AppHeader.vue';
import Footer from '@/components/AppFooter.vue';
</script>
