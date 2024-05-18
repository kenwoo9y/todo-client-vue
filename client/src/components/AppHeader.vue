<template>
    <v-app-bar :elevation="5" color="primary">
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
      
        <v-app-bar-title>{{ appName }}</v-app-bar-title>

        <template v-slot:append>
            <v-btn>
                <v-icon :icon="mdiLogin" />
            </v-btn>
        </template>
    </v-app-bar>
</template>

<script>
import { mdiLogin } from '@mdi/js'

export default {
    data: () => ({
        appName: "ToDo List",
        mdiLogin
    })
}
</script>