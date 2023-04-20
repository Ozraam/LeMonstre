<script setup>
import { useMonsterStore } from '~/stores/Monster';
import { useGameStore } from '~/stores/Game';
import { useAnimationStore } from '~/stores/Animation';
const monster = useMonsterStore();
const game = useGameStore();
const animation = useAnimationStore();

function clickOnSleep() {
    game.incrementNumTurns()
    monster.sleep()
    game.addHistory("sleep")
    animation.setAnimation(useAnimations().animations.sleep)

    game.currentAction = null
}
function clickOnWork() {
    monster.work()
    game.addHistory("work")
    animation.setAnimation(useAnimations().animations.work)
    game.incrementNumTurns()
    game.currentAction = null
}
function clickOnEat() {
    game.currentAction = "eat"
}
function clickOnFight() {
    game.currentAction = "fight"
}

</script>

<template>
    <div class="row mb-3">
        <div class="col-6 col-md">
            <button type="button" class="d-block w-100 mb-1 btn btn-danger btn-lg" @click="clickOnFight()" 
                :disabled="game.lastAction === 'fight' 
                    || game.getMalusLevel?.type === useActions().actions.fight 
                    || animation.isAnimating"
            >Combattre</button>
        </div>
        <div class="col-6 col-md">
            <button type="button" class="d-block w-100 mb-1 btn btn-dark btn-lg"  @click="clickOnSleep()" 
                :disabled="game.lastAction === 'sleep' 
                    || game.getMalusLevel?.type === useActions().actions.sleep
                    || animation.isAnimating"
            >Dormir</button>
        </div>
        <div class="col-6 col-md">
            <button type="button" class="d-block w-100 mb-1  btn btn-success btn-lg"  @click="clickOnEat()" 
                :disabled="game.lastAction === 'eat' 
                    || game.getMalusLevel?.type === useActions().actions.eat
                    || animation.isAnimating"
            >Manger</button>
        </div>
        <div class="col-6 col-md">
            <button type="button" class="d-block w-100 mb-1 btn btn-warning btn-lg"  @click="clickOnWork()" 
                :disabled="game.lastAction === 'work' 
                    || game.getMalusLevel?.type === useActions().actions.work
                    || animation.isAnimating"
            >Travailler</button>
        </div>
    </div>
</template>