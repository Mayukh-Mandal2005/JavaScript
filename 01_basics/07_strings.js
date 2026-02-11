const myname = "Mayukh"
const repoCount = 10

// console.log(myname + repoCount + " Value");

// Now a days instead of string concatenation as done above, string interpolation is used
console.log(`Hello my name is ${myname} and my repo count is ${repoCount}`);


// String Declaration
const gameName = new String('Clash-of-Clans')
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));
 

const newString = gameName.substring(0,4);  //negative values not allowed, if negative value is passed, it changes it to 0 internally
console.log(newString);

const anotherString = gameName.slice(4, -2);   //negative values are allowed, -1 means last char of the string
console.log(anotherString);

const stringOne = "   hello    "
console.log(stringOne);
console.log(stringOne.trim());      //removes whitespaces

const url = "https://mayukh.com/mayukh%20mandal"

console.log(url.replace('%20', '-'))

console.log(url.includes('mayukh'))

console.log(gameName.split('-'))