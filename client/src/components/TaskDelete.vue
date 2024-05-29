<template>
    <v-icon :icon="mdiDelete" small class="mr-2" @click="openDialog"></v-icon>

    <v-dialog v-model="dialog" max-width="500">
        <v-sheet>
            <v-sheet class="my-2 mx-5">
                <p class="my-4">
                    このタスクを削除します。
                </p>

                <div class="d-flex justify-end my-2">
                    <v-btn class="mx-2 text-capitalize" color="error" @click="handleClick(true)">
                        {{ deleteButtonText }}
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
import { mdiDelete } from '@mdi/js';
import { ref } from 'vue';

const dialog = ref(false);
const deleteButtonText = ref("Delete");
const cancelButtonText = ref("Cancel");

const openDialog = () => {
    dialog.value = true;
};

const handleClick = () => {
    dialog.value = false;
};
</script>