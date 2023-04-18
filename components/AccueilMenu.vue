<script setup>
import { useMonsterStore } from '~/stores/Monster'
import { useGameStore } from '~/stores/Game';

const name = ref('')
const difficulty = ref('easy')
const nameError = ref(null);

function startGame(e) {
    e.preventDefault()
    if(name.value != "") {
        const monster = useMonsterStore()
        const game = useGameStore()
        
        monster.setName(name.value)
        game.setDifficulty(difficulty.value)
        monster.ChooseDifficulty()
        navigateTo('/game')
    } else {
        nameError.value.classList.remove('hidden')
    }
}
</script>


<template>
    <form class="menu" @submit="startGame">
        <div>
            <label for="name">Name :</label>
            <input type="text" id="name" v-model="name" placeholder="Monster's name" required />
            <span class="error hidden" ref="nameError">Name required</span>
        </div>
        <div>
            <label for="difficulty">Difficulty :</label>
            <select name="difficulty" id="difficulty" v-model="difficulty">
                <option value="easy" selected>Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
        <button>Start</button>
    </form>
</template>

<style scoped>
    .menu {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    button {
        align-self: center;
    }

    .error {
        color: red;
    }

    .hidden {
        display: none;
    }
</style>