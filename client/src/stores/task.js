import { ref } from 'vue';
import { defineStore } from 'pinia';
import { formatDate } from '@/utils/dateUtils';
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
  
  function fetchTask(id) {
    return tasks.value.find((task) => task.id === id);
  }

  // actions
  async function createTask(task) {
    try {
      const taskPayload = {
        title: task.title,
        description: task.description,
        due_date: formatDate(task.due_date),
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
      const response = await apiClient.put(`/tasks/${taskUpdate.id}`, {
        title: taskUpdate.title,
        description: taskUpdate.description,
        due_date: formatDate(taskUpdate.due_date),
        status: taskUpdate.status,
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
