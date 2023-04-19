<script setup>
    const props = defineProps({
        monster: {
            type: Object,
            required: true
        }
    })

    const monsterImg = ref(null)

    function takeDamage() {
        monsterImg.value.classList.add('shake')
        setTimeout(() => {
            monsterImg.value.classList.remove('shake')
        }, 1000)
    }

    defineExpose({
        takeDamage
    })
</script>

<template>
    <img :src="props.src" :alt="props.alt" ref="monsterImg">
</template>

<style scoped>
    .shake {
        animation: shake 1s;
        animation-iteration-count: 1;
    }

    @keyframes shake {
        0% {
            transform: translate(1px, 1px) rotate(0deg);
        }
        10% {
            transform: translate(-1px, -2px) rotate(-1deg);
        }
        20% {
            transform: translate(-3px, 0px) rotate(1deg);
        }
        30% {
            transform: translate(3px, 2px) rotate(0deg);
        }
        40% {
            transform: translate(1px, -1px) rotate(1deg);
        }
        50% {
            transform: translate(-1px, 2px) rotate(-1deg);
        }
        60% {
            transform: translate(-3px, 1px) rotate(0deg);
        }
        70% {
            transform: translate(3px, 1px) rotate(-1deg);
        }
        80% {
            transform: translate(-1px, -1px) rotate(1deg);
        }
        90% {
            transform: translate(1px, 2px) rotate(0deg);
        }
        100% {
            transform: translate(1px, -2px) rotate(-1deg);
        }
    }

</style>