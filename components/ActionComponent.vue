<script setup>
import { useMonsterStore } from '~/stores/Monster';

const monster = useMonsterStore();

</script>

<template>
    <div class="bottom_button">
        <button>Combattre</button>
        <button>Dormir</button>
        <button>Manger</button>
        <button>Travailler</button>
    </div>
</template>

<style>
.bottom_button {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}

.action button{
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background-color: #F5F5F5;
    border: none;
    font-size: 1.2rem;
    font-weight: 600;
    color: #000000;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
.action button:hover{
    background-color: #E0E0E0;
    scale: 1.1;
}
</style>