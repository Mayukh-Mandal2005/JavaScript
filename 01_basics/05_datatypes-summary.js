/* Data is categorised into 2 types based on how they are stored in memory and how they are accessed
1) Primitive datatypes(call by value type)
    - String
    - Number
    - Boolean
    - null(empty)
    - undefined(varible is declared, memory is allocated but we don't know the value yet to be initialised here)
    - Symbol(to make any value unique in advanced JS)
    - BigInt(very large scientific values)
*/

const score = 100       //Number type
const scoreValue = 100.3     //Number type(there is no as such decimal type in JS)

const isLoggedIn = false
const outsideTemp = null

let userEmail;  //it has value undefined if not initialised to anything

const id = Symbol('123')        // Symbol datatype gives uniqueness to everything passed inside it even if the values are same
const anotherId = Symbol('123')     // same values in both id and anotherId but they are not same, Symbol datatype makes them unique

console.log(id);
console.log(anotherId)

console.log(id === anotherId);



const bigNumber = 34565879499494595n    //big Int, if you put n at the end, it turns into a big int


/*
2) Non-Primitive(Reference types)
    - Arrays
    - Objects
    - Functions
*/

const heros = ["shaktimaan","spiderman", "doga"]    //array

let myObject = {
    name: "hitesh",
    age: 22
}       //object

const myFunction = function(){
    console.log("Hello World");
}       // function is treated as a variable


console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof scoreValue)
console.log(typeof myFunction)      //object function
console.log(typeof heros)
console.log(typeof id)
/*
Ques - JS is dynamically typed language or statically typed language? 
Ans - Dynamically typed language because types of variables are not needed to be declared. 
    - Type is decided at runtime.
    - A variable can change type anytime. 
*/