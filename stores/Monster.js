import { defineStore } from "pinia";

import { useGameStore } from "./Game";


export const useMonsterStore = defineStore({
    id: "monster",
    state: () => ({
        name : "",
        PV : 10,
        P :10,
        F :10,
        observer: null,
        }),
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
            this.setPV(this.PV + monster.PV);
            this.setP(this.P + monster.P);
            useGameStore().incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.fight);
            useGameStore().incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.fight + monster.alt);
            useGameStore().incrementObjectiveProgress(monster.P, useObjectiveTypes().objectiveTypes.gold);
        },
        sleep(){
            this.setF(this.F - 1);
            this.setPV(this.PV + 1);

            useGameStore().incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.sleep);
        },
        eat(food){
            this.setPV(this.PV + food.PV);
            this.setP(this.P + food.P);
            this.setF(this.F + food.F);
            useGameStore().incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.food);
            useGameStore().incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.food + food.name);
        },
        work(){
            const game = useGameStore();
            this.setPV(this.PV - (1+game.getNumberOfDaysLastTimeSleep));
            this.setP(this.P + 1+game.getNumberOfDaysLastTimeSleep);
            game.incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.work);
            game.incrementObjectiveProgress(1+game.getNumberOfDaysLastTimeSleep, useObjectiveTypes().objectiveTypes.gold);
        },
        setName(name){
            this.name = name;
        },
        setPV (PV)  {
            if(this.observer != null) this.observer(PV - this.PV, "PV");
            this.PV = PV;
        },
        setP (P) {
            if(this.observer != null) this.observer(P - this.P, "P");
            this.P = P;
        },
        setF (F) {
            if(this.observer != null) this.observer(F - this.F, "F");
            this.F = F;
        },
        newTurn() {
            if(useGameStore().lastAction != useActions().actions.eat) this.setF(this.F - 1);
            
            if(this.F <= 0){
                this.setPV(this.PV-1);
            }

            if(this.PV <= 0){
                this.PV = 0;
                useGameStore().setGameOver(useEndGameStates().endGameStates.lose);
            }
            useGameStore().incrementObjectiveProgress(1, useObjectiveTypes().objectiveTypes.turn);
        }
    }
});
