// Dates

let myDate = new Date()
console.log(myDate);        //Raw date object(ISO-like in console)
console.log(myDate.toString());     //Full readable local date and time
console.log(myDate.toDateString());     //Only date part, human readable
console.log(myDate.toISOString());      //Standard UTC ISO format(used in APIs)
console.log(myDate.toJSON());       //Same as ISO - used when converting to JSON
console.log(myDate.toLocaleDateString());   //Local date only
console.log(myDate.toLocaleString());       //Local date + time

console.log(typeof myDate);

let myCreatedDate = new Date(2026, 0, 21)   //Months start from 0 in JS, 0 based indexing
console.log(myCreatedDate.toDateString());

let randomDate = new Date(2026, 1, 21, 18, 50)      //21/2/2026, 6:50:00 pm
console.log(randomDate.toLocaleString());

let anotherDate = new Date("2026-02-15")    //YYYY-MM-DD, UTC format
console.log(anotherDate.toLocaleString());

let yetAnotherDate = new Date("02-15-2026")       //MM-DD-YYYY, Local Time
console.log(yetAnotherDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);   //prints value in milliseconds counted from 1 Jan,1970 till right now
console.log(anotherDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // as it is 0-based indexing
console.log(newDate.getDay());

console.log(`Day is ${newDate.getDay()} and the time is ${newDate.toLocaleTimeString()}`)

console.log(newDate.toLocaleString('default',{
    weekday: "long"
})
)