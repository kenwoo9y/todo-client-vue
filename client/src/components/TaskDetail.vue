<template>
  <v-container>
    <div class="d-flex justify-end">
      <TaskUpdate :task="task" />
      <TaskDelete :task="task" />
    </div>
    <p class="text-h4">タスク詳細</p>

    <v-card class="md:mx-4 my-4 md:px-4 py-4">
      <v-table hover>
        <tbody>
          <tr>
            <td>{{ headerTitles[0] }}</td>
            <td>{{ task.title }}</td>
          </tr>
          <tr>
            <td>{{ headerTitles[1] }}</td>
            <td>{{ task.description }}</td>
          </tr>
          <tr>
            <td>{{ headerTitles[2] }}</td>
            <td>{{ task.due_date }}</td>
          </tr>
          <tr>
            <td>{{ headerTitles[3] }}</td>
            <td>{{ task.status }}</td>
          </tr>
          <tr>
            <td>{{ headerTitles[4] }}</td>
            <td>{{ formatDateTime(task.created_at) }}</td>
          </tr>
          <tr>
            <td>{{ headerTitles[5] }}</td>
            <td>{{ formatDateTime(task.updated_at) }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup>
import TaskUpdate from '@/components/TaskUpdate.vue';
import TaskDelete from '@/components/TaskDelete.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useTaskStore } from '@/stores/task.js';
import { formatDateTime } from '@/utils/dateUtils';

const route = useRoute();
const taskStore = useTaskStore();

const headerTitles = ref([
  'タイトル',
  '詳細',
  '期日',
  'ステータス',
  '作成日時',
  '更新日時',
]);

const task = ref({});

onMounted(async () => {
  const taskId = parseInt(route.params.id, 10);
  await taskStore.getTasks();
  const fetchedTask = taskStore.getTask(taskId);
  if (fetchedTask) {
    task.value = fetchedTask;
  } else {
    console.error(`Task with id ${taskId} not found`);
  }
});
</script>
