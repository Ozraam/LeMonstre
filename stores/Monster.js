import { defineStore} from "pinia";
import { useGameStore } from "./Game";


export const fighter = {
    "Lapin" : {
        PV : -1,
        P : +1,
    },
    "Loup" : {
        PV : -2,
        "P" : +2,
    },
    "Ours" : {
        "PV" : -3,
        "P" : +4,
    },
    "Dragon" : {
        "PV" : -4,
        "P" : +5,
    }
}

export const food = {
    "Pomme" : {
        "PV" : +1,
        "P" : -2,
        "F" : +1,
    },
    "Champignon" : {
        "PV" : +1,
        "P" : -3,
        "F" : +2,
    },
    "Poisson" : {
        "PV" : +3,
        "P" : -4,
        "F" : +3,
    },
    "Viande" : {
        "PV" : +3,
        "P" : -5,
        "F" : +4,
    }
}



export const useMonsterStore = defineStore({
    id: "monster",
    state: () => ({
        monsters: ["Lapin", "Loup", "Ours", "Troll"],
        name : "Anto",
        PV : 150,
        P :10,
        F :10
        }),
    getters: {
        getMonsters: () => {
            return this.monsters;
        },
        getName: () => {
            return this.name;
        },
        getPV: () => {
            return this.PV;
        },
        getP: () => {
            return this.P;
        },
        getF: () => {
            return this.F;
        }   
    },
    setters: {
        setName: (name) => {
            this.name = name;
        },
        setPV: (PV) => {
            this.PV = PV;
        },
        setP: (P) => {
            this.P = P;
        },
        setF: (F) => {
            this.F = F;
        }
    },
    actions: {
        ChooseDifficulty(){
            if(storeGame.getDifficulty() == "easy"){
                this.PV = 15;
                this.P = 15;
                this.F = 15;
            }
            else if(storeGame.getDifficulty() == "medium"){
                this.PV = 10;
                this.P = 10;
                this.F = 10;
            }
            else if(storeGame.getDifficulty() == "hard"){
                this.PV = 5;
                this.P = 5;
                this.F = 5;
            }
        },
        fight(monster){
                this.PV += monster.PV;
                this.P += monster.P;
        },
        sleep(){
            this.PV += 1;
            this.F += -1;
        },
        eat(food){
            this.PV += food.PV;
            this.P += food.P;
            this.F += food.F;
        },
        work(){
            const gamestore = useGameStore();
            lastDaySleep = gamestore.getNumberOfDaysLastTimeSleep;
            this.PV += 1+lastDaySleep;
            this.P += 1+lastDaySleep;
        }
    }
});