import { ref } from 'vue';
import { defineStore } from 'pinia';
import { formatDate } from '@/utils/dateUtils'

export const useTaskStore = defineStore('task', () => {
  // state
  const tasks = ref([]);

  // getters
  function getTasks() {
    return tasks.value;
  }

  // actions
  function addTask(task) {
    tasks.value.push({
      title: task.title, 
      description: task.description, 
      dueDate: formatDate(task.dueDate), 
      status: task.status
    });
  }

  function deleteTask(id) {
    tasks.value = tasks.value.filter(task => task.id !== id);
  }

  return { 
    tasks, 
    getTasks, 
    addTask, 
    deleteTask
  };
});