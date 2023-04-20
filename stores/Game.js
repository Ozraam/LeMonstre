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
        objectiveIndex: 0,
        levels : useLevels().levels,
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
            return useLevels().levels[this.level - 1].malus;
        },
        objective() {
            return this.levels[this.objectiveIndex].objective;
        },
        levelsCompleted() {
            return this.levels.filter((level) => level.objective.progress >= level.objective.value);
        },
        levelsNotCompleted() {
            return this.levels.filter((level) => level.objective.progress < level.objective.value);
        },
    },
    actions: {
        incrementLevel() {
            this.level++;
            if(this.level > useLevels().levels.length) return

            this.numTurns = 0;
            this.history = [];
            this.objectiveIndex++;
            this.setMalus(useLevels().levels[this.level - 1].malus);
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
        setDifficulty(difficulty) {
            this.difficulty = difficulty;
        },
        incrementObjectiveProgress(value, type) {
            if(this.objective.type !== type) return false;
            console.log(this.objective.progress);
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
