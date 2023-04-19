<script setup>
import { dataToEsm } from '@rollup/pluginutils';
import { resetTracking } from '@vue/reactivity';
import { useGameStore } from '~/stores/Game';


const game = useGameStore();



</script>




<template>
<!--    <div class="objectif">
        <div class="objectif_title">
            <h3>Objectif</h3>
        </div>
        <div class="objectif_list">
            <h3>Objectif pour le niveau : {{game.level}}</h3>
            <p>type :{{ game.getObjectiveLevel.type}}</p>
            <p>value :{{ game.getObjectiveLevel.value}}</p>
            <p>progress :{{ game.getObjectiveLevel.progress }}</p>
        </div>
    </div>
-->
<!--creer une carte avec boostrap-->
<div class="row mt-5">
    <div class="col-12 col-sm">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Objectif</h5>
                <h6 class="card-subtitle mb-2 text-muted">Objectif pour le niveau : {{game.level}}</h6>
                <p class="card-text">type :{{ game.getObjectiveLevel.type}}</p>
                <p class="card-text">value :{{ game.getObjectiveLevel.value}}</p>
                <p class="card-text">progress :{{ game.getObjectiveLevel.progress }}</p>
                <MalusComponent/>
            </div>
        </div>
    </div>
</div>
</template>