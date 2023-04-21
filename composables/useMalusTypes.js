export function useMalusType() {
    return {
        malusTypes: {
            sleep:{
                type: "sleep",
                description : "Vous ne pouvez pas dormir durant ce niveau",
            },
            food: {
                type: "food",
                description : "Vous ne pouvez pas manger durant ce niveau",
            },
            work: {
                type: "work",
                description : "Vous ne pouvez pas travailler durant ce niveau",
            },
            gold: {
                type: "gold",
                description : "Vous ne pouvez pas collecter d'or durant ce niveau",
            },
        }
    }
}