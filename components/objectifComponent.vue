<script setup>
import { useGameStore } from '~/stores/Game';


const game = useGameStore();



</script>




<template>
<div class="">
        <div class="card mt-5">
            <div class="card-body">
                <h5 class="card-title">Objectif</h5>
                <h6 class="card-subtitle mb-2 text-muted">Objectif pour le niveau : {{game.level}}</h6>
                <p class="card-text">{{ game.getObjectiveLevel.description}}</p>
                <p class="card-text">Objetif : {{ game.getObjectiveLevel.value}}</p>
                <p class="card-text">Progrès : {{ game.getObjectiveLevel.progress }}</p>
                <div class="progress">
                    <div class="progress-bar bg-primary" role="progressbar" :style="{width: game.getObjectiveLevel.progress/game.getObjectiveLevel.value *100 + '%'}"
                        :aria-valuenow="game.getObjectiveLevel.progress/game.getObjectiveLevel.value*100" aria-valuemin="0" aria-valuemax="100">{{ game.getObjectiveLevel.progress + "/" + game.getObjectiveLevel.value }}</div>
                </div>
            </div>
    </div>
</div>
</template>