<script setup>
import { useAnimationStore } from '~/stores/Animation';

function foodRain(index, foods) {
    if(index == 0 || foods.length == 0) return;
    const foodIndex = Math.floor(Math.random() * foods.length);
    const food = foods[foodIndex];
    foods = foods.filter((f, i) => i != foodIndex);
    food.style.left = Math.floor(Math.random() * 100) + '%';
    food.style.scale = Math.floor(Math.random() * 100) + 50 + '%';
    
    const foodAnimation = food.animate([
        { top: "-20%" },
        { top: '100%' }
    ], {
        duration: index === 1 ? 1500 : Math.floor(Math.random() * 1000) + 500,
        iterations: 1,
    });

    foodAnimation.onfinish = () => {
        food.style.scale = '100%';
        if(index === 1) {
            useAnimationStore().setAnimation(null);
        }
    }

    setTimeout(() => {
        foodRain(index - 1, foods);
    }, 50)
}

function startRain() {
    const foods = Array.from(document.querySelectorAll('.food'));
    
    foodRain(foods.length, foods);
}

defineExpose({
    startRain
})
</script>


<template>
        <img :src="useAnimationStore().options.food?.img" :alt="useAnimationStore().options.food?.img_alt" v-for="i in 50" :key="i"
            class="position-absolute food">
</template>

<style>
    .food {
        max-width: 5em;
        z-index: 1000;
    }
</style>