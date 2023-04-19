<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <h1 class="card text-center p-2 ">
        {{ props.title }}
    </h1>
</template>

<style scoped>

</style>