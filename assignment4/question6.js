// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

// let data = ()
// for price in data:
// 	if price < 3:
//     data.push(price)


let lowestPrices = [Infinity, Infinity, Infinity]; 

for (let price of amdPrices) {
    if (price < lowestPrices[0]) {
        lowestPrices = [price, lowestPrices[0], lowestPrices[1]];
    } else if (price < lowestPrices[1]) {
        lowestPrices = [lowestPrices[0], price, lowestPrices[1]];
    } else if (price < lowestPrices[2]) {
        lowestPrices[2] = price;
    }
}

console.log(`The three lowest prices are ${lowestPrices[0]}, ${lowestPrices[1]}, and ${lowestPrices[2]}`);

//or


// const lowestPrices = amdPrices.sort((a, b) => a - b).slice(0, 3);

// console.log(`The three lowest prices are ${lowestPrices[0]}, ${lowestPrices[1]}, and ${lowestPrices[2]}`);