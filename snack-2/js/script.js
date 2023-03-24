// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const soccerTeam = [
    {
        nome: "milan",
        punti: 0,
        falli: 0

    },
    {
        nome: "inter",
        punti: 0,
        falli: 0

    },
    {
        nome: "roma",
        punti: 0,
        falli: 0

    },
    {
        nome: "lazio",
        punti: 0,
        falli: 0

    },
    {
        nome: "napoli",
        punti: 0,
        falli: 0

    }
];


// const rndPoint = getRndInteger(1, 10);
// const rndFoul = getRndInteger(1, 10);

//////FUNCTIONS///////////

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function insertData(arrayObj) {
    const { punti, falli } = arrayObj;

    let newPoint = 0; 
    for(let key in soccerTeam) {
        newPoint += soccerTeam[key];
        console.log(key);
    }
    // arrayObj.forEach((elem) => {
       
    //     let newPoint = elem.punti;
    //     newPoint += getRndInteger(1, 10);
        

    //     console.log(newPoint);
    // })
   return newPoint;
}