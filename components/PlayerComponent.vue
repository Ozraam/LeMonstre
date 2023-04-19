<script setup>
import Background from './Background.vue';

const positionX = ref(50);
const player = ref(null);
const time = ref(500);

function playerMoveArroundRandom() {
    const x = Math.floor(Math.random() * 20) - 10;
    positionX.value = positionX.value + x;
    if (positionX.value > 99) {
        positionX.value = 99;
    } else if (positionX.value < 1) {
        positionX.value = 1;
    }

    

    player.value.changeAnim("walk");

    if(x > 0) {
        player.value.flip(false)
    } else {
        player.value.flip(true)
    }

    time.value = Math.abs(x * 300);
    const randomTime = Math.floor(Math.random() * 1000) + 500 + time.value;

    setTimeout(playerMoveArroundRandom, randomTime);
    setTimeout(() => {
        player.value.changeAnim("idle");
    }, time.value);


}

onMounted(() => {
    playerMoveArroundRandom();
})


</script>

<template>
    <div class="position-relative">
        <Background />
        <PlayerAnimation ref="player" class="position-absolute player" :style="{
            left: positionX + '%',
            transitionDuration: time + 'ms'
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