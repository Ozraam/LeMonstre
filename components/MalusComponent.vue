<script setup>
import { useGameStore } from '~/stores/Game';

const gameStore = useGameStore();

const malus = gameStore.getMalusLevel;


</script>

<template>
    <div>
        <p v-for="item in malus" class="alert alert-danger d-block my-1" >{{item.description}}</p>
    </div>
</template>

<style>

</style>