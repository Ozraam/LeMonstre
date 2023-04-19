<script setup>

import { useMonsterStore,fighter } from '~/stores/Monster';
import { useGameStore } from '~/stores/Game';
const monster = useMonsterStore();
const game = useGameStore();

function click(item){
    monster.fight(item)
    game.addHistory("fight")
    game.numTurns += 1
    game.currentAction = null
    console.log(game.numTurns)
}
</script>

<template>
    <div class="row">
        <div class="col-12 col-sm" v-for="item in fighter" :key="fighter.alt">
                    <button class="btn btn-outline-secondary w-100 shadow p-3 mb-5" @click="click(item)">
                <div>
                    {{ item.alt }}
                </div>
                <img :src="item.img" class="img-fluid" :alt="item.alt">
                <div>
                    PV : +{{ item.PV }} /
                    Gold : {{ item.P }}
                </div>
            </button>
        </div>
    </div>
</template>

<style scoped>
    img {
        max-height: 5em;
    }
</style>