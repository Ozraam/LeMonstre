<script setup>

const props = defineProps({
    absoluteInfo: {
        type: Boolean,
        default: true
    }
})

const currentAnim = ref(useAnimations().playerAnimations.idle);
const monsterImg = ref(null);

const idle = ref(null);
const fight = ref(null);
const death = ref(null);
const hurt = ref(null);
const run = ref(null);
const walk = ref(null);
const sleep = ref(null);
const work = ref(null);
const jump = ref(null);
const dead = ref(null);

const info = ref(null);

const anims = computed(() => {
    return {
        idle: idle,
        fight: fight,
        death: death,
        hurt: hurt,
        run: run,
        walk: walk,
        sleep: sleep,
        work: work,
        jump: jump,
        dead: dead
    }
});

function changeAnim(anim) {
    anims.value[currentAnim.value].value.classList.add("d-none");
    anims.value[anim].value.classList.remove("d-none");
    currentAnim.value = anim;

    if (anim === useAnimations().animations.fight) {
        monsterImg.value.takeDamage();
    }
}

function flip(flip) {
    if (flip) {
        anims.value[currentAnim.value].value.classList.add("flip");
    } else {
        anims.value[currentAnim.value].value.classList.remove("flip");
    }
}

function getCurrentAnim() {
    return currentAnim.value;
}

function calculateInfoOffset() {
    const offsetString = info.value.$el.style.getPropertyValue("--distance-from-side").replace("px", "");
    let offset = 0;
    if (offsetString.length !== 0) offset = parseFloat(offsetString);

    // get how many pixels of info are out of the screen
    const infoOutOfScreenRight = info.value.$el
        .getBoundingClientRect()
        .right - offset - window.innerWidth;

    const infoOutOfScreenLeft = -info.value.$el
        .getBoundingClientRect()
        .left + offset;



    const infoOutOfScreen = infoOutOfScreenRight > 0 ? -infoOutOfScreenRight : (infoOutOfScreenLeft > 0 ? infoOutOfScreenLeft : 0);


    // if the info is out of the screen, move it back in

    info.value.$el.style.setProperty("--distance-from-side", infoOutOfScreen + "px");
}



defineExpose({
    changeAnim,
    flip,
    getCurrentAnim,
    calculateInfoOffset
})
</script>



<template>
    <div class="position-realtive">
        <InforComponent :class="{ 'position-absolute': props.absoluteInfo, info: props.absoluteInfo }" ref="info" />
        <div class="align-self-center">
            <img src="~/assets/gif/player/idle.gif" alt="player" ref="idle">
            <img src="~/assets/gif/player/fight.gif" alt="player" class="d-none" ref="fight">
            <img src="~/assets/gif/player/death.gif" alt="player" class="d-none" ref="death">
            <img src="~/assets/gif/player/hurt.gif" alt="player" class="d-none" ref="hurt">
            <img src="~/assets/gif/player/run.gif" alt="player" class="d-none" ref="run">
            <img src="~/assets/gif/player/walk.gif" alt="player" class="d-none" ref="walk">
            <img src="~/assets/gif/player/Owlet_Monster.png" alt="player" class="d-none sleep" ref="sleep">
            <img src="~/assets/gif/player/Owlet_Monster.png" alt="player" class="d-none rotate-90" ref="dead">

            <img src="~/assets/gif/player/jump.gif" alt="player" class="d-none" ref="jump">
            <img src="~/assets/gif/player/work.gif" alt="player" class="d-none" ref="work">
            <MonsterImage
                :class="{ 'position-absolute': true, 'd-none': currentAnim !== useAnimations().playerAnimations.fight }"
                ref="monsterImg" />
        </div>
    </div>
</template>

<style scoped>
.flip {
    transform: scaleX(-1);
}

.rotate-90 {
    transform: rotate(-90deg);
}

.sleep {
    transform: rotate(-90deg) translateX(-50%);
}

.info {
    --distance-from-side: 0px;
    transform: translate(calc(-35% + var(--distance-from-side)), -100%);
}
</style>