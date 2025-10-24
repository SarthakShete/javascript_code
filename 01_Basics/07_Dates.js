
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,21);
console.log(myCreatedDate.toDateString());

// "YYYY-MM-DD"
let newFormatDate = new Date("2023-03-16");
console.log(newFormatDate.toLocaleString());

// MM-DD-YYYY
let new2 = new Date("04-23-2021");
console.log(new2.toLocaleString());


/************ TimeStamp ************** */

// 1761340192994 => This is the miliseconds from the 1970 up till now....
let myTimeStamp = Date.now();

// so we can compare this two value...
console.log(myTimeStamp); // 1761340345469
console.log(new2.getTime()); // 1619136000000

// It gives mili seconds but when you divide by 1000 then it gives seconds...
// interview...
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('Default',{
    weekday : "long",
})


    