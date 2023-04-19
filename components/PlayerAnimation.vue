<script setup>


    const currentAnim = ref("idle");

    const idle = ref(null);
    const attack = ref(null);
    const death = ref(null);
    const hurt = ref(null);
    const run = ref(null);
    const walk = ref(null);

    const anims = computed(() => {return {
        idle: idle,
        attack: attack,
        death: death,
        hurt: hurt,
        run: run,
        walk: walk
    }});

    function changeAnim(anim) {
        anims.value[currentAnim.value].value.classList.add("d-none");
        anims.value[anim].value.classList.remove("d-none");
        currentAnim.value = anim;
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
        <img src="~/assets/gif/player/attack.gif" alt="player" class="d-none" ref="attack">
        <img src="~/assets/gif/player/death.gif" alt="player" class="d-none" ref="death">
        <img src="~/assets/gif/player/hurt.gif" alt="player" class="d-none" ref="hurt">
        <img src="~/assets/gif/player/run.gif" alt="player" class="d-none" ref="run">
        <img src="~/assets/gif/player/walk.gif" alt="player" class="d-none" ref="walk">
    </div>
</template>

<style scoped>
    .flip {
        transform: scaleX(-1);
    }
</style>