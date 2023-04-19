import { defineStore } from "pinia";
import { useMonsterStore, fighter } from "./Monster";

const objectiveTypes = {
    sleep: "sleep",
    turn: "turn",
    food: "food",
    gold: "gold",
    fight: "fight",
    fightRabbits: "fightLapin",
    fightWolves: "fightloup",
    fightBear: "fightOurs",
    fightDragon: "fightDragon",
    work: "work",
    foodPomme: "foodPomme",
    foodChampignon: "foodChampignon",
    foodViande: "foodViande",
    foodPoisson: "foodPoisson",
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
            type: objectiveTypes.gold,
            value: 10,
            progress: 0,
            description: "Collecter 10 pieces d'or",
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
            description: "Collecter 25 pieces d'or",
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
            description: "Manger 25 fois",
        },
        malus:{
            type: malusTypes.sleep.type,
            value: 6,
            description: malusTypes.sleep.description,
        }
    },
    {
        objective: {
            type: objectiveTypes.fightRabbits,
            value: 5,
            progress: 0,
            description: "Combattre 5 lapins",
        },
        malus: {
            type: malusTypes.food,
            value: 10,
        }
    },
    {
        objective: {
            type: objectiveTypes.fightWolves,
            value: 5,
            progress: 0,
            description: "Combattre 5 loups",
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
        objective: levels[0].objective,
        currentAction: null,
        gameOver: false,
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
