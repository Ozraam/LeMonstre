<script setup>
    import { useAnimationStore } from '~/stores/Animation';
    

    const monsterImg = ref(null)

    function takeDamage() {
        monsterImg.value.classList.add('hurt')
        setTimeout(() => {
            monsterImg.value.classList.remove('hurt')
        }, 3000)
    }

    function center(){
        monsterImg.value.classList.add('center')
        setTimeout(() => {
            monsterImg.value.classList.remove('center')
        }, 3000)
    }

    defineExpose({
        takeDamage,
        center
    })
</script>

<template>
    <img :src="useAnimationStore().options.monster?.img" :alt="useAnimationStore().options.monster?.alt" ref="monsterImg" class="monster">
</template>

<style scoped>
    .monster {
        max-width: 50px;
    }
    .hurt {
        animation: hurt 3s infinite;
        
    }
    .center{
        left: 50%;
        transform: translate(-50%);
    }

    @keyframes hurt {
        from {
            filter: saturate(100%);
        }
        20% {
            filter: saturate(100%);
        }
        25% {
            filter: saturate(500%);
        }
        30% {
            filter: saturate(100%);
        }

        50% {
            filter: saturate(100%);
        }
        55% {
            filter: saturate(500%);
        }
        60% {
            filter:  saturate(100%);
        }

        80% {
            filter: saturate(100%);
        }
        85% {
            filter: saturate(500%);
        }
        90% {
            filter: saturate(100%);
        }

        
    }

</style>