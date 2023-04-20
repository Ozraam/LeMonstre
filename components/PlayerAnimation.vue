<script setup>
import { useAnimationStore } from '~/stores/Animation';



    const currentAnim = ref("idle");
    const monsterImg = ref(null);

    const idle = ref(null);
    const fight = ref(null);
    const death = ref(null);
    const hurt = ref(null);
    const run = ref(null);
    const walk = ref(null);
    const sleep = ref(null);
    const work = ref(null);

    const anims = computed(() => {return {
        idle: idle,
        fight: fight,
        death: death,
        hurt: hurt,
        run: run,
        walk: walk,
        sleep: sleep,
        work: work
    }});

    function changeAnim(anim) {
        anims.value[currentAnim.value].value.classList.add("d-none");
        anims.value[anim].value.classList.remove("d-none");
        currentAnim.value = anim;

        if(anim === useAnimations().animations.fight) {
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

    defineExpose({
        changeAnim,
        flip
    })

</script>



<template>
    <div>
        <img src="~/assets/gif/player/idle.gif" alt="player" ref="idle">
        <img src="~/assets/gif/player/fight.gif" alt="player" class="d-none" ref="fight">
        <img src="~/assets/gif/player/death.gif" alt="player" class="d-none" ref="death">
        <img src="~/assets/gif/player/hurt.gif" alt="player" class="d-none" ref="hurt">
        <img src="~/assets/gif/player/run.gif" alt="player" class="d-none" ref="run">
        <img src="~/assets/gif/player/walk.gif" alt="player" class="d-none" ref="walk">
        <img src="~/assets/gif/player/Owlet_Monster.png" alt="player" class="d-none rotate-90" ref="sleep">
        <MonsterImage  ref="monsterImg" />
    </div>
</template>

<style scoped>
    .flip {
        transform: scaleX(-1);
    }

    .rotate-90 {
        transform: rotate(-90deg) translateX(-50%);
    }

    
</style>