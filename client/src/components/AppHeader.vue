<template>
    <v-app-bar :elevation="5" color="primary">
        <template v-slot:prepend>
            <v-app-bar-nav-icon 
                variant="text" 
                @click.stop="drawer = !drawer"
            >
            </v-app-bar-nav-icon>
        </template>
      
        <v-app-bar-title>{{ appName }}</v-app-bar-title>

        <template v-slot:append>
            <v-btn class="text-capitalize">
                <v-icon :icon="mdiLogin" />
                &thinsp;{{ signOutText }}
            </v-btn>
        </template>
    </v-app-bar>

    <SideMenu v-model="drawer"/>
</template>

<script setup>
import SideMenu from '@/components/SideMenu.vue';
import { mdiLogin } from '@mdi/js';
import { ref } from 'vue';

const appName = ref("ToDo App");
const signOutText = ref("Sign Out");
const drawer = ref(false);
</script>