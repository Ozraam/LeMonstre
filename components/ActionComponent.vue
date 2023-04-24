<script setup>
import { useMonsterStore } from '~/stores/Monster';
import { useGameStore } from '~/stores/Game';
import { useAnimationStore } from '~/stores/Animation';
const monster = useMonsterStore();
const game = useGameStore();
const animation = useAnimationStore();



function actionInMalus(action){
    for (let i = 0; i < game.getMalusLevel.length; i++) {
        if(game.getMalusLevel[i].type === action){
            return true
        }
    }
    return false
}
function clickOnSleep() {
    game.addHistory("sleep")
    animation.setAnimation(useAnimations().animations.sleep, {
        callback: () => {
            monster.sleep()
            game.incrementNumTurns()
        }
    })

    game.currentAction = null
}
function clickOnWork() {
    game.addHistory("work")
    animation.setAnimation(useAnimations().animations.work, {
        callback: () => {
            monster.work()
            game.incrementNumTurns()
        }
    })

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
    <div class="row" style="z-index: 100;">
        <div class="col col-md test">
            <button type="button" class="d-block  mb-1 btn border-0 m-auto " data-bs-toggle="modal" data-bs-target="#exampleModal" @click="clickOnFight()" :disabled="game.lastAction === 'fight'
                || actionInMalus(useActions().actions.fight)
                || animation.isAnimating"><img src="~/assets/img/icon/epee.png" class="icon-button"></button>
        </div>
        <div class="col col-md">
            <button type="button" class="d-block mb-1 btn border-0 m-auto" @click="clickOnSleep()" :disabled="game.lastAction === 'sleep'
                || actionInMalus(useActions().actions.sleep)
                || animation.isAnimating"><img src="~/assets/img/icon/lit.png" class="icon-button"></button>
        </div>
        <div class="col col-md">
            <button type="button" class="d-block mb-1 btn border-0 m-auto" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="clickOnEat()" :disabled="game.lastAction === 'eat'
                || actionInMalus(useActions().actions.eat)
                || animation.isAnimating"><img src="~/assets/img/icon/four.png" class="icon-button"></button>
        </div>
        <div class="col col-md">
            <button type="button" class="d-block  btn border-0 m-auto" @click="clickOnWork()" :disabled="game.lastAction === 'work'
                || actionInMalus(useActions().actions.work)
                || animation.isAnimating"><img src="~/assets/img/icon/travail.png" class="icon-button"></button>
        </div>
    </div>
</template>

<style scoped>
.icon-button {
    width: 80%;
    max-width: 100px;
    transition: all .2s ease-in-out;
}

button:hover .icon-button{
    filter: brightness(0.5);
    transform: scale(1.5);
}

.test{
    text-align: center;
}
</style>