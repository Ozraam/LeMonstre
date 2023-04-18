import { defineStore } from "pinia";

const objectiveTypes = {
    turns: "turns",
    food: "food",
    gold: "gold",
}

const malusTypes = {
    sleep: "sleep",
    food: "food",
    gold: "gold",
}

const levels = [
    {
        objective: {
            type: objectiveTypes.turns,
            value: 10,
            progress: 0,
        },
        malus: null
    },
    {
        objective: {
            type: objectiveTypes.gold,
            value: 25,
            progress: 0,
        },
        malus: null
    },
    {
        objective: {
            type: objectiveTypes.food,
            value: 25,
            progress: 0,
        },
        malus: null
    },
    {
        objective: {
            type: objectiveTypes.gold,
            value: 25,
            progress: 0,
        },
        malus: {
            type: malusTypes.food,
            value: 10,
        }
    },
]


export const useGameStore = defineStore({
    id: "game",
    state: () => ({
        level: 1,
        numTurns: 0,
        history: [],
        malus: null,
        difficulty: 0,
        objective: {
            type: "score",
            value: 1000,
            progress: 0,
        }
    }),
    getters: {
        getLevel() {
            return this.level;
        },
        getNumTurns() {
            return this.numTurns;
        },
        getHistory() {
            return this.history;
        },
        getMalus() {
            return this.malus;
        },
        getObjective() {
            return this.objective;
        },
        getNumberOfDaysLastTimeSleep() {
            const lastTimeSleep = this.history.find((history) => history.action === "sleep");
            if (!lastTimeSleep) {
                return 0;
            }
            return this.numTurns - lastTimeSleep.turn;
        },
        getDifficulty() {
            return this.difficulty;
        },
        getObjectiveLevel(){
            return levels[this.level].objective;
        }
    },
    actions: {
        incrementLevel() {
            this.level++;
            if(this.level > levels.length) return

            this.numTurns = 0;
            this.history = [];
            this.setObjective(levels[this.level - 1].objective);
            this.setMalus(levels[this.level - 1].malus);
        },
        incrementNumTurns() {
            this.numTurns++;
        },
        addHistory(history) {
            this.history.push(history);
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
        incrementObjectiveProgress(value) {
            this.objective.progress += value;
            if(this.objective.progress >= this.objective.value) {
                this.incrementLevel();
                return true;
            }
            return false;
        }
    }
});
