<script setup>
import { storeToRefs } from 'pinia';
import { useAnimationStore } from '~/stores/Animation';

const background = ref(null);
const positionX = ref(50);
const player = ref(null);
const time = ref(500);
const animationStore = useAnimationStore();

function playerMoveArroundRandom() {
    if (animationStore.isAnimating) return;

    const x = Math.floor(Math.random() * 50) - 25;
    positionX.value = positionX.value + x;
    if (positionX.value > 99) {
        positionX.value = 99;
    } else if (positionX.value < 1) {
        positionX.value = 1;
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
    } else {
        player.value.flip(true)
    }

    time.value = Math.abs(x * 300);
    run ? time.value = time.value / 3 : time.value = time.value;
    const randomTime = Math.floor(Math.random() * 1000) + 500 + time.value;

    setTimeout(playerMoveArroundRandom, randomTime);
    setTimeout(() => {
        if (!animationStore.isAnimating) player.value.changeAnim("idle");
    }, time.value);
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
    playerMoveArroundRandom();
})

const { animation, options } = storeToRefs(animationStore);

watch(animation, (value) => {
    if (value === useAnimations().animations.sleep) {
        background.value.passNight();
        player.value.changeAnim("sleep");
    } else if (value === useAnimations().animations.work) {
        background.value.passwork();
    } else if (value === useAnimations().animations.fight) {
        playerFight();
    } else {
        playerMoveArroundRandom();
    }
})
</script>

<template>
    <div class="position-relative">
        <Background ref="background" />
        <PlayerAnimation ref="player" class="position-absolute player" :style="{
            left: positionX + '%',
            transitionDuration: time + 'ms',

            zIndex: 1000
        }" />

    </div>
</template>

<style scoped>
.player {
    top: 80%;
    transform: translate(-50%, -50%);
    transition-property: left 0.5s;
}
</style>