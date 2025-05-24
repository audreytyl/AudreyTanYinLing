const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below

let sum = 0;
let count = 0;

for (let dayData of msftData) {
	sum += dayData[3];
	count++;
}
const average = sum / count;
console.log(`Average closing price of MSFT is ${average.toFixed(2)}`);