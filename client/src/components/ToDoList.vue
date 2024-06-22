<template>
    <v-container>
        <div class="d-flex justify-end">
            <TaskCreate />
        </div>
        <p class="text-h3">ToDo</p>
        
        <v-data-table
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="tasks"
            :items-per-page-options="pages"
            items-per-page-text="表示行数"
            class="elevation-1" 
            hover 
            @click:row="router.push('/detail')"
        >
            <template v-slot:item.index="{ index }">
                {{ index + 1 }}
            </template>
            <template v-slot:item.actions="{ item }">
                <TaskEdit />
                <TaskDelete />
            </template>
        </v-data-table>
    </v-container>
</template>
  
<script setup>
import TaskCreate from '@/components/TaskCreate.vue';
import TaskEdit from '@/components/TaskEdit.vue';
import TaskDelete from '@/components/TaskDelete.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useTaskStore } from '@/stores/task.js';

const router = useRouter();
const taskStore = useTaskStore();

const itemsPerPage = ref(5);

const pages = ref([
    {value: 5, title: '5'},
    {value: 10, title: '10'},
    {value: 20, title: '20'},
    {value: -1, title: '$vuetify.dataFooter.itemsPerPageAll'}
]);

const headers = ref([
    { title: '#', align: 'end', sortable: false, key: 'index'}, 
    { title: 'タイトル', align: 'start', key: 'title' }, 
    { title: '期日', align: 'end', key: 'due_date'}, 
    { title: 'ステータス', align: 'end', key: 'status' },
    { title: '操作', align: 'end', sortable: false, key: 'actions' }
]);

const tasks = ref([]);

onMounted(async () => {
    await taskStore.getTasks();  // 非同期関数を呼び出してタスクを取得
    tasks.value = taskStore.tasks;  // 取得したタスクをtasksに設定
});
</script>
  