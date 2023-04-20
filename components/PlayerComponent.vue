<script setup>
import { storeToRefs } from 'pinia';
import { useAnimationStore } from '~/stores/Animation';
import { useGameStore } from '~/stores/Game';

const game = useGameStore();


const background = ref(null);
const player = ref(null);
const time = ref(500);
const animationStore = useAnimationStore();
let animationPlayerMove = null;
const foodRain = ref(null);

let positionX = 50;

function playerMoveArroundRandom() {
    if (animationStore.isAnimating) return;

    const playerHtml = player.value.$el;
    
    const x = Math.floor(Math.random() * 50) - 25;
    let newPositionX = positionX + x;

    if (newPositionX > 99) {
        newPositionX = 99;
    } else if (newPositionX < 1) {
        newPositionX = 1;
    }

    const run = Math.floor(Math.random() * 2);

    if (x > 0) {
        player.value.flip(false)
    } else {
        player.value.flip(true)
    }

    player.value.changeAnim(run ? "run" : "walk");

    if (x > 0) {
        player.value.flip(false)
    } else if (!animationStore.isAnimating) {
        player.value.flip(true)
    }

    time.value = Math.abs(x * 300);
    time.value = run ? time.value / 3 : time.value;
    const randomTime = Math.floor(Math.random() * 1000) + 500;

    

    animationPlayerMove = playerHtml.animate([
        { left: `${newPositionX}%`, offset: 1}
    ], {
        duration: time.value,
        fill: "forwards",

    })

    positionX = newPositionX;
    animationPlayerMove.onfinish = () => {
        if (!animationStore.isAnimating) player.value.changeAnim("idle");
        setTimeout(playerMoveArroundRandom, randomTime);
    }
}

function stopPlayerMovement() {
    if (animationPlayerMove) {
        animationPlayerMove.pause();
    }
}

function resumePlayerMovement() {
    if (animationPlayerMove) {
        player.value.changeAnim("run");
        animationPlayerMove.play();
    } else {
        playerMoveArroundRandom();
    }
}

function playerFight() {
    player.value.flip(false);
    player.value.changeAnim("fight");

    setTimeout(() => {
        playerMoveArroundRandom();
        useAnimationStore().setAnimation(null);
    }, 3000)
}



onMounted(() => {
    
    setTimeout(playerMoveArroundRandom, 1000);
})

const { animation } = storeToRefs(animationStore);

watch(animation, (value) => {
    if (value === useAnimations().animations.sleep) {
        stopPlayerMovement();
        background.value.passNight();
        player.value.changeAnim("sleep");
    } else if (value === useAnimations().animations.work) {
        stopPlayerMovement();
        background.value.passwork();
        player.value.changeAnim("work");
    } else if (value === useAnimations().animations.fight) {
        stopPlayerMovement();
        playerFight();
    } else if (value === useAnimations().animations.food) {
        stopPlayerMovement();
        foodRain.value.startRain();
        player.value.changeAnim("jump")
    } else {
        if(useAnimationStore().options.callback) useAnimationStore().options.callback();
        resumePlayerMovement();
    }
})

const {gameOver} = storeToRefs(useGameStore())


watch(gameOver, (value) => {
    if(gameOver) {
        player.value.changeAnim(value === useEndGameStates().endGameStates.win ? useAnimations().playerAnimations.jump :  useAnimations().playerAnimations.death)
        stopPlayerMovement();
        setTimeout(() => {
            navigateTo("/game-" + value)
        }, 1500)
        
    }
})

</script>

<template>
    <div class="position-relative playground">
        <Background ref="background" />
        <PlayerAnimation ref="player" class="position-absolute player" />
        <FoodRain ref="foodRain" />
    </div>
    <MonsterComponent v-if="game.currentAction === useActions().actions.fight" class="activated"/>
    <EatingChoice v-else-if="game.currentAction === useActions().actions.eat" class="activated"/>
    <ActionComponent />
</template>

<style scoped>
.player {
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.endCard {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.playground {
    overflow: hidden;
}
</style>