<script setup>
import { storeToRefs } from 'pinia';
import { useAnimationStore } from '~/stores/Animation';
import { useGameStore } from '~/stores/Game';

const game = useGameStore();


const background = ref(null);
const player = ref(null);
const time = ref(500);
const animationStore = useAnimationStore();
let animationPlayerMove = null;
const foodRain = ref(null);

let positionX = 50;

function playerMoveArroundRandom() {
    if (animationStore.isAnimating) return;
    
    const x = Math.floor(Math.random() * 50) - 25;
    let newPositionX = positionX + x;

    const run = Math.floor(Math.random() * 2);

    const randomTime = Math.floor(Math.random() * 1000) + 500;

    movePlayerTo(newPositionX, run, () => {
        setTimeout(playerMoveArroundRandom, randomTime);
    });
    
}

function movePlayerTo(newPosition, run=false, callback=null, speed=1) {

    const playerHtml = player.value.$el;
    const x = newPosition - positionX;
    

    if (newPosition > 99) {
        newPosition = 99;
    } else if (newPosition < 1) {
        newPosition = 1;
    }

    if (x > 0) {
        player.value.flip(false)
    } else {
        player.value.flip(true)
    }

    player.value.changeAnim(run ? "run" : "walk");

    if (x > 0) {
        player.value.flip(false)
    } else {
        player.value.flip(true)
    }

    time.value = Math.abs(x * 300);
    time.value = run ? time.value / 3 : time.value;
    time.value = time.value / speed;

    positionX = newPosition;
    animationPlayerMove = playerHtml.animate([
        { left: `${newPosition}%`, offset: 1}
    ], {
        duration: time.value,
        fill: "forwards",

    })

    animationPlayerMove.onfinish = () => {
        if (!animationStore.isAnimating) player.value.changeAnim("idle");
        if(callback) callback();
    }
}



function stopPlayerMovement() {
    if (animationPlayerMove) {
        animationPlayerMove.pause();
    }
}


function playerFight() {
    player.value.flip(false);
    player.value.changeAnim("fight");
    setTimeout(() => {
        player.value.changeAnim("idle");
        useAnimationStore().setAnimation(null);
    }, 3000)
}



onMounted(() => {
    setTimeout(playerMoveArroundRandom, 1000);
})

const { animation } = storeToRefs(animationStore);

watch(animation, (value) => {
    if (value === useAnimations().animations.sleep) {
        stopPlayerMovement();
        
        movePlayerTo(37.5, true, () => {
            background.value.passNight();
            player.value.changeAnim("sleep");
        }, 1.5)


    } else if (value === useAnimations().animations.work) {
        player.value.positionX = 50;
        stopPlayerMovement();
        movePlayerTo(87.5, true, () =>{
            background.value.passwork();
            player.value.changeAnim("work");
        }, 1.5)
    } else if (value === useAnimations().animations.fight) {
        stopPlayerMovement();
        movePlayerTo(12.5, true, () => {
            playerFight();
        }, 1.5)
    } else if (value === useAnimations().animations.food) {
        stopPlayerMovement();
        movePlayerTo(62.5, true, () => {
            foodRain.value.startRain();
            player.value.changeAnim("jump")
        }, 1.5)
        
    } else {
        if(useAnimationStore().options.callback) useAnimationStore().options.callback();
        playerMoveArroundRandom();
    }
})

const {gameOver} = storeToRefs(useGameStore())


watch(gameOver, (value) => {
    if(gameOver) {
        player.value.changeAnim(value === useEndGameStates().endGameStates.win ? useAnimations().playerAnimations.jump :  useAnimations().playerAnimations.death)
        stopPlayerMovement();
        setTimeout(() => {
            navigateTo("/game-" + value)
        }, 1500)
        
    }
});
</script>

<template>
    <main class="position-relative playground">

        <Background ref="background" />
        <div class="info">
            <ObjectifComponent />
            <InfoLevel class="level"/>
        </div>
        <PlayerAnimation ref="player" class="position-absolute player" />
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <MonsterComponent v-if="game.currentAction === useActions().actions.fight" class="activated"/>
            <EatingChoice v-else-if="game.currentAction === useActions().actions.eat" class="activated"/>
      </div>
    </div>
  </div>
</div>
    <div class="action">
        <ActionComponent class="action"/>
    </div>
    <FoodRain ref="foodRain" />
    </main>
</template>

<style scoped>
.player {
    bottom: 12%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.endCard {
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
}

.playground {
    overflow: hidden;
}

    main {
        height: 100vh;
        width: 100%;
    }

    .info{
        width: 400px;
        position: absolute;
        top: 3%;
        left: 1%;
    }

    @media (max-width: 768px) {
        .info{
            width: 100%;
            top: 0;
            left: 0;
        }
        .level {
            margin-top: 0px;
        }
    }

    .action {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .play-component {
        top: 0;
        left: 0;
    }

        /*create animation*/
    @keyframes up {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        50% {
            opacity: 0.1;
        }
        75% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }
    /*used animation for class activated*/
    .activated {
        z-index: 10;
        animation: up 0.5s ease-in-out;
    }

    main {
        height: 100vh;
        width: 100%;
    }

    .info-level {
        width: 300px;
        top: 3%;
        left: 1%;
        z-index: 100;
    }
    @media screen and (max-width: 768px) {
        .info-level {
            width: 100%;
            top: 0%;
            left: 0%;
        }
    }
</style>