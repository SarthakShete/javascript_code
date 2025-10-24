
let name = "Sai";
let age = 23;

console.log(name + age + " Dal");

// String Interpolation....
console.log(`Hey i am ${name} and My age is ${age}.`);

// Store the gameName value as key value pair...
// like 
// 0 : s , 
// 1 : h ,
// 2 : a,
// 3 : m.
const gameName = new String("Rushikesh");

console.log(gameName.length);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log("The Substring is : ",newString);

// Here you can give the -ve value 
// so it's start from reverse String...
const anotherString = gameName.slice(-6,4);
console.log("The Slice String is : ",anotherString);

// trim => remove the starting and Ending space...
const trimString = "  sham    ";
console.log("The trim String is :",trimString.trim());

const url = "https://google.com/api%20photos";
console.log(url.replace('%20','-'));

// check that this keyword present in the String or not....
console.log(url.includes('sam'));
