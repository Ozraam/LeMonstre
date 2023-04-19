import { defineStore } from "pinia";
import { useMonsterStore } from "./Monster";



export const useGameStore = defineStore({
    id: "game",
    state: () => ({
        level: 1,
        numTurns: 0,
        history: [],
        malus: null,
        difficulty: 0,
        objective: useLevels().levels[0].objective,
        currentAction: null,
        gameOver: false,
    }),
    getters: {
        getNumberOfDaysLastTimeSleep() {
            const lastTimeSleep = this.history.findLast((history) => history.action === useActions().actions.sleep);
            if (!lastTimeSleep) {
                return this.numTurns;
            }
            return this.numTurns - lastTimeSleep.turn;
        },
        lastAction() {
            return this.history[this.history.length - 1]?.action;
        },
        getObjectiveLevel() {
            return this.objective;
        },
        getMalusLevel() {
            return levels[this.level - 1].malus;
        },

    },
    actions: {
        incrementLevel() {
            this.level++;
            if(this.level > levels.length) return

            this.numTurns = 0;
            this.history = [];
            this.objective = levels[this.level - 1].objective;
            this.setMalus(levels[this.level - 1].malus);
        },
        incrementNumTurns() {
            this.numTurns++;
            this.currentAction = null;
            useMonsterStore().newTurn();
        },
        addHistory(action) {
            this.history.push({action: action, turn: this.numTurns});
        },
        setMalus(malus) {
            this.malus = malus;
        },
        setObjective(objective) {
            this.objective = objective;
        },
        setDifficulty(difficulty) {
            this.difficulty = difficulty;
        },
        incrementObjectiveProgress(value, type) {
            if(this.objective.type !== type) return false;

            this.objective.progress += value;
            if(this.objective.progress >= this.objective.value) {
                this.incrementLevel();
                return true;
            }
            return false;
        },
        setGameOver(value) {
            this.gameOver = value;
        }
    }
});
