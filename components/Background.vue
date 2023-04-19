<script setup>
import { useAnimationStore } from '~/stores/Animation';


const moon = ref("null");
const sun = ref("null");
const sky = ref("null");


function passNight() {
    const animateTime = 5000;

    const animeMoon = moon.value.animate([
        { top: '100%' },
        { top: '0%' },
        { top: '0%' },
        { top: '100%' }
    ], {
        duration: animateTime,
    })

    sun.value.animate([
        { top: '0%' },
        { top: '100%' },
        { top: '100%' },
        { top: '0%' }
    ], {
        duration: animateTime,
        easing: 'ease-in-out'
    })

    sky.value.animate([
        { 'filter': "grayscale(0)" },
        { 'filter': "grayscale(1)" },
        { 'filter': "grayscale(1)" },
        { 'filter': "grayscale(0)" }
    ], {
        duration: animateTime,
        easing: 'ease-in-out'
    })

    document.querySelectorAll(".earth").forEach(e => {
        e.animate([
            { 'filter': "grayscale(0)" },
            { 'filter': "grayscale(1)" },
            { 'filter': "grayscale(1)" },
            { 'filter': "grayscale(0)" }
        ], {
            duration: animateTime,
            easing: 'ease-in-out'
        })
    })

    animeMoon.onfinish = () => {
        useAnimationStore().setAnimation(null);
    }
}

defineExpose({
    passNight
})
</script>


<template>
    <div class="position-relative background">
        <img src="~/assets/img/backgroud/layers/sky.png" class="img-fluid" alt="sky" ref="sky">


        <img src="~/assets/img/moon.png" alt="The moon" class="astre moon position-absolute img-fluid w-50" ref="moon">
        <img src="~/assets/img/star.png" alt="The sun" class="astre sun position-absolute img-fluid w-50" ref="sun">


        <img src="~/assets/img/backgroud/layers/clouds_1.png" class="earth img-fluid position-absolute" alt="back cloud 1">
        <img src="~/assets/img/backgroud/layers/clouds_2.png" class="earth img-fluid position-absolute" alt="back cloud 2">

        <img src="~/assets/img/backgroud/layers/rocks_1.png" class="earth img-fluid position-absolute" alt="back rock">
        <img src="~/assets/img/backgroud/layers/clouds_3.png" class="earth img-fluid position-absolute" alt="back cloud 3">

        <img src="~/assets/img/backgroud/layers/rocks_2.png" class="earth img-fluid position-absolute" alt="front rock">
        <img src="~/assets/img/backgroud/layers/clouds_4.png" class="earth img-fluid position-absolute" alt="front cloud">

        <img src="~/assets/img/backgroud/layers/ground.png" class="earth img-fluid position-absolute w-100" alt="ground">



    </div>
</template>

<style scoped>
.earth {
    left: 0;
}

.background {
    overflow: hidden;
}

.astre {
    right: 0;
}

.moon {
    top: 100%;
}
</style>