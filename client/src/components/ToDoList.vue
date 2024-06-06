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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

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

// Mock
const tasks = ref([
    { id: '1', title: '朝ごはんを食べる', due_date: '2024-04-10', status: 'done', created_at: '2024-04-01', updated_at: '2024-04-01' }, 
    { id: '2', title: '歯磨きをする', due_date: '2024-04-11', status: 'doing', created_at: '2024-04-01', updated_at: '2024-04-01' },
    { id: '3', title: '着替える', due_date: '2024-04-12', status: 'todo', created_at: '2024-04-02', updated_at: '2024-04-02' }
]);
</script>
  