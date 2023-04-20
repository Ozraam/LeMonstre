<script setup>
import { storeToRefs } from 'pinia';
import { useGameStore } from '~/stores/Game';

const game = useGameStore();

</script>

<!--<template>
    <main class="container-fluid justify-content-between h-100">
        <div class="row my-3">
            <div class="col-12 col-md-4 h-100">
                <ObjectifComponent/>
                <InfoLevel/>
            </div>
            <div class="col-12 col-md">
                <PlayerComponent/>
            </div>
        </div>

</main>
</template>-->
<template>
    <PlayerComponent/>
</template>

<style scoped>
    main {
        height: 100vh;
    }
</style>

