<template>
    <div>
        <p>Carts page</p>
        <p v-if="!dataFetch">Loading...</p>
        <p v-else>{{ dataFetch?.total }}</p>
    </div>
</template>

<script setup lang="ts">
const dataFetch = ref(null as any)
useTerminateConnection()

onMounted(async () => {
    dataFetch.value = await useApi('carts')
})
</script>

<style scoped>

</style>