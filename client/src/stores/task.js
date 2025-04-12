import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiClient } from '@/plugins/axios';

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([]);
  const loading = ref(false);

  async function fetchTasks() {
    loading.value = true;
    try {
      const response = await apiClient.get('/tasks');
      tasks.value = response.data || [];
    } catch {
      tasks.value = [];
    } finally {
      loading.value = false;
    }
  }

  async function fetchTask(id) {
    try {
      const response = await apiClient.get(`/tasks/${id}`);
      const index = tasks.value.findIndex((task) => task.id === id);
      if (index !== -1) {
        tasks.value[index] = response.data;
      } else {
        tasks.value.push(response.data);
      }
      return response.data;
    } catch {
      return null;
    }
  }

  async function createTask(task) {
    const taskPayload = {
      title: task.title,
      description: task.description,
      due_date: task.due_date,
      status: task.status,
      owner_id: task.owner_id,
    };
    const response = await apiClient.post('/tasks', taskPayload);
    tasks.value.push(response.data);
  }

  async function updateTask(taskUpdate) {
    const response = await apiClient.patch(`/tasks/${taskUpdate.id}`, {
      title: taskUpdate.title,
      description: taskUpdate.description,
      due_date: taskUpdate.due_date,
      status: taskUpdate.status,
      owner_id: taskUpdate.owner_id,
    });

    const index = tasks.value.findIndex((task) => task.id === taskUpdate.id);
    if (index !== -1) {
      tasks.value[index] = response.data;
    }
  }

  async function deleteTask(id) {
    await apiClient.delete(`/tasks/${id}`);
    tasks.value = tasks.value.filter((task) => task.id !== id);
  }

  return {
    tasks,
    loading,
    fetchTasks,
    fetchTask,
    createTask,
    updateTask,
    deleteTask,
  };
});
