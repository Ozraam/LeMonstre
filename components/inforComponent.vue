<script setup>

import { useMonsterStore } from '/stores/Monster';
import { useGameStore } from '/stores/Game';

const props = defineProps({
    vertical: {
        type: Boolean,
        default: false
    }
})

const PVPopup = ref(null);
const PPopup = ref(null);
const FPopup = ref(null);

const monster = useMonsterStore();
const game = useGameStore();

monster.observer = (value, type) => {
    let popUp = null;
    if (type === "PV") {
        popUp = PVPopup;
    } else if (type === "P") {
        popUp = PPopup;
    } else if (type === "F") {
        popUp = FPopup;
    } else {
        return;
    }

    popUp.value.innerText = value < 0 ? value : "+" + value;
    popUp.value.classList.add("popUpward");

    if(value < 0) {
        popUp.value.classList.add("text-danger");
        
    } else {
        popUp.value.classList.remove("text-danger");
    }   

    setTimeout(() => {
        popUp.value.classList.remove("popUpward");
    }, 2000);
}

</script>

<template>
    <div class="nav_monsterInfo text-center">
        <div :class="{ nav_monsterInfo_value: true, 'd-flex': true, 'flex-column': props.vertical }">
            <p class="info-player position-relative hstack">
                <span class="position-absolute indicator text-success" ref="PVPopup">X</span>
                <img class="icons-player" src="~/assets/img/coeur.png" alt="gif-coeur">
                {{ monster.PV }}
            </p>
            <p class="info-player position-relative hstack">
                <span class="position-absolute indicator text-success" ref="PPopup">X</span>
                <img class="icons-player" src="~/assets/gif/coin.gif">
                {{ monster.P }}
            </p>
            <p class="info-player position-relative hstack">
                <span class="position-absolute indicator text-success" ref="FPopup">X</span>
                <img class="icons-player" src="~/assets/img/cuisse.png">
                {{ monster.F }}
            </p>
        </div>
        <p class="my-0 monster-name">{{ monster.name }} | tour : {{ game.numTurns + 1 }}</p>
    </div>
</template>

<style scoped>
.icons-player {
    width: 1.5em;
}

.monster-name {
    color: white;
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
        padding-bottom: 0;
}

.popUpward {
    animation: upward 2s forwards ease-in-out;
}


.indicator {
    opacity: 0;
    top: 50%;
    left: 0%;
    transform: translateX(-50%);
    font-weight: bold;
}

@keyframes upward {
    0% {
        transform: translate(0, 0);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }

    60% {
        opacity: 1;
    }

    100% {
        transform: translate(0, -5rem);
        opacity: 0;
    }
}
</style>