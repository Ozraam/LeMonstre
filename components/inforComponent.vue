<script setup>

import { useMonsterStore } from '/stores/Monster';
import { useGameStore } from '/stores/Game';

const  monster  = useMonsterStore();
const  game  = useGameStore();
</script>

<template>
    <div class="nav_monsterInfo card">
        <div class="nav_monsterInfo_name_title">
        <h3>{{ monster.name }}</h3>
        <h3>niv :{{ game.level }}</h3>
        </div>
        <div class="nav_monsterInfo_value">
            <p>PV: {{ monster.PV }}</p>
            <p>P: {{ monster.P }}</p>
            <p>F: {{ monster.F }}</p>
        </div>
    </div>
</template>

<style>
    .nav_monsterInfo{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
    .nav_monsterInfo_value {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        padding: 1rem;
    }
    .nav_monsterInfo_name_title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        padding: 1rem;
    }
</style>