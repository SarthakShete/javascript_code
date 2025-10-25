
let arr = [3,4,7,1,8,2];
console.log(arr);

console.log(`The Element at position is : ${arr[3]}`);

// Array Methods.....

arr.push(100);
arr.pop(); // remove the last value from the array..

arr.unshift(12); // insert the element at the beginning of the array....

const newArray = arr.join();

// join method makes the newArray into the String....
console.log(newArray);
console.log("The Type of new Array is : ",typeof newArray);


// let see the Splice and Slice
console.log();

console.log("***********The Slice and Splice Method**************");

const myArr = [0,1,2,3,4,5];

console.log("A  ",myArr);

const mySlice = myArr.slice(1,3);
console.log("Slice : ",mySlice);

console.log("B ",myArr);

const mySplice = myArr.splice(1,3);
console.log("C ",myArr);
console.log("Splice : ",mySplice);


    