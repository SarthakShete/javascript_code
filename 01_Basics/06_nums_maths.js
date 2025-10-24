const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

// print just 2 digit after decimal...
console.log(balance.toFixed(2));

const otherNum = 123.8413;
console.log(otherNum.toPrecision(3));
// output -> 124..

const hundred = 1000000;
console.log(hundred.toLocaleString('en-IN'));
// output -> 10,00,000..

/************** Math ********************* */

console.log(Math);

// it makes -ve to +ve but not +ve to -ve...
console.log("The Absolute value is :",Math.abs(-4));

console.log("The Round Value :",Math.round(3.8));

// it gives top value means 3.4 => 4 not give 3....
console.log("The Ceil Value is : ",Math.ceil(5.4));

// it gives bottom value 9.8 => 9 not give 10...
console.log("The floor value is :",Math.floor(9.8));

console.log("The Minimum value is : ",Math.min(4,2,7,9));

console.log("The Maximum value is : ",Math.max(4,2,7,9));

console.log(Math.random());
console.log((Math.random() * 10 ) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

// Create Formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
