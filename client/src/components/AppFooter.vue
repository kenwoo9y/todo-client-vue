<template>
    <v-footer app :elevation="5" color="primary" class="d-flex align-center justify-center">
        <div>
            {{ `© ${copyright.date} ${copyright.name}` }}
        </div>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        copyright: {
            date: "2024",
            name: "kenwoo9y",
        }
    })
}
</script>