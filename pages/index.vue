<template>
    <div>
        <p>Home Products page</p>
        <p v-if="!dataFetch">Loading...</p>
        <p v-else>{{ dataFetch?.total }}</p>
    </div>
</template>

<script setup lang="ts">
const dataFetch = ref(null as any)
  useTerminateConnection()

onMounted(async () => {
    dataFetch.value = await useApi('products')
})
</script>

<style scoped></style>
