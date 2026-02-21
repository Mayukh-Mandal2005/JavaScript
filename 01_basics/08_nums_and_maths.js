const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)      //converts to string and returns the length
console.log(balance.toFixed(2))     //100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)


// ++++++++++++ Maths ++++++++++++
console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.5));   //5
console.log(Math.ceil(4.5));    //5
console.log(Math.floor(4.5));   //4
console.log(Math.min(4, 3, 6, 8))
console.log(Math.max(4, 3, 6, 8))

console.log(Math.random());     //random value between 0 and 1 always
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const mini = 10
const maxi = 20
console.log(Math.floor(Math.random() * (maxi - mini +1)) + mini);