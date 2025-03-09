<template>
  <v-icon
    :icon="mdiPencil"
    small
    class="mr-2"
    @click.stop="openDialog"
  ></v-icon>

  <v-dialog v-model="dialog" max-width="800">
    <v-sheet>
      <v-card title="タスク更新"></v-card>
      <v-sheet class="my-2 mx-5">
        <v-text-field v-model="title" label="タイトル*" required></v-text-field>

        <v-textarea v-model="description" label="詳細"></v-textarea>

        <DatePicker v-model="dueDate" />

        <v-select
          v-model="status"
          :items="statusList"
          label="ステータス*"
          required
        ></v-select>

        <div class="d-flex justify-end my-2">
          <v-btn
            class="mx-2 text-capitalize"
            color="warning"
            @click="handleUpdate"
          >
            更新
          </v-btn>
          <v-btn
            class="mx-2 text-capitalize"
            variant="outlined"
            @click="handleCancel"
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
import { mdiPencil } from '@mdi/js';
import { ref, defineProps, watch } from 'vue';
import { useTaskStore } from '@/stores/task.js';

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const dialog = ref(false);
const statusList = ref(['ToDo', 'Doing', 'Done']);

const title = ref('');
const description = ref('');
const status = ref('');
const dueDate = ref('');

const taskStore = useTaskStore();

const openDialog = () => {
  title.value = props.task.title;
  description.value = props.task.description;
  status.value = props.task.status;
  dueDate.value = props.task.due_date;
  dialog.value = true;
};

const handleUpdate = () => {
  taskStore.updateTask({
    id: props.task.id,
    title: title.value,
    description: description.value,
    status: status.value,
    due_date: dueDate.value,
  });

  dialog.value = false;
};

const handleCancel = () => {
  dialog.value = false;
};

watch(
  () => props.task,
  (newTask) => {
    if (dialog.value) {
      title.value = newTask.title;
      description.value = newTask.detail;
      status.value = newTask.status;
      dueDate.value = newTask.due_date;
    }
  },
  { immediate: true },
);
</script>
