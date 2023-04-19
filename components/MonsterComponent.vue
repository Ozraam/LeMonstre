<script setup>

import { useMonsterStore} from '~/stores/Monster';
import { useGameStore } from '~/stores/Game';
import { useAnimationStore } from '~/stores/Animation';

const monster = useMonsterStore();
const game = useGameStore();
const fighter = useFighters().fighters;

function click(item){
    monster.fight(item)
    game.addHistory("fight")
    game.incrementNumTurns()
    useAnimationStore().setAnimation(useAnimations().animations.fight, {monster: item})
}
</script>

<template>
    <div class="row mb-3">
        <div class="col-6 col-md" v-for="item in fighter" :key="fighter.alt">
                    <button class="btn btn-outline-secondary w-100 shadow p-3 mb-1" @click="click(item)">
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