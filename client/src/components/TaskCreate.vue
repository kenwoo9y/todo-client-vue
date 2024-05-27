<template>
    <v-btn color="primary" variant="outlined" class="text-capitalize">
        {{ buttonText }}
    </v-btn>
</template>

<script setup>
import { ref } from 'vue'

const buttonText = ref("Add Task")
</script>