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
        :initial-data="editingTask"
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
import { formatDate } from '@/utils/dateUtils';

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const dialog = ref(false);
const statusList = ref(['ToDo', 'Doing', 'Done']);

const editingTask = ref({
  title: props.task.title,
  description: props.task.description,
  due_date: props.task.due_date ? formatDate(props.task.due_date) : '',
  status: props.task.status,
  owner_id: props.task.owner_id,
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
    editingTask.value = {
      title: newTask.title,
      description: newTask.description,
      due_date: newTask.due_date ? formatDate(newTask.due_date) : '',
      status: newTask.status,
      owner_id: newTask.owner_id,
    };
  },
  { immediate: true },
);
</script>
