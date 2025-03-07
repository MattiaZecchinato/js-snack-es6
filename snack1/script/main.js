// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// create array of object
const arrayBike = [
    {
        nameBike: 'Pinarello Dogma F',
        weight: 20
    },
    {
        nameBike: 'Trek Madone SLR',
        weight: 10
    },
    {
        nameBike: 'Cervélo S5',
        weight: 4
    },
    {
        nameBike: 'Colnago V4Rs',
        weight: 5
    },
    {
        nameBike: 'Wilier Filante SLR',
        weight: 15
    }
];

console.log(arrayBike);

// set a variable with first weight of the array
let minWeight = arrayBike[0].weight;
console.log(`First bike weight: ${minWeight}`);

let currentBikeName = arrayBike[0].nameBike;
console.log(`First bike name: ${currentBikeName}`);

for (let i = 1; i < arrayBike.length; i++) {

    // set a variable to take at every cicle bike weight
    const currentBikeWeight = arrayBike[i].weight;
    // console.log(currentBikeWeight);

    // enter if the current bike weight is less than current minimum weight
    if (currentBikeWeight < minWeight) {

        // set the new minimum weight
        minWeight = currentBikeWeight;
        console.log(`Current min weight: ${minWeight}`);

        // save the bike name with minimum weight
        currentBikeName = arrayBike[i].nameBike;
        console.log(`Current bike name with min weight: ${currentBikeName}`);
    }
}

const lightestBikeElement = document.getElementById('lightest-bike');

lightestBikeElement.innerHTML = `The lightest bike is <span class="fw-bold">${currentBikeName}</span> with <span class="fw-bold">${minWeight}kg</span>`;

console.log(`The lightest bike is ${currentBikeName} with ${minWeight}kg`);