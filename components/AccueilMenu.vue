<script setup>
import { useMonsterStore } from '~/stores/Monster'
import { useGameStore } from '~/stores/Game';

const name = ref('')
const difficulty = ref('easy')

function startGame() {
    if (name.value != "") {
        const monster = useMonsterStore()
        const game = useGameStore()

        monster.setName(name.value)
        game.setDifficulty(difficulty.value)
        monster.ChooseDifficulty()
        navigateTo('/game')
    }
}
</script>


<template>
    <form class="vstack form menu align-items-center" @submit.prevent="startGame">
        <div>
            <label for="name" class="form-label">Name :</label>
            <input type="text" id="name" v-model="name" placeholder="Monster's name" class="form-control" required />
        </div>
        <div class="mb-2">
            <label for="difficulty" class="form-label">Difficulty :</label>
            <select name="difficulty" id="difficulty" class="form-select" v-model="difficulty">
                <option 
                    v-for="option in useDifficulties().difficulties" 
                    :key="option" 
                    :value="option"
                >
                    {{ option.charAt(0).toUpperCase() + option.slice(1) }}
                </option>
            </select>
        </div>
        <button class="btn btn-outline-success align-self-center">Start</button>
    </form>
</template>

<style scoped>
.menu div {
    max-width: 300px;
    width: 100%;
}
</style>