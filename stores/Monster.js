import { defineStore } from "pinia";

import { useGameStore } from "./Game";


export const useMonsterStore = defineStore({
    id: "monster",
    state: () => ({
        name : "",
        PV : 10,
        P :10,
        F :10
        }),
    getters: {
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
            if(game.difficulty == useDifficulties().difficulties.easy){
                this.PV = 15;
                this.P = 15;
                this.F = 15;
            }

            else if(game.difficulty == useDifficulties().difficulties.medium){
                this.PV = 10;
                this.P = 10;
                this.F = 10;
            }
            else if(game.difficulty == useDifficulties().difficulties.hard){
                this.PV = 5;
                this.P = 5;
                this.F = 5;
            }
        },
        fight(monster){
            this.PV += monster.PV;
            this.P += monster.P;
            useGameStore().incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.fight);
            useGameStore().incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.fight + monster.alt);
            useGameStore().incrementObjectiveProgress(monster.P, useObjectiveTypes().objectiveTypes.gold);
        },
        sleep(){
            this.PV += 1;
            this.F += -1;
            useGameStore().incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.sleep);
        },
        eat(food){
            this.PV += food.PV;
            this.P += food.P;
            this.F += food.F;
            useGameStore().incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.food);
            useGameStore().incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.food + food.name);
        },
        work(){
            const game = useGameStore();

            this.PV -= 1+game.getNumberOfDaysLastTimeSleep;
            this.P += 1+game.getNumberOfDaysLastTimeSleep;
            game.incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.work);
            game.incrementObjectiveProgress(1+game.getNumberOfDaysLastTimeSleep, useObjectiveTypes().objectiveTypes.gold);
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
            useGameStore().incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.turn);
        }
    }
});
