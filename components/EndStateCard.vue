<script setup>
const { playerAnimations } = useAnimations();

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    playerAnimation: {
        type: String,
        required: true
    }
});

const player = ref(null);

onMounted(() => {
    player.value.changeAnim(props.playerAnimation);
});
</script>


<template>
    <div class="card text-start">

        <div class="card-body">
            <h4 class="card-title">{{ props.title }}</h4>
            <PlayerAnimation ref="player" />
            <p class="card-text">{{ props.text }}</p>
            <a href="/" class="card-link">Retour à l'accueil</a>
        </div>
    </div>
</template>