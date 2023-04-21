<script setup>
    import { useAnimationStore } from '~/stores/Animation';
    
    const isTakingDamage = ref(false)



    function takeDamage() {
        isTakingDamage.value = true;
        setTimeout(() => {
            isTakingDamage.value = false;
        }, 3000)
    }
    defineExpose({
        takeDamage    
    })
</script>

<template>
    <img :src="useAnimationStore().options.monster?.img" :alt="useAnimationStore().options.monster?.alt" ref="monsterImg" :class="{monster: true, hurt: isTakingDamage }">
</template>

<style scoped>
    .monster {
        max-width: 50px;
    }
    .hurt {
        animation: hurt 3s infinite;
        
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