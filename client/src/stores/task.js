import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiClient } from '@/plugins/axios';

export const useTaskStore = defineStore('task', () => {
  // state
  const tasks = ref([]);

  // getters
  async function fetchTasks() {
    try {
      const response = await apiClient.get('/tasks');
      tasks.value = response.data;
      console.log('tasks:', tasks.value);
    } catch (error) {
      console.error('Failed to get tasks:', error);
    }
  }

  async function fetchTask(id) {
    try {
      const response = await apiClient.get(`/tasks/${id}`);
      const fetchedTask = response.data;

      // 既存のタスク配列内で更新
      const index = tasks.value.findIndex((task) => task.id === id);
      if (index !== -1) {
        tasks.value[index] = fetchedTask;
      } else {
        tasks.value.push(fetchedTask);
      }

      return fetchedTask;
    } catch (error) {
      console.error('Failed to fetch task:', error);
      throw error;
    }
  }

  // actions
  async function createTask(task) {
    try {
      const taskPayload = {
        title: task.title,
        description: task.description,
        due_date: task.due_date,
        status: task.status,
        owner_id: task.owner_id,
      };
      console.log('Sending task:', taskPayload);
      const response = await apiClient.post('/tasks', taskPayload);
      tasks.value.push(response.data);
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  }

  async function updateTask(taskUpdate) {
    try {
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
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  }

  async function deleteTask(id) {
    try {
      await apiClient.delete(`/tasks/${id}`);
      tasks.value = tasks.value.filter((task) => task.id !== id);
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  }

  return {
    tasks,
    fetchTasks,
    fetchTask,
    createTask,
    updateTask,
    deleteTask,
  };
});
