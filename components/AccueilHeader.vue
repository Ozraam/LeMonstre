<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <h1 class="text-center p-2 bg-transparent ">
        {{ props.title }}
    </h1>
</template>

<style scoped>

</style>