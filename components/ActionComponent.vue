<script setup>
import { useMonsterStore } from '~/stores/Monster';
import { useGameStore } from '~/stores/Game';
const monster = useMonsterStore();
const game = useGameStore();
function clickOnSleep() {
    monster.sleep()
    game.lastAction = "sleep"
    game.numTurns++
    game.currentAction = null
}
function clickOnWork() {
    monster.work()
    game.lastAction = "work"
    game.numTurns++
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
    <div class="row">
        <div class="col-12 d-flex justify-content-around">
            <button type="button" class="btn btn-danger btn-lg" @click="clickOnFight()" :disabled="game.lastAction === 'fight'">Combattre</button>
            <button type="button" class="btn btn-dark btn-lg"  @click="clickOnSleep()" :disabled="game.lastAction === 'sleep'">Dormir</button>
            <button type="button" class="btn btn-success btn-lg" @click="clickOnEat()" :disabled="game.lastAction === 'eat'">Manger</button>
            <button type="button" class="btn btn-warning btn-lg"  @click="clickOnWork()" :disabled="game.lastAction === 'work'">Travailler</button>
        </div>
    </div>
</template>

<style scoped>
.bottom_button {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}
.action button{
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background-color: #F5F5F5;
    border: none;
    font-size: 1.2rem;
    font-weight: 600;
    color: #000000;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
.action button:hover{
    background-color: #E0E0E0;
    scale: 1.1;
}
</style>