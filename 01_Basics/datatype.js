"use strict"; // treat all js code as newer version...

// primitive 

let num = 3;
console.log(typeof num);

let bigI = 23412313n;
console.log(typeof bigI);

let NullValue = null;
console.log(typeof NullValue);

// Non-Primitive -> object, Array , function

let objectNum = {
    name : "Raj",
    age : 23
};

console.log("The Type of Object is : ",typeof objectNum);

function hello(){
    console.log("Hello World....");
}
console.log("The Type of Function is : ",typeof hello);

let arr  = [3,5,2,5,3];
console.log("The Type of Array is : ",typeof arr);