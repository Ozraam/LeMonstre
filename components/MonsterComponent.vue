<script setup>

import { useMonsterStore } from '~/stores/Monster';
import { useGameStore } from '~/stores/Game';
import { useAnimationStore } from '~/stores/Animation';

const monster = useMonsterStore();
const game = useGameStore();
const fighter = useFighters().fighters;

function click(item) {
    game.addHistory("fight")
    game.currentAction = null
    function callback() {
        monster.fight(useAnimationStore().options.monster)
        game.incrementNumTurns()
        useAnimationStore().options = {}
    }
    useAnimationStore().setAnimation(useAnimations().animations.fight, { monster: item, callback: callback })
    
}
</script>

<template>
    <div class="card">



    </div>
    <div class="row mb-3">
        <div class="col-6" v-for="item in fighter" :key="fighter.alt">
            <button class="btn btn-outline-secondary w-100 shadow p-3 mb-1" data-bs-dismiss="modal" @click="click(item)">
                <div>
                    {{ item.alt }}
                </div>
                <img :src="item.img" class="img-fluid" :alt="item.alt">
                <div>
                    PV : {{ item.PV }} /
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

.monster{
    width: 100px;
}
</style>