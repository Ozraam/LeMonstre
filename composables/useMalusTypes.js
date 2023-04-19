export function useMalusType() {
    return {
        malusTypes: {
            sleep:{
                type: "sleep",
                description : "Vous ne pouvez pas dormir durant la durée de ce malus",
            },
            food: {
                type: "food",
                description : "Vous ne pouvez pas manger durant la durée de ce malus",
            },
            work: {
                type: "work",
                description : "Vous ne pouvez pas travailler durant la durée de ce malus",
            },
            gold: {
                type: "gold",
                description : "Vous ne pouvez pas collecter d'or durant la durée de ce malus",
            },
        }
    }
}