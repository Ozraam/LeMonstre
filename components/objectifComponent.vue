<script setup>
import { dataToEsm } from '@rollup/pluginutils';
import { resetTracking } from '@vue/reactivity';
import { useGameStore } from '~/stores/Game';


const game = useGameStore();



</script>


<template>
    <div class="objectif">
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
</template>