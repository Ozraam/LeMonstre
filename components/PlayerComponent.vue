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

    const playerHtml = player.value.$el;
    
    const x = Math.floor(Math.random() * 50) - 25;
    let newPositionX = positionX + x;

    if (newPositionX > 99) {
        newPositionX = 99;
    } else if (newPositionX < 1) {
        newPositionX = 1;
    }

    const run = Math.floor(Math.random() * 2);

    if (x > 0) {
        player.value.flip(false)
    } else {
        player.value.flip(true)
    }

    player.value.changeAnim(run ? "run" : "walk");

    if (x > 0) {
        player.value.flip(false)
    } else if (!animationStore.isAnimating) {
        player.value.flip(true)
    }

    time.value = Math.abs(x * 300);
    time.value = run ? time.value / 3 : time.value;
    const randomTime = Math.floor(Math.random() * 1000) + 500;

    

    animationPlayerMove = playerHtml.animate([
        { left: `${newPositionX}%`, offset: 1}
    ], {
        duration: time.value,
        fill: "forwards",

    })

    positionX = newPositionX;
    animationPlayerMove.onfinish = () => {
        if (!animationStore.isAnimating) player.value.changeAnim("idle");
        setTimeout(playerMoveArroundRandom, randomTime);
    }
}

function followCursor() {
    if (animationStore.isAnimating) return;
    const playerHtml = player.value.$el;
    if (animationStore.isAnimating) return;
    document.onmousemove = (e) => {
        let x = e.clientX;
        let newpositionX = x / window.innerWidth * 100;
        if (newpositionX > 99) {
            newpositionX = 99;
        } else if (newpositionX < 1) {
            newpositionX = 1;
        }
        if(newpositionX > positionX) {
            player.value.flip(false)
        } else if (!animationStore.isAnimating) {
            player.value.flip(true)
        }

        if(positionX - newpositionX > 15 || positionX - newpositionX < -15) {
            player.value.changeAnim("run");
            console.log("run")
        } else if(positionX - newpositionX > 5 || positionX - newpositionX < -5) {
            player.value.changeAnim("walk");
            console.log("walk")
        } else {
            player.value.changeAnim("idle");
        }

        time.value = Math.abs(x * 300);
        time.value = run ? time.value / 3 : time.value;
        const randomTime = Math.floor(Math.random() * 1000) + 500;

        animationPlayerMove = playerHtml.animate([
            { left: `${newpositionX}%`, offset: 1}
        ])

        animationPlayerMove.onfinish = () => {
            if (!animationStore.isAnimating) player.value.changeAnim("idle");
        }
    }
}

function stopPlayerMovement() {
    if (animationPlayerMove) {
        animationPlayerMove.pause();
    }
}

function resumePlayerMovement() {
    if (animationPlayerMove) {
        player.value.changeAnim("run");
        animationPlayerMove.play();
    } else {
        playerMoveArroundRandom();
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
        background.value.passNight();
        player.value.changeAnim("sleep");
    } else if (value === useAnimations().animations.work) {
        player.value.positionX = 50;
        stopPlayerMovement();
        background.value.passwork();
        player.value.changeAnim("work");
    } else if (value === useAnimations().animations.fight) {
        stopPlayerMovement();
        playerFight();
    } else if (value === useAnimations().animations.food) {
        stopPlayerMovement();
        foodRain.value.startRain();
        player.value.changeAnim("jump")
    } else {
        if(useAnimationStore().options.callback) useAnimationStore().options.callback();
        resumePlayerMovement();
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
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document" id="modal" v-bs-modal>
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <MonsterComponent v-if="game.currentAction === useActions().actions.fight" class="activated"/>
            <EatingChoice v-else-if="game.currentAction === useActions().actions.eat" class="activated"/>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
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
</style>