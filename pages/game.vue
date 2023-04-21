<script setup>
import { storeToRefs } from 'pinia';
import { useGameStore } from '~/stores/Game';

const game = useGameStore();

</script>

<template>
    <PlayerComponent/>
</template>

<style scoped>
    main {
        height: 100vh;
    }
</style>

