import { get } from "http";
import { defineStore} from "pinia";
import { useGameStore } from "./Game";

const Game = useGameStore();

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
    this: () => ({
        monsters: ["Lapin", "Loup", "Ours", "Troll"],
        name : "",
        PV : 0,
        P :0,
        F :0
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
            if(Game.getDifficulty() == "easy"){
                this.PV = 15;
                this.P = 15;
                this.F = 15;
            }
            else if(Game.getDifficulty() == "medium"){
                this.PV = 10;
                this.P = 10;
                this.F = 10;
            }
            else if(Game.getDifficulty() == "hard"){
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
            lastDaySleep = Game.getNumberOfDaysLastTimeSleep();
            this.PV += 1+lastDaySleep;
            this.P += 1+lastDaySleep;
        }
    }
});
