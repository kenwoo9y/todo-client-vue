<template>
    <v-container>
        <div class="d-flex justify-first">
            <v-btn variant="outlined" class="text-capitalize" @click="router.push('/')">Go Back</v-btn>
        </div>

        <v-card class="md:mx-4 my-4 md:px-4 py-4">
            <v-table hover>
                <tbody>
                    <tr>
                        <td>{{ headerTitles[0] }}</td>
                        <td>{{ task[0].title }}</td>
                    </tr>
                    <tr>
                        <td>{{ headerTitles[1] }}</td>
                        <td>{{ task[0].detail }}</td>
                    </tr>
                    <tr>
                        <td>{{ headerTitles[2] }}</td>
                        <td>{{ task[0].dueDate }}</td>
                    </tr>
                    <tr>
                        <td>{{ headerTitles[3] }}</td>
                        <td>{{ task[0].status }}</td>
                    </tr>
                    <tr>
                        <td>{{ headerTitles[4] }}</td>
                        <td>{{ task[0].created_at }}</td>
                    </tr>
                    <tr>
                        <td>{{ headerTitles[5] }}</td>
                        <td>{{ task[0].updated_at }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const headerTitles = ref([
    "タイトル", "詳細", "期日", "ステータス", "作成日", "更新日"
]);

// Mock
const task = ref([
    { id: '1', title: '朝ごはんを食べる', detail: 'ご飯、味噌汁、納豆、卵', dueDate: '2024-04-10', status: 'done', created_at: '2024-04-01', updated_at: '2024-04-01' }, 
]);
</script>