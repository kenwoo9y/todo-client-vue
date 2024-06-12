import { ref } from 'vue';
import { defineStore } from 'pinia';

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
      dueDate: task.dueDate, 
      status: task.status
    });

    // print log
    console.log(tasks.value[0]);
  };

  return { 
    tasks, 
    getTasks, 
    addTask
  };
});