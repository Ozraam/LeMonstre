export function useLevels() {
    const { objectiveTypes } = useObjectiveTypes();
    const { malusTypes } = useMalusType();

    return {
        levels: [
            {
                objectives: {
                    description: "Completer tous les objectifs pour passer au niveau suivant",
                    list: [
                        {
                            type: objectiveTypes.sleep,
                            value: 5,
                            progress: 0,
                            description: "Dormir 5 fois",
                        },
                        {
                            type: objectiveTypes.turn,
                            value: 5,
                            progress: 0,
                            description: "Jouer 5 tours",
                        },
                        {
                            type: objectiveTypes.food,
                            value: 5,
                            progress: 0,
                            description: "Manger 5 fois",
                        },
                        {
                            type: objectiveTypes.gold,
                            value: 5,
                            progress: 0,
                            description: "Gagner 5 pièces d'or",
                        },
                        {
                            type: objectiveTypes.fight,
                            value: 5,
                            progress: 0,
                            description: "Combattre 5 fois",
                        },
                        {
                            type: objectiveTypes.work,
                            value: 5,
                            progress: 0,
                            description: "Travailler 5 fois",
                        },
                        {
                            type: objectiveTypes.foodPomme,
                            value: 5,
                            progress: 0,
                            description: "Manger 5 fois des pommes",
                        },
                        {
                            type: objectiveTypes.foodChampignon,
                            value: 5,
                            progress: 0,
                            description: "Manger 5 fois des champignons",
                        },
                        {
                            type: objectiveTypes.foodViande,
                            value: 5,
                            progress: 0,
                            description: "Manger 5 fois de la viande",
                        },
                        {
                            type: objectiveTypes.foodPoisson,
                            value: 5,
                            progress: 0,
                            description: "Manger 5 fois du poisson",
                        },
                        {
                            type: objectiveTypes.fightRabbits,
                            value: 5,
                            progress: 0,
                            description: "Combattre 5 lapins",
                        },
                        {
                            type: objectiveTypes.fightWolves,
                            value: 5,
                            progress: 0,
                            description: "Combattre 5 loups",
                        },
                        {
                            type: objectiveTypes.fightBear,
                            value: 5,
                            progress: 0,
                            description: "Combattre 5 ours",
                        },
                        {
                            type: objectiveTypes.fightDragon,
                            value: 5,
                            progress: 0,
                            description: "Combattre 5 dragons",
                        },
                    ]
                },

                malus: [],

            },
            {
                objectives: {
                    description: "Manger 5 fois du poisson",
                    list: [
                        {
                            type: objectiveTypes.foodPoisson,
                            value: 5,
                            progress: 0,
                            description: "Manger 5 fois du poisson",
                        }
                    ]
                },
                malus: [{
                    type: malusTypes.sleep.type,
                    value: 10,
                    description: malusTypes.sleep.description,
                },
                {
                    type: malusTypes.work.type,
                    value: 10,
                    description: malusTypes.work.description,
                }],
            },
            {
                objectives: {
                    description: "Combattre 5 loups",
                    list: [
                        {
                            type: objectiveTypes.fightWolf,
                            value: 5,
                            progress: 0,
                            description: "Combattre 5 loups",
                        }
                    ]
                },
                malus: [{
                    type: malusTypes.food.type,
                    value: 10,
                    description: malusTypes.food.description,

                }]
            },
            {
                objectives: {

                    description: "Jouer 100 tours et combattre 50 dragons",
                    list: [
                        {
                            type: objectiveTypes.turns,
                            value: 100,
                            progress: 0,
                            description: "Jouer 100 tours",
                        },
                        {
                            type: objectiveTypes.fightDragon,
                            value: 50,
                            progress: 0,
                            description: "Combattre 50 dragons",
                        }
                    ]
                },
                malus: [{
                    type: malusTypes.food.type,
                    value: 10,
                    description: malusTypes.food.description,
                }]
            },
            {
                objectives: {

                    description: "Combattre 5 ours",
                    list: [
                        {
                            type: objectiveTypes.fightBear,
                            value: 5,
                            progress: 0,
                            description: "Combattre 5 ours",
                        }
                    ]
                },
                malus: [{
                    type: malusTypes.food.type,
                    value: 10,
                    description: malusTypes.food.description,
                }]
            },
            {
                objectives: {
                    description: "Combattre 5 dragons",
                    list: [
                        {
                            type: objectiveTypes.fightDragon,
                            value: 5,
                            progress: 0,
                            description: "Combattre 5 dragons",
                        }
                    ]
                },
                malus: [{
                    type: malusTypes.food.type,
                    value: 10,
                    description: malusTypes.food.description,
                }]
            },

        ]
    }
}