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
@font-face{
    font-family: 'Valorax';
    src: local("Valorax"), url('~/assets/font/valorax-font/Valorax-lg25V.otf'), format("opentype");
}
h1 {
    font-family: 'Valorax';
    font-size: 1.5em;
}
</style>