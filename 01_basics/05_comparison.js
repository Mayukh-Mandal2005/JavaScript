// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);   //true
// console.log("02" > 1);  //true

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);     //true


console.log(undefined == 0);    //false
console.log(undefined < 0);     //false
console.log(undefined <= 0);    //false
console.log(undefined > 0);     //false
console.log(undefined >= 0);    //false


// strict check => ===: checks values strictly including the datatype
console.log("2" === 2);