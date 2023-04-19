<script setup>
import { useGameStore } from '~/stores/Game';

const gameStore = useGameStore();


</script>

<template>
    <div class="row">
        <p class="col alert alert-danger">{{gameStore.getMalusLevel.description}}</p>
    </div>
</template>