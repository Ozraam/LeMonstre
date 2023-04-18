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
    }
}
</script>


<template>
    <form class="menu form" @submit="startGame">
        <div>
            <label for="name" class="form-label">Name :</label>
            <input type="text" id="name" v-model="name" placeholder="Monster's name" class="form-control" required />
        </div>
        <div>
            <label for="difficulty" class="form-label">Difficulty :</label>
            <select name="difficulty" id="difficulty" class="form-select" v-model="difficulty">
                <option value="easy" selected>Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
        <button class="btn btn-outline-success">Start</button>
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