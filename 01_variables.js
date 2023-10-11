const accountId = 14455
let accountEmail = "vishnu@gma.com"
var accountPassword = "Test123"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //Not allowed 
accountEmail="hc@h.com"
accountPassword="1111"
accountCity="Goa"

console.log(accountId)

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState])