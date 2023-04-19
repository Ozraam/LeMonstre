<script setup>
import { useMonsterStore } from '~/stores/Monster';
import { useGameStore } from '~/stores/Game';
const monster = useMonsterStore();
const game = useGameStore();
function clickOnSleep() {
    monster.sleep()
    game.addHistory("sleep")
    game.numTurns++
    game.currentAction = null
}
function clickOnWork() {
    monster.work()
    game.addHistory("work")
    game.numTurns++
    game.currentAction = null
}
function clickOnEat() {
    game.currentAction = "eat"
}
function clickOnFight() {
    game.currentAction = "fight"
}

console.log(game.getMalusLevel)
</script>

<template>
    <div class="row mb-3">
        <div class="col-6 col-md">
        <button type="button" class="d-block w-100 mb-1 btn btn-danger btn-lg" @click="clickOnFight()" :disabled="game.lastAction === 'fight' || game.getMalusLevel.type === 'fight' ">Combattre</button>
        </div>
        <div class="col-6 col-md">
        <button type="button" class="d-block w-100 mb-1 btn btn-dark btn-lg"  @click="clickOnSleep()" :disabled="game.lastAction === 'sleep' || game.getMalusLevel.type === 'sleep'">Dormir</button>
        </div>
        <div class="col-6 col-md">
        <button type="button" class="d-block w-100 mb-1  btn btn-success btn-lg"  @click="clickOnEat()" :disabled="game.lastAction === 'eat' || game.getMalusLevel.type === 'eat'">Manger</button>
        </div>
        <div class="col-6 col-md">
            <button type="button" class="d-block w-100 mb-1 btn btn-warning btn-lg"  @click="clickOnWork()" :disabled="game.lastAction === 'work' || game.getMalusLevel.type === 'work'">Travailler</button>
        </div>
    </div>
</template>