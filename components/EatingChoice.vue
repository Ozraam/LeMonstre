<script setup>
import { useGameStore } from '~/stores/Game';
import { useMonsterStore} from '~/stores/Monster';
import { useAnimationStore } from '~/stores/Animation';

const monster = useMonsterStore()
const game = useGameStore()
const foods = useFoods().foods

function eatMonster(food) {
    monster.eat(food)
    game.addHistory("eat")
    useAnimationStore().setAnimation(useAnimations().animations.food, {food: food})
    game.incrementNumTurns()
}
</script>


<template>
    <div class="row mb-3">
        <div class="col-6 col-md" v-for="food in foods" :key="food.name">
                    <button class="btn btn-outline-secondary w-100 shadow p-3 mb-2" @click="eatMonster(food)">
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