// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const footballTeam = [
    {
        teamName: 'juventus',
        pointScored: 0,
        foulSuffered: 0
    },
    {
        teamName: 'milan',
        pointScored: 0,
        foulSuffered: 0
    },
    {
        teamName: 'inter',
        pointScored: 0,
        foulSuffered: 0
    },
    {
        teamName: 'lazio',
        pointScored: 0,
        foulSuffered: 0
    },
    {
        teamName: 'roma',
        pointScored: 0,
        foulSuffered: 0
    }
];

console.log(footballTeam);

// generate random number for pointScored and foulSuffered
const maxPointInput = 120;

generateRandomStatistic(maxPointInput, footballTeam);


// FUNCTION

// generate random number for pointScored and foulSuffered
function generateRandomStatistic(maxPoint, arrayTeam) {

    for (let i = 0; i < arrayTeam.length; i++) {

        // generate a random number between 0 and maxPoint(both included)
        const randPointScored = Math.floor(Math.random() * (maxPoint + 1));
        console.log(`random number for point scored: ${randPointScored}`);

        // generate a random number between 0 and 50(both included)
        const randFoulSuffered = Math.floor(Math.random() * (50 + 1));
        console.log(`random number for foul suffered: ${randFoulSuffered}`);
    }
}