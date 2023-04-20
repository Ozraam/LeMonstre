<script setup>

import { useGameStore } from '~/stores/Game';

const game = useGameStore();



</script>




<template>
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </symbol>
</svg>

<div class="accordion w-100" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <svg v-if="game.getMalusLevel !== null" class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:" data-toggle=""><use xlink:href="#exclamation-triangle-fill"/></svg>
                Objectif
            </button>
            <span class="accordion-button d-none d-xl-block">
                <svg v-if="game.getMalusLevel !== null" class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                Objectif
            </span>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show d-xl-block" aria-labelledby="headingOne" data-bs-parent="#accordionExample" v-bs-collapse>
            <div class="accordion-body">
                <h6 class="card-subtitle mb-2 text-muted">Objectif pour le niveau : {{game.level}}</h6>
                <p class="card-text">{{ game.getObjectiveLevel.description}}</p>
                <p class="card-text">Objetif : {{ game.getObjectiveLevel.value}}</p>
                <p class="card-text">Progrès : {{ game.getObjectiveLevel.progress }}</p>
                <div class="progress">
                    <div class="progress-bar bg-primary" role="progressbar" :style="{width: game.getObjectiveLevel.progress/game.getObjectiveLevel.value *100 + '%'}" :aria-valuenow="game.getObjectiveLevel.progress/game.getObjectiveLevel.value*100" aria-valuemin="0" aria-valuemax="100">
                        <span v-if="game.getObjectiveLevel.progress / game.getObjectiveLevel.value *100 >= 10">
                            {{ game.getObjectiveLevel.progress / game.getObjectiveLevel.value *100 +"%" }}
                        </span>
                    </div>
                    <div class="progress-value" v-if="game.getObjectiveLevel.progress / game.getObjectiveLevel.value *100 < 10" >{{ game.getObjectiveLevel.progress / game.getObjectiveLevel.value *100 +"%" }}</div>
                </div>
                <MalusComponent />
            </div>
        </div>
    </div>
</div>

</template>

<style setup>

.collapse .show {
    z-index: 100;
}



</style>