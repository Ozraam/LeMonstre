export function useLevels() {
    const { objectiveTypes } = useObjectiveTypes();
    const { malusTypes } = useMalusType();

    return {
        levels: [
            {
                objectives: {
                    description: "Manger 5 fois du poisson",
                    list: [
                        {
                            type: objectiveTypes.foodPoisson,
                            value: 1,
                            progress: 0,
                            description: "Manger 1 fois du poisson",
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
            

        ]
    }
}