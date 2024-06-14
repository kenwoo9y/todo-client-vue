import { ref } from 'vue';
import { defineStore } from 'pinia';
import { formatDate } from '@/utils/dateUtils'

export const useTaskStore = defineStore('task', () => {
  // state
  const tasks = ref([]);

  // getters
  function getTask(id) {
    return tasks.value.find(task => task.id === id);
  }

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

  function updateTask(taskUpdate) {
    const index = tasks.value.findIndex(task => task.id === taskUpdate.id);
    if (index !== -1) {
      tasks.value[index] = {
        ...tasks.value[index], 
        ...updateTask, 
        dueDate: formatDate(taskUpdate.dueDate)
      };
    }
  }

  function deleteTask(id) {
    tasks.value = tasks.value.filter(task => task.id !== id);
  }

  return { 
    tasks, 
    getTask, 
    getTasks, 
    addTask, 
    updateTask, 
    deleteTask
  };
});