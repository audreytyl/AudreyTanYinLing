const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

const sum = amdPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / amdPrices.length;
console.log(`The 7-day SMA of AMD is ${average.toFixed(2)}`);

//or

let sumAlt = 0;
for (let i = 0; i < amdPrices.length; i++)
    sumAlt += amdPrices[i];

const averageAlt = sumAlt / amdPrices.length;
console.log(`The 7-day SMA of AMD is ${averageAlt.toFixed(2)}`);