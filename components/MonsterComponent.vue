<script setup>

import { useMonsterStore,fighter } from '~/stores/Monster';

const monster = useMonsterStore();

function click(item){
    monster.fight(item)
}
</script>

<template>
    <div class="monster row g-2">
        <button class="btn btn-outline-secondary col d-flex flex-column justify-content-between align-items-center" v-for="item in fighter" @click="click(item)">
            <div>
                {{item.alt}}
            </div>
            <img :src="item.img" class="img-fluid" :alt="item.alt">
            <div>
                PV : {{ item.PV }} /
                P : {{ item.P }} /
            </div>
        </button>
    </div>
</template>

<style scoped>
    img {
        max-height: 5em;
    }
</style>