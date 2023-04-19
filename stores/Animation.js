import { defineStore } from "pinia";

export const useAnimationStore = defineStore({
    id: "animation",
    state: () => ({
        animation: null,
        options: {}
    }),
    getters: {
        isAnimating() {
            return this.animation !== null;
        }
    },
    actions: {
        setAnimation(animation, options = {}) {
            this.animation = animation;
            this.options = options;
        }
    }
});