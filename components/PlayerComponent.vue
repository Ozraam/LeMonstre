<script setup>
import { storeToRefs } from 'pinia';
import { useAnimationStore } from '~/stores/Animation';
import { useGameStore } from '~/stores/Game';

const game = useGameStore();

const background = ref(null);
const positionX = ref(50);
const player = ref(null);
const time = ref(500);
const animationStore = useAnimationStore();

function playerMoveArroundRandom() {
    if(animationStore.isAnimating) return;

    const x = Math.floor(Math.random() * 50) - 25;
    positionX.value = positionX.value + x;
    if (positionX.value > 99) {
        positionX.value = 99;
    } else if (positionX.value < 1) {
        positionX.value = 1;
    }

    const run = Math.floor(Math.random() * 2);

    if(x > 0) {
        player.value.flip(false)
    } else {
        player.value.flip(true)
    }

    player.value.changeAnim(run ? "run" : "walk" );

    if(x > 0) {
        player.value.flip(false)
    } else {
        player.value.flip(true)
    }

    time.value = Math.abs(x * 300);
    run ? time.value = time.value / 3 : time.value = time.value;
    const randomTime = Math.floor(Math.random() * 1000) + 500 + time.value;

    setTimeout(playerMoveArroundRandom, randomTime);
    setTimeout(() => {
        player.value.changeAnim("idle");
    }, time.value);
}





onMounted(() => {
    playerMoveArroundRandom();
})

const { animation } = storeToRefs(animationStore);

watch(animation, (value) => {
    console.log(value);
    if(value == useAnimations().animations.sleep) {
        background.value.passNight();
        player.value.changeAnim("sleep");
    } else if(value == useAnimations().animations.work) {
        positionX.value = 50;
        background.value.passwork();
        player.value.changeAnim("work");
    }
    else{
        playerMoveArroundRandom();
    }
})
</script>

<template>
    <main class="position-relative">
        <Background ref="background" />
        <div class="position-absolute info-level">
            <ObjectifComponent />
            <InfoLevel />
        </div>
        <PlayerAnimation ref="player" class="position-absolute player" :style="{
            left: positionX + '%',
            transitionDuration: time + 'ms',

            zIndex: 1000
        }" />
        <MonsterImage :monster="animationStore.options.monster" />
    </main>
</template>

<style scoped>
    .player {
        bottom: 12%;
        transform: translate(-50%, 50%);
        transition-property: left 0.5s;
    }

    main {
        height: 100vh;
        width: 100%;
    }

    .info-level {
        width: 300px;
        top: 3%;
        left: 1%;
        z-index: 100;
    }
    @media screen and (max-width: 768px) {
        .info-level {
            width: 100%;
            top: 0%;
            left: 0%;
        }
    }
</style>