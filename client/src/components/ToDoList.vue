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
        ></v-data-table>
    </v-container>
</template>
  
<script setup>
import TaskCreate from '@/components/TaskCreate.vue'
import { ref } from 'vue'

const itemsPerPage = ref(5)

const pages = ref([
    {value: 5, title: '5'},
    {value: 10, title: '10'},
    {value: 20, title: '20'},
    {value: -1, title: '$vuetify.dataFooter.itemsPerPageAll'}
])

const headers = ref([
    { title: 'ID', align: 'end', sortable: false, key: 'id' },
    { title: 'タイトル', align: 'start', key: 'title' },
    { title: 'ステータス', align: 'end', key: 'status' },
    { title: '作成日', align: 'end', key: 'created_at' },
    { title: '更新日', align: 'end', key: 'updated_at'}
])

// Mock
const tasks = ref([
    { id: '1', title: '朝ごはんを食べる', status: 'done', created_at: '2024-04-01', updated_at: '2024-04-01' }, 
    { id: '2', title: '歯磨きをする', status: 'doing', created_at: '2024-04-01', updated_at: '2024-04-01' },
    { id: '3', title: '着替える', status: 'todo', created_at: '2024-04-02', updated_at: '2024-04-02' }
])
</script>
  