const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below

let sum = 0;
let count = 0;

for (let dayData of disneyData) {
	for (let key in dayData) {
		if (key === "close") {
			sum += parseFloat(dayData[key]);
			count++;
		}
	}
}

const average = sum / count;
const roundedAverage = (Math.round(average * 100) / 100).toFixed(2);

console.log(`Average closing price of Disney is ${roundedAverage}`);