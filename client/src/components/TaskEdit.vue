<template>
    <v-icon :icon="mdiPencil" small class="mr-2" @click.stop="openDialog"></v-icon>

    <v-dialog v-model="dialog" max-width="800">
        <v-sheet>
            <v-card title="Edit Task"></v-card>
            <v-sheet class="my-2 mx-5">
                <v-text-field
                    v-model="title" 
                    label="Title*"
                    required
                ></v-text-field>

                <v-textarea 
                    v-model="description" 
                    label="Description"
                ></v-textarea>

                <DatePicker v-model="dueDate"/>

                <v-select 
                    v-model="status"
                    :items=statusList
                    label="Status*"
                    required
                ></v-select>

                <div class="d-flex justify-end my-2">
                    <v-btn class="mx-2 text-capitalize" color="warning" @click="handleUpdate">
                        {{ updateButtonText }}
                    </v-btn>
                    <v-btn class="mx-2 text-capitalize" variant="outlined" @click="handleCancel">
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
import { ref, defineProps, watch } from 'vue';

const props = defineProps({
    task: {
        type: Object, 
        required: true
    }
});

const dialog = ref(false);
const updateButtonText = ref("Update");
const cancelButtonText = ref("Cancel");
const statusList = ref(['ToDo', 'Doing', 'Done'])

const title = ref('');
const description = ref('');
const status = ref('');
const dueDate = ref('');

const openDialog = () => {
    title.value = props.task.title;
    description.value = props.task.description;
    status.value = props.task.status;
    dueDate.value = props.task.due_date;
    console.log('Edit task:', props.task);
    console.log('期限日：', dueDate.value);

    dialog.value = true;
};

const handleUpdate = () => {
    dialog.value = false;
    // Update the task using store or API call
};

const handleCancel = () => {
    dialog.value = false;
};

watch(() => props.task, (newTask) => {
    if (dialog.value) {
        title.value = newTask.title;
        description.value = newTask.detail;
        status.value = newTask.status;
        dueDate.value = newTask.due_date;
    }
}, { immediate: true });
</script>