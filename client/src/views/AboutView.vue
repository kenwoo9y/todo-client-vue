<template>
    <Footer />
    <Header />
    <v-container class="about-page" fluid>
        <v-row>
            <v-col cols="12" class="text-center">
                <v-divider></v-divider>
                <h1 class="my-4">About Us</h1>
                <p>
                    Welcome to our website! We are dedicated to providing the best service
                    to our customers. Our team is passionate and committed to excellence.
                </p>
                <v-divider></v-divider>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import Header from '@/components/AppHeader.vue';
import Footer from '@/components/AppFooter.vue';
</script>