/*
Two types of memory in JS
    - Stack : used in Primitive type, copy of values provided
    - Heap : used in Non-Primitive type, reference of values provided
*/

let myName = "MayukhMandal"
let anotherName = myName

console.log(anotherName)
anotherName = "TitanicLion"

console.log(myName)     // MayukhMandal
console.log(anotherName)    // TitanicLion

let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
console.log(userTwo);

userTwo.email = "mayukh@google.com"

console.log(userOne.email)      //mayukh@google.com
console.log(userTwo.email)      //mayukh@google.com