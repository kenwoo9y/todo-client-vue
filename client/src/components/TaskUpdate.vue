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
      <task-form
        :initial-data="formData"
        :status-list="statusList"
        submit-text="更新"
        submit-color="warning"
        @submit="handleSubmit"
        @cancel="handleCancel"
      />
    </v-sheet>
  </v-dialog>
</template>

<script setup>
import { mdiPencil } from '@mdi/js';
import { ref, defineProps, watch } from 'vue';
import { useTaskStore } from '@/stores/task.js';
import TaskForm from '@/components/TaskForm.vue';

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const dialog = ref(false);
const statusList = ref(['ToDo', 'Doing', 'Done']);

const formData = ref({
  title: '',
  description: '',
  status: '',
  due_date: '',
  owner_id: '',
});

const taskStore = useTaskStore();

const openDialog = () => {
  dialog.value = true;
};

const handleSubmit = (formData) => {
  taskStore.updateTask({
    id: props.task.id,
    ...formData,
  });
  dialog.value = false;
};

const handleCancel = () => {
  dialog.value = false;
};

watch(
  () => props.task,
  (newTask) => {
    if (newTask) {
      formData.value = {
        title: newTask.title || '',
        description: newTask.description || '',
        status: newTask.status || '',
        due_date: newTask.due_date ? newTask.due_date : '',
        owner_id: newTask.owner_id || '',
      };
    }
  },
  { immediate: true },
);
</script>
