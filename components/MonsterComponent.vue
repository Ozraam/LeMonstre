<script setup>

import { useMonsterStore,fighter } from '~/stores/Monster';

const monster = useMonsterStore();

function click(item){
    console.log(monster.PV)
    monster.fight(item)
    console.log(monster.PV)
}
</script>

<template>
    <div class="container_img">
        <img v-for="item in fighter" :src="item.img" :alt="item.alt" @click="click(item)">
    </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container_img{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

img{
    max-width: 200px;
}
</style>