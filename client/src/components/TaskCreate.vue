<template>
  <v-btn color="primary" class="text-capitalize" @click="openDialog">
    タスク作成
  </v-btn>

  <v-dialog v-model="dialog" max-width="800">
    <v-sheet>
      <v-card title="新規タスク作成"></v-card>
      <v-sheet class="my-2 mx-5">
        <v-text-field
          v-model="newTask.title"
          label="タイトル*"
          required
        ></v-text-field>

        <v-textarea v-model="newTask.description" label="詳細"></v-textarea>

        <date-picker v-model="newTask.dueDate"></date-picker>

        <v-select
          v-model="newTask.status"
          :items="statusList"
          label="ステータス*"
          required
        ></v-select>

        <div class="d-flex justify-end my-2">
          <v-btn
            class="mx-2 text-capitalize"
            color="primary"
            @click="handleClick(true)"
          >
            作成
          </v-btn>
          <v-btn
            class="mx-2 text-capitalize"
            variant="outlined"
            @click="handleClick(false)"
          >
            キャンセル
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
