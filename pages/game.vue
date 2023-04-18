<script setup>
import { useMonsterStore } from '~/stores/Monster'
import { useGameStore } from '~/stores/Game';


</script>

<template>
    <div>
        <InforComponent />
        <MonsterComponent />
        <ActionComponent class="action" />
    </div>
</template>

<style>
.action {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>