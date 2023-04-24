<script setup>
import { useGameStore } from '~/stores/Game';

const gameStore = useGameStore();

const malus = gameStore.getMalusLevel;


</script>

<template>
    <div class="row mt-3">
        <div v-for="item in malus">
            <p class="col alert alert-danger d-block" >
                {{item.description}}
            </p>
        </div>
    </div>
</template>