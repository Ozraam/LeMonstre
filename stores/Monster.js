import { defineStore } from "pinia";

import { useGameStore } from "./Game";


export const fighter = {
    Lapin : {
        PV : -1,
        P : +1,
        img : "images/lapin.png",
        alt : "Lapin",
    },
    Loup : {
        PV : -2,
        P : +2,
        img : "images/loup.png",
        alt : "Loup",
    },
    Ours : {
        PV : -3,
        P : +4,
        img : "images/ours.png",
        alt : "Ours",

    },
    Dragon : {
        PV : -4,
        P : +5,
        img : "images/dragon.png",
        alt : "Dragon",

    }
}

export const foods = {
    Pomme : {
        PV : +1,
        P : -2,
        F : +1,
        name : "Pomme",
        img: "images/pomme.png",
        img_alt: "Une pomme"
    },
    Champignon : {
        PV : +1,
        P : -3,
        F : +2,
        name : "Champignon",
        img: "images/champignon.jpg",
        img_alt: "Un champignon"
    },
    Poisson : {
        PV : +3,
        P : -4,
        F : +3,
        name : "Poisson",
        img: "images/poisson.png",
        img_alt: "Du poisson"
    },
    Viande : {
        PV : +3,
        P : -5,
        F : +4,
        name : "Viande",
        img: "images/steak.png",
        img_alt: "Du couscous"
    }
}



export const useMonsterStore = defineStore({
    id: "monster",
    state: () => ({
        monsters: ["Lapin", "Loup", "Ours", "Troll"],
        name : "",
        PV : 10,
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
    actions: {
        ChooseDifficulty(){

            const game = useGameStore();
            if(game.difficulty == "easy"){
                this.PV = 15;
                this.P = 15;
                this.F = 15;
            }

            else if(game.difficulty == "medium"){
                this.PV = 10;
                this.P = 10;
                this.F = 10;
            }
            else if(game.difficulty == "hard"){
                this.PV = 5;
                this.P = 5;
                this.F = 5;
            }
        },
        fight(monster){
            this.PV += monster.PV;
            this.P += monster.P;
            useGameStore().incrementObjectiveProgress(1, "fight");
            useGameStore().incrementObjectiveProgress(1, "fight" + monster.alt);
            useGameStore().incrementObjectiveProgress(monster.P, "gold");
        },
        sleep(){
            this.PV += 1;
            this.F += -1;
            useGameStore().incrementObjectiveProgress(1, "sleep");
        },
        eat(food){
            this.PV += food.PV;
            this.P += food.P;
            this.F += food.F;
            useGameStore().incrementObjectiveProgress(1, "food");
            useGameStore().incrementObjectiveProgress(1, "food" + food.name);
        },
        work(){
            const game = useGameStore();

            this.PV -= 1+game.getNumberOfDaysLastTimeSleep;
            this.P += 1+game.getNumberOfDaysLastTimeSleep;
            game.incrementObjectiveProgress(1, "work");
            game.incrementObjectiveProgress(1+game.getNumberOfDaysLastTimeSleep, "gold");
        },
        setName(name){
            this.name = name;
        },
        setPV (PV)  {
            this.PV = PV;
        },
        setP (P) {
            this.P = P;
        },
        setF (F) {
            this.F = F;
        },
        newTurn() {
            this.F--;
            if(this.F <= 0){
                this.PV--;
                if(this.PV <= 0){
                    useGameStore().setGameOver(true);
                }
            }
            useGameStore().incrementObjectiveProgress(1, "turn");
        }
    }
});
