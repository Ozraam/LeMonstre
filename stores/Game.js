import { defineStore } from "pinia";

const objectiveTypes = {
    turns: "turns",
    food: "food",
    gold: "gold",
}

const malusTypes = {
    sleep:{
        type: "sleep",
        description : "Vous ne pouvez pas dormir durant la durée de ce malus",
    },
    work: {
        type: "work",
        description : "Vous ne pouvez pas travailler durant la durée de ce malus",
    },
    food: {
        type: "food",
        description : "Vous ne pouvez pas manger durant la durée de ce malus",
    },
    work: {
        type: "work",
        description : "Vous ne pouvez pas travailler durant la durée de ce malus",
    },
}

const levels = [
    {
        objective: {
            type: objectiveTypes.turns,
            value: 10,
            progress: 0,
        },
        malus: {
            type: malusTypes.work.type,
            value: 5,
            description: malusTypes.work.description,
        }
    },
    {
        objective: {
            type: objectiveTypes.gold,
            value: 25,
            progress: 0,
        },
        malus: {
            type: malusTypes.work.type,
            value: 5,
            description: malusTypes.work.description,
        }
    },
    {
        objective: {
            type: objectiveTypes.food,
            value: 25,
            progress: 0,
        },
        malus:{
            type: malusTypes.sleep.type,
            value: 6,
            description: malusTypes.sleep.description,
        }
    },
    {
        objective: {
            type: objectiveTypes.gold,
            value: 25,
            progress: 0,
        },
        malus: {
            type: malusTypes.food.type,
            value: 5,
            description: malusTypes.food.description,
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
        getNumberOfDaysLastTimeSleep() {
            const lastTimeSleep = this.history.find((history) => history.action === "sleep");
            if (!lastTimeSleep) {
                return this.numTurns;
            }
            return this.numTurns - lastTimeSleep.turn;
        },
        lastAction() {
            return this.history[this.history.length - 1] ? this.history[this.history.length - 1].action : "";
        },
        getObjectiveLevel() {
            return levels[this.level - 1].objective;
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
            this.setObjective(levels[this.level - 1].objective);
            this.setMalus(levels[this.level - 1].malus);
        },
        incrementNumTurns() {
            this.numTurns++;
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
