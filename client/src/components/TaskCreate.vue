<template>
  <v-btn
    color="primary"
    variant="outlined"
    class="text-capitalize"
    @click="openDialog"
  >
    {{ addButtonText }}
  </v-btn>

  <v-dialog v-model="dialog" max-width="800">
    <v-sheet>
      <v-card title="New Task"></v-card>
      <v-sheet class="my-2 mx-5">
        <v-text-field
          v-model="newTask.title"
          label="Title*"
          required
        ></v-text-field>

        <v-textarea
          v-model="newTask.description"
          label="Description"
        ></v-textarea>

        <date-picker v-model="newTask.dueDate"></date-picker>

        <v-select
          v-model="newTask.status"
          :items="statusList"
          label="Status*"
          required
        ></v-select>

        <div class="d-flex justify-end my-2">
          <v-btn
            class="mx-2 text-capitalize"
            color="primary"
            @click="handleClick(true)"
          >
            {{ registerButtonText }}
          </v-btn>
          <v-btn
            class="mx-2 text-capitalize"
            variant="outlined"
            @click="handleClick(false)"
          >
            {{ cancelButtonText }}
          </v-btn>
        </div>
      </v-sheet>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
import DatePicker from '@/components/DatePicker.vue';
import { ref } from 'vue';
import { useTaskStore } from '@/stores/task.js';

const dialog = ref(false);
const addButtonText = ref('Add Task');
const registerButtonText = ref('Register Now');
const cancelButtonText = ref('Cancel');
const statusList = ref(['ToDo', 'Doing', 'Done']);

const taskStore = useTaskStore();
const newTask = ref({
  title: '',
  description: '',
  dueDate: '',
  status: 'ToDo',
  owner_id: '1',
});

const openDialog = () => {
  dialog.value = true;
};

const handleClick = (isRegister) => {
  if (isRegister) {
    taskStore.addTask(newTask.value);
    newTask.value = {
      title: '',
      description: '',
      dueDate: '',
      status: 'ToDo',
      owner_id: '',
    };
  }
  dialog.value = false;
};
</script>
