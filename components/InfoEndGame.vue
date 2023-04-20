<script setup>
const { endGameStates } = useEndGameStates();
const props = defineProps({
    state: {
        type: String,
        required: true
    }
});


</script>

<template>
    <div>
        <EndStateCard v-if="props.state === endGameStates.win" text="Vous avez terminé tous les niveaux, bravo !"
            title="Victoire !" player-animation="jump" />
        <EndStateCard v-else text="Vous etes mort, dommage !" title="Défaite !" player-animation="dead" />
    </div>
</template>