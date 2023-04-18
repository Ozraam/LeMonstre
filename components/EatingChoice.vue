<script setup>
import { useGameStore } from '~/stores/Game';
import { useMonsterStore, foods } from '~/stores/Monster';

const monster = useMonsterStore()
const game = useGameStore()

function eatMonster(food) {
    monster.eat(food)
    game.lastAction = "eat"
    game.numTurns++
    game.currentAction = null
}
</script>


<template>
    <div class="row">
        <div class="col-12 col-sm" v-for="food in foods" :key="food.name">
                    <button class="btn btn-outline-secondary w-100 shadow p-3 mb-5" @click="eatMonster(food)">
                <div>
                    {{ food.name }}
                </div>
                <img :src="food.img" class="img-fluid" :alt="food.img_alt">
                <div>
                    PV : +{{ food.PV }} /
                    Gold : {{ food.P }} /
                    Food: +{{ food.F }}
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