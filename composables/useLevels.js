export function useLevels() {
    const { objectiveTypes } = useObjectiveTypes();
    const { malusTypes } = useMalusType();

    return {
        levels: [
            {
                objective: {
                    type: objectiveTypes.gold,
                    value: 10,
                    progress: 0,
                    description: "Collecter 10 pieces d'or",
                },
                malus : null,
            },
            {
                objective: {
                    type: objectiveTypes.gold,
                    value: 25,
                    progress: 0,
                    description: "Collecter 25 pieces d'or",
                },
                malus:{
                    type: malusTypes.work,
                    value: 10,
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
                malus: {
                    type: malusTypes.food,
                    value: 10,
                    description: malusTypes.food.description,

                }
            },
            {
                objective: {
                    type: objectiveTypes.foodPoisson,
                    value: 5,
                    progress: 0,
                    description: "Manger 5 fois du poisson",
                },
                malus: {
                    type: malusTypes.food,
                    value: 10,
                    description: malusTypes.food.description,
                }
            },
            {
                objective: {
                    type: objectiveTypes.foodViande,
                    value: 5,
                    progress: 0,
                    description: "Manger 5 fois de la viande",
                },
                malus: {
                    type: malusTypes.food,
                    value: 10,
                    description: malusTypes.food.description,
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
                    description: malusTypes.food.description,
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
                    type: malusTypes.food,
                    value: 10,
                    description: malusTypes.food.description,
                }
            },
            {
                objective: {
                    type: objectiveTypes.fightBear,
                    value: 5,
                    progress: 0,
                    description: "Combattre 5 ours",
                },
                malus: {
                    type: malusTypes.food,
                    value: 10,
                    description: malusTypes.food.description,
                }
            },
            {
                objective: {
                    type: objectiveTypes.fightDragon,
                    value: 5,
                    progress: 0,
                    description: "Combattre 5 dragons",
                },
                malus: {
                    type: malusTypes.food,
                    value: 10,
                    description: malusTypes.food.description,
                }
            },
        ]
    }
}