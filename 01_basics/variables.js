const accountId = 144553
let accountEmail = "mayukh@google.com"
var accountPassword = "12345"
accountCity = "Delhi"   //this is possible but should be avoided
let accountState;

// const <variable_name> means value cannot be changed afterwards after it is assigned

// accountId = 2
accountEmail = "mm@mm.com"
accountPassword = "118796"
accountCity = "Bangalore"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use "var" because of issue in block scope and functional scope
*/