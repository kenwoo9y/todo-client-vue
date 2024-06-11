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
import { ref, computed, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: String, 
        default: ''
    }
});
const emit = defineEmits(['update:modelValue']);

const showDatePicker = ref(false);
const localSelectedDate = ref(null);

const formattedDate = computed(() => {
    return localSelectedDate.value ? new Date(localSelectedDate.value).toLocaleDateString() : '';
});

const updateDate = (date) => {
    localSelectedDate.value = date;
    emit('update:modelValue', date)
    showDatePicker.value = false;
};

watch(() => props.modelValue, (newValue) => {
    localSelectedDate.value = newValue;
});
</script>