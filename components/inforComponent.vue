<script setup>

import { useMonsterStore } from '/stores/Monster';
import { useGameStore } from '/stores/Game';

const  monster  = useMonsterStore();
const  game  = useGameStore();

const maxPvMonster = monster.PV;
</script>

<template>
    <div class="nav_monsterInfo">
        <div class="nav_monsterInfo_value d-flex flex-row">
            <p class="info-player"><img class="icons-player" src="~/assets/img/coeur.png" alt="gif-coeur">{{ monster.PV }}</p>
            <p class="info-player"><img class="icons-player" src="~/assets/gif/coin.gif">{{ monster.P }}</p>
            <p class="info-player"><img class="icons-player" src="~/assets/img/cuisse.png">{{ monster.F }}</p>
        </div>
    </div>
</template>

<style scoped>

.icons-player {
    width: 1.5em;
    margin-right: 5px;
}

.nav_monsterInfo {
    padding: 0.3rem;
    top: 0;
    left: 0;
    background-color: rgba(66, 64, 64, 0.5);
    border-radius: 1rem;
    border: 1px solid;
}

.info-player {
    margin: 0;
    color: white;
    padding: 0.5rem;
}


</style>