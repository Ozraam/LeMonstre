<script setup>
import { useGameStore } from '~/stores/Game';
import { useMonsterStore, foods } from '~/stores/Monster';


function eatMonster(food) {
    const monster = useMonsterStore()
    const game = useGameStore()
    monster.eat(food)
    game.updateProgress()
}



</script>


<template>
    <div class="eatChoice row g-2">
        <button class="btn btn-outline-secondary col-auto d-flex flex-column justify-content-between align-items-center" v-for="food in foods" @click="eatMonster(food)" :key="food.name">
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
</template>

<style scoped>
    img {
        max-height: 5em;
    }

    
</style>