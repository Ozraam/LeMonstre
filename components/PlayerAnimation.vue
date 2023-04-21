<script setup>
    const props = defineProps({
        verticalInfo: {
            type: Boolean,
            default: false
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

    const anims = computed(() => {return {
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
    }});

    function changeAnim(anim) {
        anims.value[currentAnim.value].value.classList.add("d-none");
        anims.value[anim].value.classList.remove("d-none");
        currentAnim.value = anim;

        if(anim === useAnimations().animations.fight) {
            monsterImg.value.takeDamage();
        }
        if(anim === useAnimations().animations.work) {
            console.log("work")
        }
    }

    function displayInfo(){
        console.log("displayInfo")
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

    defineExpose({
        changeAnim,
        flip,
        getCurrentAnim
    })
</script>



<template>
    <div class="position-realtive">
        <InforComponent class="position-absolute info" :vertical="props.verticalInfo"/>
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
            <MonsterImage :class="{'position-absolute': true, 'd-none': currentAnim !== useAnimations().playerAnimations.fight}"  ref="monsterImg" />
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
        transform: translate(-35%, -100%);
    }
</style>