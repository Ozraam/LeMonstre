export function useFoods() {
    return {
        foods: {
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
    }
} 