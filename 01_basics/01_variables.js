const accountId = 1234;
let accountEmail = "ommdas@gmail.com";
var accountPassword = "ommdas";
accountCity = "Bhubaneswar";
let accountState;

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])