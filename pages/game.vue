<script setup>
import { useGameStore } from '~/stores/Game';

const game = useGameStore();
</script>

<template>
    <main class="container-fluid d-flex flex-column justify-content-between">
        <div class="row ">
            <div class="col">
                <InforComponent />
            </div>
        </div>
        <div class="row activated">
            <div class="col-4">
                <ObjectifComponent/>
            </div>
            <div class="col">
                <PlayerComponent/>
            </div>
        </div>
        <div class="row d-flex flex-column">
            <div class="col">
                <MonsterComponent v-if="game.currentAction === 'fight'" class="activated"/>
            </div>
            <div class="col">
                <EatingChoice v-if="game.currentAction === 'eat'" class="activated"/>
            </div>
        </div>
        <ActionComponent class="test"/>
    </main>
</template>

<style scoped>
    main {
        height: 100vh;
    }
    /*create animation*/
    @keyframes up {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        50% {
            opacity: 0.1;
        }
        75% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }
    /*used animation for class activated*/
    .activated {
        z-index: 10;
        animation: up 0.5s ease-in-out;
    }
    .test {
        transition: all 0.5s ease-in-out;
    }
</style>

