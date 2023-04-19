<script setup>
import { useGameStore } from '~/stores/Game';

const gameStore = useGameStore();


</script>

<template>
    <div class="row mt-3">
        <p class="col alert alert-danger" v-if="gameStore.getMalusLevel!==null">{{gameStore.getMalusLevel.description}}</p>
    </div>
</template>