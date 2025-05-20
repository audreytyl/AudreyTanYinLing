const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below

Object.keys(disneyData).forEach(key => {
    disneyData[key] = parseFloat(disneyData[key]); 
});

const result = (
    disneyData.open - 
    disneyData.high + 
    disneyData.low - 
    disneyData.close
).toFixed(2); 

console.log(result);
