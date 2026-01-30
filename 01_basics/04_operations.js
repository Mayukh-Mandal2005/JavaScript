let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);


let str1 = "hello"
let str2 = " hooman"
let str3 = str1 + str2
console.log(str3);


// below written code is not preferrable and try to avoid them
// console.log("1" + 2)    //12
// console.log(1 + "2")    //12
// console.log("1" + "2")  //12
// console.log("1"+2+2)    //122 -  if string first, then whole output will be a string
// console.log(1+2+"2")    //32 - if string afterwards, then operation of the other datatype will be performed and then string will be added

// console.log(+true)  // 1
// console.log(+"")    // 0
// console.log(true+)  // error

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++
console.log(gameCounter)
++gameCounter
console.log(gameCounter)

let x = 3;
const y = x++;  // assign old value to y, then increment x

console.log(`x:${x}, y:${y}`);

let a = 3;
const b = ++a;  //increment the value, then assign the new value

console.log(`a:${a}, b:${b}`);

/*
Postfix returns old value
Prefix returns new value
*/