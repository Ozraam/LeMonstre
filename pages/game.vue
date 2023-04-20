<script setup>
import { useGameStore } from '~/stores/Game';

const game = useGameStore();
</script>

<template>
    <main class="container-fluid justify-content-between">
        <div class="row">
            <InforComponent />
            <div class="col">
                <div class="row my-3">
                    <div class="col-12 col-md-4 h-100">
                        <ObjectifComponent/>
                        <InfoLevel/>
                    </div>
                    <div class="col-12 col-md">
                        <PlayerComponent/>
                    </div>
                </div>
            </div>
        </div>
        <MonsterComponent v-if="game.currentAction === useActions().actions.fight" class="activated"/>
        <EatingChoice v-else-if="game.currentAction === useActions().actions.eat" class="activated"/>
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

