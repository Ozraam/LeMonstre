<script setup>
import { useGameStore } from '~/stores/Game';

console.log(useGameStore().history[0]);
</script>

<template>
    <div class="accordion w-100 History-accordion" id="accordionHistory">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingHistory">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHistory"
                    aria-expanded="true" aria-controls="collapseHistory">
                    Historique
                </button>
            </h2>
            <div id="collapseHistory" class="accordion-collapse collapse show accordion-History"
                aria-labelledby="headingHistory" data-bs-parent="#accordionHistory" v-bs-collapse>
                <div class="accordion-body">
                    <ul class="list-group" v-if="useGameStore().history.length !==0">
                        <li class="list-group-item" v-for="history in useGameStore().history">
                            (tour {{ history.turn + 1 }}) -
                            {{ { "fight": "Combat :", "eat": "Manger :", "sleep": "Dormir", "work": "Travail" }[history.action] }}
                            <span v-if="history.detail">{{ history.detail }}</span>
                        </li>
                    </ul>
                    <p v-else>Aucun historique</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>


*{
    list-style-type: none;
}
.list-group {
    max-height: 500px;
    overflow-y: auto;
}

.list-group::-webkit-scrollbar {
    width: 0.5rem;
}

.list-group::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 100px;
}

.list-group::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 100px;
}
</style>