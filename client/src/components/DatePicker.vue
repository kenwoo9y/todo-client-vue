<template>
    <v-text-field 
        v-model="formattedDate" 
        label="Due Date" 
        readonly
        @click="showDatePicker = true"
    ></v-text-field>

    <v-dialog v-model="showDatePicker">
        <v-date-picker 
            v-model="selectedDate" 
            @update:modelValue="updateDate"
        ></v-date-picker>
    </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';

const showDatePicker = ref(false);
const selectedDate = ref(null);

const formattedDate = computed(() => {
    return selectedDate.value ? new Date(selectedDate.value).toLocaleDateString() : '';
});

const updateDate = (date) => {
    selectedDate.value = date;
    showDatePicker.value = false;
};
</script>