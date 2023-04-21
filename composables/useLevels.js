export function useLevels() {
    const { objectiveTypes } = useObjectiveTypes();
    const { malusTypes } = useMalusType();

    return {
        levels: [
            {
                objectives: {
                    description: "Collecter 10 pieces d'or et manger 5 fois du poisson",
                    list: [
                        {
                            type: objectiveTypes.gold,
                            value: 10,
                            progress: 0,
                            description: "Collecter 10 pieces d'or",
                        },
                        {
                            type: objectiveTypes.foodPoisson,
                            value: 5,
                            progress: 0,
                            description: "Manger 5 fois du poisson",
                        }
                    ]
                },

                malus:[ {
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
                malus:[ {
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
                malus:[ {
                    type: malusTypes.food.type,
                    value: 10,
                    description: malusTypes.food.description,

                }]
            },
            {
                objective: {
                    type: objectiveTypes.turn,
                    value: 100,
                    progress: 0,
                    description: "Jouer 100 tours",
                },
                malus: [{
                    type: malusTypes.food.type,
                    value: 10,
                    description: malusTypes.food.description,
                }]
            },
            {
                objective: {
                    type: objectiveTypes.fightBear,
                    value: 5,
                    progress: 0,
                    description: "Combattre 5 ours",
                },
                malus: [{
                    type: malusTypes.food.type,
                    value: 10,
                    description: malusTypes.food.description,
                }]
            },
            {
                objective: {
                    type: objectiveTypes.fightDragon,
                    value: 5,
                    progress: 0,
                    description: "Combattre 5 dragons",
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