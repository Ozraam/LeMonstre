<script setup>
import { useMonsterStore } from '~/stores/Monster'
import { useGameStore } from '~/stores/Game';

const name = ref('')
const difficulty = ref('easy')
const monsterName = ref('white')

function startGame() {
    if (name.value != "") {
        const monster = useMonsterStore()
        const game = useGameStore()

        monster.setName(name.value)
        game.$reset()

        game.setDifficulty(difficulty.value)
        monster.ChooseDifficulty()
        monster.monsterName = monsterName.value
        navigateTo('/game')
    }
}

function radioChange(e) {
    monsterName.value = e.target.value
}
</script>


<template>
    <div class="card">
        <div class="card-body">
            <AccueilHeader title="Monster Game" />
            <img :src="'gif/'+monsterName+'/walk.gif'" alt="monster" class=" mx-auto d-block" />
            <form class="vstack form menu align-items-center" @submit.prevent="startGame">
                <div class="input">
                    <label for="name" class="form-labels">Name :</label>
                    <input type="text" id="name" v-model="name" placeholder="Monster's name" maxlength="20"
                        class="form-control" required />
                </div>
                <div class="mb-2 input">
                    <label for="difficulty" class="form-label">Difficulty :</label>
                    <select name="difficulty" id="difficulty" class="form-select" v-model="difficulty">
                        <option v-for="option in useDifficulties().difficulties" :key="option" :value="option">
                            {{ option.charAt(0).toUpperCase() + option.slice(1) }}
                        </option>
                    </select>
                </div>

                <div class="row justify-content-between mb-2">
                    <div class="col" v-for="monster in useMonsters().monsters" :key="monster">
                        <input type="radio" class="btn-check" name="options-outlined" :id="monster"
                            autocomplete="off" checked :value="monster" @change="radioChange">
                        <label  class="btn btn-outline-success" :for="monster">
                            <img :src="'gif/'+monster+'/idle.gif'" alt="">
                        </label>
                    </div>
                </div>
                <button class="btn btn-outline-success align-self-center">Start</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.menu .input {
    max-width: 300px;
    width: 100%;
}
</style>