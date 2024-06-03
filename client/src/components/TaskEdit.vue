<template>
    <v-icon :icon="mdiPencil" small class="mr-2" @click="openDialog"></v-icon>

    <v-dialog v-model="dialog" max-width="800">
        <v-sheet>
            <v-card title="Edit Task"></v-card>
            <v-sheet class="my-2 mx-5">
                <v-text-field 
                    label="Title*"
                    required
                ></v-text-field>

                <v-textarea 
                    v-model="text" 
                    label="Description"
                ></v-textarea>

                <v-select 
                    :items=statusList
                    label="Status*"
                    required
                ></v-select>

                <DatePicker />

                <div class="d-flex justify-end my-2">
                    <v-btn class="mx-2 text-capitalize" color="warning" @click="handleClick(true)">
                        {{ updateButtonText }}
                    </v-btn>
                    <v-btn class="mx-2 text-capitalize" variant="outlined" @click="handleClick(false)">
                        {{ cancelButtonText }}
                    </v-btn>
                </div>
            </v-sheet>
        </v-sheet>
    </v-dialog>
</template>

<script setup>
import DatePicker from '@/components/DatePicker.vue';
import { mdiPencil } from '@mdi/js';
import { ref } from 'vue';

const dialog = ref(false);
const updateButtonText = ref("Update");
const cancelButtonText = ref("Cancel");
const statusList = ref(['ToDo', 'Doing', 'Done'])

const openDialog = () => {
    dialog.value = true;
};

const handleClick = () => {
    dialog.value = false;
};
</script>