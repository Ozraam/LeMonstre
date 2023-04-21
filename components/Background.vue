<script setup>
import { useAnimationStore } from '~/stores/Animation';


const moon = ref("null");
const sun = ref("null");
const sky = ref("null");
const ordinateur = ref("null");
const bureau = ref("null");
const level = ref("null");


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

function passwork(){
    const animateTime = 5000;
    ordinateur.value.classList.add("active");

    useAnimationStore().setAnimation(useAnimations().animations.work);
    document.querySelector(".ordi.active").animate([
        { 'width': '0%' },
        { 'width': '5%' },
        { 'width': '5%' },
        { 'width': '0%' }
    ], {
        duration: animateTime,
        easing: 'ease-in-out',
    })
    
    bureau.value.classList.add("active");
    document.querySelector(".bureau.active").animate([
        { 'width': '0%' },
        { 'width': '7%' },
        { 'width': '7%' },
        { 'width': '0%' }
    ], {
        duration: animateTime,
        easing: 'ease-in-out'
    })
    setTimeout(() => {
        ordinateur.value.classList.remove("active");
        bureau.value.classList.remove("active");
        useAnimationStore().setAnimation(null);
    }, animateTime);
}


function levelUp(){

    const animateTime = 5000;

    level.value.classList.add("level-up");
    document.querySelector(".level").animate([
        { 'top': '-10%' },
        { 'top': '50%' },
        { 'top': '50%' },
        { 'top': '140%' }
    ], {
        duration: animateTime,
        easing: 'ease-in-out'
    }).onfinish = () => {
        useAnimationStore().setAnimation(null);
    }
    

}

defineExpose({
    passNight,
    passwork,
    levelUp
})
</script>


<template>
    <div class="background">
        <img src="~/assets/img/backgroud/layers/sky.png" class="position-absolute img-fluid" alt="sky" ref="sky">
        


        <img src="~/assets/img/moon.png" alt="The moon" class="astre moon position-absolute img-fluid w-50" ref="moon">
        <img src="~/assets/img/star.png" alt="The sun" class="astre sun position-absolute img-fluid w-50" ref="sun">


        <img src="~/assets/img/backgroud/layers/clouds_1.png" class="earth img-fluid position-absolute" alt="back cloud 1">
        <img src="~/assets/img/backgroud/layers/clouds_2.png" class="earth img-fluid position-absolute" alt="back cloud 2">

        <img src="~/assets/img/backgroud/layers/rocks_1.png" class="earth img-fluid position-absolute" alt="back rock">
        <img src="~/assets/img/backgroud/layers/clouds_3.png" class="earth img-fluid position-absolute" alt="back cloud 3">

        <img src="~/assets/img/backgroud/layers/rocks_2.png" class="earth img-fluid position-absolute" alt="front rock">
        <img src="~/assets/img/backgroud/layers/clouds_4.png" class="earth img-fluid position-absolute" alt="front cloud">

        <img src="~/assets/img/ordi.png" class="ordi position-absolute" alt="ordi" ref="ordinateur">
        <img src="~/assets/img/bureau.png" class="bureau position-absolute" alt="bureau" ref="bureau">
        <img src="~/assets/img/up.png" class="img-fluid position-absolute w-25 level level-up" alt="test" ref="level">

        <img src="~/assets/img/backgroud/layers/ground.png" class="earth img-fluid position-absolute w-100" alt="ground">

    </div>
</template>

<style scoped>
.earth {
    left: 0;
}

.ordi{
    display: none;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 5%;
    transition: all 5s ease-in-out;
}

.ordi.active{
    display: block;
    bottom: 18%;
    z-index: 10;
    transition: all 5s ease-in-out;
}

.bureau{
    display: none;
    left: 50%;
    transform: translateX(-50%);
    width: 7%;
    z-index: 10;
    transition: all 5s ease-in-out;
}

.bureau.active{
    display: block;
    bottom: 15%;
    transition: all 5s ease-in-out;
}

.background {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    min-width: calc(16 / 9 * 100vh);
    height: 100vh;
    overflow: hidden;
}

.background .img-fluid {
    bottom: 0;
    width: 100%;
}

.astre {
    right: 0;
}

.moon {
    top: 100%;
}

.level {
    display: none;
    top: -10%;
    left: 50%;
    transform: translate(-50%, -50%);
}


.level-up{
    display: block;
}

</style>