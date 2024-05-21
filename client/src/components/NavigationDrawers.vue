<template>
    <v-navigation-drawer v-model="model">
        <v-list nav>
            <v-list-item title="Home" value="home"></v-list-item>
            <v-list-item title="About" value="about"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
const model = defineModel()
</script>