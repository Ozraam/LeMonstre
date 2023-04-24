<script setup>

import { useGameStore } from '~/stores/Game';

const game = useGameStore();



</script>




<template>
    <svg class="color-svg" xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
            <path
                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
    </svg>
    <div class="modal fade" id="modalMalus" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <MalusComponent />

                </div>
            </div>
        </div>
    </div>
    <div class="accordion w-100 objective-accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header position-relative" id="headingOne">
                <button class="accordion-button objectif position-relative" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Objectifs
                </button>
                <button class="alert-button position-absolute" v-if="game.getMalusLevel.length !== 0" data-bs-toggle="modal"
                    data-bs-target="#modalMalus"><svg class="bi flex-shrink-0 me-2 color-svg" width="24" height="24"
                        role="img" aria-label="Success:">
                        <use xlink:href="#exclamation-triangle-fill" />
                    </svg></button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample" v-bs-collapse>
                <div class="accordion-body">
                    <h3 class="card-subtitle mb-2 text-muted h6">Objectifs pour le niveau : {{ game.objectivesIndex + 1 }}
                    </h3>
                    <p class="card-text">{{ game.getObjectivesLevel.description }}</p>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="objective in  game.getObjectivesLevel.list " :key="objective">
                            {{ objective.description }}
                            <div class="progress">
                                <div :class="{
                                    'progress-bar': true,
                                    'bg-primary': objective.progress < objective.value,
                                    'bg-success': objective.progress >= objective.value
                                }" role="progressbar"
                                    :style="{ width: (objective.progress / objective.value) * 100 + '%' }"
                                    :aria-valuenow="(objective.progress / objective.value) * 100" aria-valuemin="0"
                                    aria-valuemax="100">
                                    <span v-if="(objective.progress / objective.value) * 100 >= 10" class="ml-2">
                                        {{ objective.progress }} / {{ objective.value }}
                                    </span>
                                </div>
                                <div class="progress-value" v-if="(objective.progress / objective.value) * 100 < 10">
                                    {{ objective.progress }} / {{ objective.value }}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.accordion-button:hover {
    z-index: unset;
}

.collapse .show {
    z-index: 100;
}

.objective-accordion {
    /*mettre au centre*/
    top: 3%;
    left: 1%;
}


.alert-button {
    background-color: transparent;
    border: none;
    top: 0;
    left: 20%;
    z-index: 10;
}

.alert-button:hover .color-svg {
    fill: red;
}

.list-group {
    max-height: 210px;
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