<script setup>
import { useMonsterStore } from '~/stores/Monster'
import { useGameStore } from '~/stores/Game';


</script>

<template>
    <div>
        <h1>Game</h1>
        <p>Difficulty : {{ useGameStore().difficulty }}</p>
        <p>Monster's name : {{ useMonsterStore().name }}</p>
    </div>
</template>