let score = "33abc"

console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);     //NaN - Not a Number
console.log(typeof NaN);    //number


score = null
console.log(score)
valueInNumber = Number(score)
console.log(valueInNumber)    // 0


score = undefined
console.log(score)
valueInNumber = Number(score)
console.log(valueInNumber)  //NaN


score = true
valueInNumber = Number(score)
console.log(valueInNumber)

// "33" => 33
// "33abc" => Nan - it is also a number in JS
// true => 1, false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


isLoggedIn = ""
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


isLoggedIn = "Hello"
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 => true, 0 => false
// "" => false
// "Hello" => true

let num = 33
let stringNumber = String(num)
console.log(stringNumber);      // 33
console.log(typeof stringNumber);   // string

