<template>
    <v-icon :icon="mdiDelete" small class="mr-2" @click.stop="openDialog"></v-icon>

    <v-dialog v-model="dialog" max-width="500">
        <v-sheet>
            <v-sheet class="my-2 mx-5">
                <p class="my-4">
                    このタスクを削除します。
                </p>
                <p class="my-4 text-h6">
                    {{ task.title }}
                </p>

                <div class="d-flex justify-end my-2">
                    <v-btn class="mx-2 text-capitalize" color="error" @click="handleDelete(true)">
                        {{ deleteButtonText }}
                    </v-btn>
                    <v-btn class="mx-2 text-capitalize" variant="outlined" @click="handleCancel(false)">
                        {{ cancelButtonText }}
                    </v-btn>
                </div>
            </v-sheet>
        </v-sheet>
    </v-dialog>
</template>

<script setup>
import { mdiDelete } from '@mdi/js';
import { ref, defineProps } from 'vue';
import { useTaskStore } from '@/stores/task.js';

const props = defineProps({
    task: {
        type: Object, 
        required: true
    }
});

const dialog = ref(false);
const deleteButtonText = ref("Delete");
const cancelButtonText = ref("Cancel");

const taskStore = useTaskStore();

const openDialog = () => {
    dialog.value = true;
};

const handleDelete = async () => {
    try {
        await taskStore.deleteTask(props.task.id);
        dialog.value = false;
    } catch (error) {
        console.error('Failed to delete task:', error);
    }
};

const handleCancel = () => {
    dialog.value = false;
};
</script>