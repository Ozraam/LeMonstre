<script setup>
import { useMonsterStore } from '~/stores/Monster'
import { useGameStore } from '~/stores/Game';

const name = ref('')
const difficulty = ref('easy')

function startGame() {
    const monster = useMonsterStore()
    const game = useGameStore()
    monster.setName(name.value)
    game.setDifficulty(difficulty.value)
    navigateTo('/game')
}
</script>


<template>
    <div>
        <div>
            <label for="name">Name :</label>
            <input type="text" id="name" v-model="name" placeholder="Monster's name" />
        </div>
        <div>
            <label for="difficulty">Difficulty :</label>
            <select name="difficulty" id="difficulty" v-model="difficulty">
                <option value="easy" selected>Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
        <button @click="startGame">Start</button>
    </div>
</template>